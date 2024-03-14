import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  MenuOutlined } from '@ant-design/icons';
import WithDrawer from '../../HOC/WithDrawer';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavigationLinks } from './NavigationLinks';
import useScrollEffects from './useScrollEffects';

const Header = () => {
  const [t] = useTranslation();
  useScrollEffects()
    return (
      <header className='Header'>
        <Link to='/#Home'>
          <div className='Logo' role='img' aria-label='Logo' />
        </Link>
        <nav className='Nav'>
           <NavigationLinks className="Links" />
          <div className='MenuNav '>
            <WithDrawer

              title='Nav Links'
              button={<Button icon={<MenuOutlined />} type='primary' />}
            >
             <NavigationLinks className="DrawerLinks" />
            </WithDrawer>
          </div>
        </nav>
      </header>
    );
};

export default Header;
