module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-hello-world',
      externals: {
        react: 'React'
      }
    }
  }
}
