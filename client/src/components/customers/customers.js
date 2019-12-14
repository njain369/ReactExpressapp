import React from 'react';
import './customers.css';
import axios from 'axios';
import {BrowserRouter as Router,Route,Link,Switch}from 'react-router-dom'
class Customers extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            customers:[],
            file:[],
            text:"",
            sqldata:[],
            name:''
        }
    }

    
      
      
      
    handleSubmit = e=>{
        alert("Hii I am in handleSubmit");  
        e.preventDefault();
        var data=e.target.name.value;
        // const data = e.target.name.value;
        console.log(data);

        fetch("/users",{
          method:"post",
          headers: {'Content-Type':'application/json'},
          body:{
              da:data
          },
       }).then(response=>response.json())
       .then(body=>console.log(body))
       .catch(error=>{throw error;})
     
    }
    componentDidMount(){
        fetch('/api/customers')
        .then(res=>res.json())
        .then(customers=>this.setState({customers},()=>console.log('Customers fetched..',customers)));
        fetch('/download')
        .then(res=>res.json())
        .then(text=>this.setState({text}))

        fetch('/sqltest')
        .then(res=>res.json())
        .then(sqldata=>this.setState({sqldata}))
    
     
    }

    // componentDidMount(){
    //     fetch('/download')
    //     .then(res=>res.json())
    //     .then(text=>this.setState({text},()=>console.log('Text has been fetched..',text)));
    // }
     
     
    

    
  render (){
    return (<div>
    <h2>Customers</h2>
    <ul>
        {this.state.customers.map(customers =>
        <li key={customers.id}>{customers.firstName} {customers.lastName}</li>)}
        <li>{this.state.text}</li>
        {this.state.sqldata.map(sqldata=>
        <li>firstName={sqldata.Name}</li>)}
    </ul>

    <form onSubmit={this.handleSubmit} method="post">
        <label>Username:</label>
        <input type="text" name="name"/>
        <br />
    <input type="submit" value="Submit"/>
    </form>
    <Router>
        <div>
            <ul>
                <li>
                   
                    <a href="./uploadfold/customer.xlsx"download>Click here to download</a>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/download">
               
                </Route>
            </Switch>

        </div>
    </Router>
    
    </div>
    );
    }
}
export default Customers;
