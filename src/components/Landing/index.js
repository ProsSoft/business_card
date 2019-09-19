/* eslint-disable react/prop-types,react/jsx-no-bind,no-return-assign,no-param-reassign,prefer-destructuring,consistent-return */
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../common/Hero';
import Services from './Services';
import Solutions from './Solutions';
import Contacts from './Contacts';
import { scrollTo } from '../../util';
import { landing, service } from '../../constants';
import Carousel from '../Carousel/index';

class Landing extends React.Component {
  state = {}; 
  componentWillReceiveProps({ match: { params: { section } } }) {
   
    scrollTo(section);
  }
  componentDidMount() {
    console.log(this.props);
    const { match: { params: { section } } } = this.props;
    scrollTo(section, true);
    this.setState({ didNotMount: false })
    window.addEventListener('scroll' , this.handleScroll);

  }
  handleScroll() {
         let lastScrollY = 0;
      lastScrollY = window.scrollY;
      let service = '';
      let solutions ='';
      let contact = '';
      let serviceDOMNode = '';
      let solutionDOMNode = '';
      let contactDOMNode = '';
      let servComp     = document.getElementsByClassName('nav__header-link');
      let sectionTitle = document.getElementsByClassName('section__title');
      let contactTitle = document.getElementsByClassName('contact__title');
      
      for (let i in contactTitle){
        contact  = contactTitle[0].offsetTop;
          }
      for (let i in sectionTitle){
        service  = sectionTitle[0].offsetTop - 200;
        solutions = sectionTitle[1].offsetTop - 200; 
           }
      for(let i in servComp){
         serviceDOMNode  = servComp[0];
         solutionDOMNode = servComp[1];
         contactDOMNode =  servComp[4];   
      }   
    //Service
      if(lastScrollY > service  ){
          serviceDOMNode.classList.add('nav__header-link--active');
          } else if(lastScrollY < service ) {            
            serviceDOMNode.classList.remove('nav__header-link--active')
          } 
   //Solution
      if(lastScrollY > solutions){
        serviceDOMNode.classList.remove('nav__header-link--active');
        solutionDOMNode.classList.add('nav__header-link--active');
            } else if(lastScrollY < solutions) {
            solutionDOMNode.classList.remove('nav__header-link--active');
            }
    //Contact  
    if(lastScrollY >(contact-service)){
      solutionDOMNode.classList.remove('nav__header-link--active');
      contactDOMNode.classList.add('nav__header-link--active');
          } else if(lastScrollY < (contact-service )) {
            contactDOMNode.classList.remove('nav__header-link--active');
          }       
  }
  componentWillUnmount() {
    window.scrollTo(0, 0);    
  }
  
  render() {    
    const { didNotMount } = this.state;
    const { hero, contactUs } = landing;
    return (
      <div className="landing" ref ={(input) => {this.inputLand = input}} >
        <Hero {...{ ...hero, didNotMount }} />
        <Services  />
        <Solutions />
        <Carousel />
        <Contacts {...contactUs} />
      </div>
    );
  }
}

export default Landing;

 