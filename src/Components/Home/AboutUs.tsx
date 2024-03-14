import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';

const aboutUsData = [
  {
    id: 1,
    titleKey: 'aboutUs.syrianVirtualUniversity.title',
    contentKey: 'aboutUs.syrianVirtualUniversity.content',
  },
  {
    id: 2,
    titleKey: 'aboutUs.metaCourseAdvancedReact.title',
    contentKey: 'aboutUs.metaCourseAdvancedReact.content',
  },
  {
    id: 3,
    titleKey: 'aboutUs.metaCourseFrontEndDevelopment.title',
    contentKey: 'aboutUs.metaCourseFrontEndDevelopment.content',
  },
];

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Visibale className='AboutUs' id='education'>
      <div className="AboutUs_Left">
        <h1>{t('aboutUs.educationTitle')}</h1>
        <p>{t('aboutUs.educationDescription')}</p>
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
