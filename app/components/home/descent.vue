<!-- Homepage "Descent": the page is a dive. The ground deepens from sunlit shallows to the quiet bottom as you scroll, a depth ruler tracks it. Echoes the founder story. -->
<script setup lang="ts">
const c = useHomeContent();
const colorMode = useColorMode();

const root = ref<HTMLElement>();
const depth = ref(0);
const MAX_DEPTH = 18;

type Stop = [number, [number, number, number]];
const LIGHT: Stop[] = [
    [0, [230, 242, 238]],
    [0.2, [205, 234, 230]],
    [0.4, [111, 188, 192]],
    [0.6, [23, 120, 143]],
    [0.78, [11, 69, 96]],
    [1, [6, 25, 42]]
];
const DARK: Stop[] = [
    [0, [16, 48, 58]],
    [0.2, [14, 66, 80]],
    [0.4, [12, 90, 107]],
    [0.6, [10, 74, 98]],
    [0.8, [8, 47, 72]],
    [1, [5, 15, 28]]
];

const lum = ([r, g, b]: number[]) => {
    const f = (v: number) => {
        const s = v / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * f(r!) + 0.7152 * f(g!) + 0.0722 * f(b!);
};

function paint() {
    const el = root.value;
    if (!el) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    const stops = colorMode.value === "dark" ? DARK : LIGHT;
    let i = 0;
    while (i < stops.length - 2 && p > stops[i + 1]![0]) i++;
    const [p0, a] = stops[i]!;
    const [p1, b] = stops[i + 1]!;
    const t = Math.min(1, Math.max(0, (p - p0) / (p1 - p0)));
    const rgb = a.map((v, k) => Math.round(v + (b[k]! - v) * t));
    el.style.setProperty("--bg", `rgb(${rgb.join(",")})`);
    el.style.setProperty("--fg", lum(rgb) > 0.2 ? "#0a2a33" : "#eef8f7");
    depth.value = Math.round(p * MAX_DEPTH);
    el.style.setProperty("--p", String(p));
}

let raf = 0;
const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(paint);
};
onMounted(() => {
    paint();
    addEventListener("scroll", onScroll, {passive: true});
    addEventListener("resize", onScroll);
});
onBeforeUnmount(() => {
    removeEventListener("scroll", onScroll);
    removeEventListener("resize", onScroll);
    cancelAnimationFrame(raf);
});
watch(
    () => colorMode.value,
    () => nextTick(paint)
);

const methodIcons = [
    "i-lucide-waves",
    "i-lucide-wind",
    "i-lucide-person-standing",
    "i-lucide-ear",
    "i-lucide-camera",
    "i-lucide-footprints"
];
</script>

