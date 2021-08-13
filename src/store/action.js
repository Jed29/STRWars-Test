export function setVehicle(payload){
  return{
    type:'SETVEHICLE',payload
  };
}

export function setPeople(payload){
  return{
    type:'SETPEOPLE',payload
  };
}

export function setLoading(input){
  return {type:'SETLOADING', payload:input}
}

export function setError(input){
  return {type:'SETERROR', payload:input}
}

export function fetchVehicle(payload){
  return (dispatch)=>{
    dispatch(setLoading(true))
    fetch('https://swapi.dev/api/vehicles')
    .then(response=>response.json())
    .then(vehicle=>{
      dispatch(setVehicle(vehicle.results))
      dispatch(setLoading(false))
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

export function fetchPeople(payload){
  return (dispatch)=>{
    fetch("https://swapi.dev/api/people")
    .then(response=>response.json())
    .then(people=>{
      dispatch(setPeople(people.results))
      dispatch(setLoading(false))
    })
    .catch(err=>{
      console.log(err)
    })
  }
}