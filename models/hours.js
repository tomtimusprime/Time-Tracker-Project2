module.exports = (sequelize, DataTypes) => {
    const Hours = sequelize.define(
        "hours",
        {
            hrs_worked_today: {
                type: DataTypes.DECIMAL(4, 2),
                allowNull: false,
                defaultValue: 0
            },
            hrs_worked_week: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: 0
            },
            hrs_worked_month: {
                type: DataTypes.DECIMAL(5, 2),
                allowNull: false,
                defaultValue: 0
            },
            hrs_worked_ytd: {
                type: DataTypes.DECIMAL(6, 2),
                allowNull: false,
                defaultValue: 0
            },
            earnings_today: {
                type: DataTypes.DECIMAL(6, 2),
                allowNull: false,
                defaultValue: 0
            },
            earnings_week: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            },
            earnings_month: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            },
            earnings_ytd: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            }

        },
        {
            freezeTableName: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Hours.associate = (models) => {
        Hours.belongsTo(models.account, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        });
    };


    return Hours;
};