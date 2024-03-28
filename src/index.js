export function doSomethingThatUsedToMatter() {
  return 1;
}

export function doSomething() {
  if (false) doSomethingThatUsedToMatter();
  return 2;
}
