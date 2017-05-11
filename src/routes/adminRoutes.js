import user from '../controllers/userController';

const adminRoutes = router => {
  router
    .route('/users')
    .post(user.addUser)
    .get(user.getUsers)
}

export default adminRoutes;