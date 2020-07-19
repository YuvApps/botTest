import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BotContext';
import BotGenerator from "./src/screens/BotGenerator";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator(
    {
      Index: IndexScreen,
      Generator: BotGenerator,
      Result: ResultScreen
    },
    {
      initialRouteName: 'Index',
      defaultNavigationOptions: {
        title: 'Bot Test',
      },
    }
);

const App = createAppContainer(navigator);

export default () => {
  return (
      <Provider>
        <App />
      </Provider>
  );
};
