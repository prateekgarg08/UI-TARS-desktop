export const stringify = (obj: any) => {
  return JSON.stringify(
    obj,
    (key, value) => {
      const MAX_LEN = 200;
      if (typeof value === 'string' && value.length > MAX_LEN) {
        return `${value.slice(0, MAX_LEN)}...`;
      }
      return value;
    },
    2,
  );
};