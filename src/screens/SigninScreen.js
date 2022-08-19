import React, {useContext, useEffect} from 'react';
import {NavigationEvents} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(Context);

  useEffect(() => {
    return navigation.addListener('onWillBlur', {clearErrorMessage});
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Signup instead"
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 250,
  },
});
