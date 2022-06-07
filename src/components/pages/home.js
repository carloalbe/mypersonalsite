import { Container } from "react-bootstrap";
import logo from "../../img/foto cv croped.png";
import { Row,Col } from "react-bootstrap";
import { Component } from "react";



class Home extends Component{

state = {
        mouseX: 0,
        mouseY: 0,
        rotation: 20
};
handleMouseMove = event => {
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY
     });
      var face = document.getElementById("bigFace");
      var dX = event.clientX - face.offsetLeft+ face.offsetWidth/2;
      var dY = event.clientY - face.offsetTop + face.offsetHeight/2;
      
      var modifier = 0 
      if (dY > 0){modifier = 90} else{modifier = 0}
      this.state.rotation = degree + 180;
      var degree = (Math.atan(dX / dY) * 360 / (2*Math.PI))+modifier;
      face.style.transform = "rotate("+degree+"deg)"

    

      
    
  };
render(){

   

    return (
       <div  onMouseMove={(ev)=> this.handleMouseMove(ev)} style={{backgroundColor:'black',backgroundImage:"linear-gradient(to bottom, grey,black)", minHeight:"70vh", paddingTop:"10vh"}}>
           <Container > <Row>
<Col><img id="bigFace" src={logo} width="40%"/></Col>
<Col><h1 style={{color:"white", textAlign:'left'}}>Hi, here you can discover about me, my works ad my interests!!! <br/>
Enjoy the visit and don not esitate to contact me for collaboration or other stuffs...
{this.state.rotation}
</h1>
</Col>
           </Row></Container>
    </div>
    )
}
}
export default Home;