/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types,react/jsx-no-bind,no-return-assign,no-param-reassign,prefer-destructuring,consistent-return */
import React from 'react';
import Hero from '../common/Hero';
import Services from './Services';
import Solutions from './Solutions';
import Contacts from './Contacts';
import { scrollTo } from '../../util';
import { landing } from '../../constants';
import Carousel from '../Carousel/index';

class Landing extends React.Component {
  state = {}; 
  componentWillReceiveProps({ match: { params: { section } } }) {
      scrollTo(section);
  }
  componentDidMount() {
    
    const { match: { params: { section } } } = this.props;
    scrollTo(section, true);
    this.setState({ didNotMount: false })
    window.addEventListener('scroll' , this.handleScroll);

  }
  handleScroll() {
      const lastScrollY = window.scrollY;
      let service;
      let solutions;
      let contact;
      let serviceDOMNode;
      let solutionDOMNode;
      let contactDOMNode;
      const serviceComponentNavMenu     = document.getElementsByClassName('nav__header-link');
      const ServiceComponent = document.getElementsByClassName('services');
      const SolutionsComponent = document.getElementsByClassName('solutions');
      const ContactComponent = document.getElementsByClassName('contact');
   
      Object.values(ServiceComponent).forEach( value => {
        service = value.offsetTop-200;
           });
      
      Object.values(SolutionsComponent).forEach( value => {
        solutions = value.offsetTop-200;
           });
      
      Object.values(ContactComponent).forEach( value => {
        contact  = value.offsetTop;
            });
          
      for(let {} in serviceComponentNavMenu){
         serviceDOMNode  = serviceComponentNavMenu[0];
         solutionDOMNode = serviceComponentNavMenu[1];
         contactDOMNode =  serviceComponentNavMenu[4];   
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
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="landing" >
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

 