<template>
    <div
        ref="root"
        class="vc">
        <!-- depth ruler -->
        <div
            class="vc-ruler"
            aria-hidden="true">
            <div class="vc-ticks" />
            <div
                class="vc-mark"
                :style="{top: `calc(var(--p, 0) * 100%)`}">
                <i />
                <b>{{ depth }} m</b>
            </div>
        </div>

        <!-- SURFACE -->
        <header class="vc-hero">
            <img
                :src="c.img.hero"
                :alt="c.hero.imageAlt" />
            <div class="vc-hero-sky" />
            <div class="vc-hero-water" />
            <nav
                class="vc-nav"
                aria-label="Main">
                <NuxtLink :to="c.to.home">
                    <img
                        src="/dark-logo.svg"
                        alt="Mind &amp; Tide"
                        class="vc-logo" />
                </NuxtLink>
                <div>
                    <NuxtLink :to="c.to.home">{{ c.nav.home }}</NuxtLink>
                    <NuxtLink :to="c.to.aboutUs">{{ c.nav.aboutUs }}</NuxtLink>
                    <NuxtLink :to="c.to.contact">{{ c.nav.contact }}</NuxtLink>
                    <NavThemeToggle />
                    <NavLanguageSelector />
                </div>
            </nav>

            <div class="vc-hero-title">
                <h1>{{ c.hero.title }}</h1>
            </div>
            <svg
                class="vc-wave"
                viewBox="0 0 2400 24"
                preserveAspectRatio="none"
                aria-hidden="true">
                <path
                    d="M0 12 Q 100 0 200 12 T 400 12 T 600 12 T 800 12 T 1000 12 T 1200 12 T 1400 12 T 1600 12 T 1800 12 T 2000 12 T 2200 12 T 2400 12"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2" />
            </svg>
            <div class="vc-hero-below">
                <p class="vc-support">{{ c.hero.supportingText }}</p>
                <div class="vc-hero-row">
                    <p class="vc-where">
                        <UIcon name="i-lucide-map-pin" />
                        {{ c.hero.meta }}
                    </p>
                    <NuxtLink
                        :to="c.to.contact"
                        class="vc-btn vc-btn-sun">
                        {{ c.schedule.apply }}
                        <UIcon name="i-lucide-arrow-right" />
                    </NuxtLink>
                    <NuxtLink
                        :to="c.to.contact"
                        class="vc-btn vc-btn-glass">
                        {{ c.schedule.request }}
                    </NuxtLink>
                </div>
            </div>
        </header>

        <main>
            <!-- SHALLOWS: about -->
            <section class="vc-zone vc-about">
                <h2 class="vc-mega">{{ c.about.title }}</h2>
                <p class="vc-sentence">{{ c.about.description }}</p>
                <div class="vc-two">
                    <p>{{ c.about.intro }}</p>
                    <p>{{ c.about.closing }}</p>
                </div>
            </section>

            <figure class="vc-wide">
                <img
                    :src="c.img.solo"
                    :alt="c.about.imageAlt"
                    loading="lazy" />
            </figure>

            <!-- takeaways drift down -->
            <section class="vc-zone">
                <div class="vc-head">
                    <h2 class="vc-h2">{{ c.takeaways.title }}</h2>
                    <p class="vc-note">{{ c.takeaways.headline }}</p>
                </div>
                <div class="vc-drift">
                    <article
                        v-for="item in c.takeaways.items"
                        :key="item.title">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </article>
                </div>
            </section>

            <!-- participants -->
            <section class="vc-zone vc-people">
                <div class="vc-people-l">
                    <h2 class="vc-h2">{{ c.participants.title }}</h2>
                    <p class="vc-sentence">{{ c.participants.description }}</p>
                    <img
                        :src="c.img.process"
                        :alt="c.participants.imageAlt"
                        loading="lazy" />
                </div>
                <div class="vc-people-r">
                    <ul>
                        <li
                            v-for="(item, i) in c.participants.items"
                            :key="item.title">
                            <i
                                class="vc-bubble"
                                :style="{'--s': `${14 + ((i * 7) % 5) * 5}px`}" />
                            <div>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.description }}</p>
                            </div>
                        </li>
                    </ul>
                    <p class="vc-closing">{{ c.participants.closing }}</p>
                </div>
            </section>

            <!-- staircase -->
            <section class="vc-zone vc-stairs">
                <h2 class="vc-h2">{{ c.stepper.title }}</h2>
                <ol>
                    <li
                        v-for="(step, i) in c.stepper.steps"
                        :key="step.title"
                        :style="{'--i': i}">
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.description }}</p>
                    </li>
                </ol>
            </section>

            <!-- methods -->
            <section class="vc-zone vc-methods">
                <h2 class="vc-h2">{{ c.methods.title }}</h2>
                <ul>
                    <li
                        v-for="(m, i) in c.methods.items"
                        :key="m.word">
                        <UIcon
                            :name="methodIcons[i]!"
                            class="vc-ico" />
                        <h3>{{ m.word }}</h3>
                        <p>{{ m.text }}</p>
                    </li>
                </ul>
                <aside class="vc-slate">
                    <h3>{{ c.download.title }}</h3>
                    <p>{{ c.download.description }}</p>
                    <a
                        :href="c.download.href"
                        :download="c.download.fileName"
                        target="_blank"
                        class="vc-btn vc-btn-ink">
                        {{ c.download.label }}
                        <UIcon name="i-lucide-download" />
                    </a>
                </aside>
            </section>

            <!-- dahab -->
            <section class="vc-zone vc-dahab">
                <div>
                    <h2 class="vc-h2">{{ c.dahab.title }}</h2>
                    <p class="vc-prose">{{ c.dahab.description }}</p>
                    <div class="vc-actions">
                        <NuxtLink
                            :to="c.to.contact"
                            class="vc-btn vc-btn-fill">
                            {{ c.dahab.readMore }}
                            <UIcon name="i-lucide-arrow-right" />
                        </NuxtLink>
                        <NuxtLink
                            :to="c.to.contact"
                            class="vc-btn vc-btn-line">
                            {{ c.dahab.request }}
                        </NuxtLink>
                    </div>
                </div>
                <img
                    :src="c.img.place"
                    :alt="c.dahab.imageAlt"
                    loading="lazy" />
            </section>

            <!-- schedule: tide table -->
            <section class="vc-zone vc-sched">
                <h2 class="vc-h2">{{ c.schedule.title }}</h2>
                <ul>
                    <li
                        v-for="item in c.schedule.items"
                        :key="item.title"
                        :class="`is-${item.status}`">
                        <p class="vc-when">{{ item.title }}</p>
                        <p class="vc-what">{{ item.description }}</p>
                        <i
                            class="vc-dot"
                            aria-hidden="true" />
                    </li>
                </ul>
                <div class="vc-actions">
                    <NuxtLink
                        :to="c.to.contact"
                        class="vc-btn vc-btn-fill">
                        {{ c.schedule.apply }}
                        <UIcon name="i-lucide-arrow-right" />
                    </NuxtLink>
                    <NuxtLink
                        :to="c.to.contact"
                        class="vc-btn vc-btn-line">
                        {{ c.schedule.request }}
                    </NuxtLink>
                </div>
            </section>

            <!-- essentials -->
            <section class="vc-zone vc-ess">
                <h2 class="vc-h2">{{ c.organization.title }}</h2>
                <dl>
                    <div
                        v-for="item in c.organization.items"
                        :key="item.title">
                        <dt>{{ item.title }}</dt>
                        <dd>{{ item.description }}</dd>
                    </div>
                </dl>
                <p class="vc-note vc-ess-note">{{ c.organization.note }}</p>
            </section>

            <!-- BOTTOM -->
            <section class="vc-bottom">
                <h2>{{ c.cta.title }}</h2>
                <p>{{ c.cta.description }}</p>
                <NuxtLink
                    :to="c.to.contact"
                    class="vc-btn vc-btn-sun vc-btn-lg">
                    {{ c.cta.action }}
                    <UIcon name="i-lucide-arrow-right" />
                </NuxtLink>
            </section>
        </main>

        <footer class="vc-foot">
            <p>{{ c.nav.copyright }}</p>
            <nav aria-label="Footer">
                <NuxtLink :to="c.to.aboutUs">{{ c.nav.aboutUs }}</NuxtLink>
                <NuxtLink :to="c.to.contact">{{ c.nav.contact }}</NuxtLink>
                <NuxtLink :to="c.to.imprint">{{ c.nav.imprint }}</NuxtLink>
                <NuxtLink :to="c.to.privacy">{{ c.nav.privacy }}</NuxtLink>
            </nav>
        </footer>
    </div>
