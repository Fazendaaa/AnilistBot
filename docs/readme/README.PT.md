# AnilistBot

<div align = "center">
<br>
<img src="../../others/img/logo/logo.png" height=260>
<br>
<br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](../../README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./README_PT.md)

[![Build Status](https://img.shields.io/travis/Fazendaaa/AnilistBot.svg?style=flat-square)](https://travis-ci.org/Fazendaaa/AnilistBot)
[![codecov](https://img.shields.io/codecov/c/github/Fazendaaa/AnilistBot.svg?style=flat-square)](https://codecov.io/gh/Fazendaaa/AnilistBot)
[![Codacy Badge](https://img.shields.io/codacy/grade/39abaa6b730941728b1e553e73e10b1e.svg?style=flat-square)](https://www.codacy.com/project/Fazendaaa/AnilistBot/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Fazendaaa/AnilistBot&amp;utm_campaign=Badge_Grade_Dashboard)
[![Dependencies](https://david-dm.org/Fazendaaa/AnilistBot.svg?style=flat-square)](https://codeclimate.com/github/Fazendaaa/AnilistBot/master/package.json)
[![Known Vulnerabilities](https://snyk.io/test/github/Fazendaaa/AnilistBot/badge.svg?style=flat-square&targetFile=package.json)](https://snyk.io/test/github/Fazendaaa/AnilistBot?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/48f94edc03d7949040bb/maintainability)](https://codeclimate.com/github/Fazendaaa/AnilistBot/maintainability)

</div>

> Uma nova implementação do Anilist Bot para Telegram.

## Sobre
Este bot the ajuda a encontrar informções nos chats do [Telegram](https://telegram.org/) sobre:
* Animes
* Mangás
* Personagens
* Estúdios
* Funcionários
* etc

Mais do que isso, ele também te notifica quando novos episódios são lançados e ainda permite ter:
* Watchlist
* Readlist
* Contagem regressiva para novos episódios
* Calculadora de tempo assistindo animes
* Anime e mangá filtros para ver os que estão: lançando, completos, cancelados e em breve
* Notícias quando lançadas do [ANN](https://www.animenewsnetwork.com/) sobre seus mangás e animes -- procuro algum blog BR para tal também
* E outras várias novas ferramentas em desenvolvimento

Toda as informações são do [Anilist](http://anilist.co/) & [Anichart](http://anichart.net/) -- sendo que possuem tradução automática para Português.

## Notas
1. [JoshStar](https://github.com/joshstar) foi gentil para [permitir](https://github.com/AniList/ApiV2-GraphQL-Docs/issues/50#event-1794658906) as traduções das informações fossem armazenadas em diferentes idiomas, melhorando a experiência do usuário;
2. Esse projeto é uma nova implementação, a antiga se encontra [aqui](https://github.com/Fazendaaa/Anilist-bot);
3. Além disso, a opção de _comandos_ foram removidas quando conversarem com o bot de acordo com o baixo uso.

## Idiomas suportados:
Por padrão, todos os comandos serão em Inglês, mas você pode ver se o mesmo comando está diponível no seu idoma. Somente Inglês e Português tiveram algum tipo de revisão, todos os outros são traduções automáticas do [Google Traduor](https://translate.google.com/).

* [Alemão](../../others/locales/de.yaml)
* [Arábe](../../others/locales/ar.yaml)
* [Chinês](../../others/locales/zh.yaml)
* [Espanho](../../others/locales/es.yaml)
* [Holandês](../../others/locales/nl.yaml)
* [Inglês](../../others/locales/en.yaml)
* [Francês](../../others/locales/fr.yaml)
* [Indonês](../../others/locales/id.yaml)
* [Italiano](../../others/locales/it.yaml)
* [Japanês](../../others/locales/jp.yaml)
* [Português - Brasileiro](../../others/locales/pt.yaml)
* [Russo](../../others/locales/ru.yaml)

**Quer um novo idioma?** Converse comigo através de uma issue ou no Telegram: [@farmy](http://t.me/farmy).

# Como utilizar
Primeiramente, converse com o [@AnilistBot](http://t.me/anilistbot).

## Pesquisas inline
As pesquisas inline funcionam em qualquer chat:

```
@AnilistBot conteúdo a ser pesquisado
```

Exemplo:

```
@AnilistBot One Piece
```

<div align="center">
    <img src="../../others/gif/search.gif"/>
    <br>
    <img src="../../others/img/docs/search/search.png"/>
</div>

## Descrição & Gêneros
Mostra inforamções sobre animes, mangás, personagens e funcionários.

<div align="center">
    <img src="../../others/gif/buttons.gif"/>
</div>

## Readlist & Watchlist
Adiciona o conteúdo para sua lista de assistir ou ler depois.

<div align="center">
    <img src="../../others/gif/list.gif"/>
</div>

## Contagem Regressiva
Mostra o quanto tempo falta para os próximos episódios a serem lançados.

<div align="center">
    <img src="../../others/gif/countdown.gif"/>
</div>

## Ajuda
Se tiver alguma dúvida sobre, apenas utilize o seguinte comando numa conversa com o bot:

```
/help
```

# Artes
Eu fiz todas as artes para o projeto, [Studio Ghibli](https://www.studioghibli.com.au/) foi a minha inspiração.

<div align="center">
    <br>
    <img src="../../others/img/all/all.png" width=100/>
    <img src="../../others/img/soon/soon.png" width=100/>
    <img src="../../others/img/logo/logo.png" width=100/>
    <img src="../../others/img/more/more.png" width=100/>
    <img src="../../others/img/about/about.png" width=100/>
    <img src="../../others/img/error/error.png" width=100/>
    <img src="../../others/img/missing/missing.png" width=100/>
    <img src="../../others/img/db_down/db_down.png" width=100/>
    <img src="../../others/img/not_found/not_found.png" width=100/>
    <img src="../../others/img/cancelled/cancelled.png" width=100/>
    <img src="../../others/img/countdown/countdown.png" width=100/>
    <img src="../../others/img/completed/completed.png" width=100/>
    <img src="../../others/img/releasing/releasing.png" width=100/>
</div>

Você pode ver mais na pasta [img](../../others/img).

# Ajudando

Agora, este projeto tem o seguinte total de linhas de código:

![Linhas](https://img.shields.io/badge/dynamic/json.svg?label=LOC&url=https%3A%2F%2Fraw.githubusercontent.com%2FFazendaaa%2FAnilistBot%2Fmaster%2Fstats.json&query=%24.SUM.code&colorB=red)

E utiliza quatro serviços pagos:
1. [Heroku](http://heroku.com/)
2. [Heroku Redis](https://elements.heroku.com/addons/heroku-redis)
3. [mLab](https://mlab.com/)
4. [Google Translate](https://translate.google.com/)

Todo o seu suporte pode realmente fazer a diferença para me ajudar a manter este projeto rodando. Eu realmente amaria se todo mundo que o utiliza pudesse suportar ele alguma vez, com qualquer valor que julgar válido ou até mesmo cada mês com um real através do meu Padrim. Isso me permitira melhorar cada vez mais o projto, adicionado várias novas ferramentas que tenho planejado.

Você acha que dinheiro não é a melhor maneira de contribuir? Tudo bem, estou aberto para receber traduções e código! Apenas dê uma olhada na parte [Contribuindo](#contribuindo).

Eu também explico o _"porquê"_ receber doações ao invés de vender propagandas em [SUPPORT.PT.md](../support/SUPPORT.PT.md).

Considere me pagar um café:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Ou quem sabe um "patron":

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

Para todos os meus conterrâneos, começando em um real por mês:

[![Padrim](../../others/external/padrim.png)](https://www.padrim.com.br/AnilistBot)

# Contribuindo
Por favor, eu não sou nativo/fluente em inglês, então qualquer erro que ver, seja o noe de uma variável ou até mesmo um comentário, comente onde eu errei que irei corrigir. Se eu escrevi algo também da forma conjugada erroneamente, por favor informe-me. Nem sempre é tudo apenas sobre código, mas sim torná-lo mais acessível para outas pessoas.

Sendo código ou não você pode me ajudar mantendo esse código mais acessível, ou até mesmo um novo idioma ou corrigindo algo nos atuais. Apenas leia o arquivo para saber como [CONTRIBUTING.PT.md](../contributing/CONTRIBUTING.PT.md).

# A Fazer
Como este README estará atualizado com qualquer mudança grande, eu não irei utilizar nenhum sistema para logar bugs corrigirs ou updates, você pode ver o que está por vir no aba [Projects](https://github.com/Fazendaaa/AnilistBot/projects/). Mas te darei um gostinho do que tenho em mente:

* Cachear as requisições mais feitas
* Melhorar métrica no tempo assistido:
    * Prover ao usuário opções de _"o que fazer"_ na vida real baseado no que ele gosta. Como assistir um vídeo de um canal do [YouTube](https://youtube.com/) caso o usuário goste de [Bakuman](https://anilist.co/anime/7674/Bakuman/), como exemplo
* Adicionar um identificador de padrão como _"Você quis dizer"_ do Google. Provavelmente irei utilizar o pacote [didyoumean](https://www.npmjs.com/package/didyoumean)
* Conexão com o Anilist
* Escrever reviews de animes e mangás
* Suporte para notícias de animes e mangás além do ANN -- para melhorar acesso a notícias
* Processamento de Linguagem Natural -- Você pode realmente conversar com este bot
* Recomendações de animes e mangás -- Criar um motor para isso:
    * Criar outro servidor para armazenar esse processamento -- Comunicação com o bot através de uma API em GraphQL e provavlemente utilizar [Rust](http://rust-lang.org/) para processar tal informações e [GO](https://golang.org/) para dar conta da API
    * Buscar utilizar um servidor que permite uso de GPU
    * Melhorar esse motor através de processamento de imagens, vídeo e audio
* Criar um site para disponilizar informações sobre:
    * Animes e mangás em foco
    * Um grafo que mostra a distancia dos animes e mangás de acordo com os gostos dos usuários
* O site deve ser um [PWA](https://en.wikipedia.org/wiki/Progressive_Web_Apps) para permitir novos usuários além da base de usuários do Telegram

# Deployment
Este bot está em funcionamento no [Heroku](http://heroku.com/) em um conteiner do [Docker](https://www.docker.com/). Todavia você pode ter uma versão sua deste projeto rodando também:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fazendaaa/AnilistBot)

Caso se você utilizar o [Azure](https://azure.microsoft.com/):

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/?repository=https://github.com/Fazendaaa/AnilistBot/tree/master)

Ou até mesmo o [Docker Cloud](https://cloud.docker.com/):

[![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/?repo=https://github.com/Fazendaaa/AnilistBot/tree/master)

> Obs: Você deve estar logado no Docker Cloud para o botão de deploy funcionar. Caso contrário, o link resultará em um erro 404.

# Versionamento
Eu adoraria dizer que é utilizado o [SemVer](https://semver.org/) ou coisa do tipo mas, devido a minha experiência pessoal, do cara que pode commitar por duas semanas seguidas neste projeo e deixá-lo por quase um ano sem rodar um simples ```npm update```... Nenhum sistema será utilizado.

# Como funciona?
Você pode construir um bot similar a este, Eu escrevi um tutoria sobre no meu [Podesearch Bot](https://github.com/Fazendaaa/podsearch_bot), apenas siga os procedimentos listados em [BUILDING.md](https://github.com/Fazendaaa/podsearch_bot/blob/master/docs/building/BUILDING_PT.md).

# Código
Puro e simples [Typescript](http://typescriptlang.org/) com os padrões de linter da [Microsoft](https://github.com/Microsoft/tslint-microsoft-contrib) para ele.

## Webpack
> _"POR QUÊ???"_ -- todo mundo

Como a segunda versão da [API Anilist](https://github.com/AniList/ApiV2-GraphQL-Docs) foi escrita em [GraphQL](https://graphql.org/), e como eu fui utilizando, a necessidade de utilizar as queries como ```imports``` de JS era uma opção apenas com [Webpack](http://webpack.js.org/) e o [webpack-graphql-loader](https://github.com/samsarahq/graphql-loader). Como isso deixa o código mais limpo e fácil de ler e manter, este foi o motivo de ser utilizado; isso permite uma GRANDE diferença e pode ser um pouco estranho tomar tal tipo de ceissão e aqui está a respota para.

## Construído Com
* [city-timezones](https://github.com/kevinroberts/city-timezones)
* [dotenv](https://github.com/motdotla/dotenv)
* [endeavor](https://github.com/Fazendaaa/endeavor)
* [emoji-regex](https://github.com/mathiasbynens/emoji-regex)
* [google-translate](https://github.com/Localize/node-google-translate)
* [moment](https://github.com/moment/momentjs.com)
* [moment-timezone](https://github.com/moment/moment-timezone)
* [mongoose](https://github.com/Automattic/mongoose)
* [node-google-timezone](https://github.com/ecteodoro/node-google-timezone)
* [node schedule](https://github.com/node-schedule/node-schedule)
* [striptags](https://github.com/ericnorris/striptags)
* [telegraf](https://github.com/telegraf/telegraf)
* [telegraf-i18n](https://github.com/telegraf/telegraf-i18n)
* [telegraf-session-redis](https://github.com/telegraf/telegraf-session-redis)

## Testando
Como há uma integração com o [Travis CI](http://travis-ci.org/) e o [Codecov](https://codecov.io/). Todos os testes foram escritos para o [Jest](https://facebook.github.io/jest/) com a ajuda do [ts-jest](https://github.com/kulshekhar/ts-jest).

Para rodar todos os testes, basta:

```bash
npm test
```

Se você encontrar alguns erros relacionados a dependencias de pacotes e gostaria de saber como resolvê-los, leia [Segurança](##segurança) sobre isso.

### Código Desnecessário
Há um padrão para testar código baseado em um arquivo descritivo em JSON. Dito isto, a função [```doTesting```](./ci/doTesting.ts) tem um argumento desncessário, o nome da função a ser testado.

Node roda usando o motor [V8](https://github.com/v8/v8), mas como este projeto utiliza TS, o código compilado não tem a propriedade _name_ na função anonima. Isto é um [problema reportado](https://github.com/Microsoft/TypeScript/issues/6433); o pessoal do [Jest](https://github.com/facebook/jest/issues/6824#event-1787524124) e do [ts-jest](https://github.com/kulshekhar/ts-jest/issues/677#issuecomment-412893575) me ajudaram a entender isso -- uma vez fixado, não haverá mas isso.

## Segurança
Foi adicionado uma integração com [Snyk](https://snyk.io/) para garantir do Desenvolvimento Contínuo.

### Erros ou Bugs em dependências
Quando Snyk reporta algum erro ou bugs que podem ser corrigidos, apenas siga o comando do terminal para corrigí-los antes de rodar -- mais informação na [documentação](https://github.com/snyk/snyk#cli) deles.

# Autores
* Apenas [eu](https://github.com/Fazendaaa) até agora.

# Lisença
Como vários projetos Open-Source, a lisença do MIT é utilizad. Mais informações em [LICENSE](../../LICENSE).
