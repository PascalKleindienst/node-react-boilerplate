// ========================================
// User Model =============================
// ========================================
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        name: DataTypes.STRING,
        picture: DataTypes.STRING,
        token: DataTypes.STRING,
        provider: DataTypes.ENUM('twitter', 'google', 'facebook', 'github'),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {});

    User.associate = (/*models*/) => {
        // associations can be defined here
    };

    return User;
};
