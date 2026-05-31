type ThemeValue = "light" | "dark";

type ThemeTransitionOptions = {
    duration?: number;
    easing?: string;
};

type TransitionCallback = () => void | Promise<void>;

export const useThemeTransition = (options: ThemeTransitionOptions = {}) => {
    const colorMode = useColorMode();

    const duration = options.duration ?? 600;
    const easing = options.easing ?? "cubic-bezier(.76,.32,.29,.99)";

    const nextTheme = computed<ThemeValue>(() => (colorMode.value === "dark" ? "light" : "dark"));

    const setTheme = (theme: ThemeValue) => {
        colorMode.preference = theme;
    };

    const toggleTheme = () => {
        setTheme(nextTheme.value);
    };

    const getTransitionOrigin = (event?: Event) => {
        if (event instanceof MouseEvent) {
            return {
                x: event.clientX,
                y: event.clientY
            };
        }

        const element = event?.target instanceof Element ? event.target : document.activeElement;

        if (element instanceof Element) {
            const {left, top, width, height} = element.getBoundingClientRect();

            return {
                x: left + width / 2,
                y: top + height / 2
            };
        }

        return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
    };

    const runWithTransition = (callback: TransitionCallback, event?: Event) => {
        if (!import.meta.client || !document.startViewTransition) {
            return Promise.resolve(callback());
        }

        const {x, y} = getTransitionOrigin(event);

        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            return callback();
        });

        void transition.ready
            .then(() => {
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${endRadius}px at ${x}px ${y}px)`
                        ]
                    },
                    {
                        duration,
                        easing,
                        pseudoElement: "::view-transition-new(root)"
                    }
                );
            })
            .catch(() => {});

        return transition.updateCallbackDone;
    };

    const toggleThemeWithTransition = (event?: MouseEvent) => {
        return runWithTransition(toggleTheme, event);
    };

    return {
        nextTheme,
        runWithTransition,
        setTheme,
        toggleTheme,
        toggleThemeWithTransition
    };
};
