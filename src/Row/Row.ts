import { IBooksInfo } from "../types";

const Row = (arr: IBooksInfo[]) => {
  let resultArr: any = [];
  for (let i = 0, isFirst = true; i < arr.length;) {
    if (isFirst) { 
      const tempArr = [arr[i], arr[i+1], arr[i+2], arr[i+3]].filter((el) => el);
      if (tempArr.length > 0) resultArr.push(tempArr);
      i += 4;
      isFirst = false;
    } else {
      const tempArr = [arr[i], arr[i+1], arr[i+2], arr[i+3]].filter((el) => el);
      if (tempArr.length > 0) resultArr.push(tempArr);
      i += 4;
    }
  }
  return resultArr;
}

export { Row }