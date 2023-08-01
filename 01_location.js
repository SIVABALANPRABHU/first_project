
    function initAutocomplete() {
      const input = document.getElementById('locationInput');
      const options = {
        types: ['(cities)'],
        componentRestrictions: { country: 'IN' }, 
      };

      const autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        if (place.geometry) {
          console.log('Current area:', place.name);
        } else {
          console.log('No details available for input: ', place.name);
        }
      });
    }

    