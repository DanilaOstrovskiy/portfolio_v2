export const theme = {
    colors: {
        primaryBg: "#2c3036",
        secondaryBg: "#282c33",
        accent: "#c778dd",
        primary: "#fafafa",
        secondary: "#abb2bf",
        svg: "#ABB2BF",
        button: {
            primary: {
                defaultBg: "transparent",
                hoverBg: "rgba(179, 102, 199, 0.2)",
                activeBg: "#ae4cc6",
                text: "#fafafa",
                border: "#c778dd",
            },
            secondary: {
                defaultBg: "transparent",
                hoverBg: "rgba(171, 178, 191, 0.2)",
                activeBg: "#525253",
                text: "#abb2bf",
                border: "#abb2bf",
            },
            danger: {
                defaultBg: "#e06c75",
                hoverBg: "#cc6169",
                activeBg: "#b8575e",
                text: "#fafafa",
                border: "#ff0000",
            }
        }
    },
    media: {
        // Large Screens
        desktopXL: "screen and (max-width: 1920px)",  // Full HD
        desktopL: "screen and (max-width: 1440px)",   // Common laptop resolution
        desktop: "screen and (max-width: 1280px)",     // Standard desktop

        // Tablets & Small Laptops
        laptopS: "screen and (max-width: 1024px)", // iPad Pro, small laptops
        tabletL: "screen and (min-width: 992px)",
        tabletM: "screen and (max-width: 992px)",
        tablet: "screen and (max-width: 768px)",       // iPad, tablets
        tabletS: "screen and (max-width: 744px)",      // Small tablets

        // Mobile
        mobile: "screen and (max-width: 576px)",
        mobileL: "screen and (max-width: 425px)",      // Large phones
        mobileM: "screen and (max-width: 375px)",      // Medium phones (iPhone)
        mobileS: "screen and (max-width: 320px)",      // Small phones

        // Specific Device Orientations
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",

        // High Density Screens
        retina: "screen and (-webkit-min-device-pixel-ratio: 2)",

        // Touch Devices
        touch: "(hover: none) and (pointer: coarse)",

        // Height Based
        tall: "screen and (min-height: 800px)",
        short: "screen and (max-height: 600px)"
    }
}

