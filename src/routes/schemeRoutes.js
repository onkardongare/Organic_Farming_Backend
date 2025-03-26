const express = require('express');
const router = express.Router();
const {
    getAllSchemeNews,
    getSchemeNewsById,
    createSchemeNews,
    updateSchemeNews,
    deleteSchemeNews
} = require('../controllers/scheme');

// Get all scheme news
router.get('/getAllSchemes', getAllSchemeNews);

// Get single scheme news
router.get('/getScheme/:id', getSchemeNewsById);

router.post('/createScheme', createSchemeNews);

router.put('/updateScheme/:id', updateSchemeNews);

router.delete('/deleteScheme/:id', deleteSchemeNews);

module.exports = router; 