db.users.insertMany([
    {
        name: "Mike",
        email: "mike@example.com",
        pass: "1234",
    },
    {
        name: "Cathy",
        email: "cathy@example.com",
        pass: "123456",
    },
]);

db.users.find();

db.users.findOne(); //used to get the first one

db.users.find().limit(2); //used to get required number

db.users.find().skip(1); //skips the first one

db.users.find().skip(2); //skips the first 2

db.users.countDocument(); //gives the count 

