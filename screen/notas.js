import react, {component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default class Notas extends component{
    render() {
        return (
            <View style ={styles.coutainer}>
            <text style= {style.title}>
            notas
            </text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        justfycontent: 'center',
        alignItens: 'center',
        backgroundcolor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAling: 'center',
        margin: 10,
    }
});