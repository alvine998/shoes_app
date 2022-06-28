import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import normalize from 'react-native-normalize';

const Tab = createBottomTabNavigator();

export function MyTabs({active, setActive}) {
    return (
        <Tab.Navigator  screenOptions={{ headerShown: false }}>
            <Tab.Screen  name="Home" component={Home} options={{ tabBarLabel: "Beranda", tabBarIcon: () => (<Icon name="home" size={26} />)}} />
            <Tab.Screen name="Bid" component={Home} options={{ tabBarLabel: "Pesanan", tabBarIcon: () => (<Icon name="clipboard-list"  size={26} />) }} />
            <Tab.Screen name="Scan" component={Home} options={{ tabBarLabel: "Scan", tabBarIcon: () => (<Icon name="qrcode"  size={35} />) }} />
            <Tab.Screen name="Promo" component={Home} options={{ tabBarLabel: "Promo", tabBarIcon: () => (<Icon name="ticket-alt"  size={26} />) }} />
            <Tab.Screen name="Akun" component={Home} options={{ tabBarLabel: "Akun", tabBarIcon: () => (<Icon name="user"  size={26} />)}}/>
        </Tab.Navigator>
    );
}