import express from 'express';
import patientRoutes from './patientRoutes';

const router = express.Router();

patientRoutes(router);

module.exports = router;