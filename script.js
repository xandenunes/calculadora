let expressao=prompt("digite uma expressão simples");
let expressaoArray;
if (expressao.indexOf('+') != -1) {
    expressaoArray=expressao.split('+');
    num1=expressaoArray[0].trim()
    num2=expressaoArray[1].trim()
    let total=num1+num2
    document.write(`<h2> ${num1} + ${num2} = ${total}</h2>`) // imprime no html na parte do h2
} else if (expressao.indexOf('-') != -1){
    expressaoArray=expressao.split('-');
    num1=expressaoArray[0].trim()
    num2=expressaoArray[1].trim()
    let total=num1-num2
    document.write(`<h2> ${num1} - ${num2} = ${total}</h2>`) // imprime no html na parte do h2
} else if (expressao.indexOf('/') != -1){
    expressaoArray=expressao.split('/');
    num1=expressaoArray[0].trim()
    num2=expressaoArray[1].trim()
    let total=num1/num2
    document.write(`<h2> ${num1} / ${num2} = ${total}</h2>`) // imprime no html na parte do h2
} else if (expressao.indexOf('*') != -1 ){
    expressaoArray=expressao.split('*');
    num1=expressaoArray[0].trim()
    num2=expressaoArray[1].trim()
    let total=num1*num2
    document.write(`<h2> ${num1} x ${num2} = ${total}</h2>`) // imprime no html na parte do h2
}

