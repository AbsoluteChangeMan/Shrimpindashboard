const mongoose = require('mongoose');

const BlockSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required
        },
        ponds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pond",
            default: []
        }]
    }
)

const Block = mongoose.model("Block", PondSchema)
module.exports = Block;