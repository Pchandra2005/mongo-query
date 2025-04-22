db.employees.find({email:"cathy@example.com"}).explain("executionStats")

db.employees.createIndex({email:1})

db.employees.getIndexes()

db.employees.dropIndexe("name_1")