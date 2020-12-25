function sum(a, b) {
  return a + b;
}

function capitalize(a) {
  const arr = a.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

function reverse(a) {
  const arr = a.split('');
  return arr.reverse().join('');
}

function calculator(a,b,op) {

  switch(op) {
    case '+': return a+b;
    case '*': return a*b;
    case '-': return a-b;
    case '/': return a/b;
  }
}

function analysis(arr) {
  arr.sort((a,b)=>a-b);
  const obj = {
    average : arr.reduce((total,x)=>total+x)/arr.length,
    length : arr.length,
    min : arr[0],
    max : arr[arr.length-1],
  }
  return obj;
}

function caeser(str) {
  str = str.toUpperCase();
  let arr=[];
  for(let i=0;i<str.length;i++){
    if(str[i]>'A' && str[i]<'Z'){
      let n = str.charCodeAt(i);
      n=n-65;
      n=(n+13)%26;
      arr.push(String.fromCharCode(65+n));
    }
    else{
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

// module.exports = sum;
export {sum, capitalize, reverse, calculator, analysis, caeser}