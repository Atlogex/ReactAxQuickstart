React Quick Start [NPM+Webpack generate]
============================

:warning: Test or developed project.

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/280px-React-icon.svg.png"></p>

This is React Quick Start by [Atlogex](https://www.atlogex.com/).
Generate build files helpless NPM (Node.js) and Webpack.


 Directory Structure
 -------------------

       src/                      - source files
       public_html/              - entry point
       public_html/build/        - generate React files

 Stack
 -------------------

- React
- Webpack
- LESS/SCSS
- Gulp `(maybe)`


 UI Design
 -------------------

Choise and add UI library in `package.json` block 'dependencies'.

 - [Material UI](http://www.material-ui.com/)  <br/>
 ```"material-ui": "*",```
 - [React MD](https://react-md.mlaursen.com/)  <br/>
 ```"react-md": "*",```
 - [Ant Design](https://ant.design/)  <br/>
 ```"antd-ui": "*",```
 - [Microsoft Fabric](https://developer.microsoft.com/en-us/fabric)  <br/>
 ```"office-ui-fabric-react": "*"```


Sample for use Material UI:
```
"dependencies": {
    "material-ui": "*",
    "react": "*",
    "react-dom": "*"
  },
```

 Install
 -------------------

Clone repo in your directory

> git clone https://github.com/Atlogex/ReactAxQuickstart.git .

Install components (need NPM from Node.js)

> npm i