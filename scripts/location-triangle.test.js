// test function will be here

import isValidCoordinates from './main.js';

describe('isValidCoordinates function', () => {
    it('checks whether the coordinates are valid', () => {
      expect(isValidCoordinates({})).toEqual(false);
    });
  });
