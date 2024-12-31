const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "char",
            length: 36,
            generated: "uuid"
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
        role: {
            type: "enum",
            enum: ["admin", "user"],
            default: "user"
        }
    }
});
