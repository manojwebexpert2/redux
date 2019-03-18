export function changeState(updatedUserName)
{
return  dispatch=>{
   dispatch({type:'CHANGEUSERNAME',payload:updatedUserName});
}
}