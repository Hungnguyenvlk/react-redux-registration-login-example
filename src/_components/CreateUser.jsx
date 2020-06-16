import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {userDetailAction} from '../_actions/users-detail.action'

class CreateUser extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            user : {
                name : '',
                gender : '',
                email : '',
                phone : ''
            },
            submitted : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(111);
        this.setState({ submitted : true});
        const {user} = this.state;
        if (user.name && user.gender && user.email && user.phone) {
            console.log(typeof(user.gender));
        }
    }
    render(){
        const {user ,submitted} = this.state;
        const {creating} = this.props;
        return(
            <form name="form"  onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email"> Email </label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                </div>
                <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password"> Password </label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                </div>
                <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                        <label htmlFor="full_name">Full name</label>
                        <input type="text" className="form-control" name="full_name" value = {user.full_name} onChange={this.handleChange} />
                        {submitted && !user.full_name &&
                            <div className="help-block">Full Name is required</div>
                        }
                </div>
                <div className={'form-group' + (submitted && !user.gender ? ' has-error' : '')}>
                        <input type="radio"  name="gender" value={0} onChange={this.handleChange} />
                        <label htmlFor="male">Male</label> 
                        <input type="radio"  name="gender" value= {1} onChange={this.handleChange} />
                        <label htmlFor="female">Female</label><br/>
                        {submitted && !user.gender &&
                            <div className="help-block"> Gender is required</div>
                        }
                </div>
                <div className={'form-group' + (submitted && !user.address ? ' has-error' : '')}>
                        <label htmlFor="address"> Address </label>
                        <input type="text" className="form-control" name="address" value={user.address} onChange={this.handleChange} />
                        {submitted && !user.address &&
                            <div className="help-block">Address is required</div>
                        }
                </div>
                <div className={'form-group' + (submitted && !user.birthday ? ' has-error' : '')}>
                        <label htmlFor="birthday"> Address </label>
                        <input type="date" className="form-control" name="birthday" value={user.birthday} onChange={this.handleChange} />
                        {submitted && !user.birthday &&
                            <div className="help-block">Address is required</div>
                        }
                </div>
                <div className={'form-group' + (submitted && !user.phone ? ' has-error' : '')}>
                        <label htmlFor="phone"> Phone </label>
                        <input type="tel" className="form-control" name="phone" value={user.phone} onChange={this.handleChange} />
                        {submitted && !user.phone &&
                            <div className="help-block">Phone is required</div>
                        }
                </div>
                <div className="form-group">
                        <button className="btn btn-primary">Create</button>
                        {creating && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/users" className="btn btn-link">Cancel</Link>
                    </div>
            </form>
        )
    }
}
const mapSate = (state) =>{
    const {creating} = state.userDetail;
    return {creating};
}
const actionCreators = {
    create: userDetailAction.createUser
}
 
export default connect(mapSate,actionCreators)(CreateUser)