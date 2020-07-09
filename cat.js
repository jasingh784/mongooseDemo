const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost:27017/cat_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("Connected to DB!"))
.catch( error => console.log(error.message));

//define a schema 
const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//create a model for the database. 
const Cat = mongoose.model("Cat",catSchema);

//adding a new cat to the DB
//createing the cat object
/* const george = new Cat({
    name: "Mrs.Norris",
    age: 7,
    temperament: "Evil"
});
//actually saving to the database
george.save( (err, cat) => {
    if(err) {
        console.log("SOMETHING WENT WRONG");
    } else {
        console.log("WE JUST SAVED A CAT TO THE DB");
        console.log(cat);
    }
}); */

//creats and save the cat at the same time
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, (err, cat) => {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
})

//retrieve all cats from the DB and console.log each one

Cat.find( {}, (err, cats) => {
    if(err) {
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS...");
        console.log(cats);
    }
});

