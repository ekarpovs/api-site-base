# API-SITE-BASE

[![CircleCI](https://circleci.com/gh/ekarpovs/api-site-base.svg?style=shield)](https://circleci.com/gh/ekarpovs/api-site-base)

> A Node.js REST API for ANG-SSR-SITE-BASE

* [Express](http://expressjs.com/) (Routing middlewares, Web, Api),
* [Typescript](http://www.typescriptlang.org/),
* [Mongoose](http://mongoosejs.com/),
* [SCSS](http://sass-lang.com/),
* [EJS](https://github.com/mde/ejs),
* [Nodemon](http://nodemon.io/),
* [TSLint](https://palantir.github.io/tslint/),
* [TypeDoc](https://github.com/TypeStrong/typedoc),
* [Bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/),
* [Hapy/joi](https://hapibook.jjude.com/book/joi)

* Simple npm setup and maintenance, without grunt/gulp/webpack/...

* Support for async/await

## install the repo dependencies with npm

npm install

## start the server

```bash
npm run dev
```

## Other commands

Run the linter manually:

```bash
npm run lint
```

Clean temp folders:

```bash
npm run clean
```

Run the tests:

```bash
npm test
```

Generate docs, the output will be in /doc folder:

```bash
npm run doc
```

## Production / Integration

To run the project in a server you'll want to run the built code instead src version.

```bash
# deploy the repo to server and run
npm install
npm start
```

## License

 [MIT](/LICENSE)
