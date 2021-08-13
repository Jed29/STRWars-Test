import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default function DashboardContent(props) {
    return (
    <>   
      <Col sm={12} md={4} lg={3}>
        <Card style={{ width: '15rem', height:"17rem" , margin:"5px"}}>
          <Card.Body className="text-center">
            <Card.Title>{props.vehicle.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.vehicle.model}</Card.Subtitle>
            <Card.Text>
              {props.vehicle.manufacturer}
            </Card.Text>
            <Card.Text>
              Crew : {props.vehicle.crew}
            </Card.Text>
            <Card.Text>
              Cargo Capacity : {props.vehicle.cargo_capacity}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>    
    </>    
    )
}
