import {LogBox, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext';

LogBox.ignoreLogs(['Remote debugger']);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signin" component={SigninScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginFlow"
          component={LoginFlow}
          options={{headerShown: false}}
        />
        <Stack.Group>
          <Stack.Screen
            name="MainFlow"
            component={MainFlow}
            options={{headerShown: false}}
          />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
