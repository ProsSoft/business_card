const assetsPath = '/dist/assets/';
const imagesUrl = `${assetsPath}images/`;

// const formRegex = {
//   emailValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
// };

const fixedHeaderHeight = 101;

// const PRODUCTS_PATH = '/products';
// const PRODUCT_PATH = '/product';

// const isNavItemProductsActive = (match, location) => match ?
//   PRODUCTS_PATH === match.path : `/${location.pathname.split('/')[1]}` === PRODUCT_PATH;

const nav = [
  { title: 'Services', path: '/home/services', id: 'services' },
  { title: 'Solutions', path: '/home/solutions', id: 'solutions' },
  // { title: 'Products', path: PRODUCTS_PATH, isActive: isNavItemProductsActive },
  // { title: 'Company', path: '/company' },
  { title: 'Portfolio', path: '/portfolio', id: 'contact-us' },
  { title: 'Careers', path: '/careers' },
  { title: 'Contact us', path: '/home/contact-us', id: 'contact-us' }
];

const contacts = {
  title: 'Contact us',
  email: 'contacts@prossoft.com',
  UK: {
    tel: '+44 746 632 6384'
  },
  UA: {
    tel: '+38 066 024 5488'
  }
};


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
      title: 'Product Development',
      imgSrc: 'landingIcon1.svg',
      description: 'The most ambitious ideas can be realised with ProsSoft engineering. ' +
      'With cutting-edge technologies, we ensure the potential of your business is maximised.'
    },
    {
      title: 'Mobile Application Development',
      link: '/mobile-application-development',
      imgSrc: 'landingIcon2.svg',
      description: 'Let your business go ‘Mobile’ along with the whole World.' +
      'With a mobile application, your ideas come ' +
      'to fruition on the fly and reach out for millions of users at instance.'
    },
    {
      title: 'Websites Development',
      link: '/websites-development',
      imgSrc: 'landingIcon3.svg',
      description: 'Introduce your business to the World Wide Web. A website or a blog can become a face of your' +
      'business in the Internet - the realm now inseparable from reality for billions of people.'
    }
  ],
  solutions: [
    {
      title: 'Individual approach',
      description: 'We consider peculiarities of your business case, its requirements as well as needs of your clients  for optimal pragmatic solutions and effective and user friendly application development.'
    },
    {
      title: 'Optimal technologies',
      description: 'Software technologies are being developed and becoming redundant every day. New more effective technologies come in place of the older ones, however not all flashy novelties can substitute well proven techniques. Being at the forefront of the technological battles, we choose the most fit technologies for the needs your application.'
    },
    {
      title: 'Best practice',
      description: 'Developing applications for a variety of business applications we have amassed experience to tackle the software tasks from a broad range of algorithmic complexity. We offer your business to build upon our expertise that can yield a pragmatic and effective software solution.'
    },
    {
      title: 'Openness, support and active communication',
      description: 'The key feature of our work ethics is to ensure reciprocal communication with our clients and product support is maintained at all times. This enables us to build the long lasting partnership with our clients, which we value so much.'
    }
  ],
  contactUs: contacts,
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
    {
      vacancy: 'Middle JavaScript Software Engineer',
      description: 'The UK investment software enterprise is looking for motivated candidates for the positions of the marketing specialist and sales manager. The ideal candidates will have experience in e-commerce, marketing and web-sales as well as excellent skills in creative writing and communication.\n' +
        'Our mission:\n' +
        'Improved efficiency of technological procedures in business, improved quality of life via forefront applications we bring into life.\n' +
        'We offer:\n' +
        'highly competitive salaries\n' +
        'additional payment bonuses in products\' equities\n' +
        'a comfortable workplace with flexible work hours\n' +
        'growth-stimulating environment\n' +
        'development trainings and courses\n' +
        'travels for conferences\n' +
        'Interested candidates are invited to send resumes and cover letters outlining the candidate\'s motivation to Отправить резюме, reference letters sent directly from the referees would be an advantage.',
      typicalDuties: '',
      weOffer: '',
    },
    {
      vacancy: 'Sales Manager/Marketer',
      description: '',
      typicalDuties: '',
      weOffer: '',
    },
    {
      vacancy: 'Middle JavaScript Software Engineer',
      description: 'The UK investment software enterprise is looking for motivated candidates for the positions of the marketing specialist and sales manager. The ideal candidates will have experience in e-commerce, marketing and web-sales as well as excellent skills in creative writing and communication.\n' +
        'Our mission:\n' +
        'Improved efficiency of technological procedures in business, improved quality of life via forefront applications we bring into life.\n' +
        'We offer:\n' +
        'highly competitive salaries\n' +
        'additional payment bonuses in products\' equities\n' +
        'a comfortable workplace with flexible work hours\n' +
        'growth-stimulating environment\n' +
        'development trainings and courses\n' +
        'travels for conferences\n' +
        'Interested candidates are invited to send resumes and cover letters outlining the candidate\'s motivation to Отправить резюме, reference letters sent directly from the referees would be an advantage.',
      typicalDuties: '',
      weOffer: '',
    },
    {
      vacancy: 'Middle JavaScript Software Engineer',
      description: 'The UK investment software enterprise is looking for motivated candidates for the positions of the marketing specialist and sales manager. The ideal candidates will have experience in e-commerce, marketing and web-sales as well as excellent skills in creative writing and communication.\n' +
        'Our mission:\n' +
        'Improved efficiency of technological procedures in business, improved quality of life via forefront applications we bring into life.\n' +
        'We offer:\n' +
        'highly competitive salaries\n' +
        'additional payment bonuses in products\' equities\n' +
        'a comfortable workplace with flexible work hours\n' +
        'growth-stimulating environment\n' +
        'development trainings and courses\n' +
        'travels for conferences\n' +
        'Interested candidates are invited to send resumes and cover letters outlining the candidate\'s motivation to Отправить резюме, reference letters sent directly from the referees would be an advantage.',
      typicalDuties: '',
      weOffer: '',
    },
  ]
};

const service = {
  hero: {
    slides: [{src: `${imagesUrl}stage_slider.png`}],
    title2: 'Stages of Creation',
  },
};

const footer = {
  contacts: [[
    'United Kingdom',
    '10 Marmion Road',
    'Liverpool',
    'L17 8TU',
    `tel. ${contacts.UK.tel}`
  ],
    ['Ukraine',
    '18 Dnistrovska Str',
    'Ivano-Frankivsk',
    '76018',
    `tel. ${contacts.UA.tel}`
    ]
  ]
};

export {
  imagesUrl,
  // formRegex,
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
