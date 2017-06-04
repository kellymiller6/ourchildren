import configureMockStore from 'redux-mock-store';
import * as actions from './index.js';
import mockData from '../components/Children/mockData.json';
var CryptoJS = require("crypto-js")


describe('actions', () => {
  const store = configureMockStore()();

  it('should create an action to receive children', () => {
    const children = {   name: 'bob',
      childBirthday:'11/22/2008',
      childArrivalDate:'04/16/14',
      childInsurance:'174093481',};
    const action = actions.receiveChildren(children);

    const expectedAction = {
      type: 'RECEIVE_CHILDREN',
      children
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to receive sitters', () => {
    const sitters = {
      name: 'susan',
      sitterNumber:'303 123 4567',
      sitterEmail:'sitter@sitter.com'
    };
    const action = actions.receiveSitters(sitters);

    const expectedAction = {
      type: 'RECEIVE_SITTERS',
      sitters
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create an action to receive workers', () => {
    const workers = {
      name: 'worker',
      workerNumber:'1234567891',
      workerEmail:'worker@worker.com',
      workerType:'foster'
    }
    const action = actions.receiveWorkers(workers);

    const expectedAction = {
      type: 'RECEIVE_WORKERS',
      workers
    }

    expect(action).toEqual(expectedAction)
  })
})
