import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.VehicleInfo}>VehicleInfo</Text>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}></Image>
        </View>
    )
}

export default Header
