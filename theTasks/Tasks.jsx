import {View, Text, Platform, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Keyboard, ScrollView, Switch} from "react-native"
import Tareas from "../reUsables/Tareas"
import { useState } from "react"

const Tasks = () => {
    //Esto es pal switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    //Estas variables son para las tareas
    const [tarea, ponerTarea] = useState();
    const [partesDeTareas, ponerPartesDeTareas] = useState([]);
    const agregarTarea = () => {
        Keyboard.dismiss()
        ponerPartesDeTareas([...partesDeTareas, tarea])
        ponerTarea(null)
    }
        const quitarTarea = (index) => {
            let masTareas = [...partesDeTareas]
            masTareas.splice(index, 1)
            ponerPartesDeTareas(masTareas)
    }
    return(
        <View style={{backgroundColor: isEnabled ? '#0a1423' : '#ede5ed', flex: 1, }}>
            <StatusBar barStyle = "light-content" backgroundColor = "black" translucent = {true}/>
            <ScrollView style={estilasos.textoContenedor}>
            <Text style={{color: isEnabled ? 'white' : 'black', fontSize: 35, textAlign: 'center', fontWeight: 'bold',}}>Tareas del día</Text>
                <Switch style={{left: Platform.OS === 'ios' ? 230 : 0}}
                    trackColor={{ false: "white", true: "#613636" }}
                    thumbColor={isEnabled ? "orange" : "#1d668b"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /><Text style={{color: isEnabled ? 'white' : 'black', fontSize: 10, bottom: 16, bottom: 11, top: Platform.OS === 'ios' ? 9 : 0, left: Platform.OS === 'ios' ? 231 : 300}}>Colores</Text>
                {
                    partesDeTareas.map((tarea, index) => {
                       return (
                        <TouchableOpacity key={index} onPress={() => quitarTarea(index)}>
                            <Tareas texto={tarea} />
                        </TouchableOpacity>
                       )
                    })
                }
                {/* Estos textos sirven para dar espacio entre ellos porque sino, la ultima tarea se hunde. Es para que salga a flote jeje.*/}
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
        </ScrollView>
        <KeyboardAvoidingView style={estilasos.teclao}>
            <TextInput style={estilasos.textoGhost} placeholder="Rífate con una tarea" value={tarea} onChangeText={text => ponerTarea(text)}></TextInput>
            <TouchableOpacity onPress={() => agregarTarea()}>
                <View style={{right: Platform.OS === 'ios' ? 28 : 0, fontSize: Platform.OS === 'android' ? 20 : 0}}>
                    <Text style={estilasos.anadir}>Añadir</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    )}
const estilasos = StyleSheet.create({
    
    textoContenedor: {
        textAlign: 'center',
        paddingTop: 60,
        paddingHorizontal: 10,
    },
    textoGhost: {
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        borderRadius: 20,
        borderWidth: .7,
        borderColor: 'black',
        height: 45,
        width: 220,
        left: 10,
        bottom: 20,
    },
    anadir:{
        backgroundColor: '#fff',
        borderWidth: .7,
        borderColor: 'black',
        borderRadius: 20,
        padding: 12,
        left: 260,
        bottom: 20,
        position: 'absolute'
    },
})
export default Tasks