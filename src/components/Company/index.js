import React from 'react';
import Hero from '../common/Hero';
import TeamMember from './TeamMember'
import { company } from '../../constants';

const { hero, title, members } = company;

export default () =>
  <div>
    <Hero {...hero} />
    <h3 className="section__title">{title}</h3>
    <div style={{
      textAlign: 'center',
      margin: '16px auto'
    }}>
      {members.map((props) => <TeamMember {...props} />)}
    </div>
  </div>
