module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define(
        "employee",
        {
            full_name: {
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
            freezeTableName: true
        }
    );

    Employee.associate = (models) => {
        Employee.belongsTo(models.account, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Employee;
};