const express = require("express");
const { submitSurvey, getEmployeeSurveys, getAllSurveys } = require("../controllers/surveyController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, submitSurvey);
router.get("/", auth, getEmployeeSurveys);
router.get("/admin", auth, getAllSurveys);

module.exports = router;