</template>

<style>
.vc {
    --bg: rgb(230 242 238);
    --fg: #0a2a33;
    --sun: #ffb52e;
    --mut: color-mix(in srgb, var(--fg) 80%, transparent);
    --hair: color-mix(in srgb, var(--fg) 28%, transparent);
    --gut: clamp(20px, 6vw, 120px);
    background: var(--bg);
    color: var(--fg);
    font-family: "Literata", Georgia, serif;
    font-size: 1.1875rem;
    line-height: 1.7;
    position: relative;
}
.vc h1,
.vc h2,
.vc h3,
.vc nav,
.vc-btn,
.vc-note {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
}
.vc h1,
.vc h2,
.vc h3 {
    text-wrap: balance;
    letter-spacing: -0.025em;
    margin: 0;
}
:where(.vc) p {
    margin: 0;
}
.vc a {
    color: inherit;
    text-decoration: none;
}
.vc ::selection {
    background: var(--sun);
    color: #0a2a33;
}
.vc :focus-visible {
    outline: 3px solid var(--sun);
    outline-offset: 4px;
}

/* ruler */
.vc-ruler {
    position: fixed;
    left: clamp(12px, 2.4vw, 36px);
    top: 14vh;
    bottom: 14vh;
    width: 52px;
    z-index: 30;
    color: var(--fg);
    pointer-events: none;
    transition: opacity 0.4s;
}
.vc-ticks {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 14px;
    background: repeating-linear-gradient(
        to bottom,
        currentColor 0 1px,
        transparent 1px calc(100% / 18)
    );
    border-right: 1px solid currentColor;
    opacity: 0.5;
}
.vc-mark {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    transform: translateY(-50%);
}
.vc-mark i {
    width: 22px;
    height: 2px;
    background: currentColor;
}
.vc-mark b {
    font:
        600 0.8125rem/1 "Bricolage Grotesque",
        system-ui,
        sans-serif;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    letter-spacing: 0.04em;
    background: var(--bg);
    padding: 3px 5px;
}

