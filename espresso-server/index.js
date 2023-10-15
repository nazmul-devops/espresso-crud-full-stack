const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5001;

// middlewares

app.use(cors());

app.use(express.json());

// Mongo DB Connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongodbcloud.ja2jrii.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const database = client.db("espressoDB");
    const userCollection = database.collection("coffees");

    app.get('/coffees', async (req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      console.log(result);
      res.send(result);
    })

    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    })

    app.post('/coffees', async (req, res) => {
      console.log(req.body);
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
      // res.json({ message: 'User added successfully' });
    })

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      console.log('Frontend requested to update user with ID:', id);
      const user = req.body;
      console.log(id, user);
      const filter = { _id: new ObjectId(id) };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password,
        }
      }
      const options = { upsert: true };
      const result = await userCollection.updateOne(filter, updatedUser, options);
      res.json({ message: 'User updated successfully' });
    })

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      console.log('Fronted requested: please delete', id, 'this user from mongodb');
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      console.log('Requested user', id, 'deleted successfully');
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged!!! You are successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.log);



app.get('/', (req, res) => {
  res.send('Espresso CRUD Server.');
})

app.listen(port, () => console.log(`Espresso CRUD Backend server running on port ${port}!`));