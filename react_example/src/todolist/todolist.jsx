import React, {Component} from "react";
class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[],
            firstName:"",
            lastName:"",
            mobile:"",
        };
    }
    handleInputChange=(field)=>(e)=>{
        this.setState({
            [field]:e.target.value
        });
    };
    
    addTodo =()=>{
        if(this.state.firstName.trim()=="" || this.state.lastName.trim()=="" || this.state.mobile.trim()=="") return;
        const newtodo={
            id:Date.now(),
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            mobile:this.state.mobile,
            completed:false
        };
        this.setState((prevState)=>({
            todos:[...prevState.todos,newtodo],
            firstName:"",
            lastName:"",
            mobile:"",
        }));
    };
    
    deleteTodo =(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.filter(todo => todo.id !== id),
            selectedTodo: prevState.selectedTodo && prevState.selectedTodo.id === id ? null : prevState.selectedTodo
        }));
    };

    viewTodo =(id)=>{
        const todo = this.state.todos.find(t => t.id === id);
        this.setState({
            selectedTodo: todo
        });
    };

    render(){
        const {todos,firstName,lastName,mobile,selectedTodo}=this.state;
        return(
           <>
           <br />
           <br />
           <input type="text" value={firstName} 
           onChange={this.handleInputChange('firstName')} placeholder="Enter a first name" />
           <br />
           <br />
           <input type="text" value={lastName} 
           onChange={this.handleInputChange('lastName')} placeholder="Enter a last name" />
           <br />
           <br />
           <input type="text" value={mobile} 
           onChange={this.handleInputChange('mobile')} placeholder="Enter a mobile number" />
           <br />
           <br />
           <button onClick={this.addTodo}>Add</button>
           <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        {todo.firstName}
                        <button onClick={() => this.viewTodo(todo.id)}>view</button>
                        <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))
            }
            </ul>
           {selectedTodo && (
               <div>
                   <p>Last Name: {selectedTodo.lastName}</p>
                   <p>Mobile: {selectedTodo.mobile}</p>
               </div>
           )}
           
           </>
        )
    }
}
export default Todolist;