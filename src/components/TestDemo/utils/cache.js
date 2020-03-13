
export const cacheCheckExam = (id) =>{
   const cache = JSON.parse(localStorage.getItem('filtyr-start'));
   if(cache) {
      return cache['5e6aec2475087151616af99f']
   }
   return false
};

export const cacheStartExam = (id) =>{
   localStorage.setItem('start-exam', true);
   const cache = JSON.parse(localStorage.getItem('filtyr-start'));
   if(!cache){
      const cacheNew = {};
      console.log({cacheNew});
      cacheNew['5e6aec2475087151616af99f'] = true;
      localStorage.setItem('filtyr-start', JSON.stringify(cacheNew));
      return
   }
   cache['5e6aec2475087151616af99f'] = true;
   localStorage.setItem('filtyr-start', JSON.stringify(cache))
};

export const rmCacheExam = (id) =>{
   localStorage.removeItem('start-exam');
   const cache = JSON.parse(localStorage.getItem('filtyr-start'));
   if(cache) {
      delete cache['5e6aec2475087151616af99f'];
      localStorage.setItem('filtyr-start', JSON.stringify(cache))
   };
};
