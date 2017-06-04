import childReducer from './childReducer';

describe('childReducer', () => {

  it('should return a default state', () => {
    expect(childReducer(undefined, {})).toEqual([])
  });

  it('should return an array of children', () => {
    const mockChildren = [{
      name: 'one',
      childBirthday:'one',
      childArrivalDate:'one',
      childInsurance:'one',
    }, {
      name: 'two',
      childBirthday:'two',
      childArrivalDate:'two',
      childInsurance:'two',
    }];

    expect(childReducer(mockChildren, 'RECEIVE_CHILDREN')).toEqual(mockChildren)
  });
});
