import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import OktaSignInWidget from './OktaSignInWidget';


 const LoginWidget = ({config}) => {
 
    const { oktaAuth, authState } = useOktaAuth();

    const onSuccess = (token) => {
      oktaAuth.handleLoginRedirect(token)
    }
  
    const onError = (err) => {
      // console.log('sing in error',err);
    };
  
    if(!authState) {
      return (
       <div> 
        <h1>Loading ....</h1>
       </div>
      )
    }
  
    return authState.isAuthenticated ? 
    <Redirect to={{pathname: '/'}} />
    :
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
};

export default LoginWidget;

