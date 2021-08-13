import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default function PeopleContent(props) {
    return (
    <>   
    <Col sm={12} md={4} lg={3}>
      <Card style={{ width: '15rem', height:"17rem" , margin:"5px"}}>
        <Card.Body className="text-center">
          <Card.Title>{props.people.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Height: {props.people.height}</Card.Subtitle>
          <Card.Text>
            Mass : {props.people.mass}
          </Card.Text>
          <Card.Text>
            hair color : {props.people.hair_color}
          </Card.Text>
          <Card.Text>
            eye color : {props.people.eye_color}
          </Card.Text>
          <Card.Text>
            gender : {props.people.gender}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>    
    </>    
    )
}
