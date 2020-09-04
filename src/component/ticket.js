import React, {Component} from "react";
import {Button, Tabs, Tab} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/ticket.css'
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timestamp: new Date(),
        id: '',
        type: '',
        description: "",
        opened_by: '',
        opened_at: '',
        updated_by: '',
        updated_at:'',
        due_date:'',
        result: "",
        flagDisable: false,
        admin: []
    };
  }

   render() {
    return (
        <Tabs defaultActiveKey="newticket" id="ticket-tabs" onSelect={this.onTabChange.bind(this)}>
          <Tab eventKey="newticket" title="Create New Ticket" >
            <div class="container-body">
                {this.renderCreateCard()}
            </div>
          </Tab>
          <Tab eventKey="existingticket" title="Modify Existing Ticket">
             <div class="container-body">
                 {this.renderUpdateCard()}
            </div>
          </Tab>
        </Tabs>
    );
   }

  onTabChange(){
    this.setState({ timestamp: new Date(),
        id: '',
        type: '',
        description: "",
        opened_by: '',
        opened_at: '',
        updated_by: '',
        updated_at:'',
        due_date:'',
        result: "",
        flagDisable: false,
        admin: []});
  }
  setTime(){
    this.setState({
        opened_at: this.state.timestamp
    });
  }

  setID(event){
    this.setState({
        id: event.target.value
    });
  }

  setDescription(event) {
    event.preventDefault();
    this.setState({
        description: event.target.value
    });
  }

  setOpenedBy(event) {
    event.preventDefault();
    this.setState({
        opened_by: event.target.value
    });
  }

  setUpdatedBy(event) {
    event.preventDefault();
    this.setState({
        updated_by: event.target.value
    });
  }

  setUpdateTime(){
    this.setState({
        update_at: new Date()
    });
  }

  updateDueDate(event) {
    var days = 0
    console.log(event.target.value);
    if (event.target.value === 'Low') {
        days = 4
    }
    else if (event.target.value === 'Moderate'){
        days = 2
    }
    else{
        days = 1
    }

    var due = new Date();
    due.setDate(this.state.timestamp.getDate()+days);
    this.setState({
        type: event.target.value,
        due_date: due
    });
  }

  handleFormSubmit() {
    console.log("Creating new ticket")
    let timestamp_now = new Date()
    this.setState({
        timestamp: timestamp_now,
        id: Date.parse(timestamp_now),
        opened_at: timestamp_now
    }, () => {
        console.log(this.state);
        this.createTicket()
    });
  }

  handleUpdateTicket() {
    console.log("Modifying ticket")
    let timestamp_now = new Date()
    this.setState({
        updated_at: timestamp_now
    }, () => {
        console.log(this.state);
        this.updateTicket()
    });
  }

  handleSearchID() {
    console.log("Searching ID")
    this.readTicket(this.state.id)
  }

  handleDeleteTicket() {
    console.log("Deleting record")
    this.deleteTicket(this.state.id)
  }

  loadAllRecords(){
    fetch('/load')
        .then(response => response.json()
        .then(data => {
            console.log(data);
            const tickets = [];
                Object.keys(data["Tickets"]).forEach(key => tickets.push({
                   id: key,
                   information: data["Tickets"][key]
                }));
            console.log(tickets);
            this.setState({
                admin: tickets
                });}))
  }

  readTicket(ticketid){

    fetch('/read/'+ ticketid)
    .then((response) => response.json())
    .then(data => {
        console.log(data)

        if(JSON.stringify(data) === JSON.stringify({})){
            console.log("Invalid id")
            this.setState({ result: "Invalid id: " + ticketid,
            flagDisable: false});
        }
        else{
            this.setState({ id: ticketid,
                description: data["description"],
                type: data["type"],
                opened_by: data["opened_by"],
                opened_at: data["opened_at"],
                updated_by: data["updated_by"],
                updated_at:data["updated_at"],
                due_date:data["due_date"],
                result: '',
                flagDisable: true});
        }
    });
  }

  generateTicketObject(){
    let ticket = {
        id: this.state.id,
        description: this.state.description,
        type: this.state.type,
        opened_by: this.state.opened_by,
        opened_at: this.state.opened_at,
        updated_by: this.state.updated_by,
        updated_at: this.state.updated_at,
        due_date: this.state.due_date,
    }
    return JSON.stringify(ticket)
  }
  createTicket(){
    let newticket = this.generateTicketObject()

    console.log("Create Ticket")
    console.log(newticket)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: newticket
    };

    fetch('/create', requestOptions)
        .then(response => response.json()
        .then(data => {
            this.setState({
                id: '',
                description: '',
                type: '',
                opened_by: '',
                opened_at: '',
                updated_by: '',
                updated_at:'',
                due_date:'',
                result: "Your ticket ID is: " + this.state.id,
                flagDisable: false});
            console.log(data);}))
   }

   deleteTicket(id){
    let delticket = {"id": id}
    console.log(delticket)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delticket)
    };

    fetch('/delete', requestOptions)
        .then(response => response.json()
        .then(data => {
            this.setState({
                id: '',
                description: '',
                type: '',
                opened_by: '',
                opened_at: '',
                updated_by: '',
                updated_at:'',
                due_date:'',
                result: "Ticket Deleted: " + id,
                flagDisable: false});
            console.log(data);}))
   }

  updateTicket(){
    let updateTicket = this.generateTicketObject()
    console.log(updateTicket)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: updateTicket
    };

    fetch('/update', requestOptions)
        .then(response => response.json()
        .then(data => {
            console.log("I am back")
            this.setState({
                id: '',
                description: '',
                type: '',
                opened_by: '',
                opened_at: '',
                updated_by: '',
                updated_at:'',
                due_date:'',
                result: "Ticket Updated: " + data["id"],
                flagDisable: false});
            console.log(data);}))
   }

  renderCreateCard(){
    return(
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Ticket</h5>
                <h6 class="card-subtitle mb-2 text-muted">Raise New Issue</h6>
                <h6 class="card-subtitle mb-2 text-muted">{this.state.result}</h6>
                <form class="form-style" onSubmit={this.handleFormSubmit.bind(this)}>
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="ID" value={this.state.id} disabled/>
                    </div>
                    <div class="form-group">
                        <label for="desc">Description {this.state.description}</label>
                        <input type="text" class="form-control" id="desc" placeholder="Enter Details" value = {this.state.description} onChange={this.setDescription.bind(this)}/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="type">Select Criticality of Ticket</label>
                            <select id="type" class="form-control" value = {this.state.type} onChange={this.updateDueDate.bind(this)}>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>Critical</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="dueDate">Due Date</label>
                            <input type="text" class="form-control" id="dueDate" placeholder="Due Date" value = {this.state.due_date} disabled/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="openedBy">Opened By</label>
                            <input type="text" class="form-control" id="openedBy" value = {this.state.opened_by} onChange={this.setOpenedBy.bind(this)} placeholder="Enter Employee Number"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="openedAt">Opened At</label>
                            <input type="text" class="form-control" id="openedAt" placeholder="Opened At" value= {this.state.opened_at} disabled/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="updatedBy">Updated By</label>
                            <input type="text" class="form-control" id="updatedBy" value = {this.state.updated_by} placeholder="Enter Employee Number" disabled/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="updatedAt">Updated At</label>
                            <input type="text" class="form-control" id="updatedAt" placeholder="Updated At" value= {this.state.opened_at} disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <Button class="btn btn-primary" onClick={()=>this.handleFormSubmit()}>Create</Button>
                    </div>
                </form>
            </div>
        </div>
        );
  }


