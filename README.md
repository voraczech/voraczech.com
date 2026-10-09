# voraczech.com

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
bun i
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## TypeScript

TypeScript 7 checks `.ts` files with the native `tsc` compiler. Vue templates
and ESLint use the TypeScript 6 compatibility API until their tooling supports
TypeScript 7. Both versions are installed using the
[official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).

```bash
bun run typecheck
bun run lint
```

`typecheck` prepares Nuxt's generated types, runs TypeScript 7, then checks
Vue components and templates with `vue-tsc` using TypeScript 6.

## Cloudflare pages

- set `NODE_VERSION` to `latest`
