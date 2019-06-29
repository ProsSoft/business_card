import React, { PureComponent } from 'react';
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
    const { target: { id } } = e;
    const key = getStateKey(id);
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    return (
      <div className="page careers">
        <Hero {...hero} />
        <h3 className="section__title">Careers</h3>
        {offers.map(({ vacancy, description, duties }, index) =>
          <div className="item" key={index}>
            <button
              id={index}
              onClick={this.onClick}
            >
              {vacancy}
            </button>
            <div className={`description ${this.state[getStateKey(index)] ? 'opened' : ''}`}>
              {description}
            </div>
          </div>)}
      </div>);
  }
};
