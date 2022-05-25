import 'chai-http'; // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/19480
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';

chai.use(require('chai-http'));

const { expect } = chai;

describe('Test router Login', () => {
  let chaiHttpResponse: Response;

  it('Should login not password', () => {
    chai.request(app)
    .post('/login')
    .send({ email: 'admin@admin.com' })
    .end((err, res) => {
      chai.expect(res).to.have.status(400);})
    })

  it('Should login success', () => {
    chai.request(app)
    .post('/login')
    .send({ email: 'admin@admin.com', password: 'secret_admin' })
    .end((err, res) => {
      chai.expect(res).to.have.status(200);})
    })

    it('Should field user is valid', () => {
      chai.request(app)
        .post('/login')
        .send({ email: '1admin@admin.com', password: 'secret_admin' })
        .end((err, res) => {
          chai.expect(res).to.have.status(400);});
    })


  it('Should login email empty', () => {
    chai.request(app)
    .post('/login')
    .send({ email: ' ' , password: 'secret_admin' })
    .end((err, res) => {
      chai.expect(res).to.have.status(401);})
  })
})