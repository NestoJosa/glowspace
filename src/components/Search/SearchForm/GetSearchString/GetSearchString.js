
// takes the chosen search parameters 
// and returns a search string for the api:
// e.g. "https://glowspace.dk/api/findtimeslot?type=1,4&startdate=2020-04-30&enddate=2020-04-30&text";


const GetSearchString = searchParams => {
  // create a string of numbers that represent
  // the chosen treatment types 
  let stringOfChosenTreatments = [
    searchParams['Hår'] === true ? 1 : null,
    searchParams['Krop'] === true ? 2 : null,
    searchParams['Fødder'] === true ? 3 : null,
    searchParams['Hænder'] === true ? 4 : null,
    searchParams['Ansigt'] === true ? 5 : null,
    ]
    .filter( el => el !== null ).toString();

  // if all, or no treatments are chosen, convert the string to a 0,
  // which represents the choosing of all treatments
  if ( stringOfChosenTreatments === '1,2,3,4,5' || stringOfChosenTreatments === '') {
    stringOfChosenTreatments = '0';
  };

  let fromDate;
  let toDate;

  // if no from or to date has been chosen
  // set them both to todays date
  if (searchParams.from === null && searchParams.to === null) {
    fromDate = getTodaysDateAsAString();
    toDate = getTodaysDateAsAString();
  } // if a from date has been chosen but not a to date,
    // set the to date to whatever was chosen,
    // and the do the same with the from date
    // because we assume that user wants results for that day 
    else if (searchParams.from !== null && searchParams.to === null) {
      fromDate = 
      searchParams.from.year.toString() + '-' +
      addAZeroBeforeNrStrIfSingleDigit(searchParams.from.month.toString()) + '-' +
      addAZeroBeforeNrStrIfSingleDigit(searchParams.from.day.toString());
      toDate = fromDate;

    // if they are both chosen, to set them to whatever was chosen 
  } else if (searchParams.from !== null && searchParams.to !== null) {
      fromDate = 
      searchParams.from.year.toString() + '-' +
      addAZeroBeforeNrStrIfSingleDigit(searchParams.from.month.toString()) + '-' +
      addAZeroBeforeNrStrIfSingleDigit(searchParams.from.day.toString());
      toDate = 
      searchParams.to.year.toString() + '-' +
      addAZeroBeforeNrStrIfSingleDigit(searchParams.to.month.toString()) + '-' +
      addAZeroBeforeNrStrIfSingleDigit(searchParams.to.day.toString());
  } else {
      console.log('something went wrong, cause you should not see this, more specifically there should not be a scenario where this is triggered...');
  };

  // create the complete string for the api, working example:
  // https://glowspace.dk/api/findtimeslot?type=0&startdate=2020-04-30&enddate=2020-04-30&text
  const stringForApi = 
        "https://glowspace.dk/api/findtimeslot?" +
        "type=" + stringOfChosenTreatments +
        "&startdate=" + fromDate +
        "&enddate=" + toDate + 
        "&text";

  return stringForApi
};

export default GetSearchString;

/* 

  Helpers

*/

const addAZeroBeforeNrStrIfSingleDigit = nr => {
  if (typeof nr !== 'string') {
    return console.log('you must pass a string into this function');
  } else if (nr.length === 1) {
    nr = '0' + nr;
    return nr;
  } else {
    return nr;
  };
};

const getTodaysDateAsAString = () => {
  // the string will be in the following format: YYYY-MM-DD
  const todaysDate = new Date();
  const yearStr = todaysDate.getFullYear().toString();

  // note: "+ 1" because the month is zero indexed
  const month = todaysDate.getMonth() + 1;
  const monthStr = addAZeroBeforeNrStrIfSingleDigit(month.toString());

  const dayStr = addAZeroBeforeNrStrIfSingleDigit(todaysDate.getDate().toString());

  const dateString = yearStr + '-' + monthStr + '-' + dayStr;
  return dateString;
};