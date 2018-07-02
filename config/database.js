if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb://jazooh:TREster50&@ds223161.mlab.com:23161/vidjot-ngacha'
  }

} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }

}