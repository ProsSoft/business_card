import React, { PureComponent } from 'react';
import FaChevronCircleDown from "react-icons/lib/fa/chevron-circle-down";
import FaChevronCircleUp from "react-icons/lib/fa/chevron-circle-up";

import Hero from '../common/Hero';
import { careers } from '../../constants';

const { hero, offers } = careers;

const getStateKey = i => `is${i}offerDescriptionOpened`;

export default class VacancyGroupButton extends PureComponent {

  state = offers.reduce((o, acc, i) => ({
    ...acc,
    [getStateKey(i)]: false,
  }), {});

  onClick = (e) => {
    e.preventDefault();
    const { target: { id } } = e;
    const key = getStateKey(id);
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    const scrollToElemId = 'header';
    return (
      <div className="page careers">
        <Hero
          {...{
            ...hero,
            scrollToElemId,
          }}
        />
        <h3
          id={scrollToElemId}
          className="section__title"
        >
          Careers
        </h3>
        <section className="content">
          {offers.map(({ vacancy, description, duties }, index) => {
            const isOpen = this.state[getStateKey(index)];
            const icon = ()=>isOpen ? FaChevronCircleDown : FaChevronCircleDown
            return (
              <div className="item" key={index}>
                <button
                  id={index}
                  onClick={this.onClick}
                >
                  {vacancy}
                  {isOpen ?
                    <FaChevronCircleUp id={index} />
                    :
                    <FaChevronCircleDown id={index} />
                  }}
                </button>
                <div className={`description ${isOpen ? 'opened' : ''}`}>
                  {description}
                </div>
              </div>
            )
          })
          }
        </section>
      </div>);
  }
};
