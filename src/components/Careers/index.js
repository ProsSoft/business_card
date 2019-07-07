import React, { PureComponent } from 'react';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import FaChevronCircleUp from 'react-icons/lib/fa/chevron-circle-up';
import Check from 'react-icons/lib/fa/check';
import Plus from 'react-icons/lib/fa/plus';

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
          {offers.map(({ vacancy, ...offerProps }, index) => {
            const isOpen = this.state[getStateKey(index)];
            return (
              <div className="item" key={index}>
                <button
                  id={index}
                  className={isOpen ? 'selected' : ''}
                  onClick={this.onClick}
                >
                  {vacancy}
                  {isOpen ?
                    <FaChevronCircleUp id={index} />
                    :
                    <FaChevronCircleDown id={index} />
                  }
                </button>
                <OfferContent {...{ isOpen, ...offerProps }} />
              </div>
            )
          })
          }
        </section>
      </div>);
  }
};

const OfferContent = ({ isOpen, agenda, requirements, stack, mission, offering }) => (
  <div className={`description ${isOpen ? 'opened' : ''}`}>
    {agenda}
    <p className="title">{requirements.title}</p>
    <div className="flex-container">
      <ul>
        {requirements.list.map((item, i, list) =>
          <li key={item}>
            {list.length - 1 === i ? <Plus /> : <Check />}
            {item}
          </li>
        )}
      </ul>
      <p className="title">{stack.title}</p>
      <p>{stack.text}</p>
    </div>
    <p className="title">{mission.title}</p>
    <p>{mission.text}</p>
  </div>
);
