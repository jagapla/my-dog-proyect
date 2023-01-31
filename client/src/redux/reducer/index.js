
const initialState = {
  allDogs: [],
  dogsFilter: [],
  detail: [],
  tempers: [],
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_DOGS": 
    //const response = action.payload
//console.log(response)
      return {
       ...state,
       allDogs: action.payload,
       //dogsFilter: action.payload 
      }
    case "GET_DOGS_BY_NAME": 
    //const result = [...state.allDogs].filter(d => d.name.includes(action.payload));
//console.log(result)
      return {
        ...state,
        allDogs: action.payload,
        //dogsFilter: result
      }
    case "GET _DETAIL": {
      const ids = [...state.allDogs].filter(d => d.id.includes(action.payload))
  console.log(ids)
      return {
        ...state,
        detail: ids
      }
    }
    default:
      return {
        ...state
      }
  }
   
}
