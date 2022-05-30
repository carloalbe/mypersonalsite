import {Card, Col, Row} from "react-bootstrap";


function WorkCard(props){
    return (
    <Card style={{ margin: "3rem 10rem 3rem 10rem", textAlign: "left" }}>
        <Card.Header style={{ backgroundColor: props.color }}>
          <Row><Col lg="2"> {props.period}</Col>

          <Col> <Card.Title>{props.title}</Card.Title></Col>
          <Col lg="3" style={{textAlign:"right"}}>
            {props.institution}
             </Col>
        </Row></Card.Header>
        <Card.Body style={{ backgroundColor: props.color, opacity: "75%" }}>
          <Card.Text>
            <Row>
          <Col lg="2"></Col>
          <Col  dangerouslySetInnerHTML={{__html: props.text}}>
          </Col>
          <Col lg="2" style={{textAlign:"right"}}></Col>
          </Row>
         
          
       </Card.Text>
        </Card.Body>
      </Card>
      )




}


export default WorkCard;
