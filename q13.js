db.posts.insertOne({
    title: "Title1",
    desc: "sample 1",
    author:{
        name: "Mike",
        email: "mike@example.com"
    },
});

db.posts.insertOne({
    title: "Title2",
    desc: "sample 2",
    author:{
        name: "Mike",
        email: "mike@example.com"
    },
});

db.posts.insertOne({
    title: "Title1",
    desc: "sample 1",
    author:{
        name: "Cathy",
        email: "cathy@example.com"
    },
});

db.posts.insertOne({
    title: "Title2",
    desc: "sample 2",
    author:{
        name: "Cathy",
        email: "cathy@example.com"
    },
});

//display all the posts by cathy

db.posts.find(
    {"author.email": "cathy@example.com"},
    {_id:0,"author.name":1,title:1,desc:1}
)

db.posts.drop();

db.authors.insertOne({
    name: "Cathy",
    email: "cathy@example.com"
})

db.posts.insertOne({
    title: "This is title 1",
    desc: "Description of title 1",
    authorId: ObjectId("680718c8f596f5a54ab5f89d"),
  });

//schema validation

db.createCollection("customers",
    {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "email"],
                properties:{
                    name:{
                        bsonType: "string",
                        description :"must be a string type"
                    },
                },
            },
        },
    }
);