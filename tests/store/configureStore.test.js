// ==============================================
// CONFIGURE STORE TEST =========================
// ==============================================
import configureStore from '../../src/store/configureStore';

describe('my store', () => {
    let store;

    beforeEach(() => {
        store = configureStore();
    });

    test('should contain auth reducer', () => {
        expect(store.getState()).toHaveProperty('auth');
    });
});
