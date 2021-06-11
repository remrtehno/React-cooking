import { Maybe } from "../generated/graphql";

// eslint-disable-next-line max-len
export default function randomFromArray(array: Maybe<typeof Array> | any, count: number) {
  const result = [];
  if (Array.isArray(array)) {
    const cloneArray = [...array];
    let counter = count + 1;
    while (counter > 0) {
      const random = Math.floor(Math.random() * cloneArray.length);
      const valueOfArray = cloneArray.splice(random, 1);
      if (!cloneArray.includes(valueOfArray)) {
        result.push(...valueOfArray)
        counter -= 1;
      }
    }
  }
  return result;
}
