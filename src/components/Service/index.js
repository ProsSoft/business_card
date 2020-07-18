/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
 

import Hero from '../common/Hero';

import { service, landing, imagesUrl } from '../../constants';

const { services } = landing;

const { hero } = service;

class Service extends Component {
  state = {
    src: 0,
    classForText: 0,
    deltaY: 0
  };
 downImage = () => {
   console.log('downImage');
   this.state.src == 6 ? this.state.src = 6 : this.setState({
     src: this.state.src + 1,
     classForText: this.state.classForText + 1
   })
 }
 upImage = () => {
   console.log('up');
   this.state.src == 0 ? this.state.src = 0 : this.setState({
     src: this.state.src - 1,
     classForText: this.state.classForText - 1
   })
 }


  render() {
    const { match: { params: { type }} } = this.props;
    const { title } = services.find(({link}) => link === `/${type}`);
    const { src, timestamp,classForText, deltaY: prevDeltaY } = this.state;

    return (
      <div className="service">
        <Hero
          {...hero}
          noBack
          title1={title}
        />
        <div className ="serviceImage-container">
              <img
                id="service-stage-img"
                src={`${imagesUrl}forWeb/stage${src}.jpg`}
                onWheel={({ deltaY }) => {
                  const x = window.scrollX;
                  const y = window.scrollY;
                  window.onscroll = () => window.scrollTo(x, y);
                  const newTimestamp = performance.now();
                  this.setState({ timestamp: newTimestamp, deltaY: deltaY + prevDeltaY });
                  if (newTimestamp - timestamp > 170) {
                    console.log('works', prevDeltaY);
                    const isDeltaYDecreased = this.state.deltaY < 0;
                    if (!isDeltaYDecreased && src) {
                      this.setState({ 
                        src: src - 1,
                        classForText: classForText-1
                       })
                    } else if (isDeltaYDecreased && src < 6) {
                      this.setState({ 
                        src: src + 1,
                        classForText: classForText + 1 
                      })
                    }
                    this.setState({ deltaY: 0 });
                  }
                }}
                onMouseOut= {() => {
                  window.onscroll = () => {};
                }}              
              /> 
          <div className="serviceImage-chevron_down" onClick={this.downImage}>
               <i className = "fa fa-chevron-down fa-2x"></i>
          </div>
          <div className="serviceImage-chevron_up" onClick={this.upImage}>
              <i className="fa fa-chevron-up fa-2x"></i>
          </div>
 
       </div> 
      </div>);
  }
}

export default Service;
