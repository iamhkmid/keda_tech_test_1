import { SortNumber, MaxSumSubArray, SumEvenNestedObj } from ".";

describe("Sort numbers from largest to smallest", () => {
  test("Must be properly sorted", () => {
    expect(SortNumber([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
      5, 4, 3, 3, 2, 2, 1, 1,
    ]);
  });
});

describe("Sum maximum subarray based on the length of the numbers", () => {
  test("Test max sum subarray 1", () => {
    expect(MaxSumSubArray([100, 200, 300, 400], 2)).toBe(700);
  });
  test("Test max sum subarray 2", () => {
    expect(MaxSumSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });
  test("Test max sum subarray 3", () => {
    expect(MaxSumSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });
});

describe("Sum all even number in nested object", () => {
  const obj = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  test("Must be sum all number", () => {
    expect(SumEvenNestedObj(obj)).toBe(6);
  });
});
