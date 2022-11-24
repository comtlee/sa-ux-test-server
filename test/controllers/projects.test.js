const request = require("supertest");
const app = require("../../app");

describe("projects", () => {
  const userID = "123456";

  it("POST projects/:id", (done) => {
    request(app)
      .post(`/projects/${userID}`)
      .send({
        projectName: "test",
        projectUrl: "www.test.com",
        key: "test-qw-123",
      })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("GET projects/:id", (done) => {
    request(app)
      .get(`/projects/${userID}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).toEqual("success");
        done();
      });
  });

  it("DELETE projects/:id", (done) => {
    request(app)
      .delete(`/projects/${userID}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.result).toEqual("success");
        done();
      });
  });
});
