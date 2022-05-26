import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

function Schedule() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://ruz.fa.ru' }}
    />
  );
}

function Portal() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://org.fa.ru' }}
    />
  );
}

function Campus() {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://campus.fa.ru' }}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const icons = {
    'Расписание': 'clock',
    'Портал': 'file-document',
    'Кампус': 'book-open'
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={icons[route.name]} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#00716F',
          tabBarInactiveTintColor: '#adadad',
        })}
      >
        <Tab.Screen name="Расписание" component={Schedule} />
        <Tab.Screen name="Портал" component={Portal} />
        <Tab.Screen name="Кампус" component={Campus} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
