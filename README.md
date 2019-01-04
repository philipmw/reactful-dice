# Philip's Reactful dice #

This is a rudimentary Single-Page Application (SPA) that lets you roll dice.
To make it a bit more fun, you get a dynamically-generated objective to get Snake Eyes with N dice in M rolls or fewer.

Try it online: http://philipmw-reactful-dice.s3-website-us-west-2.amazonaws.com

## Why does this exist?

It's my toy project to explore React, and in particular, asynchronous updates to app state.
My dice don't acquire a new value immediately, but some time after you initiate the roll.
This is effectively the pattern webapps follow when requesting data from another endpoint, then
wanting to render it once the value returns.
(I don't make API calls here; I just schedule a callback.)

This webapp is based on my [SPA template](https://github.com/philipmw/spa-template).
It tries to follow good practices, such as having unit tests and using TypeScript.

## Develop it

    $ npm start

This supports hot reloading.

Run unit tests and linter:

    $ npm test

## Build and publish to the Internet

    $ npm run build

Then upload the contents of `web/` to your web host.

## Improve it

I welcome pull requests, but it is important to me to keep this app SIMPLE.  It demonstrates
pure React, without Redux or other commonly-used libraries.
