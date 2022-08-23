import supertest from 'supertest';
// import local from '../config/local';
const request = supertest('http://pretest-qa.dcidev.id/api/v1/');

import { expect } from 'chai';

// const TOKEN = process.env.USER_TOKEN;
const TOKEN = '4ee293a55c686ce29aea4ba3e8d08e4a5a0e71eb313fffaa13ddab30f005a1da';


describe('Users', () => {

  it('GET Message from spesific user', () => {
     
    return request.get(`message/7da92170-af85-471f-8c2e-3b41e8f8cdbf`)
     .set({ "Authorization": `Bearer ${TOKEN}` })
     .then((res) => {
      expect(res.status).to.eq(200);
    });

  });

});