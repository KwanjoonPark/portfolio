# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite portfolio project using React 19 and modern development tooling. The project follows a standard Vite React template structure with TypeScript support.

## Common Commands

- **Development server**: `npm run dev` - Start Vite development server with HMR
- **Build**: `npm run build` - TypeScript compilation followed by Vite build
- **Lint**: `npm run lint` - Run ESLint on all files
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.x with React plugin
- **Linting**: ESLint 9.x with TypeScript ESLint, React Hooks, and React Refresh plugins
- **Entry Point**: `src/main.tsx` renders the root `App` component
- **Main Component**: `src/App.tsx` contains the primary application logic

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── App.css          # App-specific styles
├── index.css        # Global styles
├── vite-env.d.ts    # Vite environment types
└── assets/          # Static assets
```

## Configuration Files

- `vite.config.ts` - Vite configuration with React plugin
- `eslint.config.js` - ESLint configuration with TypeScript and React rules
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` - TypeScript configurations
- `package.json` - Project dependencies and scripts

## Development Notes

- The project uses ESLint with React Hooks and React Refresh plugins for optimal development experience
- TypeScript is configured for both app and Node.js environments
- No testing framework is currently configured
- Build process includes TypeScript compilation before Vite bundling