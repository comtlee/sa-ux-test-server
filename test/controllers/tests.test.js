const request = require("supertest");
const app = require("../../app");

describe("tests", () => {
  const id = "12345";

  it("GET tests/:id/testlist", (done) => {
    request(app)
      .get(`/tests/${id}/testlist`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).toEqual("success");
        done();
      });
  });

  it("GET tests/:id/videolist", (done) => {
    request(app)
      .get(`/tests/${id}/videolist`)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
