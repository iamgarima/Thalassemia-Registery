import register from '../controllers/hospitalController';

const registerHospitalRoutes = router => {
  router
    .route('/register/hospital')
    .post(register.addHospital)
    .get(register.getHospitals)
}

export default registerHospitalRoutes;