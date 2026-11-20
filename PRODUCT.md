# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Working professionals under sustained pressure (high workloads, growing responsibility, fast pace), primarily German- and English-speaking, deciding whether to apply for or enquire about a five-day stress-regulation seminar in Dahab, Egypt. They arrive curious but cautious: they know what stress is intellectually and want to judge whether this is credible, practical, and right for them before committing time and money. No prior meditation or breathwork experience is assumed.

## Product Purpose

Mind & Tide runs a small-group seminar, "Stress Regulation in Professional Life", that helps participants notice how stress shows up in their own body, thoughts, and routines, and experiment with practical regulation and recovery tools they can carry into daily life. The website's job is to let a prospective participant understand the seminar, trust the people behind it, check dates and logistics, and apply or request information. Success is a well-informed enquiry or application, not a sale at first glance.

## Positioning

Experience over theory, and place over setting: learning starts from lived experience (body, breath, water, senses, walking, participatory photography) rather than lectures, and Dahab's sea, desert, and mountains are deliberately woven into the learning. It is led by a social-sciences researcher and adult-education facilitator whose own disconnect between knowing and feeling relaxation (the 2023 diving moment) started the project. The goal is not to eliminate stress but to relate to it more consciously and sustainably. It is not a holiday retreat, a lecture series, or therapy.

## Operating Context

- Seminar: 5 days, 6 units of 45 minutes per day; 6–15 participants; seminar language English with bilingual German/English materials; fee 695 EUR per person (flights, transfers, accommodation not included; organisers help with finding a place to stay).
- Dates (as of the current copy): 12–16 Oct 2026 (registration closed), 9–13 Nov 2026 (open, deadline 10 Oct 2026), March–April 2027 (to be announced). Dates change often and must stay easy to update.
- Methods introduced: water floating, breathwork, body-based regulation (including TRE), sensory grounding and temporal awareness, participatory photography, guided coastal walking meditation.
- Conversion paths: contact form (Mailgun), email, phone, Instagram; downloadable programme PDF (`public/documents/programme.pdf`, `wochenplanung.pdf`).
- Visitors may also read the privacy policy and imprint; the site records anonymised usage via Vercel Web Analytics without cookies.

## Capabilities and Constraints

- Nuxt 4 site with Nuxt UI (primary blue, neutral slate), Nuxt Image, Nuxt SEO, and @nuxtjs/i18n. Pages: seminar (home), about us, contact, privacy, imprint.
- Bilingual DE/EN with German as the default locale (`prefix_except_default`, localised routes). Every surface must work in both languages; German strings run longer.
- Light and dark themes, with a theme toggle; both must keep working.
- Legal operator: Silvia-Lucretia Nicola, Potsdam, Germany; GDPR applies. Privacy copy flags that the Mailgun contract and DPA still need review before publication.
- Open decisions: whether application becomes a dedicated flow beyond the contact form; the German copy and some placeholder strings (for example the download card description ends in "....") are unfinished.

## Brand Commitments

Name: Mind & Tide (also written Mind and Tide). The voice in the existing copy is first-person from the founder, calm, reflective, and plain-spoken. Logo files exist in light and dark variants (`public/light-logo.svg`, `public/dark-logo.svg`, and icon variants). Visual direction is not yet recorded as binding.

## Evidence on Hand

- Founder portrait and co-facilitator portrait: `public/about-us/silvia.png`, `public/about-us/marcus.png`.
- One process illustration: `public/seminars/process_image.png`.
- Programme PDFs in `public/documents/`.
- Founder and facilitator biographies in the About page copy.
- Absent, and not to be fabricated: participant testimonials, participant counts, past-seminar photography, press, reviews, accreditation, outcome statistics, and photographs of the Dahab venue.

## Product Principles

1. Lived experience before explanation: show and describe practice, not abstract wellness claims.
2. Calm earns trust: pressured professionals should feel slower, clearer, and less sold to after visiting.
3. Honest about what it is: education and practice, no medical or therapeutic promises, no invented proof.
4. Logistics are part of the offer: dates, fee, group size, language, and what is not included are always easy to find and exact.
5. Both languages are first-class, with German as the default.

## Accessibility & Inclusion

No product-specific standard was set. Defaults apply: keyboard and screen-reader access, sufficient contrast in both themes, reduced-motion respect, and plain language for an audience that may include non-native English readers. No prior experience with meditation, breathwork, or similar practices is required, and the copy should keep saying so.
