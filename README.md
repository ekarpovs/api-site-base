# API-SITE-BASE

[![CircleCI](https://circleci.com/gh/ekarpovs/api-site-base.svg?style=shield)](https://circleci.com/gh/ekarpovs/api-site-base)

> A Node.js REST API for ANG-SSR-SITE-BASE

* [Express](http://expressjs.com/) (Routing middlewares, Web, Api),
* [Express-JWT](https://www.npmjs.com/package/express-jwt) (Authentication middleware),
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken),
* [Typescript](http://www.typescriptlang.org/),
* [Mongoose](http://mongoosejs.com/) (Elegant MongoDB object modeling),
* [TSLint](https://palantir.github.io/tslint/) (Linter for the TypeScript),
* [TypeDoc](https://github.com/TypeStrong/typedoc),
* [Bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/),
* [Body-Parser](https://www.npmjs.com/package/body-parser),
* [Compression](https://www.npmjs.com/package/compression),
* [DotEnv](https://www.npmjs.com/package/dotenv) (Loads environment variables from a .env file into process.env),
* [Hapy/joi](https://hapibook.jjude.com/book/joi) (Requests validation),
* [Morgan](https://www.npmjs.com/package/morgan) (HTTP request logger)
* [Method-Override](https://www.npmjs.com/package/method-override)(Use HTTP verbs such as PUT or DELETE in places where the client doesn't support it)

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
