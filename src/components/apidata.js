import React, { Component } from 'react';
import  Clarifai from 'clarifai';
import Instagram from 'node-instagram';
import Constants from '../common/contsants'

const app = new Clarifai.App({
    apiKey: 'd63bab0d77c248f1bcb5304ff8d86cf4'
   });

// Create a new instance.
const instagram = new Instagram({
  clientId: Constants.CLIENT_ID,
  clientSecret: Constants.CLIENT_SECRET,
  accessToken: Constants.ACCESS_TOKEN
});
 

// Get information about the owner of the access_token.
// const data = await instagram.get('users/self');
// console.log(data);
 

export default class ClarifaiData extends Component {
  constructor () {
    super()
    this.state={data : {}}
  }

  // You can use callbacks or promises
getInstagramData () {
  instagram.get('users/self/media/recent', (err, data) => {
    if (err) {
      // an error occured
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

  getClarifaiData (){
      console.log("clicked");
  app.models.predict(Clarifai.GENERAL_MODEL, 'https://scontent.cdninstagram.com/vp/7732824dcd2c77dcf2b65cd4e81f16e4/5C65C8AE/t51.2885-19/s150x150/18253215_665499933649307_2955839000398528512_a.jpg')
  .then(res => {
    console.log(res['outputs'][0]['data']['concepts']);
  })
  }
  
  render () {
    return(
        <div>
            <button onClick={this.getInstagramData}>Get Instagram Data</button>
            <button onClick={this.getClarifaiData}>Get Clarifai Data</button>
        </div>
    )
  }
}


   