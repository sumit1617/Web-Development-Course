const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:[true, "why not name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit ({
    name: "pineapple",
    rating: 9,
    review: "very good"
})

pineapple.save();

Fruit.updateOne({name: "Sumit"}, {favouriteFruit: pineapple}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Successfully updated");
    }
})

const peersonSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})



const Person = mongoose.model("Person", peersonSchema);

const person = new Person ({
    name: "Sumit",
    age: 18
})

// person.save()

// const mango = new Fruit ({
//     name: "mango",
//     rating: 10,
//     review: "king"
// })

// const chiku = new Fruit ({
//     name: "chiku",
//     rating: 4,
//     review: "ok ok"
// }) 

// Fruit.insertMany([mango, chiku], function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// })


// Fruit.find(function(err, fruits){
//     if(err) {
//         console.log(err);
//     } else {

//         // mongoose.connection.close();

//         fruits.forEach(function(fruit){
//             console.log(fruit.name)
//         })
//     }
// }) 




// Fruit.deleteOne({_id: "633efe7cdb430f53863c0544"}, function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Deleted Successfully");
//     }
// })