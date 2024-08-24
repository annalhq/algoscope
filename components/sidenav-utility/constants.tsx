import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Stacks',
    path: '/stack',
    icon: <Icon icon="lucide:layers" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/stack/pretest' },
      { title: 'Introduction', path: '/stack/introduction' },
      { title: 'Visualization', path: '/stack/visualization' },
      { title: 'Post-test', path: '/stack/posttest' },
    ],
  },
  {
    title: 'SSSP',
    path: '/sssp',
    icon: <Icon icon="lucide:route" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/sssp/pretest' },
      { title: 'Introduction', path: '/sssp/introduction' },
      { title: 'Visualization', path: '/sssp/visualization' },
      { title: 'Post-test', path: '/sssp/posttest' },
    ],
  },
  {
    title: 'Searching',
    path: '/searching',
    icon: <Icon icon="lucide:search" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/searching/pretest' },
      { title: 'Introduction', path: '/searching/introduction' },
      { title: 'Visualization', path: '/searching/visualization' },
      { title: 'Post-test', path: '/searching/posttest' },
    ],
  },
  {
    title: 'Hashing',
    path: '/hashing',
    icon: <Icon icon="lucide:hash" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/hashing/pretest' },
      { title: 'Introduction', path: '/hashing/introduction' },
      { title: 'Visualization', path: '/hashing/visualization' },
      { title: 'Post-test', path: '/hashing/posttest' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Theme', path: '/settings/theme' },
      { title: 'Account', path: '/settings/account' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];