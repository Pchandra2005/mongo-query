// db.users.deleteOne({
//     name: "test1"
// });


db.employees.insertOne({
    name: "Jhon Smith",
    email: "jhon@example.com",
    address: {city: "Hyderabad", state: "Telangan"},
    daprtment: "IT",
    salary: "2000",
    score: [4,5,4,5],
    skilss: ["Java", "C++"],
    date: Date()
});

db.employees.insertOne({
    name: "Cathy Groege",
    email: "cathy@example.com",
    address: {city: "Hyderabad", state: "Telangan"},
    daprtment: "HR",
    salary: "2500",
    score: [6,2,6,4],
    skilss: ["Java", "Python"],
    date: Date()
});

db.employees.insertOne({
    name: "Mike Covington",
    email: "mike@example.com",
    address: {city: "Hyderabad", state: "Telangan"},
    daprtment: "Tester",
    salary: "1800",
    score: [5,6,4,5],
    skilss: ["Java", "Python"],
    date: Date()
});