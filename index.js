
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = 8080

const url = 'mongodb+srv://shubhamhalder:shubhamatlasmongo123@clusterformyportfolio.iqynmjx.mongodb.net/myPortfolio?retryWrites=true&w=majority'

//conectiong to mongo
main().catch(err => console.log(err));
async function main() {
  // await mongoose.connect('mongodb://0.0.0.0:27017/portfolioForm');
  await mongoose.connect(url);
  console.log("MongoDB connected")
}
const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    subject:String,
    message:String
  });
const contacts = mongoose.model('contact', contactSchema);


//middleware
app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body)
  let contact = new contacts()
  contact.name = req.body.name
  contact.email = req.body.email
  contact.subject = req.body.subject
  contact.message = req.body.message

  contact.save()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})