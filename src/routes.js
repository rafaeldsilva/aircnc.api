const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotContoller');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const AprovalController = require('./controllers/AprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spot/:spot_id/bookings', BookingController.store);
routes.post('/bookings/:boooking_id/aprovals', AprovalController.store);
routes.post('/bookings/:boooking_id/rejections', RejectionController.store);

module.exports = routes;