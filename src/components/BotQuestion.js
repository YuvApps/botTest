import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const BotQuestion = ({item}) => {

    //const [answers, setAnswers] = useState([])

    const answerPressed = (answerId) => {
        return answerId
    }

    return (
        <View key={item._id} style={{flex:1, position:'absolute', backgroundColor: 'white'}}>
            <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    {item.question}
                </Text>
            </View>
            <View style={{flex:3}}>
                {item.possibleAnswers.map((answer) =>
                    <View key={answer._id} style={{ flexDirection:'row', flex:1, paddingTop: 20 }}>
                        <AntDesign id={answer._id} name="check" size={24} color="black" style={{paddingLeft:20, flex: 1}}/>
                        <TouchableOpacity style={{flex: 6}} onPress={()=> answerPressed(answer._id)}>
                            <Text style={{height: 50}}>
                                {answer.answer}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
}

export default BotQuestion;