# Mongoose Basics

A simple practice project to learn **MongoDB + Mongoose** with Node.js.

## 📌 Topics Covered

### 1. MongoDB Connection

Connect Mongoose to a MongoDB database:

```js
mongoose.connect("mongodb://127.0.0.1:27017/amazon");
```

### 2. Schema & Model

```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
```

### 3. Create Documents

```js
const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.com",
    age: 48
});

user1.save();
```

### 4. Insert Multiple Documents

```js
User.insertMany([
    { name: "Anmisha", email: "anmisha@gmail.com", age: 20 },
    { name: "Ashok", email: "ashok@gmail.com", age: 25 }
]);
```

### 5. Find Documents

```js
User.findById("USER_ID");
```

### 6. Update Documents

```js
User.findOneAndUpdate(
    { name: "Ashok" },
    { age: 20 }
);
```

### 7. Delete Documents

```js
User.findByIdAndDelete("USER_ID");
```

## 📚 Mongoose Validation

* `required` → field must be provided
* `default` → sets a default value
* `enum` → allows specific values
* `min` → sets a minimum value

## 🛠️ Tech Used

* Node.js
* MongoDB
* Mongoose

---

### ⭐ Found this helpful?

If this project helped you learn Mongoose, **consider giving it a ⭐!**
