db.employees.updateOne(
    { },
    {$push: {score:4}}
)

db.employees.updateOne(
    {email: "jhon@example.com"},
    {$pull: {score:5}}
)

db.employees.updateMany(
    {},
    {$addToSet: {skilss: "Python"}}
)

db.employees.updateMany(
    {},
    {$pop: {score: 1}}
)

db.employees.updateMany(
    {},
    {$pop: {score: -1}}
)