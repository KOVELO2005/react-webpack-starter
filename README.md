# react-webpack-starter

<div>
<img src="https://img.shields.io/badge/react-007396?style=for-the-badge&logo=React&logoColor=white"> 
<img src="https://img.shields.io/badge/Jest-007396?style=for-the-badge&logo=Jest&logoColor=white"> 
<img src="https://img.shields.io/badge/typescript-007396?style=for-the-badge&logo=typescript&logoColor=white"> 
<img src="https://img.shields.io/badge/ESLint-007396?style=for-the-badge&logo=ESLint&logoColor=white"> 
<img src="https://img.shields.io/badge/Prettier-007396?style=for-the-badge&logo=Prettier&logoColor=white"> 
<img src="https://img.shields.io/badge/Husky-007396?style=for-the-badge&logo=Husky&logoColor=white"> 
<img src="https://img.shields.io/badge/LintStaged-007396?style=for-the-badge&logo=LintStaged&logoColor=white"> 
<img src="https://img.shields.io/badge/Webpack-007396?style=for-the-badge&logo=Webpack&logoColor=white"> 
<img src="https://img.shields.io/badge/Babel-007396?style=for-the-badge&logo=Babel&logoColor=white"> 
</div>

## Getting started

1. Create a project based on this boilerplate.

```
$ npx degit https://github.com/KOVELO2005/react-webpack-starter <project name>
```

2. install the dependencies.

```
$ yarn install
```

3. To build the extension, and rebuild it when the files are changed, run

```
$ yarn dev
```
<br/>

## How to apply the code review method

```
.github/CODEOWNERS

* @<GithubName>
* @<organizationName/TeamName>
```

#### Below is a setting that requires a review to be merged

1. Github Setting
2. Branches Tab
3. Add rule Button Click
4. Branch name pattern = * 
5. Check Require a pull request before merging
6. Check Require approvals

#### For those who do not want to apply the test

1. npm uninstall jest @types/jest @testing-library/jest-dom @testing-library/react jest-environment-jsdom jest-transform-stub babel-jest eslint-plugin-testing-library
2. .github/workflows/ci.yml delete - run: yarn test
2. config/jest.config.js delete
