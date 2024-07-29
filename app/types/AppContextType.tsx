export default interface AppContextType {
    displayDrawer: boolean,
    setDisplayDrawer: React.Dispatch<React.SetStateAction<boolean>>,
    darkModeSystem: boolean,
    setDarkModeSystem: React.Dispatch<React.SetStateAction<boolean>>,
    useDarkModeSystem: boolean,
    setUseDarkModeSystem: React.Dispatch<React.SetStateAction<boolean>>,
    darkModeSetting: boolean,
    setDarkModeSetting: React.Dispatch<React.SetStateAction<boolean>>,
    displayDarkMenu: boolean,
    setDisplayDarkMenu: React.Dispatch<React.SetStateAction<boolean>>,
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
};