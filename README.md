# Getting Started with Create React App

## Tools Required

1. GitHub Desktop
2. VSCode
3. NodeJS V18 or above
4. Yarn `npm install --global yarn`

## Available Scripts

In the project directory, you can run:

### `yarn`

To install dependencies

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn format:fix`

Check and update all files formatting

### `yarn lint`

Validate code using Eslint.

## Troubleshooting

You might need this script
npm install -g win-node-env
npm install -g windows-build-tools

## Development Process

### Naming

Folder and filename, use camelCase.tsx

- ts - same as js, pure TypeScript code (without React/Tags)
- tsx - same as jsx, it's xml like file for you to write React/Tags

Shared Component folder & filename can be TitleCase.

Component name, use TitleCase

### Branching

For every feature or bug, a new branch should be created. Branch name should always either have the prefix.

- feature/BS-xxxx-{task description} - for tasks

- bugfix/BS-xxxx-{task description} - for bugs

### Commit Rules

Commits should be made often with proper messages following the Conventional commits paradigm.

The structure of commit shall be

`<type><(optional)!>: <[<jiraId>]subject>`

Example

- `feat: [BS-1234] new add form`
- `fix: [BS-1234] fix on save error`

### Pull Request

Use Pull Request to merge code into master branch.

## Setting up project

Please update the following for your new project

- .env & .env.uat - to update project name and API path, etc.
- package.json - to update project name and version
- yarn.lock - delete if you want to perform a fresh install
- src/assets/image/logo\* - update to your logo
- public/favicon.ico - update the favicon icon

## Deevelopment Guide

- Try to provide mock data to all api request, if REACT_APP_OFFLINE=true, then it will use the mock data
