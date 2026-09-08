const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{console.log(err)});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title : {
        type :String,
        required : true,
    },
    author : {
        type : String
    },
    price : {
        type : Number
    },
    dicount : {
        type : Number,
        default : 0
    },
    category : {
        type : String,
        enum : ["fictional","non-fictional"]
    }
});

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title : "Marvel Comics",
    price : "550",
    category : "fictional"
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
