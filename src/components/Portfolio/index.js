import React from 'react';

export default () =>
  <div>
    <section key={1} id="section_main_portfolio">
      <div>
        <div className="head_portfolio">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio_list">
          <a href="#" className="single_portfolio" style={{background: 'url(/dist/assets/images/portf1.png) center no-repeat, rgb(27, 32, 34)', backgroundSize: 'cover'}}>
            <span className="hover_portfolio" />
            <p className="name_project">Project1</p>
            <p className="desc_project">project description</p>
          </a>
          <a href="#" className="single_portfolio" style={{background: 'url(/dist/assets/images/portf2.png) center no-repeat, rgb(27, 32, 34)', backgroundSize: 'cover'}}>
            <span className="hover_portfolio" />
            <p className="name_project">Project2</p>
            <p className="desc_project">project description</p>
          </a>
          <a href="#" className="single_portfolio" style={{background: 'url(/dist/assets/images/portf3.png) center no-repeat, rgb(27, 32, 34)', backgroundSize: 'cover'}}>
            <span className="hover_portfolio" />
            <p className="name_project">Project3</p>
            <p className="desc_project">project description</p>
          </a>
          <a href="#" className="single_portfolio" style={{background: 'url(/dist/assets/images/portf4.png) center no-repeat, rgb(27, 32, 34)', backgroundSize: 'cover'}}>
            <span className="hover_portfolio" />
            <p className="name_project">Project4</p>
            <p className="desc_project">project description</p>
          </a>
          <a href="#" className="single_portfolio" style={{background: 'url(/dist/assets/images/portf5.png) center no-repeat, rgb(27, 32, 34)', backgroundSize: 'cover'}}>
            <span className="hover_portfolio" />
            <p className="name_project">Project5</p>
            <p className="desc_project">project description</p>
          </a>
          <a href="#" className="single_portfolio" style={{background: 'url(/dist/assets/images/portf6.png) center no-repeat, rgb(27, 32, 34)', backgroundSize: 'cover'}}>
            <span className="hover_portfolio" />
            <p className="name_project">Project6</p>
            <p className="desc_project">project description</p>
          </a>
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
