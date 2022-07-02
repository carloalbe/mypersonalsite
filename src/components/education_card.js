import {Card, Col, Container, Row} from "react-bootstrap";


function EducationCard(props){
    return (
      <Container >

     
    <Card style={{textAlign: "left", marginTop: "5vh"}}> 
        <Card.Header style={{ backgroundColor: props.color }}>
          <Row><Col lg="2"> {props.period}</Col>

          <Col> <Card.Title>{props.title}</Card.Title></Col>
          <Col lg="2" style={{textAlign:"right"}}>
             voto: {props.voto}
             </Col>
        </Row></Card.Header>
        <Card.Body style={{ backgroundColor: props.color, opacity: "75%" }}>
          <Card.Text>
            <Row>
          <Col lg="2"></Col>
          <Col>
          <b>{props.institution}</b>
          </Col>
          <Col lg="2" style={{textAlign:"right"}}></Col>
          </Row>
          <Row>
          <Col lg="3"/> 
          <Col>{props.text}</Col>
          <Col lg="2"/> 

          </Row>
          
       </Card.Text>
        </Card.Body>
      </Card> </Container>
      )




}


export default EducationCard;
