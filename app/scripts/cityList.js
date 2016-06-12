import firstCitySet from './cityListAToMass.js';
import secondCitySet from './cityListMichMin.js';
import thirdCitySet from './cityListMissToR.js';
import fourthCitySet from './cityListSToZ.js';
import Cities from './collections/cityStates.js';

Cities.add(firstCitySet);
Cities.add(secondCitySet);
Cities.add(thirdCitySet);
Cities.add(fourthCitySet);


export default Cities;