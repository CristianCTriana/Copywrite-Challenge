const request = require('supertest') 
const expect = require("chai").expect;
const app = require('../src/app')


describe("GET", () => {
  //Test para verificar que efectivamente llega respuesta 200
  it("respond status 200", (done) => {
    request(app)
      .get("/iecho?text=test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  //verificamos que la respuesta del servidor sea correcto
  it("respond correctly", (done) => {
    request(app)
      .get("/iecho?text=test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({ text: 'tset', palindrome: false });
      }).end((err)=>{
        if(err) return done(err);
        done()
      });
  })

  //Revisamos que funcione que caso de devolver error 400
  it("respond status 400", (done) => {
    request(app)
      .get("/iecho?text=test2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });

  //en caso error, verificar que devuelva el mensaje correcto
  it("respond error message", (done) => {
    request(app)
      .get("/iecho?text=test2")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({ text: 'no text' });
      }).end((err)=>{
        if(err) return done(err);
        done()
      });
  })
});