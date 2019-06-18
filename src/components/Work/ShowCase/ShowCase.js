 import React, { Component } from 'react';
 import './ShowCase.scss';
 import mixitup from 'mixitup';
 import $ from 'jquery';
 import Header from '../../UI/Header/Header';


 class ShowCase extends Component {
     componentDidMount() {
         const firstTab = document.getElementsByClassName('filter')[0];
         this.posFilterBar(firstTab);
         var containerEl = document.querySelector('.showcase-container');
         mixitup(containerEl);
     }

     changeTab = e => {
         this.posFilterBar(e.target);
     };

     posFilterBar = element => {
         var origin = $(element)
             .parent()
             .offset().left;
         var pos = $(element).offset().left;
         $('.float-bar').css({
             left: pos - origin,
             width: $(element).innerWidth()
         });
         $('.float-bar .row').css('left', (pos - origin) * -1);
     };

     render() {
         const cards = projects.map((prj, idx) => {
             return (
                 <div key={idx} className={['mix', ...prj.category].join(' ')}>
                     <img src={prj.thumb} alt="project thumbnail" />
                     <div className="links">
                        {prj.inprogress ? 
                            <p>In progress</p> :
                            <>
                                <a href={prj.github} target="_blank" rel="noopener noreferrer">Github</a>
                            </>
                        }
                    </div>
                 </div>
             );
         });
        //  const tabs = Object.keys(categories).map(key => {
        //      return (
        //          <div key={key} className="filter" data-filter={`.${categories[key]}`} onClick={this.changeTab}>
        //              {categories[key].toUpperCase()}
        //          </div>
        //      );
        //  });
         return (
             <div className="showcase">
                 <div style={{margin:'0'}} className="filter-wrap">
                     <div className="flex row">
                         <div className="filter" data-filter="all" onClick={this.changeTab}>
                             
                         </div>
                         {/* {tabs} */}
                     </div>
                     <div className="float-bar">
                         {/* <div className="flex row">
                             <div className="filter" data-filter="all">
                                 ALL
                             </div>
                              {tabs} 
                         </div> */}
                     </div> 
                 </div>
                 <Header className="header" text="Projects" />
                 <div className="showcase-container">{cards}</div>
             </div>
         );
     }
 }

 export default ShowCase;

 const categories = {
     janvier: 'January',
     fevrier: 'February',
     mars: 'March',
     avril: 'April',
     mai: 'May',
 };

 const projects = [
  
   
    //  {
    //     thumb: '../../assets/img/work/todos.png',
    //     github: 'https://github.com/itsmetambui/feedor',
    //     name: 'To do list',
    //     categoryDisplay: 'HTML/CSS/ReactJS',
    //     category: [categories.mai]
    //  },
     {
        thumb: '../../assets/img/work/laMoelle.png',
        github: 'https://github.com/itsmetambui/feedor',
        name: 'La Moelle',
        categoryDisplay: 'HTML/CSS/ReactJS',
        category: [categories.mai]
     },
     {
        thumb: '../../assets/img/work/AllezCine.png',
        github: 'https://github.com/itsmetambui/vutachat',
        name: 'AllezCiné',
        categoryDisplay: 'HTML/CSS/VueJS',
        category: [categories.avril]
     },
     {
        thumb: '../../assets/img/work/happydrink.png',
        github: 'https://github.com/itsmetambui/feedor',
        name: 'Happy Drink',
        categoryDisplay: 'HTML/CSS/ReactJS',
        category: [categories.mai]
     },
     {
        thumb: '../../assets/img/work/nonni.png',
        github: 'https://github.com/itsmetambui/trillio',
        name: 'Nonni',
        categoryDisplay: 'HTML/CSS',
        category: [categories.fevrier]
     },
     {
        thumb: '../../assets/img/work/Wikipedia.png',
        github: 'https://github.com/itsmetambui/spacexplorer',
        name: 'Wikipedia Viewer',
        categoryDisplay: 'HTML/CSS',
        category: [categories.fevrier]
     },
     {
        thumb: '../../assets/img/work/timbernerslee.png',
        github: 'https://github.com/itsmetambui/trillio',
        name: 'Tim Berners Lee',
        categoryDisplay: 'HTML/CSS',
        category: [categories.fevrier]
     },
     {
        thumb: '../../assets/img/work/404page.png',
        github: 'https://github.com/itsmetambui/spacexplorer',
        name: '404 Error',
        categoryDisplay: 'HTML/CSS',
        category: [categories.fevrier]
     },
     {
        thumb: '../../assets/img/work/cookieclicker.png',
        github: 'https://github.com/itsmetambui/react-demo-store',
        name: 'Cookie Clicker',
        categoryDisplay: 'HTML/CSS/JavaScript',
        category: [categories.mars]
     },
     {
        thumb: '../../assets/img/work/CV.png',
        github: 'https://github.com/itsmetambui/natours',
        name: 'CV HTML',
        categoryDisplay: 'HTML/CSS',
        category: [categories.janvier]
     },

 ];
