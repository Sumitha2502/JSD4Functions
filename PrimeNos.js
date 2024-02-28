//d) Return all the prime numbers in an array

//Anonymous Fn
let primeNumber=[1,2,3,4,5,6,7,8,9,10,11]
let findPrimeNum=function(){
    let result=""
    for(let i=0;i<primeNumber.length;i++){
        let flag=0;
        for(let j=1;j<primeNumber[i];j++){
            if(primeNumber[i]%j===0){
                flag++;
            }
        }
        if(flag==1){
            result+=primeNumber[i]+" "
        }
    }
    console.log("Prime Numbers using anonymous function:",result)
}
findPrimeNum(primeNumber);

//IIFE
(function(primeNum){
    let res=""
    for(let i=0;i<primeNum.length;i++){
        flag=0;
        for(j=1;j<primeNum[i];j++){
            if(primeNum[i]%j===0){
                flag++;
            }
        }
        if(flag==1){
            res+=primeNum[i]+" "
        }
    }
console.log("prime nos using IIFE function:",res)
})([11,12,13,14,15,16,17,18,19,20]);

//Arrow Fn
let primeNumber1=[1,2,3,4,5,6,7,8,9,10,11]
let findPrimeNum1=()=>{
    let result=""
    for(let i=0;i<primeNumber1.length;i++){
        let flag=0;
        for(let j=1;j<primeNumber1[i];j++){
            if(primeNumber1[i]%j===0){
                flag++;
            }
        }
        if(flag==1){
            result+=primeNumber1[i]+" "
        }
    }
    console.log("Prime Numbers using arrow function:",result)
}
findPrimeNum1(primeNumber1);