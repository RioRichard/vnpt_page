const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "PostsPostTypes",
    tableName: "posts_post_types",
    columns: {
        postsId: {
            primary: true,
            type: "bigint"
        },
        postsTypeId: {
            primary: true,
            type: "int"
        }
    },
    relations: {
        post: {
            target: "Post",
            type: "many-to-one",
            joinColumn: { name: "postsId" },
            onDelete: "CASCADE"
        },
        postType: {
            target: "PostType",
            type: "many-to-one",
            joinColumn: { name: "postsTypeId" },
            onDelete: "CASCADE"
        }
    }
});
