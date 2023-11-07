function arrElement<T>(arr : T[], index : number) : T | boolean {
    if (arr.length - 1 < index) {
        return false;
    } else {
        return arr[index]
    }
}

console.log(arrElement<string>(['hi','there'],1))