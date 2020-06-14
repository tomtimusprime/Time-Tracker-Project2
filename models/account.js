const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define(
        "account",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            wage: {
                type: DataTypes.DECIMAL(6, 2),
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Account.associate = (models) => {
        Account.hasMany(models.hours, {
            onDelete: "cascade",
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        });
    };

    Account.generateHash = async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    };

    Account.validPassword = (inputPwd, dbPwd) => {
        return bcrypt.compareSync(inputPwd, dbPwd);
    };

    return Account;
};