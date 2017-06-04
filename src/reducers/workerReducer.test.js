import workerReducer from './workerReducer';

describe('workerReducer', () => {

  it('should return a default state', () => {
    expect(workerReducer(undefined, {})).toEqual([])
  });

  it('should return an array of children', () => {
    const mockWorkers = [{
      name: '',
      workerNumber:'',
      workerEmail:'',
      workerType:''
    },{
      name: '',
      workerNumber:'',
      workerEmail:'',
      workerType:''
    }];

    expect(workerReducer(mockWorkers, 'RECEIVE_WORKERS')).toEqual(mockWorkers)
  });
});
