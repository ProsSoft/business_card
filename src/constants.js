const assetsPath = '/dist/assets/';
const imagesUrl = `${assetsPath}images/`;

const formRegex = {
  emailValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
};

const fixedHeaderHeight = 101;

const nav = [
  { title: 'Services', path: '/home/services', id: 'services' },
  { title: 'Products', path: '/products' },
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
  }
};

const footer = {
  contact: [
    'United Kingdom',
    '5 Mitchell Street, Edinburgh, Scotland, EH6 7DB Ukraine',
    '7 Zaliznychna, Lviv, Ukraine, 79039'
  ]
};

export { imagesUrl, formRegex, fixedHeaderHeight, products, productsImgFileName, landing, company, footer, nav };
