"use strict";



class AccuWeather {

    constructor() {

        this.baseUrl = 'http://dataservice.accuweather.com';
        this.apiKey = 'mAZBdCbnmtWHWk0WjCRTKGoNo91mptem';
    }    

    async getCurrentConditions(locationKey) {

        const options = {
            hostname: this.baseUrl ,
            port: 443,
            path: '/currentconditions/v1/' + locationKey + '?apikey=' + this.apiKey ,
            method: 'GET'
            }

            let response = await getContent(this.baseUrl + options.path);
            return response;                  
    }

    async searchCity(cityText) {

        const options = {
            hostname: this.baseUrl ,
            port: 443,
            path: '/locations/v1/cities/search' + '?apikey=' + this.apiKey + '&q=' + cityText ,
            method: 'GET'
            }
            let response = null;
            try{

               response = await getContent(this.baseUrl + options.path);
            }catch(error){
                console.log(error);
            }
            return response;
    }
}
module.exports = AccuWeather;

function getContent (url) {

    // return new pending promise
    return new Promise((resolve, reject) => {

      // select http or https module, depending on reqested url
      const lib = url.startsWith('https') ? require('https') : require('http');

      const request = lib.get(url, (response) => {

        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
           reject(new Error('Failed to load page, status code: ' + response.statusCode));
         }

        // temporary data holder
        const body = [];

        // on every content chunk, push it to the data array
        response.on('data', (chunk) => body.push(chunk));

        // we are done, resolve promise with those joined chunks
        response.on('end', () => resolve(body.join('')));

      });

      // handle connection errors of the request
      request.on('error', (err) => reject(err))
      });

  };

