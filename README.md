# Note: the app is just for showcase of previously working applyDomino

The `1.2.0` version of `@nestjs/ng-universal` is the last one I've noticed that `applyDomino` was working correctly and here's a Minimal Working Example (MWE).
Annotations what could've been important are marked as "TODO:"/"FIXME:". In addition to that there are were some changes:

- Presence of `webpack`
- Slightly different `tsconfig`'s, `angular.json`
- Different setup for `server.ts`/`main/server.ts`

## Run the MWE

- `npm i`
- `npm run build:serve:ssr:webpack`
- Open `localhost:4000`, you'll see SSR app with [Agastya](https://oswaldlabs.com/platform/agastya/) plugin accessing `window` object and the app **is not breaking**
- Comment out `applyDomino` in `server/app.module.ts`
- `npm run build:serve:ssr:webpack`
- Now the app will break with error `ReferenceError: window is not defined`, which means that the `applyDomino works on this version of @nestjs/ng-universal`

## Agastya API key

The `ditectrev-70d3b` API key will stop working after some time, therefore please create your own at [https://admin.oswaldlabs.com](https://admin.oswaldlabs.com/)

# Nest & Angular Universal Starter

A minimal [**Nest**](https://github.com/nestjs/nest) and Angular starter for Universal using the
[Angular CLI](https://github.com/angular/angular-cli). If you're looking for the Angular Universal repo go to
[angular/universal](https://github.com/angular/universal).

---

<p align="center">
  <a href="https://trilon.io" target="_blank">
        <img width="500" height="auto" src="https://trilon.io/trilon-logo-clear.png" alt="Trilon.io - Angular Universal, NestJS, JavaScript Application Consulting Development and Training">
  </a>
</p>


<h3 align="center"> Made with :heart: by <a href="https://trilon.io">Trilon.io</a></h3>

---

## Getting Started

This demo is built following the [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering).

### Installation

- `npm i`

### Development (Client-side only rendering)

- `npm start` which will run `ng serve`.

### Development (Server-side rendering)

- `npm run dev:ssr`.

### Production

\*`npm run build:ssr && npm run serve:ssr`

- Compiles your application and spins up a Nest server to serve your Universal application on `http://localhost:4000`.

\*`npm run prerender`

- Compiles your application and prerenders your applications files

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
