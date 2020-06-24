const router = require("express").Router();
const Task = require("../models/taskModel");
const ObjectID = require("mongoose").Types.ObjectId;

router.get("/", (req, res) => {
  Task.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retriving all records: " +
          JSON.stringify(err, undefined, 2)
      );
  });
});

router.post("/", (req, res) => {
  let newRecord = new Task({
    title: req.body.title,
    task: req.body.task,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while creating new record: " + JSON.stringify(err, undefined, 2)
      );
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  let updatedRecord = {
    title: req.body.title,
    task: req.body.task,
  };

  Task.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while updating a record: " + JSON.stringify(err, undefined, 2)
        );
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  Task.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while deleting a record : " + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
