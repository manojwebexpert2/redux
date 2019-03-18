import React from 'react';
class About extends React.Component{
 render(props)
 {
    let users={
        1:{name:'manoj'},
        2:{name:"chhavi"},
        3:{name:"monty"}
    }
    let requiredUser=users[this.props.match.params.id];

console.log(requiredUser);

     return(
        <h1>About Us page: {requiredUser.name}</h1>

     )   
}
}
export default About;