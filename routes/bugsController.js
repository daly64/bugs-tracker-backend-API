const express = require("express")
const router = express.Router()
const {BugsModel} = require("../models/BugsModel")
const ObjectID = require("mongoose").Types.ObjectId

router.get("/", (req, res) => {
    BugsModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log(err)
    })
})

router.get("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params._id)) return res.status(400).send(`Unknown id  ${req.params._id}`)

    BugsModel.findOne()
    BugsModel.findById(req.params._id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`error find : ${err}`)
    })
})

router.post("/", (req, res) => {
    const newRecord = new BugsModel({
        description: req.body.description,
        resolved: req.body.resolved
    })
    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log(`error creating new data : ${err}`)
    })
})

router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params._id)) return res.status(400).send(`Unknown id  ${req.params._id}`)

    const updateRecord = {
        description: req.body.description,
        resolved: req.body.resolved
    }

    BugsModel.findByIdAndUpdate(
        req.params._id,
        {$set: updateRecord},
        {new: true},
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log(`update error : ${err}`)
        }
    )
})
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params._id)) return res.status(400).send(`Unknown id  ${req.params._id}`)
    BugsModel.findByIdAndDelete(req.params._id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`delete error : ${err}`)
    })
})

module.exports = router