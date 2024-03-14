import { useEffect } from 'react';

const useScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.Header');
      if (header) {
        const scrollPosition = window.scrollY;
        const headerHeight = window.innerHeight;

        if ( scrollPosition > 100) {
          header.classList.add('Header50px');
        } else {
          header.classList.remove('Header50px');
        }

        // if (scrollPosition >= headerHeight) {
        //   header.classList.add('Header100hv');
        // } else {
        //   header.classList.remove('Header100hv');
        // }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollEffects;
