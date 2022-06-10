import { Container } from "react-bootstrap";
import logo from "../../img/foto cv croped.png";
import { Row,Col } from "react-bootstrap";
import { Component } from "react";



class Home extends Component{

state = {
        mouseX: 0,
        mouseY: 0,
        dX: 0,
        dY:0,
        rotation: 0,
        faceLeft: 0,
        faceTop: 0,
};
handleMouseMove = event => {
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY
     });
      var face = document.getElementById("bigFace");
      this.state.faceLeft = face.offsetLeft+ face.offsetWidth/2;
      this.state.faceTop = face.offsetTop + face.offsetHeight/2;
      var dX = event.clientX - this.state.faceLeft;
      var dY = event.clientY - this.state.faceTop;
      this.state.dX = dX;
      this.state.dY = dY;
      var degree = (Math.atan(- dX / dY) * 180 / Math.PI);
      if (dY > 0){degree += 180}
      this.state.rotation = degree;

      face.style.transform = "rotate("+degree+"deg)" 
    
  };
render(){

   

    return (
       <div  onMouseMove={(ev)=> this.handleMouseMove(ev)} style={{backgroundColor:'black',backgroundImage:"linear-gradient(to bottom, grey,black)", minHeight:"70vh", paddingTop:"10vh"}}>
           <Container > <Row>
<Col><img id="bigFace" src={logo} width="40%" style={{margin:"10vh"}}/></Col>
<Col><h1 style={{color:"white", textAlign:'left'}}>Hi, here you can discover about me, my works ad my interests!!! <br/><br/>
Enjoy the visit and do not esitate to contact me for collaboration or other stuffs...

{}
</h1>
</Col>
           </Row></Container>
    </div>
    )
}
}
export default Home;