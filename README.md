# React + TypeScript + Vite

This project uses React with TypeScript and Vite, along with Biome for linting and formatting, and Bun as the package manager.

## Development

This project uses [Bun](https://bun.sh/) as the package manager and runtime. Install dependencies with:

```bash
bun install
```

## Scripts

- `bun dev` - Start the development server
- `bun build` - Build for production
- `bun lint` - Check code with Biome
- `bun lint:fix` - Fix linting issues automatically
- `bun format` - Format code with Biome
- `bun preview` - Preview the production build

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for both linting and formatting. Configuration can be found in `biome.json`.
