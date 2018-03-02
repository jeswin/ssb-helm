export function getValueOrDefault<T>(val: T, defaultVal: T) : T {
  return typeof val !== "undefined" ? val : defaultVal;
}