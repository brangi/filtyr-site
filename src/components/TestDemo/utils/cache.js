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
      case 'clear-exam':
         const cacheClear = JSON.parse(localStorage.getItem('filtyr-store'));
         cacheClear && localStorage.setItem('filtyr-store',
           JSON.stringify(cacheNew.filter(i=> i.examId !== examId)));
         break;
      default:
         return null
   }
};
