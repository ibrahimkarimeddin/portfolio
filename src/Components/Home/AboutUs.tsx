import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';

const aboutUsData = [
  {
    id: 1,
    titleKey: 'Computer Science',
    contentKey: 'Study in Damascus University as Computer Science (Third Year Education)',
  },
  {
    id: 2,
    titleKey: 'Data Structer && Algorithm ',
    contentKey: 'Completed the  course From Coursera  , gaining proficiency in how to solve problem  and mastering advanced concepts.',
  },
  {
    id: 3,
    titleKey: 'Design Pattern',
    contentKey: 'Engaged in the Design Pattern  course provided by Coursera , acquiring skills for how class must be used ',
  }
];

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Visibale className='AboutUs' id='education'>
      <div className="AboutUs_Left">
        <h1>{t('aboutUs.educationTitle')}</h1>
        <p>Pursuing computer science for full-stack development to create dynamic, user-centric web applications with comprehensive technical proficiency.</p>
      </div>
      <div className="AboutUs_Right">
        {aboutUsData.map((item) => (
          <div key={item.id}>
            <span> {item.id < 10 ? `0${item.id}` : item.id} </span>
            <div>
              <h5>{t(item.titleKey)}</h5>
              <p>{t(item.contentKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </Visibale>
  );
};

export default AboutUs;
