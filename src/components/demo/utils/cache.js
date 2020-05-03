export const cache = (examId, examResultId, cmd) =>{
   switch(cmd){
      case 'start-exam':
         const cacheNew = [];
         cacheNew.push({examId: examId, examResultId: examResultId});
         localStorage.setItem('filtyr-store', JSON.stringify(cacheNew));
         break;
      case 'check-exam':
         const cache = JSON.parse(localStorage.getItem('filtyr-store'));
         return cache && !!cache.find(i => i.examId === examId);
      case 'get-exam':
         const cacheExam = JSON.parse(localStorage.getItem('filtyr-store'));
         return cacheExam || null;
      case 'clear-exam':
         const cacheClear = JSON.parse(localStorage.getItem('filtyr-store'));
         const cacheFiltered = cacheClear.filter(i=> i.examId !== examId);
         if (cacheFiltered && cacheFiltered.length > 0){
            localStorage.setItem('filtyr-store',
              JSON.stringify(cacheFiltered));
         } else {
            localStorage.removeItem('filtyr-store')
         }
         break;
      default:
         return null
   }
};
