export const randomString = (size = 5) =>
  [...Array(size)].map(() => Math.random().toString(36)[2]).join("");
