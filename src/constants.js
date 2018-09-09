const assetsPath = '/dist/assets/';
const imagesUrl = `${assetsPath}images/`;

const formRegex = {
  emailValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
};

const fixedHeaderHeight = 101;

const PRODUCTS_PATH = '/products';
const PRODUCT_PATH = '/product';

const isNavItemProductsActive = (match, location) => match ?
  PRODUCTS_PATH === match.path : `/${location.pathname.split('/')[1]}` === PRODUCT_PATH;

const nav = [
  { title: 'Services', path: '/home/services', id: 'services' },
  { title: 'Products', path: PRODUCTS_PATH, isActive: isNavItemProductsActive },
  { title: 'Company', path: '/company' },
  { title: 'Careers', path: '/careers' },
  { title: 'Contact us', path: '/home/contact-us', id: 'contact-us' }
];

const landing = {
  hero: {
    slides: [
      { src: `${imagesUrl}sliderDay.png`,
        className: 'hero__background1' },
      { src: `${imagesUrl}sliderNight.jpg`,
        className: 'hero__background2' }
    ],
    title1: 'Developing software',
    title2: 'for business'
  },
  services: [
    {
      link: '/product-development',
      title: 'Product development',
      imgSrc: 'landingIcon1.svg',
      description:
        'From the simplest to the most sophisticated applications, Relevant Software team can provide you with the solution of various complexity degree.'
    },
    {
      title: 'Mobile application development',
      link: '/mobile-application-development',
      imgSrc: 'landingIcon2.svg',
      description:
        'As the whole World goes mobile take the advantages of your business to make it mobile or develop your own mobile app as a standalone application for users.'
    },
    {
      title: 'Websites development',
      link: '/websites-development',
      imgSrc: 'landingIcon3.svg',
      description:
        'Landing pages, e-shops, blogs - bring your ideas of the website to reality. Explore, how Relevant Software team makes it possible.'
    }
  ],
  solutions: [
    {
      title: 'Database optimization',
      description: 'In order to store big amount of data and display it quickly to the service we used NoSQL database.'
    },
    {
      title: 'Deep technical research',
      description:
        'We investigated advertising networks’ APIs, calculated additional indicators configuration and tested to ensure accuracy of information.'
    },
    {
      title: 'Billing and Payment',
      description: 'Stripe system allows to create various billing plans and manage payments easily.'
    },
    {
      title: 'Effective communication',
      description:
        'We avoided possible ban from advertising networks thanks to effective communication between the team an Google.'
    }
  ]
};

const productsImgFileName = 'portf';

const products = [
  { name: 'Product1', description: 'product description' },
  { name: 'Product2', description: 'product description' },
  { name: 'Product3', description: 'product description' },
  { name: 'Product4', description: 'product description' },
  { name: 'Product5', description: 'product description' },
  { name: 'Product6', description: 'product description' }
];

const company = {
  hero: {
    slides: [{ src: `${imagesUrl}sliderCompany.jpg` }],
    title1: 'Along we can do so little,',
    title2: 'together we can do so much.'
  },
  title: 'Our Team',
  members: [
    {
      src: `${imagesUrl}andrew.jpeg`,
      firstName: 'Andrij',
      lastName: 'Vasylenko',
      about: 'Co-founder. Research Fellow in Theory Group, Department of Physics.'
    },
    {
      src: `${imagesUrl}ruslan.jpg`,
      firstName: 'Ruslan',
      lastName: 'Vasylenko',
      about: 'Co-founder. Senior Software JavaScript Engineer'
    },
    {
      src: `${imagesUrl}andrew.jpeg`,
      firstName: 'Andrij',
      lastName: 'Vasylenko',
      about: 'Co-founder. Research Fellow in Theory Group, Department of Physics.'
    },
    // {
    //   src: `${imagesUrl}ivan.jpg`,
    //   firstName: 'Ivan',
    //   lastName: 'Tymtsiv',
    //   about: 'Disigner'
    // },
    {
      src: `${imagesUrl}andrew.jpeg`,
      firstName: 'Andrij',
      lastName: 'Vasylenko',
      about: 'Co-founder. Research Fellow in Theory Group, Department of Physics.'
    },
  ]
};

const careers = {
  hero: {
    slides: [{ src: `${imagesUrl}slider_career.jpg` }],
    title1: 'The best way to predict',
    title2: 'the future is to create it.',
    quoteAuthor: '(Abraham Lincoln)',
    buttonText: 'Get a job'
  },
  offers: [
    { position: 'Middle JavaScript Software Engineer',
      description: '',
      typicalDuties: '',
      weOffer: '',
    },
    { position: 'Sales Manager/Marketer',
      description: '',
      typicalDuties: '',
      weOffer: '',
    },
  ]
};

const service = {
  hero: {
    slides: [{ src: `${imagesUrl}stage_slider.png` }],
    title1: 'Stages of Creation',
  }
};

const footer = {
  contact: [
    'United Kingdom',
    '5 Mitchell Street, Edinburgh, Scotland, EH6 7DB Ukraine',
    '7 Zaliznychna, Lviv, Ukraine, 79039'
  ]
};

export {
  imagesUrl,
  formRegex,
  fixedHeaderHeight,
  products,
  productsImgFileName,
  landing,
  company,
  footer,
  nav,
  careers,
  service
};
