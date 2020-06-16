import React from 'react'
import {withRouter, Route,Switch} from 'react-router-dom'
import UserDetail from '../_components/UserDetail';
import CreateUser from '../_components/CreateUser';
import UserList from '../_components/UserList'

class UserPage extends React.Component{
    render(){
        console.log(123);
        const { match } = this.props;
        return(        
            <div className='user-page'>
                <Switch>
                    <Route exact path={`${match.path}`} component={UserList}></Route>
                    <Route eaxct path={`${match.path}/create`} component={CreateUser}></Route>
                    <Route path={`${match.path}/:id`} component={UserDetail}></Route>    
                </Switch>
            </div>
        )
    }
}

export default withRouter(UserPage)