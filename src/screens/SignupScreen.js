import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  useEffect(() => {
    return navigation.addListener('onWillBlur', {clearErrorMessage});
  }, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Signin instead"
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: 250,
  },
});
