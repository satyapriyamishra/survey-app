const Survey = require("../models/Survey");

exports.submitSurvey = async (req, res) => {
    try {
        const survey = new Survey({ userId: req.user.id, response: req.body.response });
        await survey.save();
        res.status(201).json({ message: "Survey submitted" });
    } catch (error) {
        res.status(500).json({ error: "Survey submission failed" });
    }
};

exports.getEmployeeSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find({ userId: req.user.id });
        res.json(surveys);
    } catch (error) {
        res.status(500).json({ error: "Error fetching surveys" });
    }
};

exports.getAllSurveys = async (req, res) => {
    if (req.user.role !== "admin") return res.status(403).json({ error: "Unauthorized" });
    try {
        const surveys = await Survey.find().populate("userId", "name email");
        res.json(surveys);
    } catch (error) {
        res.status(500).json({ error: "Error fetching surveys" });
    }
};
