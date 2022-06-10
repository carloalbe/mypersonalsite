import React, {Component} from "react";
import WorkCard from "../work_card";
import { shuffleArray } from "../../utils";


class Work extends Component{
    state = {
        works: [
            {id: 0, title:"Cloud Azure Consultant" , 
            text:"ICT consultant for the Cloud Azure Platform, with administration roles on architectuture and infrastructures.", 
            period: "2022-", institution: "Cluster Reply, Azure IT"},
            {id: 1, title:"Traineeship ICT Consulence" , 
            text:"Realization of a <b>FinOps</b> tool for the showback: automated warning and dashboarding in an Azure environment, to manage the cloud costs.", 
            period: "2021-2022", institution: "Cluster Reply, Azure IT"},
            {id: 2, title:"Academic Tutor",
             text: "Orientation of student of the first year and didactic help",
             period: "2020", institution: "Department of Informatic, Unipi"},
            {id: 3, title: "Speedy Pizza",
            text: "Pizza delivery to customers’ houses, driving car",
             period: "2020-2021", institution: "Civico 3 Pizzeria"}
        ],
        colors : shuffleArray(["ffadad","ffd6a5","fdffb6","caffbf","9bf6ff","a0c4ff","bdb2ff","ffc6ff"]).map(c => ('#'.concat(c)))//['#FF499E','#D264B6','#A480CF','#779BE7','#49B6FF']
    };


    render(){
        return (
            <>
            <div>
                {
                    this.state.works.map(work => (
                         <WorkCard
                            key={work.id}
                            period={work.period}
                            color={this.state.colors[work.id]}
                            institution={work.institution}
                            text={work.text}
                            title={work.title}
                         />
                    ))
                }
                
                </div>
            </>
        )
    }
}
;

export default Work;