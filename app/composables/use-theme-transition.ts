type ThemeValue = "light" | "dark";

type ThemeTransitionOptions = {
    duration?: number;
    easing?: string;
};

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

    const toggleThemeWithTransition = (event?: MouseEvent) => {
        if (!event || !import.meta.client || !document.startViewTransition) {
            toggleTheme();
            return;
        }

        const x = event.clientX;
        const y = event.clientY;

        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            toggleTheme();
        });

        transition.ready.then(() => {
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
        });
    };

    return {
        nextTheme,
        setTheme,
        toggleTheme,
        toggleThemeWithTransition
    };
};
