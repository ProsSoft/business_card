import React from 'react';
import Check from 'react-icons/lib/fa/check';
import Plus from 'react-icons/lib/fa/plus';
import { vacancy } from '../../constants';



const OfferContent = ({ isOpen,
                        isVacancyOpen,
                        agenda,
                        requirements,
                        stack,
                        mission,
                        offering,
                        conclusion }) => (
  <div>
      {!isVacancyOpen && <div className="closed_vacancy_badge">{ vacancy.closed}</div> }
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

export default  OfferContent;
