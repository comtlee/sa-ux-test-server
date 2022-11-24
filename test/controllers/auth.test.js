const request = require("supertest");
const app = require("../../app");

it("auth - auth/login", (done) => {
  request(app)
    .post("/auth/login")
    .send({
      name: "sanga",
      email: "a@gmail.com",
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.result).toEqual("success");
      done();
    });
});
