# react-boilerplate
A boilerplate for react based on create-react-app with some improvements like:

* scss

## Getting started

### With Docker

```bash
$ docker build ./ -t boilerplate:dev # build the image for development
$ docker image ls # check if the image boilerplate:dev is there.
$ docker docker run -i -t -p 3000:3000 boilerplate:dev # start the image
```

### Without Docker

```bash
# install dependencies
$ yarn

# start the development webserver
$ yarn start

# build the web application
$ yarn build
```




## TODO

* add prettier
* add stylelint
* add jest
* add storybook
* add hot-reload
* add server side rendering
* add Docker management
* add yeoman

## Useful links

* [React docker for development](https://medium.com/@McMenemy/react-docker-for-development-and-production-6cb50a1218c5)
* [Example of repository with docker](https://github.com/McMenemy/GoDoRP)
