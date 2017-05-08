import express from 'express';
import patientRoutes from './patientRoutes';
import loginRoutes from './loginRoutes';
import adminRoutes from './adminRoutes';
import registerRoutes from './registerRoutes';

const router = express.Router();

patientRoutes(router);
loginRoutes(router);
adminRoutes(router);
registerRoutes(router);

module.exports = router;