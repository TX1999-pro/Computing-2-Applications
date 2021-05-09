/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
};

// filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sentence1,sentence2) {
    const split1 = sentence1.split(" ");
    const split2 = sentence2.split(" ");
    if (split1.length !== split2.length){
        throw "ValueError";
    }
    else {
        let new_sentence = [];
        for (var i = 0; i < split1.length; i++) {
            new_sentence.push(split1[i]);
            new_sentence.push(split2[i]);
        }
        return new_sentence.join(" ");
    }
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (string) {
    return string.split("").filter(function(val, i, arr) {
        return string.split("")[i] !== string.toUpperCase().split("")[i];
    }).length;
};


// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.

// query - what if there are two keys of the same length?

Exam.longest_key = function (Obj) {
    let long = "";
    Obj.keys().forEach((key) => {
        if (key.length > long.length) {
            long = key;
        }
    });
    return long;
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (dict) {
    var large = 0;
    dict.forEach((key) => {
        key.forEach((value) => {
            if ((value%2 === 0) && (value>=large)){
               return; 
            }
        })
    })
    return;
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location="London") {
    return "Hello, " + username + ", how is " + location + "?";
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar=1, offset=0) {
    const y = x * scalar + offset;
    if (y > 0){
        return y;
    }
    else{
        return 0;
    };
};

export default Object.freeze(Exam);
