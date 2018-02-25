// ========================================
// USER MODEL TEST ========================
// ========================================
const User = require('../../../server/models/user');
const DataTypes = require('sequelize').DataTypes;

describe('my user model', () => {
    
    test('should define all needed fields', () => {
        const sequelize = jest.fn(() => ({
            define: (table, fields) => ({ table, fields }),
            associate: jest.fn()
        }));

        const user = User(sequelize(), DataTypes);
        
        expect(user.table).toBe('User');
        expect(user.fields).toHaveProperty('email');
        expect(user.fields).toHaveProperty('name');
        expect(user.fields).toHaveProperty('picture');
        expect(user.fields).toHaveProperty('token');
        expect(user.fields).toHaveProperty('provider');
        expect(user.fields).toHaveProperty('createdAt');
        expect(user.fields).toHaveProperty('updatedAt');        
    });
});
