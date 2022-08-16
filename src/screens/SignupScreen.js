import {StyleSheet, View} from 'react-native';
import {Button, Text, Input} from '@rneui/base';
import React, {useState} from 'react';
import Spacer from '../components/Spacer';

const SignUpScreen = ({navigation}) => {
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
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
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
