import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchVehicle,setLoading,setError} from '../store/action'
import DashboardContent from '../components/DashboardContent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Dashboard() {
  const dispatch = useDispatch()
  const vehicles = useSelector(state=>state.vehicles)
  const loading = useSelector(state=>state.loading)
  useEffect(()=>{
    dispatch(fetchVehicle())
  },[dispatch])

  if(loading){
    return(
      <div className="w-screen h-screen flex justify-center items-center">
        <img src="http://ift.tt/1ODyXDn" alt="" />
      </div>
    )
  }
  return (
    <div className="w-screen h-screen block justify-center items-center">
      <h1 style={{textAlign:'center'}}>Vehicles</h1>
      <Container>
        <Row>
          {
            vehicles.map(vehicle=>{
              return(<DashboardContent vehicle={vehicle} key={vehicle.id}/>)
            })
          }
        </Row>
      </Container>)
    </div>
  )
}
