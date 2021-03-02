'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // user
  router.get('/api/v1/users', controller.user.index);
  router.post('/api/v1/users', controller.user.create);
  router.get('/api/v1/users/:id', controller.user.show);
  router.patch('/api/v1/users/:id', controller.user.update);
  router.delete('/api/v1/users/:id', controller.user.destroy);
  router.put('/api/v1/users/:id/password', controller.user.updatePassword);
};
