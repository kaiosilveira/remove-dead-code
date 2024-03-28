import { doSomething } from './index';

describe('doSomething', () => {
  it('should work', () => {
    expect(doSomething()).toEqual(2);
  });
});
