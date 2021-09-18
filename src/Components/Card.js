import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://media.giphy.com/media/3ov9jKQbfWvDNu2Z0s/giphy.gif" alt="Loaading.." className="loader"/>
            
            
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column3">
                        {
                          console.log(user)
                          
                        }
                        
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;