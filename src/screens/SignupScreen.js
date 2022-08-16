import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Button, Text, Input} from '@rneui/base';
import React, {useState, useContext} from 'react';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SignUpScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({email, password})} />
      </Spacer>
      <TouchableOpacity>
        <Text style={styles.link}>Already Have Account? Sign In instead</Text>
      </TouchableOpacity>
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
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
  link: {
    color: 'blue',
  },
});
