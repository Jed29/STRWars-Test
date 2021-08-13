const initialState ={
    vehicles:[],
    peoples:[],
    loading:false,
    error:null
}

export default function reducer(state= initialState, action){
  const {type,payload} = action
  if(type ==='SETVEHICLE'){
    return {...state, vehicles:payload}
  }else if(type === 'SETLOADING'){
    return {...state, loading:payload}
  }else if(type ==='SETERROR'){
    return {...state, error:payload}
  }else if(type === 'SETPEOPLE'){
    return {...state, peoples:payload}
  }
  return state
}