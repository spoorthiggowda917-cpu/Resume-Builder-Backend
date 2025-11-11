import mongoose from "mongoose";
import bcrypt from "bcrypt"
/*bcrypt → A library used to hash passwords securely.
Hashing = converting a plain text password into an irreversible string before saving it in the database.*/


/*SCHEMA=>A schema is like a blueprint or structure for how data will be stored in your database.*/

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true })

/*"Automatically add two extra fields to every document (record) in this collection.”
Those two fields are:
createdAt → The exact date and time when the user was first added to the database.
updatedAt → The exact date and time when the user data was last modified.*/

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)

/*bcrypt.compareSync() → compares two passwords:
password → the plain text password entered by user.
this.password → the hashed password stored in the database for that user.*/
}

const User = mongoose.model("User", UserSchema)
/*Creates a model (class) from schema
Allows you to save, find, and update users in MongoDB*/

export default User;
