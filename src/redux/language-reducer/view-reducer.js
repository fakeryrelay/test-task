const initialState = {
  language: 'ru',
  theme: 'default'
}

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_LANGUAGE': {
      return {
        ...state,
        language: action.value
      }
    }
    default: 
      return state
  }
}