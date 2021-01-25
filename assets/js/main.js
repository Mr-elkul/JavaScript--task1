var  myNum = '10';

var myStr = 'строка';

var myBool = true;

var myArr = [1, 2, 3, 4, 5];

var myObj =
{
first: 'First Name',
last: 'Last Name'
};

console.log('myNum:' , myNum);
console.log('myStr:' , myStr);
console.log('myBool:' , myBool);
console.log('myArr:' , myArr);
console.log('myObj:' , myObj);

var myNum = 10;
decimal2 = myNum.toFixed(2)


var  i = 0;
console.log(i++);
console.log(i--);
console.log(++i);
console.log(--i);

var  myTest = 20;
myTest += 20;  
myTest -= 20;
myTest  *= 20;
myTest /= 20;
myTest %= 20;

var myPi = Math.PI;
console.log('myPi:', myPi);

var myRound = Math.round(89.279);
console.log('myRound:', myRound);

var myRandom = Math.random() * 10;
console.log('myRandom:', myRandom);

var myPow = Math.pow(3,5);
console.log('myPow: ', myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log(strObj);


var str = 'Мама мыла раму, рама мыла маму';
var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:' , isRamaPos);


var str = 'Мама мыла раму, рама мыла маму';
var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:' , strReplace);

var myStr = "строка";
console.log('Любая Строка'.toLowerCase());
console.log('Любая Строка'.toUpperCase());
