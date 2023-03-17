

import React, { Component } from 'react';
import publicIP from 'react-native-public-ip';

import axios from 'axios';


async function getLocaleFromIP(ip) {
        const url = `https://rest.db.ripe.net/search.json?query-string=${ip}`;
        const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*'
            }
        }

           const response = await axios.get(url,config);
       
           if (response) {
               console.table(response.data)
            }
};

publicIP()
.then(ip => {    
  console.log(ip);
  getLocaleFromIP(ip)
  // '47.122.71.234'
})
.catch(error => {
  console.log(error);
  // 'Unable to get IP address.'
});


export default publicIP;