renderUpdateCard(){
    return(
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Ticket</h5>
                <h6 class="card-subtitle mb-2 text-muted">Update Ticket Status</h6>
                <h6 class="card-subtitle mb-2 text-muted">{this.state.result}</h6>
                <form class="form-style">
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="Enter ID" value={this.state.id} onChange={this.setID.bind(this)} disabled={this.state.flagDisable}/>
                    </div>
                    <div class="form-group">
                        <label for="desc">Description</label>
                        <input type="text" class="form-control" id="desc" placeholder="Details" value={this.state.description} onChange={this.setDescription.bind(this)} disabled={!this.state.flagDisable}/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="type">Select Criticality of Ticket</label>
                            <select id="type" class="form-control" value={this.state.type} onChange={this.updateDueDate.bind(this)} disabled={!this.state.flagDisable}>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>Critical</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="dueDate">Due Date</label>
                            <input type="text" class="form-control" id="dueDate" placeholder="Due Date" value = {this.state.due_date} disabled/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="openedBy">Opened By</label>
                            <input type="text" class="form-control" id="openedBy" placeholder="Employee Number" value= {this.state.opened_by} disabled/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="openedAt">Opened At</label>
                            <input type="text" class="form-control" id="openedAt" placeholder="Opened At" value= {this.state.opened_at} disabled/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="updatedBy">Updated By</label>
                            <input type="text" class="form-control" id="updatedBy" placeholder="Enter Employee Number" value={this.state.updated_by} onChange={this.setUpdatedBy.bind(this)} disabled={!this.state.flagDisable}/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="updatedAt">Updated At</label>
                            <input type="text" class="form-control" id="updatedAt" placeholder="Updated At" value= {this.state.updated_at} disabled/>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <Button class="btn btn-primary" onClick={()=>this.handleSearchID()}>Search ID</Button>
                        </div>
                        <div class="form-group col-md-4">
                            <Button class="btn btn-primary" onClick={()=>this.handleUpdateTicket()} disabled={!this.state.flagDisable}>Update</Button>
                        </div>
                        <div class="form-group col-md-4 ">
                            <Button class="btn btn-primary" onClick={()=>this.handleDeleteTicket()} disabled={!this.state.flagDisable}>Delete</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
  }
  renderAdminCard(){

    return(
     <div>
        <p>HELLOOO
        <Editor
            value={this.state.admin}
            onChange={this.handleChange}
        />
        </p>

        <Button class="btn btn-primary" onClick={()=>this.loadAllRecords()}>Load</Button>
      </div>
    );
  }
}
export default Ticket;