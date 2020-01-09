const mongodb = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pass = require("../pw.js");

const connectionString = `mongodb+srv://gammazonReview:${pass}@cluster0-iixhb.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectionString);

let connection = mongoose.connection;

var dumbSchema = new Schema({});
var mvp = mongoose.model("mvp", dumbSchema, "savedData");

connection.on("error", () => {
  console.log("crashed");
});
connection.once("open", function() {
  console.log("connected");
});

const getSaveData = async function() {
  var queryPromise = new Promise((resolve, reject) => {
    mvp.find({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return queryPromise;
};

const insertSaveData = async function(data) {
  let dumbSchema = new Schema({}, { strict: false });
  let dataModel = mongoose.model("savedData", dumbSchema);
  var temp = new dataModel(data);
  var queryPromise = new Promise((resolve, reject) => {
    temp.save((err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
  return queryPromise;
};

module.exports.connection = connection;
module.exports.getSaveData = getSaveData;
module.exports.insertSaveData = insertSaveData;
