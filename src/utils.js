/* global global, __DEV__ */
export default function resetEvn() {
    if (!__DEV__) {
        global.console = {
            info: () => {},
            log: () => {},
            warn: () => {},
            debug: () => {},
            error: () => {},
        };
    }
};
