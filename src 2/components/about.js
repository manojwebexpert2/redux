import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.username}</h1>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}


function mapStateToProps(state)
{
    return({username:state.root.username})

}
function mapDispatchToProps ()
{
    return({})
}

export default connect(mapStateToProps,mapDispatchToProps)(About);

//export default About;
