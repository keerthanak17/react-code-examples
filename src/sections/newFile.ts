const noOfNo = 100

let firstArray = []

for (let i = 1; i <= noOfNo; i++) {
    firstArray.push(i)
}

let secondArray = firstArray.map((i) =>
        i % 15 === 0 ?
            "fizzbuzz" :
    i % 5 === 0? "buzz":
    i % 3 === 0?
         "fizz"

        : i
 )

console.log(secondArray)













let thArr2 = []

for (let i = 1; i <= noOfNo; i++) {
    if(i % 3 === 0) {
        thArr2[i] = "fizz"
    } if(i % 5 === 0) {
        thArr2[i] = "buzz"
    } if(i % 15 === 0) {
        thArr2[i] = "fizzbuzz"
    } else {
        thArr2[i] = i
    }
}

console.log(thArr2)
