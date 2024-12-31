const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "PostType",
    tableName: "post_types",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment"
        },
        type: {
            type: "varchar",
            length: 255,
            charset: "utf8mb4",
            collation: "utf8mb4_unicode_ci"
        }
    }
});
