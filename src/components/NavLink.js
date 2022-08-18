import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from './Spacer';

const NavLink = ({text, routeName}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});
