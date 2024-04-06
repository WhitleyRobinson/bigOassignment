
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
        //console.log(i);
    }
}
//logUpTo(10);
//Time Complexity: 0(n)


function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
        //console.log(i);
    }
}
//logAtLeast10(8);
//Time Complexity: 0(n)


function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++); {
        //console.log(i);
    }
}
//logAtMost10(8);
//Time Complexity: 0(1)


function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ( i % 2 === 0) {
            newArray.push(array[i]);
        }    
    }
    return newArray;
}
console.log();
onlyElementsAtEvenIndex();
//Time Complexity: 0(n)



function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
        let subtotal = 0;
        for (let j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray.push(subtotal);
    }
    return subtotalArray;
}
//Time Complexity: 0(n^2)


function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            if (char in vowelCount) {
                vowelCount[char] += 1;
            } else {
                vowelCount[char] = 1;
            }
        }
    }

    return vowelCount;
}
//Time Complexity: 0(n)

// Part 3

//True 1. True or false: n^2 + n is O(n^2).
// True 2. True or false: n^2 * n is O(n^3).
// False 3. True or false: n^2 + n is O(n).
// O(n) 4. What’s the time complexity of the .indexOf array method?
// O(n) 5. What’s the time complexity of the .includes array method?
// O(n) 6. What’s the time complexity of the .forEach array method?
// O(n log(n)) 7. What’s the time complexity of the .sort array method?
// O(n) 8. What’s the time complexity of the .unshift array method?
// O(1) 9. What’s the time complexity of the .push array method?
// O(n) 10. What’s the time complexity of the .splice array method?
// O(1) 11. What’s the time complexity of the .pop array method?
// O(n) 12. What’s the time complexity of the Object.keys() function?

function count(n) {
    for (let i = 1; i <= n; i++) {
        ////console.log("runs", [i], "time");
    }
}
//count(10);
