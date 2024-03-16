import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/index'


describe("GET /", () => {
    it("should return Hello", async () => {
        const res = await request(app).get("/");
        const expected = "Hello";
        expect(res.text).toEqual(expected);
    });

    it("should return 200", async () => {
        const res = await request(app).get("/");
        const expectedCode = 200;
        expect(res.status).toEqual(expectedCode);
    });
})