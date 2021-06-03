import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.carName}>Tesla</Text>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $70,000</Text>
            </View>
        </View>
    );
};

export default CarItem;