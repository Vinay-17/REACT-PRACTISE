import React from "react";

class UserClass extends React.Component{

   constructor (props) {
        super(props),
        this.state = {
            users : []
        }
      }
       
 async  componentDidMount () {
    const  data = await fetch ("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    this.setState({
        users:(json)
    })
 }
render () {
     const { users } = this.state;
   const  {name , location} = this.props
    return(
        <>
        <div className="user-class">
          <h1>Users List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
        </div>
        </>
    )
}

} 
 export default UserClass;