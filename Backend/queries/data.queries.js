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

module.exports = {
    uploadNewData,
};
