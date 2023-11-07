
let value : string | number = '안녕하세요'
value = 1000;

// union type => 여러개의 타입을 가질수있다.

// 함수에 모든 값이 들어 올 수 있다 => 제네릭 타입 사용
function getValue (val : string | number | object) {
    return val;
}

getValue ('hi')

// 제네릭 타입으로 변경
function getValue2<T>(value:T): T {
    return value;
}
console.log(getValue2<string>('안녕하십니까'))
console.log(getValue2<number>(1000))

function arrLength<T>(arr : T[]) {
    return arr.length
}

console.log(arrLength<string>(['a','b','c']))
console.log(arrLength<number>([1,2,3,4,5,6,7]))

function printFunc<T>(x : T, y:T) {
    console.log(x)
    console.log(y)
    return 
}
console.log(printFunc<string>('hi','hello'))
