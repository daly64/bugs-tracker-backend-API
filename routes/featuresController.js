const express = require("express")
const router = express.Router()
const {FeaturesModel} = require("../models/FeaturesModel")
const ObjectID = require("mongoose").Types.ObjectId

router.get("/", (req, res) => {
    FeaturesModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log(err)
    })
})

router.get("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params._id)) return res.status(400).send(`Unknown id  ${req.params._id}`)

    FeaturesModel.findOne()
    FeaturesModel.findById(req.params._id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`error find : ${err}`)
    })
})

router.post("/", (req, res) => {
    const newRecord = new FeaturesModel({
        index: req.body.index,
        title: req.body.title,
        description: req.body.description,
        developed: req.body.developed,
        projectId: req.body.projectId,
    })


    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log(`error creating new data : ${err}`)
    })
})

router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id)) return res.status(400).send(`Unknown id  ${req.params.id}`)

    const updateRecord = {
        index: req.body.index,
        title: req.body.title,
        description: req.body.description,
        developed: req.body.developed,
        projectId: req.body.projectId,
    }

    FeaturesModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new: true},
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log(`update error : ${err}`)
        }
    )
})
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id)) return res.status(400).send(`Unknown id  ${req.params.id}`)
    FeaturesModel.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`delete error : ${err}`)
    })
})

module.exports = router