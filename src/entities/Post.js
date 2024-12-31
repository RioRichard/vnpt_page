const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Post",
    tableName: "posts",
    columns: {
        id: {
            primary: true,
            type: "bigint",
            generated: "increment"
        },
        slug: {
            type: "varchar",
            length: 255,
            charset: "utf8mb4",
            collation: "utf8mb4_unicode_ci"
        },
        title: {
            type: "varchar",
            length: 255,
            charset: "utf8mb4",
            collation: "utf8mb4_unicode_ci"
        },
        dateCreated: {
            name: "date_created",
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        },
        dateUpdated: {
            name: "date_updated",
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        },
        content: {
            type: "mediumtext",
            charset: "utf8mb4",
            collation: "utf8mb4_unicode_ci"
        }
    }
});
