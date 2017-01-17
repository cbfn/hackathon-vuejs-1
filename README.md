[![Build Status](https://travis-ci.org/cnascimentord/hackathon-vuejs-1.svg?branch=master)](https://travis-ci.org/cnascimentord/hackathon-vuejs-1)
# hackathon-vuejs-1

> We will create a vue.js app using [vue-cli](https://github.com/vuejs/vue-cli) and [jsonplaceholder](https://jsonplaceholder.typicode.com/)

## Initial setup

> You must have npm installed in your machine.

```bash
# install npm and node
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install nodejs
sudo apt install build-essential
sudo node -v && npm -v
```

You must set the correction permission do work correctly with nodejs. More info [here](https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory)

### Install vue-cli
```bash
# install vue-cli
npm install -g vue-cli
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
