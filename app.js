/**
 * 1. Create a email pattern like:
 * emranh33@gmail.com || emran.h33@yahoo.com || emran_h33@ymail.net || emranh33@outlook.com
 */
    let txt = "emranh33@ymail.net";
    let pattern = /^[a-z0-9._]*@[a-z]{2,10}\.[a-z]{2,8}$/;
    console.log(pattern.test(txt));


/**
* 2. Create a  username pattern like: emranh33 || emran.h33 || emranh33
* Minimum length: 6 , max length : 15 Character
*/
    // let userName ="emranh33";
    // let pattern1 = /^[a-z0-9._]{6,15}$/;
    // console.log(pattern1.test(userName));

/**
 * 3. Create a Bangladeshi phone number pattern like : +8801794430908
 */

    // let phoneNumber = "+8801794430908"
    // let pattern2 = /^(\+8801|01)[0-9]{9}$/;
    // console.log(pattern2.test(phoneNumber));


/**
 * 4. Create a password pattern : Length 6 to 32
 */
    // let pass = "$@.M%e*><@EMR$n&";
    // let pattern3 =/^[a-zA-Z0-9 ~!@#$%^&*()<>[{};.?]{6,32}$/;
    // console.log(pattern3.test(pass));

/**
 * 5. Create a zipcode pattern like : 1216
 */
    // let zipCode = "1216";
    // let pattern4 = /^[0-9]{4}$/;
    // console.log(pattern4.test(zipCode));