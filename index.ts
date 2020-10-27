class ValueHolder<T> {
  value: T;
}

const numberWrapper = (value: number): number[] => {
  return [value];
};

const stringWrapper = (value: string): string[] => {
  return [value];
};
const booleanWrapper = (value: boolean): boolean[] => {
  return [value];
};

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

console.log(valueWrapper<number>(3));

console.log(valueWrapper<string>('string'));

const value = valueWrapper(10);
