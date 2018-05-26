import react, {component} from 'react';
import {dimensions,platform} from 'react-native';
import {createStarcknavigator, createBottomTabNavigator, TabNavigator, StackNavigator} from 'react-navigation';
import { Icom} from 'react-native-elements';

import notas from './screens/Notas';
import materias from './screens/materia';
import novasnotas from'./screens/novasnotas';
import perfil from './screens/perfil';
import sobre from './screens/sobre';
let screen = dimensions.get('window');
export const Tabs = cretaBottomTabNavigator({
    'notas':{
        screen: Notas,
        navigationOptions: {
            TabBarlabel: 'notas',
            tabBarIcom: ({tintcolor}) => <Icom name="list" type="antyp" size={28} color= {tintcolor} />
        },
    },
    'sobre':{
            screen: sobre,
            navigationOptions: {
                TabBarlabel: 'sobre',
                tabBarIcom: ({tintcolor}) => <Icom name="list" type="antyp" size= {28} color= {tintcolor} />
            },
        },
            'materias':{
                screen: materias,
                navigationOptions: {
                    TabBarlabel: 'materias',
                    tabBarIcom: ({tintcolor}) => <Icom name="list" type="antyp" size= {28} color= {tintcolor} />
                },
            },
                'novasnotas':{
                    screen: novasnotas,
                    navigationOptions: {
                        TabBarlabel: 'novasnotas',
                        tabBarIcom: ({tintcolor}) => <Icom name="list" type="antyp" size= {28} color= {tintcolor} />
                    },
                },
                    'perfil':{
                        screen: perfil,
                        navigationOptions: {
                            TabBarlabel: 'perfil',
                            tabBarIcom: ({tintcolor}) => <Icom name="list"  type="antyp" size= {28} color= {tintcolor} />
                        },
                    }
                });
