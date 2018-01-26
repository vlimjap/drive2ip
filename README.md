## GETTING STARTED ##
`npm i` - install dependencies

`npm start` - runs local server

GO: http://localhost:3000

DEMO: https://vlimjap.github.io/drive2ip/build/index.html


## Notes: ##
Welcome to Drive2IP.

Enter your origin IP address. Enter your destination IP address. Find out how long it takes to physically drive from one to the other.

I started with the create-react-app (https://github.com/facebookincubator/create-react-app) as my bootstrapping library and then included different libraries to form the app structure.



## Technical Explanations: ##
`react-redux` - https://redux.js.org/docs/basics/UsageWithReact.html
Used for state control. Redux allows the app to cleanly manage state within React through reduceers. Only reducers are able to update the app state. Reducers are placed in the `/src/reducers`

`redux-saga` - https://redux-saga.js.org/docs/api/
Used redux saga to have a clean separation of code responsibilities for the business logic and management of the app state. Redux Saga also allows me to leverage generator functions to cut down on using promises as well as other async handling methods. Sagas are placed in the `/src/sagas` folder

`/src/actions` - Actions are responsible communicating with react-redux and redux-saga. It is similar to a pub/sub approach where events (in this case the action names) are dispatched and the subscriptions contained in react-redux/react-saga run their functions when they are triggered.

`/src/apis` - Generic definition of api urls as well as ajax handlers

`/src/containers` - ReactJS containers

`public` - Public files served by the server

