export const numberToShort = (num: number): string => {
  if (num < 0) {
    throw new Error('Number cannot be negative.');
  }

  const k = Math.trunc(num / 1_000);
  const m = Math.trunc(num / 1_000_000);
  const b = Math.trunc(num / 1_000_000_000);

  if (k === 0) {
    return num + '';
  }
  if (m === 0) {
    return k + 'k';
  }
  if (b === 0) {
    return m + 'm';
  }

  return b + 'b';
};
