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
        features: {
            type: Array,
            required: true,
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