/* hero */
.vc-hero {
    position: relative;
    height: 100svh;
    min-height: 640px;
    color: #fff;
    overflow: hidden;
    isolation: isolate;
}
.vc-hero > img:first-child {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -3;
}
.vc-hero-sky {
    position: absolute;
    inset: 0 0 46% 0;
    background: rgb(4 36 46 / 0.32);
    z-index: -2;
}
.vc-hero-water {
    position: absolute;
    inset: 54% 0 0 0;
    background: rgb(4 40 54 / 0.66);
    backdrop-filter: blur(3px);
    z-index: -2;
}
.vc-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px var(--gut) 0 calc(var(--gut) + 20px);
}
.vc-nav > div {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 26px);
    font-weight: 500;
    font-size: 1rem;
}
.vc-nav a:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
}
.vc-logo {
    height: 46px;
    width: auto;
}
.vc-hero-title {
    position: absolute;
    left: calc(var(--gut) + 20px);
    right: var(--gut);
    bottom: calc(46% + 12px);
}
.vc-hero h1 {
    font-size: clamp(2.6rem, 7.2vw, 6rem);
    line-height: 0.98;
    font-weight: 300;
    max-width: 14ch;
    font-variation-settings: "wdth" 90;
}
.vc-wave {
    position: absolute;
    left: 0;
    width: 200%;
    bottom: calc(46% - 12px);
    height: 24px;
    animation: vc-drift 18s linear infinite;
    opacity: 0.9;
}
@keyframes vc-drift {
    to {
        transform: translateX(-50%);
    }
}
.vc-hero-below {
    position: absolute;
    left: calc(var(--gut) + 20px);
    right: var(--gut);
    top: calc(54% + 28px);
    display: grid;
    gap: 28px;
}
.vc-support {
    max-width: 44ch;
    font-size: clamp(1.1rem, 1.6vw, 1.35rem);
    line-height: 1.6;
}
.vc-hero-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 20px;
}
.vc-where {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-weight: 600;
    margin-right: 12px;
}

