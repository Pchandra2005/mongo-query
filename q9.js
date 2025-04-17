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

db.employees.updateOne(
    {email: "brian@gmail.com"},
    {$set : {org: "Wipro"}},
    {upsert : true}
)

db.employees.find(
    {daprtment: {$in:["HR","IT"]}} //anyone from HR or IT will displayed. acts as or operator
)

db.employees.find(
    {daprtment: {$nin:["HR","IT"]}} //anyone not from HR or IT will displayed. acts as or operator
)