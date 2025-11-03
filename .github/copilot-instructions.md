# Copilot Instructions for Angular-Restart Monorepo

## Overview
This repository contains multiple Angular projects (e.g., `cards`, `password`, `typingChallenge`). Each project is generated and managed using Angular CLI v20.2.1. The structure is monorepo-style, with each app in its own subdirectory.

## Key Patterns & Architecture
- **Angular CLI**: All projects use Angular CLI for development, builds, and scaffolding. Use `ng serve`, `ng build`, and `ng generate` commands within each project directory.
- **Component Communication**: Parent-to-child data flow uses `@Input()` properties. Example: `App` passes an array to `Card` via `[posts]` binding.
- **File Structure**: Each app has its own `src/app` directory for components, and a `public` directory for static assets.
- **Styling**: Component styles are defined in `.css` files referenced by `styleUrl` in component decorators.
- **Testing**: Unit tests are scaffolded by Angular CLI and placed alongside components as `.spec.ts` files.

## Developer Workflows
- **Start Dev Server**: From a project folder, run `ng serve` and open `http://localhost:4200/`.
- **Build**: Run `ng build` in the project folder. Output is in `dist/`.
- **Generate Component**: Use `ng generate component <name>` in the project folder.
- **Testing**: Use `ng test` for unit tests (if configured).

## Project-Specific Conventions
- **No global state management**: Data is passed via component inputs/outputs, not via NgRx or services.
- **Minimal custom scripts**: All major workflows use Angular CLI commands; no custom npm scripts are required.
- **Component Imports**: Components are imported via the `imports` array in the `@Component` decorator.
- **Image Assets**: Images are referenced by URL in component data, not imported as modules.

## Integration & Dependencies
- **No backend integration**: All data is static or hardcoded in components.
- **No external state libraries**: Only Angular core and CLI dependencies are used.

## Examples
- To pass an array from parent to child:
  - Parent: `<app-card [posts]="posts"></app-card>`
  - Child: `@Input() posts: any[] = [];`
- To scaffold a new feature:
  - `ng generate component feature-name`

## Key Files & Directories
- `cards/src/app/`, `password/src/app/`, `typingChallenge/src/app/`: Main app source code
- `README.md` in each project: Project-specific instructions

---

For questions about project structure or workflows, check the relevant `README.md` or ask for examples from existing components.
