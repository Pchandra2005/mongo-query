db.employees.aggregate([
    {$group:{_id:"$daprtment",toatal:{$sum: "$salary"}}}
])

db.employees.aggregate([
    {$project:{_id:0,name:1,
        skilss:1}},
        {$unwind: "$skilss"}
])


db.employees.aggregate([
    {$project:{_id:0,name:1,salaryStr: {$convert: {input: "$salary", to: "int"}}}},
])