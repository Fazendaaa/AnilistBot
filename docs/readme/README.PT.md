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
[![Coverage Badge](https://img.shields.io/codacy/grade/ce230276b4284f47a91e0ab6ef644736.svg?style=flat-square)](https://www.codacy.com/app/Fazendaaa/AnilistBot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Fazendaaa/AnilistBot&amp;utm_campaign=Badge_Grade)
[![Dependencies](https://david-dm.org/Fazendaaa/AnilistBot.svg?style=flat-square)](https://codeclimate.com/github/Fazendaaa/AnilistBot/master/package.json)
[![Known Vulnerabilities](https://snyk.io/test/github/fazendaaa/podsearch_bot/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fazendaaa/podsearch_bot?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/3183be464438842a30b3/maintainability)](https://codeclimate.com/github/Fazendaaa/AnilistBot/maintainability)

</div>

> A new code base to Anilist bot in Telegram.

## About


### Disclaimer
By default all the commands are in English, but you can see if the same command is available in your language.

# How to use it
First of all, talk to [@AnilistBot](http://t.me/anilistbot).


## Help
If you have any other questions about it just use it the help command:

```
/help
```

# How does it work?
You can build yourself a bot similar to this one, I've wrote a tutorial about it in my [Podesearch Bot](https://github.com/Fazendaaa/podsearch_bot) just follow the procedures listed in [BUILDING.md](https://github.com/Fazendaaa/podsearch_bot/blob/master/docs/building/BUILDING.md).

# Deployment
This bot is up and running at [Heroku](http://heroku.com/) through the Github integration, that means that each new push to the ```master``` branch means that is the code serving the bot. You can also deploy yourself this bot into Heroku through:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fazendaaa/AnilistBot)

## Testing
Since there's a [Travis CI](http://travis-ci.org/) integration and [Codecov](https://codecov.io/). All of the tests were written with [Jest](https://facebook.github.io/jest/).

To run all tests just:

```bash
npm test
```

If you ran into some errors related to package dependencies and want to know how to handle it, read the [Security](#security) info.

# Security
I've added a integration with [Snyk](https://snyk.io/) to ensure that all of my dependencies have no bugs or errors reported without fixing it first before Continuos integration (CI) to ensure the Continuos Development (CD).

## Errors/Bugs in Dependencies
When Snyk report some errors or bugs that can be fixed, just follow the CLI command to fix them before running -- more info at their [docs](https://github.com/snyk/snyk#cli).

# Build with
* [dotenv](https://github.com/motdotla/dotenv)
* [emoji-regex](https://github.com/mathiasbynens/emoji-regex)
* [mongoose](http://mongoosejs.com/)
* [node schedule](https://github.com/node-schedule/node-schedule)
* [telegraf](http://telegraf.js.org/#/)
* [telegraf-i18n](https://github.com/telegraf/telegraf-i18n)

# Code
Plain and simple [Typescript](http://typescriptlang.org/) and the [Microsoft linter standards](https://github.com/Microsoft/tslint-microsoft-contrib) for it.

# Artwork
I've made all the artwork for it, [Studio Ghibli](https://www.studioghibli.com.au/) was my inspiration.

<div align="center">
    <br>
    <img src="./others/img/logo/logo.png" width=100/>
</div>

You can see more in the [img](./others/img) folder.

# Contributing
Please, I'm not a native/fluent english speaker, so whether you see a variable name wrote the wrong way or even some comment where I've wrote something with the wrong "past perfect way of life" or something like that, please let me know it. Not always is just about the code, but rather making it more clear to other people to learn from it.

So, whether is code or not you can help me out making this code more accessible by reading the [CONTRIBUTING.md](./docs/contributing/CONTRIBUTING.md). 

# Versioning
I would love to say that [SemVer](https://semver.org/) or anything like that is used but, in my personal experience, this kind of approach doesn't work very well with me, the guy who could be committing in this project for two weeks in a roll and leave it for almost one year with no simple ```npm update```. So, no versioning system is used. 

# TODO
Since I will be keeping this README up to date with any major change and I don't use any versioning system to log all the fixed bugs or previous projects updates, you can still have a taste of what comes next and what is being under analysis right in the [Projects](https://github.com/Fazendaaa/AnilistBot/projects/) tab.

# Authors
* Only [me](https://github.com/Fazendaaa) for now.

Consider buy me a coffee:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Or even becoming a patron:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

# License
Like many Open-Source Software (OSS) the MIT license is used, more about it in [LICENSE](./LICENSE).
