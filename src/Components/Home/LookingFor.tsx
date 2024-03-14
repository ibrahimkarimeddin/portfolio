import React from 'react';
import { useTranslation } from 'react-i18next';

const LookingForData = {
  titleKey: 'lookingFor.title',
  contentKey: 'lookingFor.content',
  buttonTextKey: 'lookingFor.buttonText',
};

const LookingFor = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    window.location.href = '../MohammedKarimAldenResume.pdf';
  };

  return (
    <div className='LookingFor' id='LookingFor'>
      <div>
        <h1>{t(LookingForData.titleKey)}</h1>
        <p>{t(LookingForData.contentKey)}</p>
        <button onClick={handleDownload}>
          {t(LookingForData.buttonTextKey)}
        </button>
      </div>
    </div>
  );
};

export default LookingFor;
