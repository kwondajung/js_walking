// 파일을 만들어 나이가 19 이상이면 “안녕하세요”, 아니라면 “나가세요”를 반환하는 함수인 checkAge 함수를 완성해보세요.

function checkAge(age) {
    if (age >= 19) {
        return "안녕하세요";
    } else {
        return "나가세요";
    }
}

// 함수 실행
console.log(checkAge(17));
console.log(checkAge(25));

