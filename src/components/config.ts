const getAge = () => {
  const birthday = {
    year: 1998,
    month: 3,
    date: 24,
  };
  const currentDate = new Date();
  const thisYearBirthday = new Date(
    currentDate.getFullYear(),
    birthday.month - 1,
    birthday.date
  );
  let age = currentDate.getFullYear() - birthday.year;
  if (currentDate < thisYearBirthday) {
    age--;
  }
  return age;
};

export const config = {
  about: {
    main: 'About me',
    description: `I am currently ${getAge()} years old. During the day I work as an employee, but at night I am involved in service creation activities in my field of interest.`,
    text: 'By focusing my wisdom on the inefficiencies that still exist in our society, I work to create efficient services/products. I am currently working on food related issues around me.',
    image:
      'https://res.cloudinary.com/dp6bqw1vo/image/upload/v1675691185/portfolio/image_u88j1n.png',
  },
  works: {
    main: 'Works',
    first: {
      title: 'nut(tentative)',
      description:
        'The "nut" is a project for the development of optimized snacks with a focus on human appetite and health.',
      image:
        'https://res.cloudinary.com/dp6bqw1vo/image/upload/v1675881696/portfolio/works-first.jpg',
    },
  },
  news: {
    main: 'Latest News',
  },
  contact: {
    main: 'Contact',
    twitter: {
      href: 'https://twitter.com/hid3xxx',
    },
    github: {
      href: 'https://github.com/hid3xxx',
    },
    discord: {
      href: '',
    },
  },
  icon: {
    name: 'Hid3xxx',
    href: '/',
  },
  links: [
    { name: 'about', href: '/#about' },
    { name: 'works', href: '/#works' },
    { name: 'news', href: '/news' },
    { name: 'contact', href: '/#contact' },
  ],
  error: {
    main: 'Not found',
  },
};
