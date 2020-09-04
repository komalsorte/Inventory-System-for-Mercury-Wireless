# Inventory System for Mercury Wireless
Target table - Tickets

## Set-Up

### Clone Repo
git clone <repo>
### Set up virtual environment
  - cd api
  - python3 -m venv venv
### Install Flask and python-dotenv
  - (venv) $ pip install flask python-dotenv

## Run
### Run Server
- Open terminal
- cd api
- flask run
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/server.png)
### Run Client
- Open Terminal and stay in repo's root
- npm start
- Following UI should load on the screen. If not then go to http://localhost:3000/
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/homePage.png)

## How to use?
### Create Tab
## Create Ticket
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/createTicket.png)
#### On successful creation, ticket id will be displayed
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/ticketCreated.png)
### Modify Tab
Everything is displayed on this tab till a valid id is entered in the ID field. Furthermore, Update and Delete buttons are also displayed till details about the ticket are fetched.
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/ModifyTab.png)
#### Search Ticket
If ticket exists
I![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/searchID.png)

If ticket does not exists
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/InvalidTicket.png)


#### Update Ticket
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/homePage.png)

#### Delete Ticket
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/homePage.png)

  

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
