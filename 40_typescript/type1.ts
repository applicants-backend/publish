// tuple
// declare tuple type
let drink : [string,number]

// tuple reset
drink = ['cola', 2000]

// declare and reset tuple 
let drink2 : [string, number] = ['cola', 2000]

// js 배열과 동일하게 인덱스 접근가능, 메서드 사용가능
console.log(drink[1])

// spread 연산자 사용가능
console.log([...drink2,'콜라'])

// readonly 데이터 변경 불가능
let drink3 : readonly [string,number] = ['cola', 2000]
// console.log([...drink3, '콜라주세요'])
// drink3.push('콜라')

//----------------------------------------------------
// 열거형

// enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin = 100,
    user = 200,
    guest = 300,
}

// Enum은 문자열을 지정해 줄 수 있다.
enum Delivery {
    pending = 'pedning',
    delivery = 'delivery',
    finish = 0,
}

console.log(Auth.admin)
console.log(Auth.guest)
console.log(Delivery.delivery)

//================================
// any type
let a : any = ['1','2','3','4','5',6,7,8,9]
