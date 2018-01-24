## Requirements

NodeJS 8+ is required to run this service.

## Installing Node and NPM on Ubuntu 16+

```sh
cd ~
wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz
tar -xf node-v8.9.4-linux-x64.tar.xz
rm -f node-v8.9.4-linux-x64.tar.xz
sudo cp node-v8.9.4-linux-x64/bin/node /usr/bin/
sudo node-v8.9.4-linux-x64/bin/npm install -g npm
rm -fr node-v8.9.4-linux-x64
cd -
```

## Starting the Dev server

1. Run `npm install`
2. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - Start the dev server
- `npm clean` - Delete the dist folder
- `npm run production` - Create a production ready build in `dist` folder
- `npm run lint` - Execute an ESLint check
- `npm test` - Checks if your code is ok before creating a commit
- `npm run test:unit` - Run your unit tests
- `npm run report:coverage` - Detailed code coverage of the last tests you ran

## Directory structure

### Overview

```
├── app
│   ├── assets
│   │   ├── images/
│   │   └── scss/
│   ├── components
│   │   ├── App.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ...
│   └── vendors/

├── config/

├── tests
│   └── components/
```

### app/

The source code is under this folder.

### app/components/

Add new components here.
App.js is the main component.
