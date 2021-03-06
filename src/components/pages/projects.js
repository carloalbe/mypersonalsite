import React, {Component} from "react";
import SkillCard from "../skill_card";
import { shuffleArray } from "../../utils";

import { Container, Row } from "react-bootstrap";


class Projects extends Component{
    state = {
        skills : [{'period': '2021',
        'title': 'Web Scraping',
        'tools': 'Python, Urllib, Selenium ',
        'text': 'My first Python library available on pipy is a  <a href="https://pypi.orgprojectpytipeee">tipeee scraper</a>. On my github some codes to <a href="https://github.com/carloalbe/SCI-projecttreemastercodescraping">scrape google patents</a>. See <a href="https://github.com/carloalbe/TripAdvisor-Tuscany-Restaurant-Social-Network-Analysistreemasterdata_collection">here</a> my crawler for Trip Advisor with scrapy.</a>\n',
        'id': 0},
       {'period': '2021',
        'title': 'Text Analytics',
        'tools': 'Python, gensim, spacy, nltk ',
        'text': 'Basic knowledge of the main Python libraries for text mining, and application of some data analysis technique such as <a href="https://topicmodeling.000webhostapp.comtopics.html"> topic modelling in this report</a>.</a>\n',
        'id': 1},
       {'period': '2021',
        'title': 'Network Analysis',
        'tools': 'networks, Gephi, Cytoscope',
        'text': 'Usage of libraries and tools for building and analysing complex network, knowledge on the main algorithms of the graph theory. </a>\n',
        'id': 2},
       {'period': '2020',
        'title': 'Data Visualization',
        'tools': 'Plotly, Microstrategy, Tableau, Power BI',
        'text': 'Charts, plots, colors, user interactions in my <a href="https://sthimarkearthquakemap.000webhostapp.com">interactive dashboard</a>. <a href="https://community.microstrategy.comsfcservlet.shepherddocumentdownload0694W00000AMhA8QALoperationContext=S1">Download</a> my Microstrategy dossier or see  <a href="https://public.tableau.comprofilecarlo.alberto.carrucciu#!vizhomeMC1_16027903908960Foglio1">here</a> my Tableau. Experience with Python and R graphic libraries.</a>\n',
        'id': 3},
       {'period': '2020',
        'title': 'Extract, Transform & Load',
        'tools': 'SQL-Server and related tools',
        'text': 'Extration of data from files (CSV, JSON). Design of datamarts with sql-server Management studio or Azure; usage of SSIS package for Visual Studio, and SSAS package for OLAP cubes building.  <a href="https://github.com/carloalbe/Laboratory-of-Data-Science</a> {Repository here</a>. Ability with MDX query language, DAX and with Excel power pivot. Experience with <a href="https://github.com/carloalbe/Pyspark-Spotify-Analysis">pyspark</a> for distributed computing and <a href="https://github.com/carloalbe/statistical-Methods-for-Data-Science">R for statistical models</a>.</a>\n',
        'id': 4},
       {'period': '2019-',
        'title': 'Machine Learning',
        'tools': 'Python, pandas, scikitLearn, Keras, etc..',
        'text': '<a href="https://github.com/carloalbe/Data-Mining">Here my notebooks</a> including neural networks and advanced classification techniques, clustering, regressors and forecasting methods. Experience (<a href="https://github.com/carloalbe/Pyspark-Spotify-Analysis">see here</a>).</a>\n',
        'id': 5},
       {'period': '2018',
        'title': '2D3D CAD',
        'tools': 'Autodesk Inventor',
        'text': 'Design a <a href="https://github.com/carloalbe/CAD-taper-lock-bushing">manufacturing cycle</a>  for a mechanical component and representation using manual design and CAD programs.</a>\n',
        'id': 6},
       {'period': '2017-',
        'title': 'Web Programming',
        'tools': 'HTML, CSS, Javascript, Vue, PHP, D3, Bootstrap',
        'text': 'Front-end user friendly development. My <a href="https://trumpvskim.000webhostapp.com">game</a> in HTML5,  available also at <a href="https://trumpvskimjongun.000webhostapp.com">in a version with PHP login and database mysql</a>.. Realization of a professional <a href="https://sthimarkearthquakemap.000webhostapp.com">interactive dashboard</a> for data visualization. Knowledge of web marketing, cookies setting and Google Analytic. </a>\n',
        'id': 7},
       {'period': '2017-2021',
        'title': 'Linear Programming',
        'tools': 'AMPL, Python, Gurobi, Excel Solver',
        'text': ' Ability in modeling real problems into mathematical models. Knowledge of the main solvers (Gurobi, Cplex). See my <a href="https://github.com/carloalbe/WIA-logistics-AMPL">AMPL project work</a> and my  <a href="https://github.com/carloalbe/A-nurse-scheduling-problem-solved-with-Gurobi"> resolution of a hierarchical problem using gurobipy API </a>. </a>\n',
        'id': 8},
       {'period': '2015-2020',
        'title': 'Business Process Management',
        'tools': 'BPMN, Signavio, accounting',
        'text': 'Financial Accounting, balance sheet; KPI and leverages; PERT  & CPT for Project management; depth knowledge of BPMN and Petri theory. Interest in process mining.</a>\n',
        'id': 9},
       {'period': '---------',
        'title': 'Reportage',
        'tools': 'Excel, Word, Power point, LaTex. Gimp',
        'text': 'Textual and visual arrangement of various arguments. Great knowledge of the Office package. Find <a href="https://drive.google.comdrivefolders1U84DXiP1YGyvpIaifE-XJsutWStBYgOe">here</a> some works.</a>\n',
        'id': 10}],
    colors : shuffleArray(["ffadad","ffd6a5","fdffb6","caffbf","9bf6ff","a0c4ff","bdb2ff","ffc6ff"]).map(c => ('#'.concat(c)))//['#FF499E','#D264B6','#A480CF','#779BE7','#49B6FF']
};


    render(){

    return (<>
     <Container  style={{marginBottom:"5vh"}}>
     {
        this.state.skills.map(skill => (
                <SkillCard
                key={skill.id}
                period={skill.period}
                color={this.state.colors[(skill.id)% this.state.colors.length ]}
                text={skill.text}
                title={skill.title}
                tools={skill.tools}
                />
        ))
    }

     </Container>
    
    </>)
    }
 }


export default Projects;