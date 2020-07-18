import React, { PureComponent } from 'react';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import FaChevronCircleUp from 'react-icons/lib/fa/chevron-circle-up';
import OfferContent from './offerContent'
import Hero from '../common/Hero';
import { careers } from '../../constants';
import { scrollTo } from "../../util";

const { hero, offers } = careers;

const getStateKey = i => `is${i}offerDescriptionOpened`;

export default class VacancyGroupButton extends PureComponent {

  state = offers.reduce((acc, o, i) => ({
    ...acc,
    [getStateKey(i)]: false,
  }), {});

  onClick = (e) => {
    e.preventDefault();
    const { target: { id } } = e;
    const { state } = this;
    const key = getStateKey(id);
    const newState = { ...state };
    Object.keys(state).forEach((oKey) => {
      newState[oKey] = oKey === key ? !state[key] : false;
    });
    this.setState(newState, () => scrollTo(0));
  };

  render() {
    const scrollToElemId = 'header';
    return (
      <div className="page careers">
        <Hero
          {...{
            ...hero,
            scrollToElemId: () => scrollTo(scrollToElemId),
          }}
        />
        <h3
          id={scrollToElemId}
          className="section__title"
        >
          Careers
        </h3>
        <section className="content">
          <div className="page__description">
            Join the team of the top-rank motivated professionals
            and
            engage with the most exciting projects in the field today!
          </div>
          {offers.map(({ vacancy, isVacancyOpen, ...offerProps }, index) => {
            const isOpen = this.state[getStateKey(index)];

            return (
              <div className={isVacancyOpen ? 'item ' : 'closed_vacancyDescription'} key={index} >
                <button
                  id={index}
                  className={ isOpen  ? 'selected' : ''}
                  onClick={this.onClick}
                >

                  {vacancy}
                  {isOpen ?
                    <FaChevronCircleUp id={index} />
                    :
                    <FaChevronCircleDown id={index} />
                  }
                </button>
                <OfferContent {...{ isOpen, isVacancyOpen, ...offerProps }} />
              </div>
            )
          })
          }
        </section>
      </div>);
  }
};
