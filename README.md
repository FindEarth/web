# Public Site | [Find Earth](https://find.earth)

[![Codeship](https://img.shields.io/codeship/33c10310-d37c-0134-404f-16b6d884a97d/master.svg)]()
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/67ca51a6336c4b23b3d731b8f345c48d)](https://www.codacy.com/app/FindEarth/web?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FindEarth/web&amp;utm_campaign=Badge_Grade)
[![bitHound Overall Score](https://www.bithound.io/github/FindEarth/web/badges/score.svg)](https://www.bithound.io/github/FindEarth/web)
[![bitHound Dependencies](https://www.bithound.io/github/FindEarth/web/badges/dependencies.svg)](https://www.bithound.io/github/FindEarth/web/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/FindEarth/web/badges/devDependencies.svg)](https://www.bithound.io/github/FindEarth/web/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/FindEarth/web/badges/code.svg)](https://www.bithound.io/github/FindEarth/web)

<p align="center">
  <img width="200px" src="https://cdn.rawgit.com/FindEarth/web/master/static/animated-logo.svg">
</p>

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## The Platform

The platform is composed by 3 applications:

### 1. Administration Web ([source](https://github.com/FindEarth/cms))

From this website, an organization, such as [Red Solidaria](http://redsolidaria.org.ar/), can load information from lost people, receive and evaluate user complaints and view statistics in real time.

<p align="center">
  <img width="500px" src="https://cdn-images-1.medium.com/max/1600/1*zQaAv0bNMJ3d6KJhoSR_vw.png">
</p>

This allows you to have all the information in one place, organized and easy to process. On the other hand the tool also facilitates the diffusion of images and data of the people in different social networks.

### 2. Public Web (this repo)

A portal where any user can see the data of a lost person: name, age, photos and place on the map where it was last seen.

<p align="center">
  <img width="500px" src="https://cdn-images-1.medium.com/max/1600/1*w3jv0K5C2RwCRscO6IFJzQ.png">
</p>

### 3. App Mobile ([source](https://github.com/FindEarth/app))

This layer of the platform is still in development, but the goal is:
- The report of lost people
- Show a list of the people closest to the current position of the device
- Send a notification to the user when someone reported a person within a few KMs away

<p align="center">
  <img width="500px" src="https://github.com/FindEarth/web/blob/develop/static/mobile-screen.png?raw=true">
</p>
