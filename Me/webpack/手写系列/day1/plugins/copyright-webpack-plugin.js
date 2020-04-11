class CopyrightWebpackPlugin {
  constructor() {
    console.log('我被调用了')
  }

  // compiler: webpack实例

  apply(compiler) {}
}

module.exports = CopyrightWebpackPlugin;