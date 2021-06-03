import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../assets/icon.png')}></Image>
            <Image style={styles.icon} source={require('../../assets/icon.png')}></Image>
        </View>
    )
}

export default Header
