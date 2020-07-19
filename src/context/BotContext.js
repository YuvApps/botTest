import createDataContext from './createDataContext';
import botGetter from "../api/botGetter";

const BotReducer = (state, action) => {
  switch (action.type) {
    case 'get_bot_quest':
      return getBotQuestion(action.payload, 6);
    default:
      return state;
  }
};

const getBotQuestion = (question_array, num_of_question) => {
  if (num_of_question > question_array.length) {
    return question_array
  }

  let question_set = new Set();
  while(question_set.size < num_of_question) {
    let question_num = Math.floor(Math.random() * question_array.length + 1)
    question_set.add(question_num)
  }

  let new_question_set_array = Array.from(question_set).sort(function(a, b){return a - b})

  let new_question_array = []
  for(let index = 0; index < new_question_set_array.length; index++){
    new_question_array.push(question_array[new_question_set_array[index] - 1])
  }
  return new_question_array
}

const getBotQuest = dispatch => {
  return async () => {
    const response = await botGetter.get('/question');

    dispatch({ type: 'get_bot_quest', payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  BotReducer,
  { getBotQuest },
  []
);
