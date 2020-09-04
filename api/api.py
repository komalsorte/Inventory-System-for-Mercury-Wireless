__author__ = "Komal Atul Sorte"

import json
from flask import Flask
from flask import (request, jsonify, )
from flask import Blueprint

api = Blueprint('api', __name__)
app = Flask(__name__)
tickets = dict()

"""
To load all the records in the database
"""


@app.route('/load', methods=['GET'])
def loadTicketsRecord():
    global tickets
    try:
        with open('ticketDb.json', "r") as file:
            tickets = json.load(file)
        file.close()
        return tickets
    except FileNotFoundError:
        print("Database not available")
    finally:
        return {}


"""
To create a new ticket with given information
"""


@app.route('/create', methods=['PUT'])
def create():
    global tickets
    newTicket = request.get_json(force=True)
    id = newTicket["id"]
    loadTicketsRecord()
    newTicket.pop('id')

    tickets['Tickets'][id] = newTicket

    with open('ticketDb.json', "w") as file:
        file.seek(0)
        json.dump(tickets, file)
    file.close()

    return {'id': id}


"""
To find a ticket with given id.
"""


@app.route('/read/<ticketid>', methods=['GET'])
def read(ticketid):
    global tickets
    loadTicketsRecord()
    if str(ticketid) in tickets["Tickets"]:
        return tickets["Tickets"][str(ticketid)]
    else:
        return {}


"""
To update a record with given information
"""


@app.route('/update', methods=['POST'])
def update():
    global tickets
    updateTicket = request.get_json(force=True)
    id = updateTicket["id"]
    updateTicket.pop('id')

    if read(id) != {}:
        tickets['Tickets'][id] = updateTicket

        with open('ticketDb.json', "w") as file:
            file.seek(0)
            json.dump(tickets, file)
        file.close()

        return {'id': id}

    if read(id) == {}:
        return {}


"""
To delete a ticket with given ticket
"""


@app.route('/delete', methods=['POST'])
def delete():
    global tickets
    deleteTicket = request.get_json(force=True)
    id = deleteTicket["id"]

    if read(id) != {}:
        tickets["Tickets"].pop(str(id))

        with open('ticketDb.json', "w") as file:
            file.seek(0)
            json.dump(tickets, file)
        file.close()

        return {'id': id}

    if read(id) == {}:
        return {}
