import { romanToInt } from "./romanToInt";

describe("romanToInt", () => {
  it("should convert II to 2", () => {
    expect(romanToInt("II")).toBe(2);
  });

  it("should convert IV to 4", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  it("should convert V to 5", () => {
    expect(romanToInt("V")).toBe(5);
  });

  it("should convert IX to 9", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  it("should convert XL to 40", () => {
    expect(romanToInt("XL")).toBe(40);
  });

  it("should convert L to 50", () => {
    expect(romanToInt("L")).toBe(50);
  });

  it("should convert XC to 90", () => {
    expect(romanToInt("XC")).toBe(90);
  });

  it("should convert C to 100", () => {
    expect(romanToInt("C")).toBe(100);
  });

  it("should convert CD to 400", () => {
    expect(romanToInt("CD")).toBe(400);
  });

  it("should convert D to 500", () => {
    expect(romanToInt("D")).toBe(500);
  });

  it("should convert M to 1000", () => {
    expect(romanToInt("M")).toBe(1000);
  });

  it("should convert mixed values to correct integers", () => {
    expect(romanToInt("MMXXIV")).toBe(2024);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("should handle empty string", () => {
    expect(romanToInt("")).toBe(0);
  });
});
