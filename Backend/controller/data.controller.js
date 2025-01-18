const xlsx = require('xlsx');
const dataQueries  = require('../queries/data.queries');

module.exports = {
  uploadNewData : async (req, res) => {
    try {
      // Read the uploaded file buffer
      const buffer = req.file.buffer;

      // Parse the buffer as an Excel workbook
      const workbook = xlsx.read(buffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0]; // Get the first sheet
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

      console.log(sheetData);
      // Transform sheet data to match the Harvest schema
      const harvestEntries = sheetData
      .map((entry) => {
      const value = parseFloat(entry["Value"]);
          if (!isNaN(value)) {
              return { value }; // Only include valid rows
          } else {
              console.warn(`Skipping invalid row: ${JSON.stringify(entry)}`);
              return null;
          }
      })
      .filter(Boolean); // Remove null entries

      // clear mongodb before upload 
      await dataQueries.clearData();

      // Save to MongoDB
      const result = await dataQueries.uploadNewData(harvestEntries);

      // Send success response
      res.status(200).json({
        success: true,
        message: "Data saved successfully!",
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred while processing the file.' });
    }
  },
  clearAllData : async (req, res) => {
    try {
      const result = await dataQueries.clearData();
      res.status(200).json({
        message: `${result.deletedCount} harvest entries deleted successfully`,
      });
    } catch (error) {
      console.error('Error deleting harvest entries:', error);
      res.status(500).json({ error: 'Failed to delete harvest entries' });
    }
  },

}


