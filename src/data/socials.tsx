import IconGithub from '../components/icons/github.astro';
import IconLinkedin from '../components/icons/linkedin.astro';
import StackOverflow from '../components/icons/stackoverflow.astro';
import Strava from '../components/icons/strava.astro';

export const SOCIALS = [
  {
    name: 'Github',
    url: 'https://github.com/Georgian',
    icon: IconGithub,
    umamiTag: 'umami--click--github-button'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ggrec',
    icon: IconLinkedin,
    umamiTag: 'umami--click--linkedin-button'
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/1774643/georgian',
    icon: StackOverflow,
    umamiTag: 'umami--click--stackoverflow-button'
  },
  {
    name: 'Strava',
    url: 'https://www.strava.com/athletes/3426471',
    icon: Strava,
    umamiTag: 'umami--click--strava-button'
  },
];
