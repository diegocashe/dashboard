import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema({
  userID: mongoose.Schema.Types.ObjectId,
  name: String,
  username: String,
  email: String,
  address: {
    country: String,
    city: String
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const User = mongoose.model('User', userSchema)