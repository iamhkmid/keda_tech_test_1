// Answer 1
export const SortNumber = (numbers: number[]) => {
  const result = [...numbers];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (result[j] < result[j + 1]) {
        const current = result[j];
        result[j] = result[j + 1];
        result[j + 1] = current;
      }
    }
  }
  return result;
};

// Answer 2
export const MaxSumSubArray = (numbers: number[], length: number) => {
  let idx = 0;
  let result: number | undefined = undefined;
  while (idx + length <= numbers.length) {
    let temp = numbers[idx];
    for (let k = 1; k < length; k++) {
      temp += numbers[idx + k];
    }
    if (!result || result < temp) result = temp;
    idx++;
  }
  return result;
};

// Answer 3
type TObj = { [key: string]: string | number | boolean | TObj };
export const SumEvenNestedObj = (obj: TObj) => {
  let result = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object")
      result += SumEvenNestedObj(obj[key] as TObj);
    else if (typeof obj[key] === "number" && (obj[key] as number) % 2 === 0) {
      result += obj[key] as number;
    }
  }
  return result;
};
