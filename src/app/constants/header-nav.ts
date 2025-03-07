import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface NavItem {
  title: string;
  link: string;
  className: string;
  activeClassName: string;
  isDownload?: boolean; // Optional property for download items
}

export const navItems: NavItem[] = [
  {
    title: 'About',
    link: 'about',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Services',
    link: 'services',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Resume',
    link: 'resume',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Contact Me',
    link: 'contacts',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Download CV',
    link: 'assets/Abhishek-Narula-Software-Developer.pdf',
    className: 'btn',
    activeClassName: '',
    isDownload: true
  }
];

export const sidenavAnimations = trigger('slideInOut', [
  state(
    'in',
    style({
      transform: 'translate3d(0,0,0)',
    })
  ),
  state(
    'out',
    style({
      transform: 'translate3d(100%, 0, 0)',
    })
  ),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out')),
]);
