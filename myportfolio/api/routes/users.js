const express = require("express");
const userRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const jwt = require("jsonwebtoken");
const config = require("config");

// This section will help you get a list of all the records.
userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("myportfolio");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
userRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

userRoutes.route("/user/login").post(function (req, res) {
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
userRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };
  let myquery = { email: req.body.email };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (result) {
      return response.status(400).json({ msg: "Email already exists." });
    } else {
      db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.status(200).json(res);
      });
    }
  });
});

// This section will help you update a record by id.
userRoutes.route("/update/:id").post(function (req, response) {
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
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = userRoutes;
