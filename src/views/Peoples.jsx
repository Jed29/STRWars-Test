import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchPeople,setLoading,setError} from '../store/action'
import PeoplesContent from '../components/PeoplesContent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Peoples() {
    const dispatch = useDispatch()
    const peoples = useSelector(state=>state.peoples)
    const loading = useSelector(state=>state.loading)
    const error = useSelector(state=>state.error)
    useEffect(()=>{
    dispatch(fetchPeople())
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
    <h1 style={{textAlign:'center'}}>Peoples</h1>
    <Container>
    <Row>
        {
          peoples.map(people=>{
            return(<PeoplesContent people={people} key={people.id}/>)
          })
        }
    </Row>
    </Container>)
  </div>
  )
}
