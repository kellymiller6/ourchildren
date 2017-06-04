import sitterReducer from './sitterReducer';

describe('sitterReducer', () => {

  it('should return a default state', () => {
    expect(sitterReducer(undefined, {})).toEqual([])
  });

  it('should return an array of children', () => {
    const mockSitters = [{
      name: '',
      sitterNumber:'',
      sitterEmail:''
    },{
      name: '',
      sitterNumber:'',
      sitterEmail:''
    }];

    expect(sitterReducer(mockSitters, 'RECEIVE_SITTERS')).toEqual(mockSitters)
  });
});
