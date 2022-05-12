import EducationCard from "../education_card";
import React, {Component} from "react";


class Education extends Component{
    state = {
        educations: [
            {id: 0, title:"SM.Sc. in Data Science and Business Informatics" , 
            text:"	http://www.ingegneriagestionale.unipi.it/index.php/it/", 
            voto: "110", period: "2019-2022", institution: "University of Pisa"},
            {id: 1, title:"Eramsus in Management Engineering",
             voto: "Erasmus", period: "2018", institution: "Universitatea Transilvania"},
            {id: 2, title: "Bachelor Degree in Management Engineering", 
            text: "	http://www.ingegneriagestionale.unipi.it/index.php/it/" ,           
            voto: "95", period: "2015-2019", institution: "University of Pisa"}
        ],
        colors : ["ffadad","ffd6a5","fdffb6","caffbf","9bf6ff","a0c4ff","bdb2ff","ffc6ff","fffffc"].map(c => ('#'.concat(c)))//['#FF499E','#D264B6','#A480CF','#779BE7','#49B6FF']
    };

    render(){
        return (
            <>
            <div>
                {
                    this.state.educations.map(education => (
                         <EducationCard
                            key={education.id}
                            voto={education.voto}
                            period={education.period}
                            color={this.state.colors[education.id]}
                            institution={education.institution}
                            text={education.text}
                            title={education.title}
                         />
                    ))
                }
                
                </div>
            </>
    
        )

    }
    
}



export default Education;