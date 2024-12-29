const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        email: {
            type: "varchar",
            length: 255,
            unique: true
        },
        password: {
            type: "varchar",
            length: 255
        },
        createdAt: {
            name: "created_at",
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP"
        },
        updatedAt: {
            name: "updated_at",
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        }
    }
});
