import React, { useContext } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import CompleteRegistration from './pages/auth/CompleteRegistration';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './context/AuthContext';
import ForgotPassword from './pages/auth/ForgotPassword';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './Components/PublicRoute';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import SearchResults from './pages/SearchResults';

function App() {
  const { state } = useContext(AuthContext);
  const { user } = state;

const wsLink = new WebSocketLink({
  uri: `${process.env.REACT_APP_SERVER_URL.replace('http', 'ws')}/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      authtoken: user? user.token : ''
    }
  }
});
  const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
  });

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authtoken: user? user.token : ''
      }
    }
  });

  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <Navbar></Navbar>
        <ToastContainer />
        <div className="container-fluid p-5">
          <Switch>
            <PublicRoute exact path="/login">
              <Login></Login>
            </PublicRoute>
            <PublicRoute exact path="/register">
              <Register></Register>
            </PublicRoute>
            <PublicRoute exact path="/complete-register">
              <CompleteRegistration />
            </PublicRoute>
            <PublicRoute exact path="/forgot-password">
              <ForgotPassword/>
            </PublicRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/create-post">
              <CreatePost/>
            </PrivateRoute>
            <PrivateRoute path="/edit-post/:_id">
              <EditPost/>
            </PrivateRoute>
            <Route path="/users/:username">
              <SingleUser/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/posts/:_id">
              <ViewPost/>
            </Route>
            <Route path="/search/:keyword">
              <SearchResults/>
            </Route>
            <Route path="/token">
              {state && state.user && state.user.token}
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
