import React, { useContext, useEffect } from 'react'
import { Context as BotContext } from "../context/BotContext"
import { View, Text } from "react-native"
import BotQuestion from "../components/BotQuestion";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const BotGenerator = ({ navigation }) => {

    const { state, getBotQuest } = useContext(BotContext)

    useEffect(() => {
        getBotQuest()
    }, []);

    const defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
            flex: 1,
            //justifyContent: 'center'
        }
    };

    const onSubmitSteps = () => {
        navigation.navigate("Result")
    };

    const progressStepsStyle = {
        activeStepIconBorderColor: '#686868',
        activeLabelColor: '#686868',
        activeStepNumColor: 'white',
        activeStepIconColor: '#686868',
        completedStepIconColor: '#686868',
        completedProgressBarColor: '#686868',
        completedCheckColor: '#4bb543',
        topOffset: -20
    };

    const buttonTextStyle = {
        color: '#686868',
        fontWeight: 'bold'
    };
    if (state[0] === undefined) {
        return <View><Text>Loading</Text></View>
    } else {
        let ProgressJSX = []
        let counter = 0
        for (let item of state) {
            counter = counter + 1
            ProgressJSX.push(
                <ProgressStep
                    key={item._id}
                    label={`Q #${counter}`}
                    scrollViewProps={defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    onSubmit={onSubmitSteps}
                >
                    <View>
                        <BotQuestion item={item}/>
                    </View>
                </ProgressStep>
            )
        }
        return (
            <View style={{flex: 1, paddingTop: 80, paddingLeft:20, paddingRight:20, backgroundColor: 'white'}}>
                <ProgressSteps {...progressStepsStyle}>
                    {ProgressJSX}
                </ProgressSteps>
            </View>
        )
    }
}

export default BotGenerator;