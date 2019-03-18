const INITIAL_STATE={
    username:"Manoj Agarwal"
}

export default (states=INITIAL_STATE,action)=>
{
    switch(action.type)
    {
        case 'CHANGEUSERNAME':
        return ({
            ...states,
            username:action.payload
        })
        default:
               return states;
               break;
               
    }


}