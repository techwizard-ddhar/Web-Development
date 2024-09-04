import {describe, expect, it} from '@jest/globals';
import request from "supertest";
import { app } from '../index';

describe('POST / sum', () => {
    it('should rum sum of positive numbers correctly', async () => {
        const res = await request(app).post('/sum').send({
            a:1,
            b:2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it('should return sum of negative number correctly', async () => {
        const res = await request(app).post('/sum').send({
            a:-1,
            b:-2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    });

    it('should return 411 if no inputs are provided', async () => {
        const res = await request(app).post('/sum').send({
            a : "cephertext"
        });
        expect(res.statusCode).toBe(411);
    });

});