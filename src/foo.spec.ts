import { foo } from './foo';

describe("foo", () => {
  it("bar", () => {
    expect(foo()).toBe(true);
  });
});
