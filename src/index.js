const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000

main().catch(err => console.log(err));  

async function main() {
  await mongoose.connect("mongodb+srv://workhardikdhuri:zdoKz8FMvBh7ztt4@testdb.uaup4kq.mongodb.net/");
  const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    trainer: String,
    level: Number
  });

  const Pikachu = mongoose.model('Pokemon', pokemonSchema)

  const pika = new Pikachu({ name: "Pikachu", type: "eletric", trainer: "Ash", level: 2 })

  console.log(pika.name);

  await pika.save();
}

app.get('/', (req, res) => {
  main().catch(err => console.log(err));  
  res.send("Hello World");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})