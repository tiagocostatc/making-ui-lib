# Making your First React UI-Lib

This project serves as an example on how to start a React ui-lib that is able to run in development mode and production mode
while exporting only the desired components. 

### Prerequisites

First of all, you'll need to install nodeJS with npm or yarn.
Through this steps I will give instructions with both npm and yarn.

### How to run

To run your application you should first of all install all the dependencies:

```
yarn
npm install
```

After you'll have two options:

Run the development server:
```
yarn start
npm start
```

Which will start your applicational server and display your components.

Build your components:
```
yarn build
npm build
```

Which will build your components resulting in a minified file that contains all the exported components.

### To Notice

You should take a look at the webpack.config files, that allow to tranform the code in something the browser understands.
In the package.json you have the two different scripts that enable to start the dev-server (in case of the development script) and enable the full minification and build of the components (in case of the production script). 
Take a notice that both webpack files have different entry and ouptup paths.



