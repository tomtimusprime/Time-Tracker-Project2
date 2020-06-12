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
            
        },
        {
            freezeTableName: true
        }
    );

    Account.associate = (models) => {
        Account.hasOne(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        Account.generateHash = async (password) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            return hashedPassword;
        }
        Account.validPassword = (inputPwd, dbPwd) => {
            return bcrypt.compareSync(inputPwd, dbPwd);
          };
        
          Account.associate = models => {
            User.hasMany(models.history, {
              onDelete: "cascade"
            });
          };
    };

    return Account;
};