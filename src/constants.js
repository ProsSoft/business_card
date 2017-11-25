const formRegex = {
  emailValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
};

const fixedHeaderHeight = 101;

const nav = [
  { title: 'Company', path: '/#company', activeHash: '' },
  { title: 'Services', path: '/#services', activeHash: 'services' },
  { title: 'Portfolio', path: '#portfolio', activeHash: '' },
  { title: 'Careers', path: '/#careers', activeHash: '' },
  { title: 'Contacts us', path: '/#contacts', activeHash: 'contacts' }
];

const landing = {
  services: [
    {
      title: 'Product development',
      imgSrc: 'landingIcon1.svg',
      description:
        'From the simplest to the most sophisticated applications, Relevant Software team can provide you with the solution of various complexity degree.'
    },
    {
      title: 'Mobile application development',
      imgSrc: 'landingIcon2.svg',
      description:
        'As the whole World goes mobile take the advantages of your business to make it mobile or develop your own mobile app as a standalone application for users.'
    },
    {
      title: 'Websites development',
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

const footer = {
  contact: [
    'United Kingdom',
    '5 Mitchell Street, Edinburgh, Scotland, EH6 7DB Ukraine',
    '7 Zaliznychna, Lviv, Ukraine, 79039'
  ]
};

export { formRegex, fixedHeaderHeight, landing, footer, nav };
