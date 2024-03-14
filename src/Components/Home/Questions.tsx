import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';



const Questions: React.FC = () => {
  const { t } = useTranslation();
  const contentArray: any = t('questions.projects.content', { returnObjects: true });

  const items: CollapseProps['items'] = [
    {
      key: '1',
      children: (
        <p>
          {t('questions.skill.content')}
        </p>
      ),
    },
    {
      key: '2',
      children: (
        <p>
          {t('questions.careerBackground.content')}
        </p>
      ),
    },
    {
      key: '3',
      children: (
        <p>
          {t('questions.educationalBackground.content')}
        </p>
      ),
    },
    {
      key: '4',
      children: (
        <p>
          {t('questions.remoteWork.content')}
        </p>
      ),
    },
    {
      key: '5',
      children: (
        <p>
          {contentArray?.map((line:any, index:any) => (
          <p key={index}>{line}</p>
        ))}
        </p>
      ),
    },
    // ... other items
  ];
  const getHeader = (key: string) => {
    switch (key) {
      case '1':
        return t('questions.skill.label');
      case '2':
        return t('questions.careerBackground.label');
        case '3':
          return t('questions.educationalBackground.label');
          case '4':
            return t('questions.remoteWork.label');
            case '5':
              return t('questions.projects.label');
      // Add other cases for different keys
      default:
        return '';
    }
  };

  return (
    <div className='Questions' id='questions'>
      <h1>{t('questions.title')}</h1>
      <Collapse accordion>
        {items?.map((item:any) => (
          <Collapse.Panel header={getHeader(item.key)} key={item.key}>
            {item.children}
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Questions;
