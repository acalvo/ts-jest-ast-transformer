export function foo() {
  return new URL('./', import.meta.url) !== undefined;
}
