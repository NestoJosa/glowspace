// SearchResultsUtils.js

const formatDate = dateString => {
  /* 

    Input: "2020-02-0 4 10:00:00"
    Output: "Tirsdag d. 4 Feb. kl 10.00"

  */
  let input = dateString;
  // => e.g. "2020-02-04 10:00:00"

  // Exchange the dashes in the date for slashes,
  // this is needed for the subsequent "new Date"" call to work in Safari
  // e.g. "2020-02-04 10:00:00" to "2020/02/04 10:00:00"

  // split the date string into an array of two elements: date and time
  let splittedDateStr = input.split(" ");
  // split the date element into an array
  let splittedDate = splittedDateStr[0].split("-")
  // join back the splitted date into a string seperated by a dash
  let joinedDate = splittedDate.join("/");
  // concatenate the date with the time
  let dateStrWithSlashes = joinedDate + " " + splittedDateStr[1];

  // Convert the date in numbers, to a date including a weekday and month:
  // e.g. "2020/02/04 10:00:00" => "tirsdag 4. feb. 10.00"
  const options = 
        {weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  const readableDate = new Date(dateStrWithSlashes).toLocaleDateString('da-DK', options);

  // Make a nicer date: e.g. "tirsdag 4. feb. 10.00" => "Tirsdag d. 4 Feb. kl 10.00"
  const dateArr = readableDate.split(' ');
  // Cap the first letter of weekday
  dateArr[0] = dateArr[0].charAt(0).toUpperCase() + dateArr[0].substring(1);
  // Add a "d." after the weekday, before the day number
  dateArr.splice(1, 0, 'd.');
  // Remove the ending dot from the day number ex: "15." to "15"
  dateArr[2] = dateArr[2].substring(0, dateArr[2].length -1);
  // Cap the first letter of month
  dateArr[3] = dateArr[3].charAt(0).toUpperCase() + dateArr[3].substring(1);
  // Add a "kl" after the month, before the hour
  dateArr.splice(4, 0, 'kl');
  // Convert the array back into a string
  const output = dateArr.join(" ")

  return output; // => e.g. "Tirsdag d. 4 Feb. kl 10.00"
};

export const addTheTreatmentsOffered = (array) => {
  let newArray = array;

  // Loop through all of the saloons
  for (let i = 0; i < newArray.length; i++) {
    const saloon = newArray[i];

    // Initiate an empty array
    // that will be used to store the treatment
    // that each saloon offers
    let saloonTreatments = [];

    // Loop through each saloons array of timeslots
    for (let y = 0; y < saloon.timeslots.length; y++) {

      // the timeslot is an array of objects
      let timeslot = saloon.timeslots[y];

      // Loop through the array of treatments, that is housed in each timeslot
      for (let z = 0; z < timeslot.treatments.length; z++) {
        const treatment = timeslot.treatments[z];

        // check if the current looped through treatment's name is 
        // already in the saloonTreatments array
        let isIncluded = saloonTreatments.some( element => element.name === treatment.name);

        // if it is NOT already included
        if (!isIncluded) {
          // then push it to the saloonTreatments array
          saloonTreatments.push(treatment)    
        };
      };
    };

    // add the new array of offered treatments to the saloon objects
    saloon.treatmentsOffered = saloonTreatments;

    // reset the saloonTreatments array before initializing a new loop
    saloonTreatments = [];
  };

  return newArray;
};

export const addCountAndNextToEachTreatment = (array) => {
  let manipulatedArray = array;

  // Loop through the saloons 
  for (let i = 0; i < manipulatedArray.length; i++) {
    const saloon = manipulatedArray[i];

    // Run an inner loop on the saloons treatmentsOffered array
    // so we basically take the treatments offered list and start another loop
    for (let j = 0; j < saloon.treatmentsOffered.length; j++) {
      const treatmentOffered = saloon.treatmentsOffered[j];
      // give the treatments offered object a new prop that will be
      // incremented for everytime we find a matching treatment in each timeslot
      treatmentOffered.count = null
      treatmentOffered.next = null

      // Run another inner loop on the saloons timeslots array
      // The timeslots array contains an array of timeslot objects
      // that all have a treatment prop that has an array of 
      // available treatments offered in that timeslot
      for (let k = 0; k < saloon.timeslots.length; k++) {
        const timeslot = saloon.timeslots[k];

        // if the current timeslots treatment array contains the current treatmentOffered
        let isIncluded = timeslot.treatments.some( element => element.name === treatmentOffered.name);
  
        // then add one to treatmentOffered.count
        if (isIncluded) {
          treatmentOffered.count++;
        };

        // add the next available timeslot if not already set
        if (treatmentOffered.next === null) {
          // here we could call a format date function that takes the date string
          // and converts it into our desired format: Onsdag d. 15 April kl 10:00
          //treatmentOffered.next = <FormatDate dateString={timeslot.start} />
          treatmentOffered.next = formatDate(timeslot.start);
        }
      };
    };
  };
};

export const addDistanceToSaloon = (clientCoordinates, arrayOfSaloonObjects) => {

  let lat1 = clientCoordinates.clientLatitude;
  
  let lon1 = clientCoordinates.clientLongitude;

  // loop through the array of saloon objects
  for (let i = 0; i < arrayOfSaloonObjects.length; i++) {
    const currentSaloon = arrayOfSaloonObjects[i];

    let lat2 = currentSaloon.latitude;
    
    let lon2 = currentSaloon.longitude;

    currentSaloon.distance = getDistance(lat1, lon1, lat2, lon2);
  };
};

const getDistance = (lat1, lon1, lat2, lon2) => {
  // return a zero if the two sets of coordinates are the same
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0;
  }
  // magic:
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344; //km
    
    dist = Math.round(dist * 10) / 10

    return dist;
  };
};



export const shortenTitleAndDescription = saloonArray => {
  // Run an outer loop on the saloons
  for (let i = 0; i < saloonArray.length; i++) {
    const saloon = saloonArray[i];

    // Run an inner loop on the treatments that each saloon offers
    for (let j = 0; j < saloon.treatmentsOffered.length; j++) {
      const treatment = saloon.treatmentsOffered[j];
      
      if (treatment.name.length > 100) {
        treatment.name = shortenString(treatment.name, 100);
      };

      if (treatment.description.length > 250) {
        treatment.description = shortenString(treatment.description, 250);
      };
    }; 
  };
};

const shortenString = (string, desiredLength) => {
  return string.slice(0, desiredLength) + "[...]";  
};
