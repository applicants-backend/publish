
// 타입스크립트의 기본형태
let ab : string = 'hi';
let b : number = 1
let c : boolean = true
let d : object = {
    name : 'minhyun',
    age : 20,
};

console.log(b,c,d)

// typescript 를 쓰는이유 ?
// 1> js로 실행시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2> 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌 (실시간 디버깅)

// 배열
let arr : string [] = ['hi', 'hello']
let numArr : number [] = [1,2,3,4,5]

// 객체
let person : {
    name : string;
    age : number;
}
person : [
    {
        name : 'minhyun',
        age : 20,    
    }
]