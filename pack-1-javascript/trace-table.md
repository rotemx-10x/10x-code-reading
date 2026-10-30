# Trace table

A trace table follows a program line by line: it holds the value of each variable after each line that runs, and what each line prints.

How to fill in a trace table:

1. Make a column for the line number, a column for each variable, and one column for the output.
2. Add a row for each line of code that runs, in the order it runs.
3. Work out the right side of `=` from the values already in the table.
4. Write the new value in the column of the variable.
5. On a line with `console.log`, write what it prints in the Output column.
6. Leave a cell empty when the value did not change on that line.
7. In a loop, add a row for each round.

## 01-structure/11-trace-stock-boxes.js

| Line | stock | sold | looseItems | fullBoxes | Output |
| ---- | ----- | ---- | ---------- | --------- | ------ |
| 1    |       |      |            |           |        |
| 2    |       |      |            |           |        |
| 3    |       |      |            |           |        |
| 4    |       |      |            |           |        |
| 5    |       |      |            |           |        |
| 6    |       |      |            |           |        |
| 7    |       |      |            |           |        |
| 8    |       |      |            |           |        |
| 9    |       |      |            |           |        |

When the table is full, run the file and compare the last row with the output:

```sh
node 01-structure/11-trace-stock-boxes.js
```

## Other trace files

For any other trace file, copy this table and add a column for each variable you follow.

| Line | Output |
| ---- | ------ |
|      |        |
|      |        |
|      |        |
|      |        |
|      |        |
|      |        |
