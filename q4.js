db.users.insertMany([
    {
        name: "test1",
        age : 23,
    },
    {
        name: "test2",
        age : 24,
        location: "Hyderabad"
    },
    {
        name: "test3",
        country: "India"
    },
]);

db.users.find({name: "test1"}); //only the details of test1 will be displayed

db.users.find({},{name:1});//only the names will be displayed and with id default

db.users.find({},{_id:0,name:1});//now id wont be displayed