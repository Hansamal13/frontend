const express = require('express');
const router = express.Router();
//const upload = require('../middleware/uploadMiddleware');
//const Workshop = require('../Model/Workshop');
const workshopController = require('../Controllers/workshopController');

/*const {
  createWorkshop,
  getAllWorkshops,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop
} = require('../Controllers/workshopController'); */

router.get('/', workshopController.getAllWorkshops);
router.post('/', workshopController.addWorkshops);
router.get('/:id', workshopController.getById);
router.put('/:id', workshopController.updateWorkshop);
router.delete('/:id', workshopController.deleteWorkshop);


// Create Workshop Route
/*router.post('/', upload.single('image'), createWorkshop);

// Get All Workshops Route
router.get('/', getAllWorkshops);

// Get Single Workshop Route
router.get('/:id', getWorkshopById);

// Update Workshop Route
router.put('/:id', upload.single('image'), updateWorkshop);

// Delete Workshop Route
router.delete('/:id', deleteWorkshop);*/

module.exports = router;