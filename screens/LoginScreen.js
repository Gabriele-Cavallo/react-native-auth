import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../UI/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Authetincation failed!', 'Could not log you in. Please chack your credentials again or try again later!');
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Logging you in..." />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;