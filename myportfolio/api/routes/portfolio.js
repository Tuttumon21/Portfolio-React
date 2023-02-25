const express = require("express");
const portRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const config = require("config");
const multer = require("multer");
const upload = multer({ dest: "./public/images"});

// This section will help you get a list of all the records.
portRoutes.route("/portfolio/details/:email").get(function (req, res) {
  let db_connect = dbo.getDb("myportfolio");
  let myquery = { uEmail: req.params.email};
  db_connect.collection("portfolio").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.status(200).json(result);
  });
});

// This section will help you get a single record by id
portRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

portRoutes.route("/user/login").post(function (req, res) {
  let db_connect = dbo.getDb();
  const { email, password } = req.body;
  let myquery = { email: email };

  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    if (result.password === password) {
      jwt.sign(
        {
          name: result.firstname,
        },
        config.get("jwtSecret"),
        { expiresIn: 60 * 60 },
        (err, token) => {
          if (err) {
            return res.status(400).json({ msg: "Login Failed.", err });
          }
          return res.status(200).json({
            firstname: result.firstname,
            email: result.email,
            token,
            msg: "Login Successful.",
          });
        }
      );
      // res.status(200).json(result);
    } else {
      return res.status(400).json({ msg: "Login Failed." });
    }
  });
});

// This section will help you create a new record.
portRoutes.route("/portfolio/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  // upload.single("userAvatar"),
  const userData = {...req.body}
  // ,proPic:"http://localhost:5000/public/images/"+req.file.filename
      db_connect.collection("portfolio").insertOne(userData, function (err, res) {
        if (err) throw err;
        response.status(200).json(res);
      });
    
  });

  portRoutes.route("/portfolio/update/about/:uEmail").post( function (req, response) {
    // portRoutes.route("/portfolio/add/about/:email").post( function (req, response) {
    
    let db_connect = dbo.getDb();
    console.log(req.params.uEmail)
    console.log(req.body)
    let myquery = { _uEmail: (req.params.email) };
    let newvalues = {
      $set: {
        aboutDesc: req.body.aboutDesc,
        aboutStyle: req.body.aboutStyle
      },
    };
    // const userData = {...req.body,proPic:"http://localhost:5000/public/images/"+req.file.filename}
  
    db_connect
    .collection("portfolio")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.status(200).json(res);
      response.status(200).send("about details added");
    });
    });


// This section will help you update a record by id.
portRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
portRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = portRoutes;
