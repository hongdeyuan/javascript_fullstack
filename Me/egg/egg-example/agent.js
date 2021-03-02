'use strict';

module.exports = async agent => {
  console.log('====================', 'agent ing')
  await agent.model.sync();
  console.log('=================', ' agent end')
};
