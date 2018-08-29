# AnilistBot

<div align = "center">
<br>
<img src="./others/img/logo/logo.png" height=260>
<br>
<br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](./README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./docs/readme/README_PT.md)

[![Build Status](https://img.shields.io/travis/Fazendaaa/AnilistBot.svg?style=flat-square)](https://travis-ci.org/Fazendaaa/AnilistBot)
[![codecov](https://img.shields.io/codecov/c/github/Fazendaaa/AnilistBot.svg?style=flat-square)](https://codecov.io/gh/Fazendaaa/AnilistBot)
[![Codacy Badge](https://img.shields.io/codacy/grade/39abaa6b730941728b1e553e73e10b1e.svg?style=flat-square)](https://www.codacy.com/project/Fazendaaa/AnilistBot/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Fazendaaa/AnilistBot&amp;utm_campaign=Badge_Grade_Dashboard)
[![Dependencies](https://david-dm.org/Fazendaaa/AnilistBot.svg?style=flat-square)](https://codeclimate.com/github/Fazendaaa/AnilistBot/master/package.json)
[![Known Vulnerabilities](https://snyk.io/test/github/Fazendaaa/AnilistBot/badge.svg?style=flat-square&targetFile=package.json)](https://snyk.io/test/github/Fazendaaa/AnilistBot?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/48f94edc03d7949040bb/maintainability)](https://codeclimate.com/github/Fazendaaa/AnilistBot/maintainability)

</div>

> A new code base to Anilist bot in Telegram.

## About
This bot helps you to send info in your [Telegram](https://telegram.org/) chats about:
* Animes
* Mangas
* Characters
* Studios
* Staffs
* etc

More than this it also notifies you when new episodes are released and lets you have a:
* Watchlist
* Readlist
* Countdown from new episodes
* Anime and manga filters in your lists

All of the data about it is fetched from [Anilist](http://anilist.co/) & [Anichart](http://anichart.net/).

## Disclaimer
1. [JoshStar](https://github.com/joshstar) was kind to [allow](https://github.com/AniList/ApiV2-GraphQL-Docs/issues/50#event-1794658906) me to store the translated info about the content in different languages, improving the user experience;
2. This project is a new implementation, the old code base is [here](https://github.com/Fazendaaa/Anilist-bot).

## Supported languages:
By default all the commands are in English, but you can see if the same command is available in your language. Only English and Portuguese had some kind of review, the others are automatic translation from [Google Translate](https://translate.google.com/).

* [English](./others/locales/en.yaml)
* [Portuguese - Brazil](./others/locales/pt.yaml)
* [Indonesian](./others/locales/id.yaml)
* [Dutch](./others/locales/nl.yaml)
* [Spanish](./others/locales/es.yaml)
* [Italian](./others/locales/it.yaml)
* [German](./others/locales/de.yaml)
* [French](./others/locales/fr.yaml)
* [Russian](./others/locales/ru.yaml)
* [Chinese](./others/locales/zh.yaml)
* [Japanese](./others/locales/jp.yaml)

# How to use it
First of all, talk to [@AnilistBot](http://t.me/anilistbot).

## Inline Searches

## Command Searches

## Readlist & Watchlist

## Countdown

## Help
If you have any other questions about it just use it the help command:

```
/help
```

# Contributing
Please, I'm not a native/fluent english speaker, so whether you see a variable name wrote the wrong way or even some comment where I've wrote something with the wrong "past perfect way of life" or something like that, please let me know it. Not always is just about the code, but rather making it more clear to other people to learn from it.

So, whether is code or not you can help me out making this code more accessible by reading the [CONTRIBUTING.md](./docs/contributing/CONTRIBUTING.md).

# TODO
Since I will be keeping this README up to date with any major change and I don't use any versioning system to log all the fixed bugs or previous projects updates, you can still have a taste of what comes next and what is being under analysis right in the [Projects](https://github.com/Fazendaaa/AnilistBot/projects/) tab.

# How does it work?
You can build yourself a bot similar to this one, I've wrote a tutorial about it in my [Podesearch Bot](https://github.com/Fazendaaa/podsearch_bot) just follow the procedures listed in [BUILDING.md](https://github.com/Fazendaaa/podsearch_bot/blob/master/docs/building/BUILDING.md).

# Build with
* [dotenv](https://github.com/motdotla/dotenv)
* [endeavor](https://github.com/Fazendaaa/endeavor)
* [emoji-regex](https://github.com/mathiasbynens/emoji-regex)
* [google-translate](https://github.com/Localize/node-google-translate)
* [moment](http://momentjs.com/)
* [mongoose](http://mongoosejs.com/)
* [node schedule](https://github.com/node-schedule/node-schedule)
* [telegraf](http://telegraf.js.org/#/)
* [telegraf-i18n](https://github.com/telegraf/telegraf-i18n)

# Code
Plain and simple [Typescript](http://typescriptlang.org/) and the [Microsoft linter standards](https://github.com/Microsoft/tslint-microsoft-contrib) for it.

## Webpack
> _"JUST WHY???"_ -- everybody

As the [Anilist API V2](https://github.com/AniList/ApiV2-GraphQL-Docs) was written with [GraphQL](https://graphql.org/), as I was using it, the needed queries as JS ```imports``` was a option but only with [Webpack](http://webpack.js.org/) and the [webpack-graphql-loader](https://github.com/samsarahq/graphql-loader). And since this makes the code more cleaner and easier to maintain that's why it was used; that's the GREAT difference and could seen a little bit off to see this kind of decision and that's the answer.

# Artwork
I've made all the artwork for it, [Studio Ghibli](https://www.studioghibli.com.au/) was my inspiration.

<div align="center">
    <br>
    <img src="./others/img/logo/logo.png" width=100/>
    <img src="./others/img/error/error.png" width=100/>
    <img src="./others/img/missing/missing.png" width=100/>
</div>

You can see more in the [img](./others/img) folder.

# Testing
Since there's a [Travis CI](http://travis-ci.org/) integration and [Codecov](https://codecov.io/). All of the tests were written with [Jest](https://facebook.github.io/jest/) with the help of [ts-jest](https://github.com/kulshekhar/ts-jest).

To run all tests just:

```bash
npm test
```

If you ran into some errors related to package dependencies and want to know how to handle it, read the [Security](#security) info.

## Unneeded Code
There's a pattern to do testing based on using JSON files describing the tests to be done. That being said, the [```doTesting```](./ci/doTesting.ts) function has a unneeded argument, the name of the function to be tested.

Node runs using [V8](https://github.com/v8/v8) engine, but since this project uses TS, the compiled code doesn't have the _name_ property in the anonymous function. The problem is a [known issue](https://github.com/Microsoft/TypeScript/issues/6433); the folks at [Jest](https://github.com/facebook/jest/issues/6824#event-1787524124) and [ts-jest](https://github.com/kulshekhar/ts-jest/issues/677#issuecomment-412893575) helped a lot to understand this -- once this issue is fixed there won't be this anymore.

# Security
I've added a integration with [Snyk](https://snyk.io/) to ensure the Continuos Development (CD).

## Errors/Bugs in Dependencies
When Snyk report some errors or bugs that can be fixed, just follow the CLI command to fix them before running -- more info at their [docs](https://github.com/snyk/snyk#cli).

# Deployment
This bot is up and running at [Heroku](http://heroku.com/) in a [Docker](https://www.docker.com/) container. You can also deploy yourself this bot into Heroku through:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fazendaaa/AnilistBot)

# Versioning
I would love to say that [SemVer](https://semver.org/) or anything like that is used but, in my personal experience, this kind of approach doesn't work very well with me, the guy who could be committing in this project for two weeks in a roll and leave it for almost one year with no simple ```npm update```. So, no versioning system is used. 

# Authors
* Only [me](https://github.com/Fazendaaa) for now.

# Supporting

Right now, this project has the following total lines of code (loc):

![Spoilers sent](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&label=LOC&url=https%3A%2F%2Fispoiler.herokuapp.com%2Fstats.json&query=%24.total.lines&colorB=red)

This bot actually uses three paid services:
1. [Heroku](http://heroku.com/)
2. [mLab](https://mlab.com/)
3. [Google Translate](https://translate.google.com/)

All of your support actually makes a difference to help me maintain this project up and running. I really would love if anyone who uses it could support it helping one time with any value that think it worth it or even supporting it each month with one dollar through my Patreon. And this would allow me to improve this project more and more, adding a ton of features that I've planned.

Consider buy me a coffee:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Or even becoming a patron:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

# License
Like many Open-Source Software (OSS) the MIT license is used, more about it in [LICENSE](./LICENSE).
