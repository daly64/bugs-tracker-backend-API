const mongoose = require("mongoose")
const ProjectsModel = mongoose.model(
    "bugsTracker",
    {
        id: {
            type: Number,
            required: true,
        },
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
        features: {
            type: Array,
            required: true,
        },
        progress: {
            type: Number,
            default: false,
        },
    },
    "projects"
)

module.exports = {ProjectsModel}