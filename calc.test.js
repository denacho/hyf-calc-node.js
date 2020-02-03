const assert = require("assert");
const { add, subtract, multiply, divide } = require("./calc");

describe("calc", () => {
  describe("add", () => {
    it("can add two numbers", () => {
      assert.equal(add(5, 3), 8);
      assert.equal(add(100, 100), 200);
      assert.equal(add(100, -100), 0);
    });
    it("has floating rounding issues", () => {
      assert.equal(add(0.1, 0.2), 0.30000000000000004);
    });
  });
  describe("subtract", () => {
    it("can subtract two numbers", () => {
      assert.equal(subtract(100, 5), 95);
    });
  });
});
