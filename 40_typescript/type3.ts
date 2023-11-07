// 자바스크립트의 경우
// function jsFunc(a,b) {
//     console.log(a);
//     console.log(b);
// }

// 매개변수에도 지정해주고 리턴해주는 값에도 지정해줘야한다.
function tsFunc(a : number , b : number , c? : number) : number {
    return a + b
}
tsFunc(1,2)
tsFunc(1,2,3)


const arrowTsFunc = (a:number, b:number) : number => {
    return a+b
};

const arrowTsFunc2 = (a:number , b:number) => a * b;

// 리턴이 없는 함수
function printFunc(a : string, b : string):void {
    console.log(a,b);
}

/////--------------------------------------------------
// never 타입
// never : 특정 조건에서만 빠져나갈 수 있고 어떤 조건에서는 무한루프에 빠진다.
// 항상 함수 끝에 도달하지 않는 경우.

// function goingOn ( a:number ) : never {
//     while(true) {
//         console.log('go');
//         // if (a>10) break;
//     }
// }
// goingOn(1)