import express from 'express';
import patientRoutes from './patientRoutes';
import loginRoutes from './loginRoutes';
import adminRoutes from './adminRoutes';
import registerRoutes from './registerRoutes';
import registerHospitalRoutes from './registerHospitalRoutes';
import joinRoutes from './joinRoutes';

const router = express.Router();

patientRoutes(router);
loginRoutes(router);
adminRoutes(router);
registerRoutes(router);
registerHospitalRoutes(router);
joinRoutes(router);

module.exports = router;