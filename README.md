# 10x-code-reading

Practice files for reading code. Each exercise is a short program: you read it, write down what you expect it to do, and then run it to check your reading.

## Folders

Each pack has its own folder, with its own README:

| Folder | Contents |
| --- | --- |
| [`pack-1-javascript`](pack-1-javascript/) | JavaScript basics: program structure, conditions and loops, objects, arrays and JSON, and functions |

## Requirements

- [Node.js](https://nodejs.org/), version 20 or later. The expected outputs in the course material come from Node.js 24; in another version, the text of an error message can differ slightly.
- [Git](https://git-scm.com/).
- [GitHub CLI](https://cli.github.com/) (`gh`), signed in to your GitHub account, to clone with `gh`. Without it, clone with `git`.

The files need no packages: each one runs with `node` alone.

## Cloning the repo

With the GitHub CLI:

```sh
gh repo clone rotemx-10x/10x-code-reading
```

Without the GitHub CLI:

```sh
git clone https://github.com/rotemx-10x/10x-code-reading.git
```

Then move into the folder of the pack and run its first file:

```sh
cd 10x-code-reading/pack-1-javascript
node 00-first-run.js
```

Continue with [`pack-1-javascript/README.md`](pack-1-javascript/README.md).
