module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define(
        "account",
        {
            user_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true
        }
    );

    // Account.associate = (models) => {
    //     Account.hasOne(models.employee, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Account;
};