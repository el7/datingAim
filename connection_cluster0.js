
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://dbBergmank:${process.env.MONGO_ATLAS_PW}@cluster0.ssk8u.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  
  client.close();
});

// https://webhooks.mongodb-realm.com/api/client/v2.0/app/application-zer0-pncgv/service/Todo/incoming_webhook/add-user

