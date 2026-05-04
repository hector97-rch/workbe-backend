import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import type { Server } from "http";
import request from "supertest";
import { AppController } from "../src/app.controller";

describe("HTTP (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it("GET /", () => {
    return request(app.getHttpServer() as Server)
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });
});
