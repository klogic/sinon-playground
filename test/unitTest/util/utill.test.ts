import sinon from "sinon";
import * as util from "../../../src/util/util";
const fs = require("fs");
const fakeReturn = sinon.fake.returns("hi world");
const fakeThrow = sinon.fake.throws(new Error("error here"));
const fakeYield = sinon.fake.yields(null, "fakeYield World");

afterEach(() => {
  sinon.restore();
});

describe("testFunction function", () => {
  test("testFunction should return hello world", () => {
    sinon.replace(util, "testFunction", fakeReturn);
    expect(util.testFunction()).toEqual("hi world");
    expect(fakeReturn.callCount).toEqual(1);
  });

  test("testFunction should throw error here", () => {
    sinon.replace(util, "testFunction", fakeThrow);
    expect(util.testFunction).toThrowError(new Error("error here"));
    expect(fakeThrow.callCount).toEqual(1);
  });

  test("testFunctionFunction should return fakeYield World", () => {
    sinon.replace(fs, "readFile", fakeYield);
    fs.readFile("somefile", (err: string, data: string) => {
      expect(data).toEqual("fakeYield World");
    });
    expect(fakeYield.callCount).toEqual(1);
  });
});
