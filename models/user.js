module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "user",
        {
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            time_worked: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            wage: {
                type: DataTypes.DECIMAL(6,2),
                allowNull: false
            },
            total_time: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            total_earnings: {
                type: DataTypes.DECIMAL(12,2),
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    User.associate = (models) => {
        User.belongsTo(models.account, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return User;
};