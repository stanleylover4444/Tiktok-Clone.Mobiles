// UI/index.js
import React from 'react';
import { View, TouchableOpacity, Alert, Text, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native'; // Nhập useNavigation

const NotificationSrceen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstylesmall} >Welcome notificationSrceen </Text>
    </View>

  );
};

export default NotificationSrceen;
