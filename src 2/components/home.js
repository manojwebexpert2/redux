import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeState} from '../store/action/action';
class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:''
        }
        this.onchangeHandler=this.onchangeHandler.bind(this);
    }
    onchangeHandler(e)
    {
        this.setState({name:e.target.value});
    }

    _changeData(){
        console.log('event called');
    }

    /* when we click on button it will go function mapDispatchToProps and check changeStateToReducer, it will call action */
    _changeState(){
        console.log('_changeState called');
        //changeState();
        //this.props.changeStateToReducer();
        this.props.changeStateToReducer(this.state.name);
    }

    render() {
        return (
            <div>
                <h1>Hello World {this.props.username}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <Link to='/about'>Go to About</Link>
                <button onClick={this._changeState.bind(this)}>Change State</button>
                <input type="text" name="name" value={this.state.name} onChange={this.onchangeHandler} />
            </div>
        )
    }
}


function mapStateToProps(state)
{
    return({username:state.root.username})

}
function mapDispatchToProps (dispatch)
{
    return({
    changeStateToReducer:(updatedUserName)=>
    {
        dispatch(changeState(updatedUserName));    /*this is action component calling */
    }    
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);

