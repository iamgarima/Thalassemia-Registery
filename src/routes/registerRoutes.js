import register from '../controllers/registerController';

const registerRoutes = router => {
  router
    .route('/register/admin')
    .post(register.addAdmin)
}

export default registerRoutes;