import React, {Component} from "react";
import SkillCard from "../skill_card";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};


class Projects extends Component{
    state = {
        skills : [{'period': '2021',
        'title': 'Web Scraping',
        'tools': 'Python, Urllib, Selenium ',
        'text': 'My first Python library available on pipy is a  <a href="httpspypi.orgprojectpytipeee">tipeee scraper</a>. On my github some codes to <a href="httpsgithub.comcarloalbeSCI-projecttreemastercodescraping">scrape google patents</a>. See <a href="httpsgithub.comcarloalbeTripAdvisor-Tuscany-Restaurant-Social-Network-Analysistreemasterdata_collection">here</a> my crawler for Trip Advisor with scrapy.</a>\n',
        'id': 0},
       {'period': '2021',
        'title': 'Text Analytics',
        'tools': 'Python, gensim, spacy, nltk ',
        'text': 'Basic knowledge of the main Python libraries for text mining, and application of some data analysis technique such as <a href="httpstopicmodeling.000webhostapp.comtopics.html"> topic modelling in this report</a>.</a>\n',
        'id': 1},
       {'period': '2021',
        'title': 'Network Analysis',
        'tools': 'networks, Gephi, Cytoscope',
        'text': 'Usage of libraries and tools for building and analysing complex network, knowledge on the main algorithms of the graph theory. </a>\n',
        'id': 2},
       {'period': '2020',
        'title': 'Data Visualization',
        'tools': 'Plotly, Microstrategy, Tableau, Power BI',
        'text': 'Charts, plots, colors, user interactions in my <a href="httpssthimarkearthquakemap.000webhostapp.com">interactive dashboard</a>. <a href="httpscommunity.microstrategy.comsfcservlet.shepherddocumentdownload0694W00000AMhA8QALoperationContext=S1">Download</a> my Microstrategy dossier or see  <a href="httpspublic.tableau.comprofilecarlo.alberto.carrucciu#!vizhomeMC1_16027903908960Foglio1">here</a> my Tableau. Experience with Python and R graphic libraries.</a>\n',
        'id': 3},
       {'period': '2020',
        'title': 'Extract, Transform & Load',
        'tools': 'SQL-Server and related tools',
        'text': 'Extration of data from files (CSV, JSON). Design of datamarts with sql-server Management studio or Azure; usage of SSIS package for Visual Studio, and SSAS package for OLAP cubes building.  <a href="httpsgithub.comcarloalbeLaboratory-of-Data-Science</a> {Repository here</a>. Ability with MDX query language, DAX and with Excel power pivot. Experience with <a href="httpsgithub.comcarloalbePyspark-Spotify-Analysis">pyspark</a> for distributed computing and <a href="httpsgithub.comcarloalbestatistical-Methods-for-Data-Science">R for statistical models</a>.</a>\n',
        'id': 4},
       {'period': '2019-',
        'title': 'Machine Learning',
        'tools': 'Python, pandas, scikitLearn, Keras, etc..',
        'text': '<a href="httpsgithub.comcarloalbeData-Mining">Here my notebooks</a> including neural networks and advanced classification techniques, clustering, regressors and forecasting methods. Experience (<a href="httpsgithub.comcarloalbePyspark-Spotify-Analysis">see here</a>).</a>\n',
        'id': 5},
       {'period': '2018',
        'title': '2D3D CAD',
        'tools': 'Autodesk Inventor',
        'text': 'Design a <a href="httpsgithub.comcarloalbeCAD-taper-lock-bushing">manufacturing cycle</a>  for a mechanical component and representation using manual design and CAD programs.</a>\n',
        'id': 6},
       {'period': '2017-',
        'title': 'Web Programming',
        'tools': 'HTML, CSS, Javascript, Vue, PHP, D3, Bootstrap',
        'text': 'Front-end user friendly development. My <a href="httpstrumpvskim.000webhostapp.com">game</a> in HTML5,  available also at <a href="httpstrumpvskimjongun.000webhostapp.com">in a version with PHP login and database mysql</a>.. Realization of a professional <a href="httpssthimarkearthquakemap.000webhostapp.com">interactive dashboard</a> for data visualization. Knowledge of web marketing, cookies setting and Google Analytic. </a>\n',
        'id': 7},
       {'period': '2017-2021',
        'title': 'Linear Programming',
        'tools': 'AMPL, Python, Gurobi, Excel Solver',
        'text': ' Ability in modeling real problems into mathematical models. Knowledge of the main solvers (Gurobi, Cplex). See my <a href="httpsgithub.comcarloalbeWIA-logistics-AMPL">AMPL project work</a> and my  <a href="httpsgithub.comcarloalbeA-nurse-scheduling-problem-solved-with-Gurobi"> resolution of a hierarchical problem using gurobipy API </a>. </a>\n',
        'id': 8},
       {'period': '2015-2020',
        'title': 'Business Process Management',
        'tools': 'BPMN, Signavio, accounting',
        'text': 'Financial Accounting, balance sheet; KPI and leverages; PERT  & CPT for Project management; depth knowledge of BPMN and Petri theory. Interest in process mining.</a>\n',
        'id': 9},
       {'period': '---------',
        'title': 'Reportage',
        'tools': 'Excel, Word, Power point, LaTex. Gimp',
        'text': 'Textual and visual arrangement of various arguments. Great knowledge of the Office package. Find <a href="httpsdrive.google.comdrivefolders1U84DXiP1YGyvpIaifE-XJsutWStBYgOe">here</a> some works.</a>\n',
        'id': 10}],
    colors : ["ffadad","ffd6a5","fdffb6","caffbf","9bf6ff","a0c4ff","bdb2ff","ffc6ff"].map(c => ('#'.concat(c)))//['#FF499E','#D264B6','#A480CF','#779BE7','#49B6FF']
};


    render(){

    return (<>
     <div>
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

     </div>
    
    </>)
    }
 }


export default Projects;