/* buttons */
.vc-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 50px;
    padding: 0 26px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid transparent;
    transition:
        background-color 0.3s,
        color 0.3s,
        border-color 0.3s;
}
.vc-btn-lg {
    min-height: 62px;
    padding-inline: 38px;
    font-size: 1.15rem;
}
.vc-btn-sun {
    background: var(--sun);
    color: #0a2a33 !important;
}
.vc-btn-sun:hover {
    background: #fff;
}
.vc-btn-glass {
    border-color: rgb(255 255 255 / 0.85);
    color: #fff !important;
}
.vc-btn-glass:hover {
    background: #fff;
    color: #0a2a33 !important;
}
.vc-btn-fill {
    background: var(--fg);
    color: var(--bg) !important;
}
.vc-btn-fill:hover {
    background: transparent;
    color: var(--fg) !important;
    border-color: var(--fg);
}
.vc-btn-line {
    border-color: var(--fg);
    color: var(--fg) !important;
}
.vc-btn-line:hover {
    background: var(--fg);
    color: var(--bg) !important;
}
.vc-btn-ink {
    background: #0a2a33;
    color: #eef8f7 !important;
}
.vc-btn-ink:hover {
    background: #17788f;
}

/* zones */
.vc-zone {
    padding: clamp(72px, 9vw, 150px) var(--gut) clamp(72px, 9vw, 150px) calc(var(--gut) + 40px);
    max-width: 1500px;
    margin-inline: auto;
}
.vc-mega {
    font-size: clamp(2.8rem, 8vw, 7rem);
    line-height: 0.98;
    font-weight: 300;
    max-width: 12ch;
}
.vc-h2 {
    font-size: clamp(2.2rem, 5vw, 4.25rem);
    line-height: 1.02;
    font-weight: 300;
    max-width: 18ch;
}
.vc-sentence {
    margin-top: 32px;
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: clamp(1.4rem, 2.6vw, 2.1rem);
    line-height: 1.25;
    font-weight: 500;
    max-width: 24ch;
}
.vc-note {
    margin-top: 20px;
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--mut);
}
.vc-two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(32px, 8vw, 140px);
    margin-top: clamp(64px, 9vw, 140px);
    padding-left: 12%;
}
.vc-two p,
.vc-prose {
    color: var(--mut);
    max-width: 38em;
}
.vc-wide {
    margin: 0;
    height: min(78vh, 760px);
}
.vc-wide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* drift */
.vc-drift {
    margin-top: clamp(64px, 9vw, 140px);
    display: grid;
    gap: clamp(56px, 8vw, 120px);
}
.vc-drift article {
    max-width: 520px;
    border-top: 1px solid var(--hair);
    padding-top: 28px;
}
.vc-drift article:nth-child(even) {
    margin-left: auto;
}
.vc-drift article:nth-child(3n) {
    margin-left: 22%;
}
.vc-drift h3,
.vc-people li h3 {
    font-size: 1.75rem;
    line-height: 1.12;
    font-weight: 500;
}
.vc-drift p,
.vc-people li p {
    margin-top: 12px;
    color: var(--mut);
    font-size: 1.0625rem;
    line-height: 1.7;
}

/* people */
.vc-people {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    gap: clamp(40px, 8vw, 140px);
    align-items: start;
}
.vc-people-l {
    position: sticky;
    top: 12vh;
}
.vc-people-l img {
    margin-top: 48px;
    width: min(100%, 340px);
    aspect-ratio: 4 / 5;
    object-fit: cover;
    display: block;
}
.vc-people ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 48px;
}
.vc-people li {
    display: grid;
    grid-template-columns: 36px 1fr;
    align-items: start;
    gap: 16px;
}
.vc-bubble {
    --s: 18px;
    display: block;
    width: var(--s);
    height: var(--s);
    margin-top: 8px;
    border: 2px solid currentColor;
    border-radius: 50%;
}
.vc-closing {
    margin-top: 72px;
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: clamp(1.4rem, 2.4vw, 2rem);
    font-weight: 500;
    line-height: 1.25;
    max-width: 26ch;
}

