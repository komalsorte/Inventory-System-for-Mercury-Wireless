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
### Specifics
#### Connections
- Server: http://localhost:5000/
- Client: http://localhost:3000/
#### Database
No database connection is required. Data is being maintained in simple .json file. 

## How to use?
### Create Tab
#### Create Ticket
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
Update button will enabled once valid ticket id is searched. Here after, information can be edited for the respective ticket.
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/ModifyTicket.png)
Submit it and try to access again. 
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/ModifiedTicketSearched.png)

#### Delete Ticket
Delete button will enabled once valid ticket id is searched. You can delete the ticket by  clicking on the Delete button.
![alt text](https://github.com/komalsorte/Inventory-System-for-Mercury-Wireless/blob/master/img/TicketDeleted.png)

## Technologies Used
- Python Flask: For backend. API for CRUD
- React.js: Front end
