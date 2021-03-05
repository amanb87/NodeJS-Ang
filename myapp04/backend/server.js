const express = require("express");

const mongodb = require("mongodb");
const cors = require('cors');
const ObjectID = require('mongodb').ObjectID;
var path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

NODE_PORT = 5678
// Create link to Angular build directory
const distDir = path.resolve("../dist/myapp04/");
console.log(distDir)
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in the app.
let db;

//...... db + server config  .......................................
const db_uri = 'mongodb://localhost:27017/mydb01' ;
const myport = 3000 ;
const BLOGS_COLLECTION = "blogs";


// ...................................................

// Connect to the database & then  start the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || db_uri,  { useUnifiedTopology: true } ,  
                                                                       (err, client) =>{
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready: ", db_uri);

  // Initialize the app.
  const server = app.listen(process.env.PORT || myport, () => {
    const port = server.address().port;
    console.log("Express_blogs now running on port", port);
  });
});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// get all data.
app.get("/api/blogs", (req, res) => {
  console.log('get all records: find()') ;
  db.collection(BLOGS_COLLECTION).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get blogs.");
    } else {
      res.status(200).json(docs);
    }
  });
});

// create a blog: post
app.post("/api/blogs", (req, res) => {
  console.log('create a record: post') ;
  const newBlog = req.body;
  newBlog.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(BLOGS_COLLECTION).insertOne(newBlog, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new blog.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

app.get('/', function (req, res) {
    res.sendFile('index.html');
 });

// find a blog by id.
app.get("/api/blogs/:id", (req, res) => {
  console.log('findOne:', req.params.id);
  db.collection(BLOGS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to get blog");
    } else {
      res.status(200).json(doc);
    }
  });
});


// update a blog, by id.
app.put("/api/blogs/:id", (req, res) => {
  const updateDoc = req.body;
  delete updateDoc._id;
  console.log('update_req info: ', req.body.name)

  db.collection(BLOGS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, 
                        { $set: updateDoc  },
                        { upsert: true }, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to update blog");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

// delete a blog, by id.
app.delete("/api/blogs/:id", (req, res) => {
  console.log('delete:', req.params.id);
  db.collection(BLOGS_COLLECTION).deleteOne({_id: ObjectID.createFromHexString(req.params.id)}, (err, result) => {
    if (err) {
      handleError(res, err.message, "Failed to delete blog");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});

app.listen(NODE_PORT);
console.log("Server is running on : " + NODE_PORT);