// 4.js 파일을 만들어 아이스 전용 커피 데이터를 만들어주세요.

let starbucks = [
    {
      name: '카페 라떼',
      icedOnly: false,
    },
    {
      name: '콜드 브루',
      icedOnly: true,
    },
    {
      name: '돌체 라떼',
      icedOnly: false,
    },
    {
      name: '돌체 콜드 브루',
      icedOnly: true,
    },
  ];
  
  // 여기에 코드를 작성하세요.
  // 아이스 전용 커피 배열을 만듭니다.
  const icedOnly = starbucks.filter(function(ice){
    if(ice.icedOnly === true){
        return true;
    } else{
        return false;
    }
  })
  
  console.log(icedOnly);