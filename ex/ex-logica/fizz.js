function fizzBuzz(num) {
  let x;
    if (  x = Number(num)!== Number){
        return 'digite um numero entre 0 e 100!!!'
    }
    
    if (x % 3 === 0) {
        return 'fizz'
    }
    if (x % 5 === 0) {
        return 'buzz'
    } else {
        return x
    }

}
console.log(fizzBuzz('dhjbkfbjkhsf'))