/* stairs */
.vc-stairs ol {
    list-style: none;
    margin: clamp(56px, 8vw, 110px) 0 0;
    padding: 0;
    display: grid;
}
.vc-stairs li {
    max-width: 440px;
    margin-left: calc(var(--i) * clamp(0px, 14vw, 240px));
    padding: 0 0 clamp(48px, 7vw, 96px) 36px;
    border-left: 1px solid var(--hair);
    position: relative;
}
.vc-stairs li:last-child {
    padding-bottom: 0;
}
.vc-stairs li::before {
    content: "";
    position: absolute;
    left: -7px;
    top: 10px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--fg);
}
.vc-stairs h3 {
    font-size: clamp(1.7rem, 3vw, 2.6rem);
    font-weight: 400;
    line-height: 1.08;
}
.vc-stairs p {
    margin-top: 14px;
    color: var(--mut);
}

/* methods */
.vc-methods ul {
    list-style: none;
    margin: clamp(48px, 7vw, 100px) 0 0;
    padding: 0;
    border-top: 1px solid var(--hair);
}
.vc-methods li {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr) minmax(0, 1fr);
    align-items: center;
    gap: 24px;
    padding-block: 28px;
    border-bottom: 1px solid var(--hair);
}
.vc-methods h3 {
    font-size: clamp(2.2rem, 5.4vw, 4.5rem);
    line-height: 1;
    font-weight: 300;
    transition: letter-spacing 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.vc-methods li:hover h3 {
    letter-spacing: 0.01em;
}
.vc-methods li p {
    color: var(--mut);
    font-size: 1.0625rem;
    line-height: 1.6;
    max-width: 38ch;
}
.vc-ico {
    width: 30px;
    height: 30px;
}
.vc-slate {
    position: relative;
    margin: clamp(56px, 8vw, 110px) 0 0 auto;
    max-width: 440px;
    padding: 36px 32px 32px;
    background: #eef3f1;
    color: #0a2a33;
    border-radius: 20px;
    transform: rotate(-1.4deg);
}
.vc-slate::before {
    content: "";
    position: absolute;
    top: 18px;
    right: 22px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--bg);
    box-shadow: inset 1px 2px 3px rgb(0 0 0 / 0.35);
}
.vc-slate h3 {
    font-size: 1.5rem;
    line-height: 1.15;
    font-weight: 500;
    padding-right: 28px;
}
.vc-slate p {
    margin: 14px 0 24px;
    color: #35535b;
    font-size: 1.0625rem;
}

/* dahab */
.vc-dahab {
    display: grid;
    grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
    gap: clamp(40px, 8vw, 140px);
    align-items: center;
}
.vc-prose {
    margin-top: 40px;
    white-space: pre-line;
    max-width: 36em;
}
.vc-dahab img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    max-height: 720px;
    display: block;
}
.vc-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 44px;
}

/* schedule */
.vc-sched ul {
    list-style: none;
    margin: clamp(48px, 7vw, 100px) 0 0;
    padding: 0;
    border-top: 1px solid var(--hair);
}
.vc-sched li {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 5fr) 40px;
    align-items: center;
    gap: 24px;
    padding-block: 36px;
    border-bottom: 1px solid var(--hair);
}
.vc-when {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: clamp(1.9rem, 4vw, 3.4rem);
    line-height: 1.04;
    font-weight: 300;
    white-space: pre-line;
}
.vc-what {
    white-space: pre-line;
    color: var(--mut);
}
.vc-dot {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid currentColor;
    justify-self: end;
}
.vc-sched .is-open .vc-dot {
    background: var(--sun);
    border-color: var(--sun);
}
.vc-sched .is-closed .vc-when,
.vc-sched .is-closed .vc-what {
    opacity: 0.55;
    text-decoration: line-through;
    text-decoration-thickness: 1px;
}
.vc-sched .is-closed .vc-dot {
    opacity: 0.4;
}
.vc-sched .is-soon .vc-dot {
    border-style: dashed;
}

