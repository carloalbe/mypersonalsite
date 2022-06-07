import { Container, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';


function MyFooter(){
    return (<>
    
        <footer variant="dark" className="text-center text-white realtive-bottom" style={{backgroundColor:" black",margin:"auto",bottom:0,left:0,position:"relative", width:"100%"}}>
  {/* Grid container */}
  <div variant="dark" className="container pt-4">
    {/* Section: Social media */}
    <section>


 
   
    <div className="row" style={{margin:"auto"}}>
      <Col/>
    <SocialIcon 
    url="https://twitter.com/alberts1996" 
    bgColor="grey"
    style={{margin:"10px"}}/>

    <SocialIcon 
    url="https://medium.com/@carloalbertocarrucciu" 
    bgColor="grey"
    style={{margin:"10px"}}/>

    <SocialIcon 
    url="https://github.com/carloalbe" 
    bgColor="grey"
    style={{margin:"10px"}}
    />
    <SocialIcon 
    url="mailto:carloalbertocarrucciu@gmail.com" 
    bgColor="grey"
    style={{margin:"10px"}}/>
    <Col/>
    
    
</div>


    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}

  {/* Copyright */}
  <div className="text-secondary text-grey p-3" style={{backgroundColor: "dark"}}>
    © 2020 Copyright:
    <a className="text-secondary" href="/"> Carlo Alberto Carrucciu</a>
  </div>
  {/* Copyright */}
</footer>
  
    
</> )
}



export default MyFooter;