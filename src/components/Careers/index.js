import React, { PureComponent } from 'react';
import Hero from '../common/Hero';
import { careers } from '../../constants';

const { hero, offers } = careers;

export default class VacancyGroupButton extends PureComponent {

  state = { buttonsGroupIsOpen: offers.map(() => false) };

  onClick = ({ target: id }) => {
    const { buttonsGroupIsOpen } = this.state;
    const updatedButtonsGroupIsOpen = [...buttonsGroupIsOpen];
    updatedButtonsGroupIsOpen[id] = !updatedButtonsGroupIsOpen[id];
    this.setState({ buttonsGroupIsOpen: updatedButtonsGroupIsOpen });
  };

  render() {
    const { buttonsGroupIsOpen } = this.state;
    return (
      <div className="page careers">
        <Hero {...hero} />
        <h3 className="section__title">Careers</h3>
        {offers.map(({position, description, typicalDuties }, index) =>
          <div className="item">
            <button
              id={index}
              onClick={this.onClick}
            >
              <h3>{position}</h3>
            </button>
            <div className="description">
              <div className="wrapper">

              </div>
            </div>
          </div>)}
      </div>);
  }
};
