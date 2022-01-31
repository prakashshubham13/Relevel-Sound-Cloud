import { get_Data, loading_Data } from '../type';

const initialStore = {
  loading: false,
  errror: false,
  musicData: []
};

const musicReducer = (state = initialStore, action ) => {
  switch(action.type)
  {
      case get_Data:
          return {
              ...state,
              loading:false,
              musicData: action.payload
          }
      case loading_Data:
        return{
          ...state,
          loading:true
        }    
      default:
          return state;    
  }
};

export default musicReducer;