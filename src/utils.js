//날짜 함수
export const today = () => {
    let now = new Date(); //현재 날짜 및 시간
    const month = new Array('January','February', 'March', 'April','May','June','July','August','September','October','November','December');
    let todayMonth = month[now.getMonth()];
    let todayDate = now.getDate() // 현재 날짜
    const week = new Array('Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday');
    let dayWeek = week[now.getDay()]; //weekday에 지정된 날짜의 요일(0~6)반환
  
    let daySuffix = 'th';
    if (todayDate === 1 || todayDate === 21 || todayDate === 31) {
      daySuffix = 'st';
    } else if (todayDate === 2 || todayDate === 22) {
      daySuffix = 'nd';
    } else if (todayDate === 3 || todayDate === 23) {
      daySuffix = 'rd';
    }
  
    return dayWeek + ', ' + todayMonth + ' ' + todayDate + daySuffix;
  };

//주간 범위를 구하는 함수
export const weekRange = () => {
  const currentDate = new Date(selectedDate);
  const dayOfWeek = currentDate.getDay();
  const weekStart = new Date(currentDate);
  weekStart.setDate(weekStart.getDate() - dayOfWeek + 1); // 월요일로 설정
  const weekEnd = new Date(currentDate);
  weekEnd.setDate(weekEnd.getDate() + (7 - dayOfWeek)); // 일요일로 설정

  return { weekStart, weekEnd };
};
  
  // 자정 시간을 구하는 함수
export const getMidnight = () => {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return midnight;
};
