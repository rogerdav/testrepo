let regex = /^\d{3}\s\d{7}/g;

let telephone = '206 3340981';
console.log('the is matching', telephone.search(regex));
console.log('match',regex.test(telephone));