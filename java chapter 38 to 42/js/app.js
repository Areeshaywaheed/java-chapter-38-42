        //    ===============chapter 38-42 started=============

        // ===========question 1================

// function custom(a, b) {
//     var result = a;
//     for (var i = 1; i < b; i++) {
//         result = result * a;
//     }
//     return `The power of ${a} is : ` + result;
// }
// alert(custom(6, 2));

          
        // ===========question 2================

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function leapYear() {
//     var year = +prompt("Please enter a year for checking that it is leap year or not");

//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return `The entered year ${year} is a leap year`;
//             } else {
//                 return `The entered year ${year} is not a leap year`;
//             }
//         } else {
//             return `The entered year ${year} is a leap year`;
//         }
//     } else {
//         return `The entered year ${year} is not a leap year`;
//     }
// }

// alert(leapYear());

          
        // ===========question 3================


// function area(a, b, c) {
//     function areaOfT() {
//         return s = (a + b + c) / 2;
//     }
//     var sideOA = areaOfT();
//     // console.log(sideOA);
//     var areaOfTriangle = sideOA * ((sideOA - a) * (sideOA - b) * (sideOA - c));
//     return "The Calculated area of triangle is : " + areaOfTriangle ;
// }

// alert(area(6, 2, 30));

         
        // ===========question 4================

// function mainFunction(st1, st2, st3) {
//     var total = 300;
//     var obtained = st1 + st2 + st3;
//     function percentage() {
//         return (obtained / total) * 100;
//     }
//     function average() {
//         return (obtained / 3);
//     }
//     return "The percentage is : " + Math.floor(percentage()) + " and the average is : " + Math.floor(average());

// }
// alert(mainFunction(47, 60, 97));

             
        // ===========question 5================

// function indexOfMine(input, character) {
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] === character) {
//             return alert(`The index of ${character} is : ` + i);
//             break;
//         }
//     }
// }
// indexOfMine("I am a good Web Developer ", "W");

         
        // ===========question 6================


// function deleteVowels(s) {

//     for (var i = 0; i < 25; i++) {

//         if (s[i] === 'a') {
//             s = s.replace('a', '');
//         }
//         else if (s[i] === 'e') {
//             s = s.replace('e', '');
//         }
//         else if (s[i] === 'i') {
//             s = s.replace('i', '');
//         }
//         else if (s[i] === 'o') {
//             s = s.replace('o', '');
//         }
//         else if (s[i] === 'u') {
//             s = s.replace('u', '');
//         }
//     }

//     return alert("The sentence without vowels : " + s);
// }
// deleteVowels("Web Development");

           
        // ===========question 7================

// function occurrences(text) {
//     var count = 0;
//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (var i = 0; i < text.length - 1; i++) {
//         var char1 = text.charAt(i).toLowerCase();
//         var char2 = text.charAt(i + 1).toLowerCase();

//         switch (char1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 if (vowels.includes(char2)) {
//                     count++;
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }

//     return alert("Number of occurrences of any two vowels in succession in a line of text is : " + count);
// }

// occurrences("I am a good Web Developer");

        
        // ===========question 8================

// var distance = +prompt("Enter distance from two cities in kilometers", 160);

// function meters() {
//     return alert("Distance in meters is: " + (distance * 1000));
// }
// function feet() {
//     return alert("Distance in feet is: " + (distance * 3280.8));
// }
// function inches() {
//     return alert("Distance in inches is: " + (distance * 39370.08));
// }
// function centimeters() {
//     return alert("Distance in centimeters is: " + (distance * 100000));
// }
// meters();
// feet();
// inches();
// centimeters();

       
        // ===========question 9================

// function workTime(overtime) {
//     var workHour = 40;
//     var extraWorkHours = overtime - workHour;
//     if (overtime > workHour) {
//         return alert(`Your overtime is ${extraWorkHours} and your over time payment is : ` + extraWorkHours * 12.00);
//     }
// }
// workTime(45);

         
        // ===========question 10================

// function currencyNotes(totalAmount) {
//     // let totalAmount = amountInHundreds * 100;
//     let num100 = Math.floor(totalAmount / 100);
//     let remainingAmount = totalAmount % 100;
//     let num50 = Math.floor(remainingAmount / 50);
//     remainingAmount = remainingAmount % 50;
//     let num10 = Math.floor(remainingAmount / 10);

//     console.log(`Number of 100 rupee notes: ${num100}`);
//     console.log(`Number of 50 rupee notes: ${num50}`);
//     console.log(`Number of 10 rupee notes: ${num10}`);
// }

// currencyNotes(470);

         
         //   ===============chapter 38-42 completed=================