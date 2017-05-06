import login from '../controllers/loginController';

const loginRoutes = router => {
  router
    .route(`/login`)
    .post(login.validUserCheck)
}

export default loginRoutes;