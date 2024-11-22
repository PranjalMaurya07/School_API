const express = require("express");
const { handlePostSchoolController, handleGetSchoolListController } = require("../controllers/schoolController");

const router = express.Router();

//add-school
router.post('/addSchool',handlePostSchoolController);

//get-list-of-schools
router.get('/listSchools',handleGetSchoolListController);


module.exports = router;
