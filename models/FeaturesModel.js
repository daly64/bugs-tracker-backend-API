const mongoose = require("mongoose")
const FeaturesModel = mongoose.model(
    "FeaturesModel",
    {
        description: {
            type: String,
            required: true,
        },
        developed: {
            type: Boolean,
            default: false,
        },
    },
    "features"
)

module.exports = {FeaturesModel}