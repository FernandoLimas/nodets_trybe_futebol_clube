import 'chai-http'; // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/19480
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';

chai.use(require('chai-http'));

const { expect } = chai;

describe('Test router Matches', () => {
  it('Should all matches success', () => { 
    chai.request(app)
    .get('/teams')
    .end((err, res) => {
      chai.expect(res).to.have.status(200);})
    })
  
  // it('Should all matches error', () => {
  //   chai.request(app)
  //   .get('/teams')
  //   .end((err, res) => {
  //     chai.expect(res).to.have.status(400);})
  //   })

})
