import express from 'express';
import patientRoutes from './patientRoutes';
import loginRoutes from './loginRoutes';
import adminRoutes from './adminRoutes';
import registerRoutes from './registerRoutes';
import registerHospitalRoutes from './registerHospitalRoutes';

const router = express.Router();

patientRoutes(router);
loginRoutes(router);
adminRoutes(router);
registerRoutes(router);
registerHospitalRoutes(router);

module.exports = router;