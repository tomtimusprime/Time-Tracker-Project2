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
                type: DataTypes.INTEGER,
                allowNull: false
            },
            wage: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            total_time: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            total_earnings: {
                type: DataTypes.INTEGER,
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