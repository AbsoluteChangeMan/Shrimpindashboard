const mongoose = require('mongoose');

const PondSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required
        },
        harvests: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Harvest",
            default: []
        }]
    }
)

const Pond = mongoose.model("Pond", PondSchema)
module.exports = Pond;