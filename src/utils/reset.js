/* global global, __DEV__ */
export function resetConsole() {
    if (!__DEV__) {
        global.console = {
            info: () => {},
            log: () => {},
            warn: () => {},
            debug: () => {},
            error: () => {},
        };
    }
}
