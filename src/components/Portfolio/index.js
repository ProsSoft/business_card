import React from 'react';
import { imagesUrl } from '../../constants'

const imgs = new Array(9).fill(0);

export default () =>
  <div>
    <section id="section_main_portfolio">
      <div className="head_portfolio">
        <h2>Portfolio</h2>
      </div>
      <div className="resp_container">
        {console.log(imgs) || imgs.map((el, i) =>
          <img
            key={i}
            className="portfolio_img"
            src={console.log(i) || `${imagesUrl}portfolio/${i + 1}.png`}
            alt={`Project${i + 1}`}
          />
        )}
      </div>
    </section>
  </div>;
