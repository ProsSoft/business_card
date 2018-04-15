import React from 'react';
import { Link } from 'react-router-dom';

import { imagesUrl, products, productsImgFileName } from '../../constants';

export default () =>
  <div>
    <section key={1} id="section_main_portfolio">
      <div>
        <div className="head_portfolio">
          <h2>Products</h2>
        </div>
        <div className="portfolio_list">
          {products.map(({ name, description }, i) =>
            <Link key={name} to={`/product/${name}`} className="single_portfolio" style={{background: `url(${imagesUrl}${productsImgFileName}${i + 1}.png) center/cover no-repeat, rgb(27, 32, 34)`}}>
              <span className="hover_portfolio" />
              <p className="name_project">{name}</p>
              <p className="desc_project">{description}</p>
            </Link>
          )}
        </div>
      </div>
    </section>
    <section key={2} id="portfolio_txt_content">
      <div className="box-width">
        <p>Responsive. Localized. Dynamic.</p>
        <span>The site seemlessly adapts to any screen size.
    It instantly displays relevant, dynamic content and pricing entered by site administrators.
    Customers can place orders online with any major credit card.
    Site content is translated into English, Korean and Chinese languages.
    Customer appointments are instantly synchronized with staff Google Calendars.
    Customers are able to upload custom order forms with multiple file attachments and custom backend logic. </span>
      </div>
    </section>
  </div>;
