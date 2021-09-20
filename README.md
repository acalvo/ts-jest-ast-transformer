# run

- npm start

# error

```log
> jest

 FAIL  src/foo.spec.ts
  ● Test suite failed to run

    src/foo.ts:2:24 - error TS1343: The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'esnext', or 'system'.

    2   return new URL('./', import.meta.url) !== undefined;
                             ~~~~~~~~~~~

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.256 s
```
