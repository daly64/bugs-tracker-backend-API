const mongoose = require("mongoose")
const ProjectsModel = mongoose.model(
    "ProjectsModel",
    {
        index: {
            type: Number,
            default: Date.now(),
        },
        name: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        bugs: {
            type: Array,
            required: false,
        },
        resolvedBugs: {
            type: Number,
            default: 0,
        },
        unResolvedBugs: {
            type: Number,
            default: 0,
        },
        features: {
            type: Array,
            required: false,
        },
        developedFeatures: {
            type: Number,
            default: 0,
        },
        unDevelopedFeatures: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            required: false,
            default: 'In progress'
        },
        progress: {
            type: Number,
            default: false,
        },
    },
    "projects"
)

module.exports = {ProjectsModel}