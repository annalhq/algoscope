import { Icon } from '@iconify/react';
import { SideNavItem } from './types';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl flex">{item.title}</span>
            </div>
            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>
          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return subItem.submenu ? (
                  <MenuItem key={idx} item={subItem} />
                ) : (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/algorithms',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Stacks',
    path: '/stacks',
    icon: <Icon icon="lucide:layers" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/stack/pretest' },
      { title: 'Introduction', path: '/stacks' },
      {
        title: 'Visualization',
        path: '/stack/visualization',
      },
      { title: 'Post-test', path: '/stack/posttest' },
    ],
  },
  {
    title: 'SSSP',
    path: '/sssp',
    icon: <Icon icon="lucide:route" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/sssp/pretest'},
      { title: 'Introduction', path: '/sssp/' },
      { title: 'Visualization', path: '/sssp/visualization' },
      { title: 'Post-test', path: '/sssp/posttest' },
    ],
  },
  {
    title: 'Sorting',
    path: '/searching',
    icon: <Icon icon="lucide:list" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/sorting/pretest' },
      { title: 'Introduction', path: '/sorting/' },
      { title: 'Visualization', path: '/sorting/visualization' },
      { title: 'Post-test', path: '/sorting/posttest' },
    ],
  },
  {
    title: 'Hashing',
    path: '/hashing',
    icon: <Icon icon="lucide:hash" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Pre-test', path: '/hashing/pretest' },
      { title: 'Introduction', path: '/hashing/' },
      { title: 'Visualization', path: '/hashing/visualization' },
      { title: 'Post-test', path: '/hashing/posttest' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  
];