//날짜 함수
export const today = () => {
    let now = new Date(); //현재 날짜 및 시간
    const month = new Array('1월','2월', '3월', '4월','5월','6월','7월','8월','9월','10월','11월','12월');
    let todayMonth = month[now.getMonth()];
    let todayDate = now.getDate() // 현재 날짜
    const week = new Array('일요일', '월요일', '화요일','수요일','목요일','금요일','토요일');
    let dayWeek = week[now.getDay()]; //weekday에 지정된 날짜의 요일(0~6)반환
  
    let daySuffix = '일';
    if (todayDate === 1 || todayDate === 21 || todayDate === 31) {
      daySuffix = '일';
    } else if (todayDate === 2 || todayDate === 22) {
      daySuffix = '일';
    } else if (todayDate === 3 || todayDate === 23) {
      daySuffix = '일';
    }
  
    return todayMonth + ' ' + todayDate + daySuffix + ', ' + dayWeek ;
  };

//주간 범위를 구하는 함수
export const weekRange = (selectedDate) => {
  const currentDate = new Date(selectedDate);
  const dayOfWeek = currentDate.getDay();
  const weekStart = new Date(currentDate);
  weekStart.setDate(weekStart.getDate() - dayOfWeek + 1); // 월요일로 설정
  const weekEnd = new Date(currentDate);
  weekEnd.setDate(weekEnd.getDate() + (7 - dayOfWeek)); // 일요일로 설정

  return { weekStart, weekEnd };
};
//{weekStart.toLocaleDateString()} - {weekEnd.toLocaleDateString()}
//주간범위를 표시하는 기능
  
  // 자정 시간을 구하는 함수
export const getMidnight = () => {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return midnight;
};
