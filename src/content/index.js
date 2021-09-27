export default {
    nav: {
      logo: 'CC',
      links: [
        { text: 'Work', to: 'mywork' },
        { text: 'Contact', to: 'mycontact' },
      ],
    },
    header: {
      img:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
      text: ['Hi!', "It's me Random.", 'I am '],
      typical: [
        'web developer. 🖥',
        2000,
        'Youtuber. 📹',
        2000,
        'Mobile Developer',
        2000,
      ],
      btnText: 'Discover More',
    },
  
    stack: {
      title: 'Stack',
      tech: [
        {
          img: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png',
          alt: 'mongodb',
        },
        {
          img: process.env.PUBLIC_URL + '/logo512.png',
          alt: 'react',
        },
        {
          img: 'https://expressjs.com/images/express-facebook-share.png',
          alt: 'express',
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
          alt: 'node',
        },
      ],
      desc: `Through the General Assembly Software Engineering Immersive I became very familiar with the MERN stack with a focus on Front-end development. `,
    },
  };