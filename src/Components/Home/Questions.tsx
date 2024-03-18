import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';



const Questions: React.FC = () => {
  const { t } = useTranslation();

  const items: CollapseProps['items'] = []


  
  return (
    <div className='Questions' id='questions'>
      <h1>{t('questions.title')}</h1>
      <Collapse accordion>
        {items?.map((item:any) => (
          <Collapse.Panel header={(item.title)} key={item.key}>
            {item.children}
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Questions;
