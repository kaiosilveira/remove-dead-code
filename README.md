[![Continuous Integration](https://github.com/kaiosilveira/remove-dead-code-refactoring/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/remove-dead-code-refactoring/actions/workflows/ci.yml)

ℹ️ _This repository is part of my Refactoring catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Remove dead code

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
if (false) {
  doSomethingThatUsedToMatter();
}
```

</td>

<td>

```javascript
// block proposefully left blank to represent nothingness
```

</td>
</tr>
</tbody>
</table>

Borrowing from the biology world, "evolution" is better seen as a series of adaptations with modifications, with these modifications always focused on optimizing fitness. The side-effects of these modifications, though, are vestigial organs. Codebases also evolve towards better fitness levels, and their equivalent of vestigial organs is dead code: code that doesn't do anything anymore but used to matter at some point in time.

## Working example

Since this refactoring is all about deleting unused code, the book doesn't provide any concrete example, just a dummy function that represents something that used to matter, but doesn't do it anymore.

### Test suite

By the same token, no test suite was needed.

### Steps

The steps are straightforward. Once we've identified the unused code, we can go and remove it:

```diff
diff --git a/src/index.js b/src/index.js
@@ -3,6 +3,5 @@ export function doSomethingThatUsedToMatter() {
 }

 export function doSomething() {
-  if (false) doSomethingThatUsedToMatter();
   return 2;
 }
```

Additionally, if the underlying scope of the removed code block is also not being used, we can proceed with its deletion as well:

```diff
diff --git a/src/index.js b/src/index.js
@@ -1,7 +1,3 @@
-export function doSomethingThatUsedToMatter() {
-  return 1;
-}
-
 export function doSomething() {
   return 2;
 }

diff --git a/src/index.test.js b/src/index.test.js
@@ -1,13 +1,7 @@
-import { doSomething, doSomethingThatUsedToMatter } from './index';
+import { doSomething } from './index';

 describe('doSomething', () => {
   it('should work', () => {
     expect(doSomething()).toEqual(2);
   });
 });
-
-describe('doSomethingThatUsedToMatter', () => {
-  it('should work', () => {
-    expect(doSomethingThatUsedToMatter()).toEqual(1);
-  });
-});
```

And that's it for this one!

### Commit history

Below there's the commit history for the steps detailed above.

| Commit SHA                                                                                                              | Message                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [3d2faa6](https://github.com/kaiosilveira/remove-dead-code-refactoring/commit/3d2faa695cce5f801c861d2c5ef3fd81f7b3caad) | remove unreachable code |
| [3051d99](https://github.com/kaiosilveira/remove-dead-code-refactoring/commit/3051d997bc8692706413d3ab95c55ff66fbf77ab) | remove unused function  |

For the full commit history for this project, check the [Commit History tab](https://github.com/kaiosilveira/remove-dead-code-refactoring/commits/main).
