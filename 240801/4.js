// 4.js 파일을 만들어 조건에 맞는 튜터님 객체를 출력해주세요.
// 주의) 실제 근무 시간과 다릅니다!
const tutors = [
    {
      이름: "최원장",
      출근시간: 9,
      퇴근시간: 18,
    },
    {
      이름: "윤창식",
      출근시간: 9,
      퇴근시간: 21,
    },
    {
      이름: "박가현",
      출근시간: 13,
      퇴근시간: 18,
    },
    {
      이름: "김병연",
      출근시간: 13,
      퇴근시간: 21,
    },
  ];
  
  // find() 메서드를 활용하여 출근시간이 9시이면서 퇴근시간이 21시인 튜터를 찾아주세요!
  
  // 힌트
  // 1. find() 메서드를 사용해 tutors 배열을 순회합니다.
  // 2. 순회하면서 tutor 객체를 하나씩 가져옵니다.
  // 3. tutor 객체의 출근시간과 퇴근시간을 동시에 비교하여 조건에 맞는 tutor를 찾습니다.
  
  function find9to21Tutor(tutors) {
    // 함수 내용을 채워주세요!
    // ...
    const result = tutors.find(function(person){
      if(person.출근시간 === 9 && person.퇴근시간 === 21){
         return true;
      } else {
        return false;
      }
    })
    return result;
  }
  
  console.log(find9to21Tutor(tutors));
  // 출력 결과: { 이름: "윤창식", 출근시간: 9, 퇴근시간: 21 }
  