import React from 'react';
import { Redirect } from 'react-router-dom';

import { FourOhFour } from '../App';

import { products } from '../constants';

const Product = ({ match }) => {
  const product = products.find(({ name }) => name === match.params.name);
  return product ?
  <div>
    <section id="section_banner" className="single_project_page" style={{background: 'url(/dist/assets/images/project_bg.jpg) center no-repeat', backgroundSize: 'cover'}}>
      <h2>{product.name}</h2>
    </section>
    <section id="content_singpage_project">
      <div className="box-width">
        <h2>Company for project</h2>
        <div className="inform_project">
          <p>Information</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</span>
        </div>
      </div>
      <div className="desct_task">
        <h2>The task description</h2>
      </div>
      <div className="box-width">
        <div className="inform_project">
          <p>Information</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</span>
        </div>
      </div>
      <div className="solution_block">
        <div className="box-width-x">
          <img src="/dist/assets/images/mac.png" alt />
          <div className="info_solution_block">
            <h2>Our Solution</h2>
            <p>Database optimization</p>
            <span>In order to store big amount of data and display it quickly to the service we used NoSQL database.</span>
            <p>Deep technical research</p>
            <span>We investigated advertising networks’ APIs, calculated additional indicators configuration and tested to ensure accuracy of information.</span>
            <p>Database optimization</p>
            <span>In order to store big amount of data and display it quickly to the service we used NoSQL database.</span>
            <p>Deep technical research</p>
            <span>We investigated advertising networks’ APIs, calculated additional indicators configuration and tested to ensure accuracy of information.</span>
          </div>
        </div>
      </div>
    </section>
  </div> : <Redirect to="/404"/>
};

export default Product;
