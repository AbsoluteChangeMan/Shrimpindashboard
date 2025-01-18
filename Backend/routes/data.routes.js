const express = require("express");
const Harvest = require("../models/harvest.model");
const router = express.Router();
const DataController = require("../controller/data.controller.js");
const multer = require('multer');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

// router.post('/newproduct', DataController.uploadNewData);
router.delete('/clearalldata', DataController.clearAllData); // clear all data

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('file'), DataController.uploadNewData); // receive excel file 




module.exports = router