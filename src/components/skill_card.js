import {Card, Col, Row, Container} from "react-bootstrap";


function SkillCard(props){
    return (
      <Container  class="mt-4">
    <Card style={{ textAlign: "left", marginTop: "5vh" }}>
        <Card.Header style={{ backgroundColor: props.color }}>
          <Row><Col lg="2"> {props.period}</Col>

          <Col> <Card.Title>{props.title}</Card.Title></Col>
          <Col lg="3" style={{textAlign:"right"}}>
            {props.tools}
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
      </Card></Container>
      )




}


export default SkillCard;