import admin from '../controllers/adminController';

const adminRoutes = router => {
  router
    .route('/users')
    .post(admin.addUser)
    .get(admin.getUsers)
}

export default adminRoutes;