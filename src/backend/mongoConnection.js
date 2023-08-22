import mongoose from 'mongoose'
const PASSWORD = '0bRizRKgFCDcNLPt'

const connectToDatabase = () => {
  mongoose.connect(`mongodb+srv://andresvp257:${PASSWORD}@cluster0.6trfqpo.mongodb.net/dashboard?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Database connected')
    }).catch(err => console.error(err))
}

connectToDatabase()