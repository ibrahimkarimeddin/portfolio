import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Visibale from '../../HOC/withVisibale'

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Visibale className='HeroSection' id="Home">
      <div className="in_HeroSection" id="Home">
        <h1>
          {t('hero.name')}
          <br />
          {t('hero.role')}
        </h1>
        <p>
          {t('hero.description')}
          <strong> {t('hero.experience')}</strong>
          {t('hero.personalDescription')}
        </p>
        <div className='Buttons'>
          <a href="#questions">
            <button>
              {t('hero.askedQuestions')}
            </button>
          </a>
          <a href="#ContactMe">
            <button className='SecButton'>
              {t('hero.contactMe')}
            </button>
          </a>
        </div>
      </div>
    </Visibale>
  );
};

export default HeroSection;
