'use strict';

const Service = require('egg').Service;
const attributes = { exclude: ['password'] };

class UserService extends Service {

  async find(id) {
    const user = await this.ctx.model.User.findById(id, { attributes });
    if (!user) {
      this.ctx.throw(404, 'user not found', { code: 'USER_NOT_FOUND' });
    }
    return user;
  }

  async create(payload) {
    // const user = await ctx.model.User.findOne({
    //   where: { name },
    // });
    // if (user) {
    //   ctx.throw(400, 'user is existed', { code: 'USER_EXISTED' });
    // }
    return await this.ctx.model.User.create(
      {
        ...payload,
      },
      { attributes }
    );
  }

  async initUser() {
    const ctx = this.ctx;
    const { initialUser } = ctx.app.config;
    await ctx.app.model.User.findOrCreate({
      where: { name: initialUser.name },
      defaults: {
        password: hash,
      },
    });
  }

  async update(id, payload) {
    const user = await this.find(id);
    return await user.update(payload, { attributes });
  }

  async updatePassword(id, payload) {
    const user = await this.ctx.model.User.findOne({
      where: { id },
    });
    const { password } = payload;
    return await user.update({ password: password }, { attributes });
  }

  async del(id) {
    const user = await this.find(id);
    return await user.destroy();
  }
}

module.exports = UserService;
