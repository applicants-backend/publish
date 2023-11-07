function sum1 (a:number , b:number) {
    console.log(a + b)
}
function sum2 (a:number , b:number) {
    return a+b;
}
sum1(5,11);
console.log(sum2(5,11))

// 실습문제 4
function sum3 (...rest:number[]) {
    const result = rest.reduce((acc,curr) => acc + curr, 0);
    return result;
}
console.log(sum3(1,2,3,4,5,6,7,8))