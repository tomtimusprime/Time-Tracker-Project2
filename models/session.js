module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define(
        "session",
        {
            clock_in: {
                type: DataTypes.DATE(),
                allowNull: false,
            },
            clock_out: {
                type: DataTypes.DATE(),
                allowNull: true,
                defaultValue: null
            },
            total_time: {
                type: DataTypes.DECIMAL(7, 3),
                allowNull: true,
                defaultValue: null
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    Sessions.associate = (models) => {
        Sessions.belongsTo(models.account, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        });
    };


    return Sessions;
};