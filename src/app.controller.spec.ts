import { AppController } from "./app.controller";

describe("AppController", () => {
  it("getRoot returns greeting", () => {
    const controller = new AppController();
    expect(controller.getRoot()).toBe("Hello World!");
  });
});
