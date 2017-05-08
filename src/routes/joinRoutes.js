import join from '../controllers/joinController';

const joinRoutes = router => {
  router
    .route('/join')
    .post(join.setPassword)
}

export default joinRoutes;