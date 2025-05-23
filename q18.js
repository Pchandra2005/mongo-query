db.posts.aggregate([
    {$project:{
        _id: 0,
        title: 1,
        desc: 1,
        "author.name": 1,
    }
    },
    {$lookup:{
        from: "authors",
        localField: "authorId",
        foreignField: "_id",
        as: "author"
    }}
])