db.employees.find({salary: {$eq: "2000"}}); //other way to display whosw salary is 2000

db.employees.find({salary: {$gt: "2000"}}); //displays whose salary is greater than 2000

db.employees.find({salary: {$lt: "2000"}});// displays whose salary is less than 2000