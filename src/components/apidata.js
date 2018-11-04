import React, { Component } from 'react';
import  Clarifai from 'clarifai';
import Instagram from 'node-instagram';
import Constants from '../common/constants'

const app = new Clarifai.App({
    apiKey: 'd63bab0d77c248f1bcb5304ff8d86cf4'
   });

let DERIVED_ACCESS_TOKEN = "";

   const REDIRECT_URI = "http://localhost:8000";
   const url = `https://api.instagram.com/oauth/authorize/?client_id=${Constants.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`

// Create a new instance.

 

// Get information about the owner of the access_token.
// const data = await instagram.get('users/self');
// console.log(data);
 

export default class ClarifaiData extends Component {
  constructor () {
    super()
    this.state={data : {}}
  }

  // You can use callbacks or promises


  getClarifaiData (url){
      console.log("clicked");
  app.models.predict(Clarifai.GENERAL_MODEL, url)
  .then(res => {
    console.log(JSON.stringify(res['outputs'][0]['data']['concepts'][0]['name']));
  })
  }

  getInstagramToken (){
    console.log('clicked me');
    window.location.replace(url);
 
    // console.log(window.location.search);

   // const myParams = urlParams.get("access_token");
  


    // https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT_URI&response_type=token
  }

  // getInstagramData () {
  //   instagram.get('users/self/media/recent', (err, data) => {
  //     if (err) {
  //       // an error occured
  //       console.log(err);
  //     } else {
  //       // this.setState({data: data})
  //       console.log(JSON.stringify(data));
  //     }
  //   });
  // }

  componentDidMount(){
    const hash = window.location.hash;
    DERIVED_ACCESS_TOKEN = hash.split("=")[1];
    console.log(window.location.hash);
    console.log(DERIVED_ACCESS_TOKEN);
    const instagram = new Instagram({
      clientId: Constants.CLIENT_ID,
      clientSecret: Constants.CLIENT_SECRET,
      // accessToken: Constants.ACCESS_TOKEN
      // accessToken: '1548230773.897a6d6.84310eb08ac0407387e80775b1b07e9d'
       accessToken: DERIVED_ACCESS_TOKEN
    });
      instagram.get('users/self/media/recent', (err, data) => {
        if (err) {
          // an error occured
          console.log(err);
        } else {
          // this.setState({data: data})
          //console.log(JSON.stringify(data));
          let userImagesArray = [];
          const imageLimit = 5;
          for (let i = 0; i < imageLimit; i++) {
            let currentImage = data['data'][i]['images']['standard_resolution']['url'];
            userImagesArray.push(data['data'][i]['images']['standard_resolution']['url']);
            this.getClarifaiData(currentImage);
          }
          //console.log(userImagesArray);
        }
      });
  }
  
  render () {
    console.log(window.location)
  
    return(
        <div>
            {/* <button onClick={this.getInstagramData}>Get Instagram Data</button> */}
            <button onClick={this.getClarifaiData}>Get Clarifai Data</button>
            <br />
            <a href={url}>Get Instragram </a>
            <button onClick={this.getInstagramToken}>Get Instragram Token</button>
        </div>
    )
  }
}


   