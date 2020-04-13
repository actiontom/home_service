"use strict";

class Covid19 {

    constructor() {

        this.baseUrl = 'https://api.covid19api.com';        
    }    

    async getCovid19Summary() {

        const options = {
            hostname: this.baseUrl ,
            port: 443,
            path: '/summary',
            method: 'GET'
            }

            let response = await getContent(this.baseUrl + options.path);
            return response;                  
    }

    async getCovid19Countries() {

      const options = {
          hostname: this.baseUrl ,
          port: 443,
          path: '/countries',
          method: 'GET'
          }

          let response = await getContent(this.baseUrl + options.path);
          return response;                  
  }
    
    async getCovid19DayOne(country, status) {

      let strCountry = country;
      let strStatus = status;

      const options = {
        hostname: this.baseUrl,
        port: 443,
        path: '/total/dayone/country/' + strCountry + '/status/' + strStatus,
        method: 'GET'
        }

        let response = await getContent(this.baseUrl + options.path);
        return response;

    }
}
module.exports = Covid19;

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

