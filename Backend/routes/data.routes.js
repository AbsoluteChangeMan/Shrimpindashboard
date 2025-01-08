const express = require("express");
const Harvest = require("../models/harvest.model");
const router = express.Router();
const DataController = require("../controller/data.controller");
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

// router.post('/newproduct', DataController.uploadNewData);

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
    try {
      // Read the uploaded file buffer
      const buffer = req.file.buffer;
  
      // Parse the buffer as an Excel workbook
      const workbook = xlsx.read(buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0]; // Get the first sheet
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
      // Send the JSON data as response
      res.status(200).json({
        success: true,
        data: sheetData,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred while processing the file.' });
    }
  }
);


module.exports = router