# Building joda-core for development

Joda frontend packages use ember-cli for development and deployment.
For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Requirements
You will need the following things properly installed on your computer:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Ember CLI](https://ember-cli.com)

[Joda backend](https://github.com/joda-project/joda-backend)
is required for development.

## Installation
* `git clone https://github.com/joda-project/joda-core` this repository
* `cd joda-core`
* `yarn install`

## Running Tests
Run `ember test` for one time testing. `ember test --server` will setup
a testing server which is by default available at http://localhost:4200/tests.
