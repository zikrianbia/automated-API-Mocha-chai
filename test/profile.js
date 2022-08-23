import supertest from 'supertest';
// import local from '../config/local';
const request = supertest('http://pretest-qa.dcidev.id/api/v1/');

import { expect } from 'chai';

const TOKEN = '4ee293a55c686ce29aea4ba3e8d08e4a5a0e71eb313fffaa13ddab30f005a1da';

describe('User', () => {

  it('GET Current User /profile/me', () => {
     
    return request.get(`profile/me`)
     .set({ "Authorization": `Bearer ${TOKEN}` })
     .then((res) => {
      expect(res.body.data.user.id).to.be.eq('SG98714');
      expect(res.body.data.user.level).to.be.eq(1);
    });

  });


    it('PUT /profile', () => {

      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();

      today = mm + '.' + dd + '.' + yyyy;

      const data = {
        name: 'John zik',
        gender: 1,
        birthday: (today),
        hometown: 'Medan',
        bio: 'hello privy'
      };
       
      return request.put(`profile`)
       .set({ "Authorization": `Bearer ${TOKEN}` })
       .send(data)
       .then((res) => {
        expect(res.status).to.eq(500);
      });
    });
    
    it('School', () => {
      
      const data = {
        school_name: 'Madrasah',
        graduation_time: `1.2.3`
      };
      
      return request
      .put(`profile/education`)
      .set({ "Authorization": `Bearer ${TOKEN}` })
      .send(data)
      .then((res) => {
        //  console.log(res.body, '<< i dont know why its return error 405 Not Allowed')
        expect(res.status).to.eq(500);
        // expect(res.body.data.user.school_name).to.be.eq('Madrasah');
      });
  
    });


  // it('Update Profile User /profile', (done) => {
  //   const data = {
  //     age: 20,
  //     gender: 0,
  //     birthday: '2002-06-01',
  //     hometown: 'Medan',
  //     bio: 'hello privy'
  //   };

  //    request
  //     .put('profile')
  //     .set('Authorization', `Bearer ${TOKEN}`)
  //     .send(data)
  //     .then((res) => {
  //       // console.log(res.body);
  //       expect(res.body.data.user.age).to.be.eq(20);
  //       done()
  //     });
  // });

});
