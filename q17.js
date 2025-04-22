db.employees.find({
    name: {$regex: "^C"}
},{_id:0,name:1,salary:1})

db.employees.find({
    name: {$regex: "^C",$options: "i"}
},{_id:0,name:1,salary:1})

db.employees.find({
    name: {$regex: "n$"}
},{_id:0,name:1,salary:1})

db.employees.find({
    name: {$regex: "n"}
},{_id:0,name:1,salary:1})

