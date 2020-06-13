import { testFunction } from "../../../src/util/util";

describe("testFunction function", () => {
  test("testFunction should return hello world", () => {
    expect(testFunction()).toEqual("hello world");
  });
});
