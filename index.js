const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{console.log(err)});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String ,
    email : String,
    age : Number

});

const User = mongoose.model("User",userSchema);

// const user1 = new User({
//     name : "Adam",
//     email : "adam@yahoo.com",
//     age:48
// });
// const user2 = new User({
//     name : "Eve",
//     email : "evee@gmail.com",
//     age: 18
// })

// user1.save();
// user2.save().then((res)=>{console.log(res)})
// .catch((err)=>{
//     console.log(err);
// })

//many userss
User.insertMany([
    {name:"Anmisha",email:"anmisha@gmail.com",age:20},
    {name:"Ashok",email:"ashok@gmail.com",age:25},
    {name:"zooo",email:"zoo@gmail.com",age:18}
]).then((res)=>{console.log(res);
});
// const Employee = mongoose.model("Employee",userSchema);