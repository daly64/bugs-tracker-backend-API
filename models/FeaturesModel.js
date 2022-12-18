const mongoose = require("mongoose")
const FeaturesModel = mongoose.model(
    "FeaturesModel",
    {
        index: {
            type: Number,
        },
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        developed: {
            type: Boolean,
            default: false,
        },
        projectId: {
            type: String,
            default: '',
        },
    },
    "features"
)

module.exports = {FeaturesModel}