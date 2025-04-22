db.cars.insertMany(
    [
        {name: "m1"},
        {name: "m2"},
        {name: "m3"},
        {name: "m4"},
        {name: "m5"},
        
    ]
)

db.cars.updateMany(
    {},
    {$set : {price: 10000}}
)

db.cars.updateMany(
        {},
        {$set: {variant: ["v1", "v2", "v3" ,"v4"]}},
);

db.cars.updateOne(
    {name:"m3"},
    {$push: {variant: "v5"}}
)

db.cars.updateMany({},{$set : {city: "Hyderabad"}}).limit(3)

db.cars.updateOne(
    {name: "m1"},
    { $set : {city: "Hyderabad"}}
)
// db.cars.updateOne(
//     {name: "m2"},
//     {city: "Hyderabad"}
// )
// db.cars.updateOne(
//     {name: "m3"},
//     {city: "Hyderabad"}
// )
// db.cars.updateOne(
//     {name: "m4"},
//     {city: "Bangalore"}
// )
// db.cars.updateOne(
//     {name: "m5"},
//     {city: "Bangalore"}
// )


db.cars.deleteMany(
    {},
    {city: {$in:["Hyderabad"]}}
)