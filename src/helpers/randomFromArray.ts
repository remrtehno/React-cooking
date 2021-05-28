import { Maybe } from "../generated/graphql";

// eslint-disable-next-line max-len
export default function randomFromArray(array: Maybe<typeof Array> | any, count: number) {
  const result = [];
  let counter = count + 1;
  if (Array.isArray(array)) {
    while (counter > 0) {
      const random = Math.floor(Math.random() * array.length);
      const valueOfArray = array.splice(random, 1);
      if (!array.includes(valueOfArray)) {
        result.push(...valueOfArray)
        counter -= 1;
      }
    }
  }
  return result;
}
