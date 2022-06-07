import React, {Component} from "react";
import {Container, Col, Row, Card} from "react-bootstrap";

class Certification extends Component{
    state = {
        certifications: [
            {id: 0,
            url:"https://www.credly.com/badges/f85bab15-f438-40b8-a2a0-94245495bca3/public_url" , 
            title: "microsoft-certified-azure-fundamentals"},
            {id: 1, 
            url:"https://www.credly.com/badges/0c335ffd-ee1f-4739-8c8c-bdc79f2bec83/public_url" , 
            title: "microsoft-certified-azure-ai-fundamentals"},
            {id: 2, 
            url:"https://www.credly.com/badges/2b03514c-4dd9-434d-b805-f0c57433eea0/public_url" , 
            title: "microsoft-certified-azure-data-fundamentals"},
            {id: 3, 
            url:"https://www.credly.com/badges/14238efc-781d-4d4a-baf4-bb3551aa8f6f/public_url" , 
            title: "microsoft-certified-azure-ai-fundamentals"}
        ]
     };

    render(){
        return (
            <>
            <Container>
            <Row xs={1} md={4} className="g-4">
            {this.state.certifications.map(item => (
                <Col>
                <Card style={{marginTop: "10vh"}}>
                    <Card.Img variant="top" src={require("../../img/certifications/"+item.title+".png")}/>
                </Card>
                </Col>
            ))}
            </Row>

                 
                
            </Container>
           
            </>
    
        )

    }
    
}



export default Certification;