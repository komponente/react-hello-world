module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-simple-filereader',
      externals: {
        react: 'React'
      }
    }
  }
}
