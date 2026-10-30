# Pack 1: JavaScript basics

Short JavaScript programs to read before you run them. Each file is one exercise. After `00-first-run.js`, the files are grouped in four folders:

| Folder | Topic |
| --- | --- |
| `01-structure` | Program structure: variables, assignment, types and operators |
| `02-control-flow` | Conditions and loops |
| `03-data` | Objects, arrays and JSON |
| `04-functions` | Functions |

## How to work

1. Open the `pack-1-javascript` folder in your editor.
2. Open a file and find its task: the comment on its last line, or the comment at the top of an order file.
3. Read the code and write your answer on paper. Do not run the file yet.
4. Run the file from inside `pack-1-javascript`, for example:

   ```sh
   node 01-structure/01-predict-copy-value.js
   ```

5. Compare the output with your answer, line by line, and explain each difference in one sentence.

In every file except the order files, the code starts at the top of the file and the task comment comes after it, so the line numbers in your editor, in the course material and in the error messages of `node` are the same. A few files open with a comment that states a rule or where the data comes from; that comment is line 1 in the course material too.

Some files stop with an error on purpose, and one program never ends on purpose. To stop a program that does not end, press Ctrl+C in the terminal.

To undo your changes to a file, restore it with Git, for example:

```sh
git restore 01-structure/13-order-price-steps.js
```

## The five kinds of exercise

The kind is the word after the number in the file name:

- **predict**: read the code and write down every line it prints. If you expect the program to stop with an error, also write the line and the type of the error. Then run the file and compare.
- **trace**: follow the code as it runs and write down what the task comment names: the values of the variables after each line, the order of the calls, or the printed lines. Then run the file and compare what it prints with your notes. The method of a trace table, and an empty table, are in [`trace-table.md`](trace-table.md).
- **order**: the lines below the marker are out of order, and two of them do not belong. Put the lines in order, delete the two extra lines, and run the file until it prints the expected output in its header. As given, an order file stops with an error, and the editor can mark its lines in red until the order is right.
- **bug**: the program prints a wrong result, stops with an error, or never ends. Find the line with the bug and explain the cause in one sentence. The line that an error message names is where the program stopped; the bug can be on another line. Then write an instruction in English for Claude Code in four parts: where the problem is, what happens now, what should happen, and what must not change. Run the file again after the fix.
- **read**: read the code and answer the question in the task comment, then run the file to check your answer.

## The files

### First run

- `00-first-run.js`: predict the three printed lines. Run this file first, right after you clone the repo.

### 01-structure

- `01-predict-copy-value.js`: predict the two values printed after the assignments.
- `02-predict-const-reassign.js`: predict the output of a program that assigns a new value to a `let` variable and to a `const` variable.
- `03-predict-typeof.js`: predict what `typeof` returns for five values.
- `04-predict-plus-order.js`: predict four lines that combine numbers and strings with `+`.
- `05-predict-loose-equality.js`: predict five comparisons with `==` and `===`.
- `06-predict-and-or-values.js`: predict the values of expressions with `&&`, `||` and `!`.
- `07-predict-optional-chaining.js`: predict reads of nested properties with `?.` and `??`, and with a plain dot.
- `08-predict-var-let.js`: predict reads of a `var` and a `let` variable, before and after their declarations.
- `09-predict-expression-statement.js`: predict four prints of `stock` and `stock + 1`.
- `10-trace-derived-total.js`: trace `quantity` and `total` line by line.
- `11-trace-stock-boxes.js`: trace the program in the table in `trace-table.md`.
- `12-order-vat-total.js`: order the lines that compute a total with VAT.
- `13-order-price-steps.js`: order the lines that print a price after each change.
- `14-bug-stock-default.js`: find the line that breaks the rule on line 2.
- `15-bug-form-strings.js`: find the line that computes a wrong total from form values.
- `16-read-review-flags.js`: predict the output, then list four things to ask the agent to change so the code is easier to review.

### 02-control-flow

