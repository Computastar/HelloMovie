function getUserRegion() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
              const countryCode = data.countryCode;
              let region = '';
              switch (countryCode) {
                case 'US':
                  region = 'us';
                  break;
                case 'GB':
                  region = 'uk';
                  break;
                case 'FR':
                  region = 'fr';
                  break;
                // Add more cases for other countries if needed
                default:
                  region = 'us';
                  break;
              }
              resolve(region);
            })
            .catch(error => {
              console.error('Error:', error);
              resolve('us'); // Default to 'us' if there is an error
            });
        },
        error => {
          console.error('Error:', error);
          resolve('us'); // Default to 'us' if the user denies geolocation access or there is an error
        }
      );
    } else {
      resolve('us'); // Default to 'us' if the geolocation API is not available
    }
  });
}
