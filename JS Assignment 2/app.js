// Chapter 21-25

// Task 01

// var first_name = prompt("Enter your First Name");
// var last_name = prompt("Enter your Last Name");

// var full_name = first_name+" "+last_name;
// alert("Hello : "+full_name);

// Task 02

// var mobile_model = prompt("Enter any Mobile Model : ");

// var legth_of_mobile = mobile_model.length;

// alert(legth_of_mobile);

// Task 03
// var word = "Pakistani";
// document.write("String is : "+word);

// var index = 0;

// for(var j = 0 ; j <word.length;j++)
// {
//     if(word[j] == "n")
//     {
//         index = j;
//     }
// }
// document.write("<br>"+"Index is :"+index);

// Task 04

// var word = "Hello World ";
// document.write("String is : "+word);

// var index = 0;

// for(var j = 0 ; j <word.length;j++)
// {
//     if(word[j] == "l")
//     {
//         index = j;
//     }
// }
// document.write("<br>"+"Last Index of l is :"+index);

// Task 05

// var word = "Pakistani";
// document.write("String is : "+word);

// var index = 0;

// for(var j = 0 ; j <word.length;j++)
// {
//     if(j == 3)
//     {
//         index = word[j];
//     }
// }
// document.write("<br>"+"Word at index 3 is :"+index);

// Task 07

// var city = "Hyderabad";
// document.write("City :"+city);
// var to_replace = city.slice(5,9);
// var replace ="Islam";
// city= replace+to_replace;
// document.write("<br>"+"After Replacement : "+city);



// Chapter 26 - 30


// Task 01 

// var number = prompt("Enter positive integer : ");

// document.write("Number : "+number);
// document.write("<br>"+"Round off : "+Math.round(number));
// document.write("<br>"+"Ceil : "+Math.ceil(number));
// document.write("<br>"+"Floor : "+Math.floor(number));

// Task 02
// var number = prompt("Enter negative integer : ");

// document.write("Number : "+number);
// document.write("<br>"+"Round off : "+Math.round(number));
// document.write("<br>"+"Ceil : "+Math.ceil(number));
// document.write("<br>"+"Floor : "+Math.floor(number));

// Task 03

// var number = -4 ;
// document.write("Absolute value of "+"  "+number+" is  "+Math.abs(number));


// Task 08
// var secret_num = Math.floor(Math.random()*10);
// var guess = prompt("Enter secret number : ");

// if(guess == secret_num)
// {
//     alert("You win ");
// }
// else
// {
//     alert("Try harder in guessing secret number");
// }
// document.write(secret_num);

// Task 05

// var coin_value = Math.floor(Math.random() *2) + 1;

// if (coin_value == 1)
// {
//     document.write(coin_value);
//     document.write("<br>"+"Coin Value : Heads");
// }
// else
// {
//     document.write(coin_value);
//     document.write("<br>"+"Coin Value : Tails");
// }



// Chapter 31-34

// Task 01
// var date = Date();
// document.write(date);

// Task 03

// var date = new Date();
// var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var current_day = days[date.getDay()];
// document.write(current_day);

// Task 13
// var date =  new Date();
// var age = prompt("Enter your age :");
// var birthyear = (date.getFullYear()) - age;
// document.write("Your age is : "+age);
// document.write("<br>"+"Your birth year is : "+birthyear);

// Task 14
// var num_of_units = 410;
// var charges_per_unit = 16;
// var late_payment = 350;
// var net_amount = num_of_units * charges_per_unit;
// var gross_amount_payable =  net_amount + late_payment;

// document.write("<h1>K-Electric</h1>");
// document.write("<br>"+"Customer Name : <b>XYZ</b>");
// document.write("<br>"+"Month : <b>Ferburary </b>");
// document.write("<br>"+"Number of units : "+num_of_units);
// document.write("<br>"+"Charges per unit : "+charges_per_unit);
// document.write("<br>"+"<br>"+"Net Amount Payable : "+net_amount);
// document.write("<br>"+"Late payment surge : "+late_payment);
// document.write("<br>"+"Gross Amount Payable :"+gross_amount_payable);


//  Chapter 35-38

// Task 03

// var add = function()
// {
//     var num1 = prompt("Enter first number : ");
//     var num2 = prompt("Enter second number : ");
//     var result = +num1 + +num2;
//     return result;
// }

// document.write(add());

// Task 07
// var print_number = function()
// {
//     var start = prompt("Enter starting number : ") ;
//     var end   = prompt("Enter starting number : ");

//     for(var i = start; i <=end ; i++)
//     {
//         document.write(i+"<br>");
//     }
// }

// print_number();