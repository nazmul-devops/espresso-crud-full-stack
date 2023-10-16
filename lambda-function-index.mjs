import { MongoClient } from 'mongodb';

export const handler = async (event) => {
  const uri = `mongodb+srv://nazmul:nazmul@mongodbcloud.ja2jrii.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true });

  try {
    await client.connect();

    const database = client.db('espressoDB'); // Replace with your database name
    const collection = database.collection('coffees'); // Replace with your collection name

    const query = {}; // Your query object

    const result = await collection.find(query).toArray();

    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    return response;
  } catch (err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };

    return response;
  } finally {
    // await client.close();
  }
};
