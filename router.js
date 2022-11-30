const express = require('express')
const router = express.Router()
const Model = require('./model')

// Getting all data
router.get('/empData', async (req, res) => {
    try {
        const empData = await Model.find()
        res.status(200).json(empData);
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

// Posting data
router.post('/postData', async (req, res) => {
    const data = new Model(req.body);
    try {
        const dataToSave = await data.save();
        res.status(200).send(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// getting one record by id
router.get('/empData/:id', async (req, res) => {
    try {
        const empData = await Model.findById(req.params.id);
        res.status(200).json(empData);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

// Update a record by PATCH method
router.patch('/patch/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };
        const empUpdate = await Model.findByIdAndUpdate(id, updateData, options);

        const message = empUpdate ? `Records updated successfully: ${empUpdate}` : "No records updated"

        res.status(201).send(message);
    } catch (error) {
        res.status(500).send(message);
    }
})

// Deleting the records
router.delete('/patch/:id', async (req, res) => {
    try {
        const deleteData = await Model.findByIdAndDelete(req.params.id);
        const message = deleteData ? "Records removed successfully" : "No records deleted"
        res.status(201).send(message);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;
