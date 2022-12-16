const mongoose = require("mongoose")
const ProjectsModel = mongoose.model(
    "ProjectsModel",
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        bugs: {
            type: Array,
            required: true,
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
            required: true,
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
            required: true,
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