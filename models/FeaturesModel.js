const mongoose = require("mongoose")
const FeaturesModel = mongoose.model(
    "FeaturesModel",
    {
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
        index: {
            type: Number,
        },
    },
    "features"
)

module.exports = {FeaturesModel}