// eslint-disable-next-line max-len
import { Maybe } from "../generated/graphql";

export default function randomFromArray(array: Maybe<typeof Array>, length: number | undefined) {
  if (Array.isArray(array) && length) {
    return array[Math.floor(Math.random() * length)]
  }
  return [];
}
