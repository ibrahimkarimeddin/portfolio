import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//@ts-ignore
interface NavLink {
  label: string;
  to: string;
}

export const NavigationLinks = ({ className }: any) => {
  const [t] = useTranslation();
  const location = useLocation();

  const links: NavLink[] = [
    { label: t('Home'), to: '#Home' },
    { label: t('features'), to: '#features' },
    { label: t('education'), to: '#education' },
    { label: t('LookingFor'), to: '#LookingFor' },
    { label: t('ContactMe'), to: '#ContactMe' },
    { label: t('DownloadCv'), to: 'download' },
  ];

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavLinks = (links: NavLink[]) => (
    <ul className={className} role="navigation">
      {links.map((link, index) => (
        <li key={index} className={`${location.pathname}${location.hash}` === link.to ? 'active' : ''}>
          {
            link.to !== 'download' ? 
            <Link
              to={link.to}
              onClick={() => {
                if (link.to.startsWith('#')) {
                  scrollToElement(link.to.substring(1));
                }
              }}
            >
              {link.label}
            </Link>
            :
            <a
              href={'../MohammedKarimAldenResume.pdf'}
              download
            >
              {link.label}
            </a>
          }
        </li>
      ))}
    </ul>
  );

  return renderNavLinks(links);
};
