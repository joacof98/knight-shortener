
## Screenshot

![GitHub Logo](https://i.imgur.com/uUpKJQQ.png)

## Getting Started
After cloning this repository, if you already have NodeJS installed:

### In the /server and /client folders:
```
npm install
```

Also, in the server, in file config.ts, you need to put your own MongoDB URI for connect to a database.
## Run the app

### Init the server: (in /server folder)
```
npm run dev
```

### Init the client: (in /client folder)
```
npm start
```

## Usage
In the main page, just paste a long url, and you'll receive the short url generated (the domain knt.st is just for fun, its not deployed there 😬.)
After that, copy only the code and paste it right after '/' in your browser (running in localhost) and done!.


## Built With

* [ReactJS](https://es.reactjs.org/) - The frontend library used
* [SemanticUI REACT](https://react.semantic-ui.com/) - CSS Framework for React
* [NodeJS](https://nodejs.org/es/) - For the backend server (with Express)
* [MongoDB](https://www.mongodb.com/) - ATLAS For the backend database
