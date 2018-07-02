if( process.env.NODE_ENV === 'production'){
  module.export ={mongoURI:
    'mongodb://<jazooh>:TREster50&@ds223161.mlab.com:23161/vidjot-ngacha'}

} else {
module.export ={mongoURI:'mongodb://localhost/vidjot-dev'}

}