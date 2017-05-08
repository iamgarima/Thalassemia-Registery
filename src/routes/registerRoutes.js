import register from '../controllers/registerController';

const registerRoutes = router => {
  router
    .route('/register')
    .post(register.addAdmin)
}

export default registerRoutes;