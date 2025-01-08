const Harvest = require('../models/harvest.model');

// Save multiple harvest entries to MongoDB
const uploadNewData = async (entries) => {
  try {
    const result = await Harvest.insertMany(entries);
    return result;
  } catch (error) {
    throw new Error('Error saving harvest entries: ' + error.message);
  }
};

const clearData = async() => {
    try{
        await Harvest.deleteMany({});
        console.log("Cleared entries")
    } catch (e) {
        throw new Error('Error clearing data: '+ e.message);
    }
}

module.exports = {
    uploadNewData, clearData,
};
