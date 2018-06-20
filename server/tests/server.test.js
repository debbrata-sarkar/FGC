const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {Statistics} = require('./../models/statistics');

beforeEach((done) => {
    Statistics.remove({}).then(() => done());
});

describe('POST /statistics', () => {
    it('Should create a new statistics', (done) => {
        year: '2018/2019';
        request(app)
            .post('/statistics')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err) {
                    return done(err);
                }

                Statistics.find().then((statistics) => {
                    expect(statistics.length).toBe(1);
                    expect(statistics[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});
