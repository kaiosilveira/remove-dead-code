import { doSomething, doSomethingThatUsedToMatter } from './index';

describe('doSomething', () => {
  it('should work', () => {
    expect(doSomething()).toEqual(2);
  });
});

describe('doSomethingThatUsedToMatter', () => {
  it('should work', () => {
    expect(doSomethingThatUsedToMatter()).toEqual(1);
  });
});
