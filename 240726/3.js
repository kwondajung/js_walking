// 파일을 만들어 문자열(str)과 숫자(n)을 매개변수로 받아 str을 n번 콘솔에 출력하는 함수인 repeatWord 함수를 완성해보세요.

function repeatWord(str, n) {
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

// 함수 실행
repeatWord("hello", 5);