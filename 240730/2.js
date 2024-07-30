// 2.js 파일을 만들어 '걷기반 튜터님'만 출력되도록 해주세요.

let tutorNames = ['최원장', '김르탄', '윤창식', '박가현', '김병연', '내배캠'];

// 여기에 코드를 작성하세요.
// forEach 메서드를 사용해 배열을 순회하세요.
// '걷기반 튜터님'만 콘솔에 출력되도록 조건문을 사용하세요. -> 논리합연산자(||)를 활용해보세요.
// '걷기반 튜터님'이 누군지는 다 알고 계시죠? 🥹
// ...

// 배열 메서드인 forEach 와 조건문을 활용하여 완성해주세요.

// tutorNames.forEach(function(tutors){
//     if(tutors !== '김르탄' && tutors !== '내배캠'){
//       console.log(tutors);
//     }
// });


// 최원장
tutorNames.forEach(function(tutors){
    if(tutors === "최원장" || tutors === "윤창식" || tutors === "박가현" || tutors === "김병연"){
        console.log(tutors);
    }
})