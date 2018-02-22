export default function(_url, _params = {}) {
    const url = _url;
    const params = _params;

    return {
        get: () => {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
    };
};