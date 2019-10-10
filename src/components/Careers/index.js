import React, { PureComponent } from 'react';
import FaChevronCircleDown from 'react-icons/lib/fa/chevron-circle-down';
import FaChevronCircleUp from 'react-icons/lib/fa/chevron-circle-up';
import Check from 'react-icons/lib/fa/check';
import Plus from 'react-icons/lib/fa/plus';
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
      // eslint-disable-next-line react/jsx-filename-extension
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
          {offers.map(({ vacancy, isVacancyOpen , ...offerProps }, index) => {
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
                <OfferContent {...{ isOpen, isVacancyOpen, ...offerProps }} />
              </div>
            )
          })
          }
        </section>
      </div>);
  }
};

const OfferContent = ({ isOpen, isVacancyOpen, agenda, requirements, stack, mission, offering, conclusion }) => (
  <div>
      {!isVacancyOpen? <div className="vacancy_closed">Closed</div> : null}
      <div className={`description ${isOpen ? 'opened' : ''}`}>
        {agenda}
        <div className="flex-box">
          <p className="title">{offering.title}</p>
          <ul>
            {offering.list.map(item =>
              <li key={item}>
                <Check />
                {item}
              </li>
            )}
          </ul>
        </div>
        <div className="flex-box">
          <p className="title">{requirements.title}</p>
          <ul>
            {requirements.list.map((item, i, list) =>
              <li key={item}>
                {list.length - 1 === i ? <Plus /> : <Check />}
                {item}
              </li>
            )}
          </ul>
        </div>
        <p className="title">{stack.title}</p>
        <p>{stack.text}</p>

        <p className="title">{mission.title}</p>
        <p>{mission.text}</p>

        <p className="title">{conclusion.title}</p>
        <p>{conclusion.text}</p>
      </div>
  </div>
);
