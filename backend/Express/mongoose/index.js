const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function speak() {
    const greeting = 'My name is '+this.name;
    console.log(greeting);
  };
  
  const Kitten = mongoose.model('harrykitty', kittySchema);


  const harrykitty2 = new Kitten({ name: 'harrykitty2' });
  harrykitty2.save();
  harrykitty2.speak();
  const kittens = Kitten.find({name:"harrykitty2"});
console.log(kittens);