- `01-predict-else-if-order.js`: predict the shipping fee that an `if` and `else if` chain sets.
- `02-predict-switch-fall-through.js`: predict what a `switch` prints for one value.
- `03-predict-truthy-falsy.js`: predict which of two `if` blocks run.
- `04-predict-chained-ternary.js`: predict the shipping fee that a chained ternary sets.
- `05-predict-break.js`: predict the total of a loop that uses `break`.
- `06-trace-while-packs.js`: trace a `while` loop at every check of its condition.
- `07-trace-for-continue.js`: trace an index loop with `continue`, one row per round.
- `08-trace-switch-in-loop.js`: trace a `switch` inside a loop, round by round.
- `09-order-stock-message.js`: order an `if`, `else if` and `else` chain that prints a stock message.
- `10-order-first-cheap.js`: order a `for...of` search that stops at the first match.
- `11-order-ship-while.js`: order a `while` loop that ships orders while the stock lasts.
- `12-bug-free-shipping-boundary.js`: find the line that breaks the rule on line 1.
- `13-bug-or-instead-of-and.js`: find the line that breaks the rule on lines 1 and 2.
- `14-bug-loop-bound.js`: run the file, read the error, and find the line that causes it.
- `15-bug-continue-infinite.js`: run the program, stop it with Ctrl+C, and find the line that keeps the loop from ending.
- `16-read-discount-rules.js`: predict the discount of each order, and name the condition that decides order 4.

### 03-data

- `01-predict-missing-property.js`: predict three reads of the properties of an object.
- `02-predict-dot-bracket.js`: predict reads with a dot and with brackets.
- `03-predict-nested-path.js`: predict three reads along paths in nested objects and arrays.
- `04-bug-index-past-end.js`: run the file, read the error, and find the line that causes it.
- `05-trace-low-stock-push.js`: trace the loop that fills the `reorder` array.
- `06-predict-map-foreach.js`: predict what `map` and `forEach` return, and the original array after them.
- `07-predict-filter-find.js`: predict what `filter` and `find` return.
- `08-predict-includes-some.js`: predict four searches with `includes` and `some`.
- `09-trace-reduce-total.js`: trace `reduce`, one row per call to the callback.
- `10-order-order-total.js`: order the lines that compute the total of an order.
- `11-predict-reference.js`: predict two lines after a number and an object are assigned to new variables.
- `12-bug-sale-edits-catalog.js`: find the line that changes the price in the catalog.
- `13-predict-json-stringify.js`: predict the JSON text of an object.
- `14-predict-json-parse.js`: predict the output of three `JSON.parse` calls.
- `15-order-json-round-trip.js`: order the lines that update the stock in a JSON text.
- `16-bug-price-strings.js`: find the line that computes a wrong total.
- `17-read-order-response.js`: follow the paths in a JSON response and predict the four printed lines.
- `18-read-product-change.js`: describe each change between two versions of a product.

### 04-functions

- `01-read-three-forms.js`: decide which of three function definitions, if any, returns a different value.
- `02-predict-arrow-bodies.js`: predict what two arrow functions return.
- `03-bug-arrow-object.js`: find the line that keeps `options` from holding one object per product.
- `04-predict-return-log.js`: predict the output of a function that calls `console.log`.
- `05-predict-missing-arguments.js`: predict three calls with two, one and three arguments to a function with two parameters.
- `06-bug-argument-order.js`: find the line that makes the discounted price come out wrong.
- `07-predict-default-parameters.js`: predict four calls to a function with a default parameter value.
- `08-predict-name-without-call.js`: predict what a function name prints with and without parentheses.
- `09-predict-callbacks.js`: predict what `map` and `forEach` return with the same callback.
- `10-bug-callback-call.js`: run the file, read the error, and find the line with the bug.
- `11-trace-call-order.js`: write the order of the calls and the lines they print.
- `12-trace-nested-calls.js`: trace the nested calls on line 4: which function runs first, and what each one returns.
- `13-predict-hoisting.js`: predict two calls made above the definitions of the functions they call.
- `14-order-order-summary.js`: order a function that returns an order summary, and the call to it.
- `15-order-available-names.js`: order the lines that list the names of the products in stock.
- `16-order-apply-coupon.js`: order a function with a default parameter value and an early `return`.
