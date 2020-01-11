# homework-3

# Variables

The variable definition was based on the number of choices the user could have in terms of types of characters. In the case of this work, 12. All combinations of choice became a variable. Important to mention that all variables are string type. Below you see all the variables:

* Numbers only (n)
* Special characters only(s)
* Upper case only (u)
* Lower case only (l)
* Number + Scpec
* sn
* snl
* snlu
* sl
* su
* nl
* nu
* lu

# Conditional

With the variables, a conditional formula was created using "if"  and "else if." In the case the user chooses one type of character or other, the conditions target a different variable.

# Function

The primary function was created with a loop that goes through the variables according to the codition reflected by the boolean value when the user makes a choice (applying conditions explained before). 

The password is then created through a concatenation of the characters in the string variable. The choice of the characters happend with the function CharAt and Math.random.

* function password(usl, characters) {
        var psd = "";
        for (var i = 0; i<usl; i++){
        psd += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return psd;
        }
