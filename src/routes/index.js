import express from 'express';
import patientRoutes from './patientRoutes';
import loginRoutes from './loginRoutes';
import adminRoutes from './adminRoutes';

const router = express.Router();

patientRoutes(router);
loginRoutes(router);
adminRoutes(router);

module.exports = router;