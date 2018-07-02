if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb://mimi:mimi1234@ds125211.mlab.com:25211/dbngacha'
  }

} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }

}