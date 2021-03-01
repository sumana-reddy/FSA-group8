// test function will be here

import isValidCoordinates from './main.js';
const loc_quad = require('./main');


//negative test case that checks when the given co-ordinates are null 
// and should return false.

describe('isValidCoordinates function', () => {
    it('checks whether the coordinates are valid', () => {
      expect(isValidCoordinates({})).toEqual(false);
    });
  });

  //test case to check whether the get location function returns undefined if not inside the Quad.

  describe('getLocation function', () => {
    it('checks whether the getLocation function returns the position', () => {
      expect(loc_quad.getLocation).toEqual(undefined);
    });
  });

/*

// location-Quad.js

const isCoordinateValid = (coord) => {
  // check latitude values are in range
  // check longitude values are in range
  return true;
}

const isDeviceValid = (dev) => {
  // check if dev.coordinate
   // check dev.coordinate with isCoordinateValid
  return true;
}

const isLocationValid = (loc) => {
  // check if loc.coordinates array exists
  // check if loc.coordinates array length is correct for shape
  // check each coordinate with isCoordinateValid
  return true;
}


const isInsideQuad = (device, location) => {
  // check args
  const isDeviceValid = isDeviceValid(device);
  const isLocationValid = isLocationValid(location);

  if (!isDeviceValid) {
    throw new Error('Invalid device');
  }

  if (!isLocationValid) {
    throw new Error('Invalid location');
  }

  return true;
};

*/
