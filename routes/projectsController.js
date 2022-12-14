const express = require("express")
const router = express.Router()
const {ProjectsModel} = require("../models/ProjectsModel")
const ObjectID = require("mongoose").Types.ObjectId

router.get("/", (req, res) => {
    ProjectsModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log(err)
    })
})

router.get("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params._id)) return res.status(400).send(`Unknown id  ${req.params._id}`)

    ProjectsModel.findOne()
    ProjectsModel.findById(req.params._id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`error find : ${err}`)
    })
})

router.post("/", (req, res) => {
    const newRecord = new ProjectsModel({
        index: req.body.index,
        name: req.body.name,
        description: req.body.description,
        bugs: req.body.bugs,
        features: req.body.features,
        status: req.body.status,
        progress: req.body.progress,
        resolvedBugs: req.body.resolvedBugs,
        unResolvedBugs: req.body.unResolvedBugs,
        developedFeatures: req.body.developedFeatures,
        unDevelopedFeatures: req.body.unDevelopedFeatures,
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
        name: req.body.name,
        description: req.body.description,
        bugs: req.body.bugs,
        features: req.body.features,
        status: req.body.status,
        progress: req.body.progress,
        resolvedBugs: req.body.resolvedBugs,
        unResolvedBugs: req.body.unResolvedBugs,
        developedFeatures: req.body.developedFeatures,
        unDevelopedFeatures: req.body.unDevelopedFeatures,
    }

    ProjectsModel.findByIdAndUpdate(
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
    ProjectsModel.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log(`delete error : ${err}`)
    })
})

module.exports = router