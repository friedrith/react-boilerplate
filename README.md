<h1 align="center">
  React-boilerplate
</h1>
<p align="center">
  <strong>The ultimage react boilerplate</strong><br>
  With the best current technologies for frontend developement :ok_hand::ok_hand:
</p>

Based on [create-react-app](https://github.com/facebook/create-react-app), it adds :

- [SASS](https://sass-lang.com/)
- [eslint](https://eslint.org/) with [Airbnb config](https://github.com/airbnb/javascript)
- [stylelint](https://stylelint.io/) with [Airbnb config](https://github.com/airbnb/css#readme)
- [prettier](https://prettier.io) (use prettier with eslint integration in your editor)
- Hot reload
- Docker

## 🚀 Getting started

```bash
# install dependencies
$ npm install

# start the development webserver
$ npm start

# build the web application
$ npm build

# deploy with Docker (you don't need to build it)
$ docker build ./
$ docker run -it -p 3000:3000 -v ./src/frontend:/frontend [image id]

```

## :calendar: Roadmap

The next technologies to add are:

- jest
- storybook
- server side rendering
- yeoman

## :memo: License

This project is [MIT Licensed](./LICENSE).
