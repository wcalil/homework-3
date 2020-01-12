// Here are the arrays inside the object.

var number = "0123456789";
var specialChar = "!<$#*@~/&>";
var lowerCase = "abcdefghijklmnopqrstuvwxz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var sn = "!<$#*@~/&>0123456789"
var snl = "!<$#*@~/&>0123456789abcdefghij"
var snlu = "!<$#*@~/&>0123456789abcdefghijABCDEFGHIJ"
var sl = "!<$#*@~/&>abcdefghij"
var su = "!<$#*@~/&>ABCDEFGHIJ"
var nl = "0123456789abcdefghij"
var nu = "0123456789ABCDEFGHIJ"
var lu = "abcdefghijABCDEFGHIJ"

// Making some test logs.

// console.log(specialChar[6])
// console.log(number[6])
// console.log(lowerCase[6])
// console.log(upperCase[6])


function promptMe() {
    var usl = prompt("How many characters do you want in your password?");
    console.log(usl)


if (usl < 128 && usl > 8) {


    // Here are the prompts and alerts


    var confNumber = confirm("Do you want numbers in your password?");
    console.log(confNumber)

    var confSpec = confirm("Do you want special characters in your password?");
    console.log(confSpec)

    var confLower = confirm("Do you want lower case characters in your password?");
    console.log(confLower)

    var confUpper = confirm("Do you want upper case characters in your password?");
    console.log(confUpper)



    //Here is the example of function that was used on the password generator 
    // (usl = user choice of length for the characters)     

    // function password(usl, characters) {
    //     var psd = "";
    //     for (var i = 0; i<usl; i++){
    //     psd += characters.charAt(Math.floor(Math.random() * characters.length));
    //     }
    //     return psd;
    // }



    //Here are the conditions and functions:



    if (confNumber && confSpec == false && confLower == false && confUpper == false) {

        function password(usl, number) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += number.charAt(Math.floor(Math.random() * number.length));
            }
            return psd;
        }
        // alert(password(usl, number));
        document.getElementById("return").innerHTML = password(usl, number);
    }

    else if (confNumber === false && confSpec && confLower == false && confUpper == false) {

        function password(usl, specialChar) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += specialChar.charAt(Math.floor(Math.random() * specialChar.length));
            }
            return psd;
        }
        // alert(password(usl, specialChar));
        document.getElementById("return").innerHTML = password(usl, specialChar);
    }

    else if (confNumber === false && confSpec === false && confLower && confUpper == false) {

        function password(usl, lowerCase) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
            }
            return psd;
        }
        // alert(password(usl, lowerCase));
        document.getElementById("return").innerHTML = password(usl, lowerCase);
        
    }

    else if (confNumber === false && confSpec === false && confLower === false && confUpper) {

        function password(usl, upperCase) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
            }
            return psd;
        }
        // alert(password(usl, upperCase));
        document.getElementById("return").innerHTML = password(usl, upperCase);
        

    }

    else if (confNumber && confSpec && confLower === false && confUpper === false) {

        function password(usl, sn) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += sn.charAt(Math.floor(Math.random() * sn.length));
            }
            return psd;
        }
        // alert(password(usl, sn));
        document.getElementById("return").innerHTML = password(usl, sn);

    }

    else if (confNumber && confSpec && confLower && confUpper === false) {

        function password(usl, snl) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += snl.charAt(Math.floor(Math.random() * snl.length));
            }
            return psd;
        }
        // alert(password(usl, snl));
        document.getElementById("return").innerHTML = password(usl, snl);

    }

    else if (confNumber && confSpec && confLower && confUpper) {

        function password(usl, snlu) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += snlu.charAt(Math.floor(Math.random() * snlu.length));
            }
            return psd;
        }
        // alert(password(usl, snlu));
        document.getElementById("return").innerHTML = password(usl, snlu);

    }

    else if (confNumber === false && confSpec && confLower && confUpper === false) {

        function password(usl, sl) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += sl.charAt(Math.floor(Math.random() * sl.length));
            }
            return psd;
        }
        // alert(password(usl, sl));
        document.getElementById("return").innerHTML = password(usl, sl);
        

    }

    else if (confNumber === false && confSpec && confLower === false && confUpper) {

        function password(usl, su) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += su.charAt(Math.floor(Math.random() * su.length));
            }
            return psd;
        }
        // alert(password(usl, su));
        document.getElementById("return").innerHTML = password(usl, su);

    }

    else if (confNumber && confSpec === false && confLower && confUpper === false) {

        function password(usl, nl) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += nl.charAt(Math.floor(Math.random() * nl.length));
            }
            return psd;
        }
        // alert(password(usl, nl));
        document.getElementById("return").innerHTML = password(usl, nl);

    }

    else if (confNumber && confSpec === false && confLower === false && confUpper) {

        function password(usl, nu) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += nu.charAt(Math.floor(Math.random() * nu.length));
            }
            return psd;
        }
        // alert(password(usl, nu));
        document.getElementById("return").innerHTML = password(usl, nu);

    }

    else if (confNumber === false && confSpec === false && confLower && confUpper) {

        function password(usl, lu) {

            var psd = "";
            for (var i = 0; i < usl; i++) {
                psd += lu.charAt(Math.floor(Math.random() * lu.length));
            }
            return psd;
        }
        // alert(password(usl, lu));
        document.getElementById("return").innerHTML = password(usl, lu);

    }


    else {
        alert("Somehting went wrong, please try again!");

    }



}

else {
    alert("Please choose a password between 8 and 128 characters")
}

}


function copyPassword() {
    var copyText = document.getElementById("return");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value);
  }

