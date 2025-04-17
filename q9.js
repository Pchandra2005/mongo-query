db.employees.insertOne({
    name:"test1",
    email: "test1@email.com"
});


db.employees.find({
    daprtment: {$exists:false}
})

db.employees.updateOne(
    {
        email: "mike@example.com"
    },
    {
        $set : {salary: 1900}
    }
)

db.employees.updateMany(
    {},
    {$set: {org: "Wipro"}}
)

db.employees.updateMany(
    {email: "mike@example.com"},
    {$set: {org: "Wipro"}}
)