import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default Tareas = ({texto}) => {
    return (
        <View style={estilasos.cartas}>
            <View style={estilasos.cosoIzquierdo}>
                <View style={estilasos.elCosoIzquierdo}></View>
            <Text style={estilasos.chambasTexto}>{texto} </Text>
        </View>
        </View>
    );
}

const estilasos = StyleSheet.create ({
    cartas:{
        borderRadius: 7,
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: .7,
    },
    cosoIzquierdo:{
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    elCosoIzquierdo:{
        marginRight: 13,
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 3,
    },
    chambasTexto:{
        fontSize: 15,
    },
})