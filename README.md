# Act'it Technical Challenge

## Vue 3 + TypeScript + Vite

This project countain simple Vue.js app that display bubbles animation

> 💡 You have to install [Node.js](https://nodejs.org/en/ 'Node.js website') on your computer to run locally

## Instructions

- 🧰 Use VueJS or ReactJS, without Canvas.
- 🧮 Display random number of circles.
- 📏 Each circle has a random size between 2 values.
- ⏰ Each circle remains displayed for a random time.
- 🔁 There are the same number of display circles all the time.

## Result

<div style="text-align:center;">

![Result demo](https://i.imgur.com/e3z7VSe.gif)

</div>

> Also in live [here](https://actit-bubbles.netlify.app/ 'Preview website') 🔎

## Run Locally

Clone repo from GitHub

```bash
  git clone https://github.com/MatthiasWanner/test_actit.git
  cd test_actit
```

Install node dependencies

```bash
yarn
```

Launch local development Vite server

```bash
yarn dev
```

Build project and start server

```bash
yarn build && yarn preview
```

## ⚙️ Tools list:

- ESLint / Prettier (vue/ts config)
- Husky hooks:
  - pre-commit:
    - can't commit locally on master branch
    - format with prettier
    - check code linting with eslint
  - pre-push:
    - build project before push work
  - prepare-commit-msg:
    - run commitizen cli to write commits
    - prevent local commit on master
- commitizen:
  - config cz-emojis
    > 💡 You have not to launch git cz to run commitizen cli. A Git hook is intalled on `git commit` cmd. In this way, you can change the message at the end of the process with vim
- GitHub actions:
  - Pull requests on master branch:
    - check code linting
    - build the project
