import React from 'react';
import { connect } from 'react-redux';
import OrderListContainer from './orders/order_list_container';
import MenuContainer from './menu/menu_container';
import NavBar from './orders/navbar';
import DisplayContainer from './orders/display_container';
import { Switch, Route, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { receiveUser } from '../actions/user_actions';
// import { HashRouter } from 'react-router-dom';

class App extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     user: this.props.user,
     login: false
   };

   this.goToMerchantLogin = this.goToMerchantLogin.bind(this);
   this.goToCustomerView = this.goToCustomerView.bind(this);
   this.login = this.login.bind(this);
   this.renderApp = this.renderApp.bind(this);
 }

 componentWillReceiveProps(nextProps) {
   this.setState({
     user: nextProps.user,
   });
 }

 renderApp() {
   if(this.state.user == "merchant" && this.state.login) {
     return (<MerchantLogin login={this.login}/>);
   } else if (this.state.user) {
     return (<AppView user={this.state.user}/>);
   } else {
     return (<Login goToCustomerView={this.goToCustomerView} goToMerchantLogin={this.goToMerchantLogin}/>);
   }
 }

 goToMerchantLogin(e) {
   e.preventDefault();

   this.setState({
     login: true,
   });

   this.props.login("merchant");
 }

 goToCustomerView(e) {
   e.preventDefault();

   this.props.login("customer");
 }

 login(e) {
   e.preventDefault();

   this.setState({
     login: false,
   });
 }

 render() {
   return this.renderApp();
 }
}

const mapStateToProps = (state) => ({
 user: state.user.current
});

const mapDispatchToProps = (dispatch) => ({
 login: (user) => dispatch(receiveUser(user)),
});

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(App));

const AppView = ({user}) => (
   <div>
     <NavBar user={user}/>
     <Switch>
       <Route path="/menu" component={MenuContainer}/>
       <Route path='/display' component={DisplayContainer}/>
       (<Route component={OrderListContainer}/>)
     </Switch>
   </div>
);

const Login = ( {goToMerchantLogin, goToCustomerView }) => (
 <div className="login-screen">
   <div className="login-buttons">
     <button onClick={goToMerchantLogin}>Merchant</button>
     <button onClick={goToCustomerView}>Customer</button>
   </div>
 </div>
);

const MerchantLogin = ({login}) => (
 <div className="login-screen">
   <div className="login-form">
     <div>Password</div>
     <input type="password" placeholder="*********"/>
     <button onClick={login}>Login</button>
   </div>
 </div>
);
