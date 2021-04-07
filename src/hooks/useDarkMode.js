import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", initialValue);

    const prefersDarkMode = (["(prefers-color-scheme: dark)"], [true], false);

    const darkModeEnabled = typeof darkMode !== "undefined" ? darkMode : prefersDarkMode;

    return ([darkModeEnabled, setDarkMode]);
};

export default useDarkMode;