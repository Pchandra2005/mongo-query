db.employees.find({
    $or: [
        {
            salary: {$gte:"2000"}
        },
        {
            daprtment: "HR"
        }
    ]
})

db.employees.find({
    $and: [
        {
            salary: {$gte:"2000"}
        },
        {
            daprtment: "HR"
        }
    ]
})

db.employees.find({
    $nor: [
        {
            salary: {$gte:"2000"}
        },
        {
            daprtment: "HR"
        }
    ]
})

db.employees.find({
    $nor: [
        {
            daprtment: "HR"
        }
    ]
})

db.employees.find({
    daprtment: {$ne: "HR"}
})