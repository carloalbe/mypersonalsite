import React, {Component} from "react";


class Certification extends Component{
    state = {
        certifications: [
            {id: 0, 
            url:"https://www.credly.com/badges/f85bab15-f438-40b8-a2a0-94245495bca3/public_url" , 
            path: "microsoft-certified-azure-fundamentals"},
            {id: 1, 
            url:"https://www.credly.com/badges/0c335ffd-ee1f-4739-8c8c-bdc79f2bec83/public_url" , 
            path: "microsoft-certified-azure-ai-fundamentals"},
            {id: 2, 
            url:"https://www.credly.com/badges/2b03514c-4dd9-434d-b805-f0c57433eea0/public_url" , 
            path: "microsoft-certified-azure-data-fundamentals"},
            {id: 3, 
            url:"https://www.credly.com/badges/14238efc-781d-4d4a-baf4-bb3551aa8f6f/public_url" , 
            
            path: "microsoft-certified-azure-ai-fundamentals"}
        ]
     };

    render(){
        return (
            <>
            <div>
                {this.state.certifications.map( cert=> (
                    <a href={cert.url}><img src={require("../../img/certification/"+cert.path+".png")}/></a>
                )
                    )}
                
            </div>
           
            </>
    
        )

    }
    
}



export default Certification;