/* essentials */
.vc-ess dl {
    margin: clamp(48px, 7vw, 100px) 0 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--hair);
}
.vc-ess dl > div {
    padding: 32px 24px 8px;
    border-left: 1px solid var(--hair);
}
.vc-ess dl > div:first-child {
    padding-left: 0;
    border-left: 0;
}
.vc-ess dt {
    font-family: "Bricolage Grotesque", system-ui, sans-serif;
    font-size: 1.5rem;
    line-height: 1.15;
    font-weight: 500;
}
.vc-ess dd {
    margin: 14px 0 0;
    color: var(--mut);
    font-size: 1.0625rem;
    line-height: 1.6;
}
.vc-ess-note {
    margin-top: 56px;
    max-width: 70ch;
    font-family: "Literata", Georgia, serif;
    font-size: 1.0625rem;
    font-weight: 400;
    line-height: 1.7;
}

/* bottom */
.vc-bottom {
    min-height: 90svh;
    display: grid;
    place-content: center;
    justify-items: center;
    text-align: center;
    gap: 28px;
    padding: 120px var(--gut);
}
.vc-bottom h2 {
    font-size: clamp(2.4rem, 6vw, 5.2rem);
    line-height: 1.02;
    font-weight: 300;
    max-width: 16ch;
}
.vc-bottom p {
    color: var(--mut);
    font-size: 1.35rem;
}
.vc-foot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    padding: 28px var(--gut) 96px calc(var(--gut) + 40px);
    border-top: 1px solid var(--hair);
    font-size: 0.9375rem;
    color: var(--mut);
}
.vc-foot nav {
    display: flex;
    gap: 28px;
    font-weight: 500;
}
.vc-foot a:hover {
    color: var(--fg);
    text-decoration: underline;
    text-underline-offset: 5px;
}

@media (max-width: 1100px) {
    .vc-ruler {
        top: auto;
        bottom: 84px;
        left: auto;
        right: 14px;
        width: auto;
        height: auto;
    }
    .vc-ticks {
        display: none;
    }
    .vc-mark {
        position: static;
        transform: none;
    }
    .vc-mark i {
        display: none;
    }
    .vc-mark b {
        border: 1px solid currentColor;
        border-radius: 999px;
        padding: 6px 10px;
    }
    .vc-zone,
    .vc-nav,
    .vc-hero-title,
    .vc-hero-below,
    .vc-foot {
        padding-left: var(--gut);
        left: var(--gut);
    }
    .vc-nav {
        left: 0;
    }
    .vc-hero-title,
    .vc-hero-below {
        padding-left: 0;
    }
}
@media (max-width: 860px) {
    .vc-two,
    .vc-people,
    .vc-dahab {
        grid-template-columns: minmax(0, 1fr);
        padding-left: 0;
    }
    .vc-people-l {
        position: static;
    }
    .vc-drift article,
    .vc-drift article:nth-child(even),
    .vc-drift article:nth-child(3n) {
        margin-left: 0;
    }
    .vc-methods li {
        grid-template-columns: 32px minmax(0, 1fr);
    }
    .vc-methods li p {
        grid-column: 2;
    }
    .vc-sched li {
        grid-template-columns: minmax(0, 1fr) 32px;
    }
    .vc-what {
        grid-column: 1;
    }
    .vc-dot {
        grid-column: 2;
        grid-row: 1;
    }
    .vc-ess dl {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .vc-ess dl > div:nth-child(odd) {
        padding-left: 0;
        border-left: 0;
    }
    .vc-nav > div a {
        display: none;
    }
}
@media (max-width: 560px) {
    .vc-ess dl {
        grid-template-columns: minmax(0, 1fr);
    }
    .vc-ess dl > div,
    .vc-ess dl > div:nth-child(odd) {
        padding-left: 0;
        border-left: 0;
        border-bottom: 1px solid var(--hair);
        padding-bottom: 24px;
    }
    .vc-hero {
        min-height: 700px;
    }
}
@media (prefers-reduced-motion: reduce) {
    .vc-wave {
        animation: none;
    }
    .vc-methods h3 {
        transition: none;
    }
}
</style>
