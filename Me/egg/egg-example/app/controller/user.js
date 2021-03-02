'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.list(ctx.query);
  }

  async show() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.user.find(id);
  }

  async create() {
    const ctx = this.ctx;
    console.log( 'user: ', ctx.request.body)
    ctx.body = await ctx.service.user.create(ctx.request.body);
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const payload = ctx.request.body;
    ctx.body = await ctx.service.user.update(id, payload);
  }

  async updatePassword() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const payload = ctx.request.body;
    ctx.body = await ctx.service.user.updatePassword(id, payload);
  }

  async destroy() {
    const ctx = this.ctx;
    await ctx.service.user.del(ctx.params.id);
    ctx.status = 204;
  }

  async login() {
    const ctx = this.ctx;
    const payload = ctx.request.body;
    ctx.body = await ctx.service.user.login(payload);
  }

  async logout() {
    const ctx = this.ctx;
    await ctx.service.user.logout();
    ctx.status = 204;
  }
}

module.exports = UserController;
