module.exports = function toReadable(n) {

    let number = n.toString().split('').reverse(), result = [], sum = number[1] + number[0];

    console.log(number);


    if (n == 0) {
        result.push('zero');
    }
    if (number.length == 3) {
        hundreds(number[2], result);
    }
    if (9 < Number(sum) && Number(sum) <= 20) {
        unit(number[1] + number[0], result);
    } else {
        if (number.length > 1) {
            tens(number[1], result);
            unit(number[0], result);
        }
    }

    if (number.length == 1) {
        unit(number[0], result);
    }

    return result.join(' ');
}

function hundreds(a, result) {
    switch (a) {

        case '1': return result.push("one hundred");
        case '2': return result.push("two hundred");
        case '3': return result.push("three hundred");
        case '4': return result.push("four hundred");
        case '5': return result.push("five hundred");
        case '6': return result.push("six hundred");
        case '7': return result.push("seven hundred");
        case '8': return result.push("eight hundred");
        case '9': return result.push("nine hundred");
    }
}

function tens(b, result) {
    switch (b) {
        case '2': return result.push("twenty");
        case '3': return result.push("thirty");
        case '4': return result.push("forty");
        case '5': return result.push("fifty");
        case '6': return result.push("sixty");
        case '7': return result.push("seventy");
        case '8': return result.push("eighty");
        case '9': return result.push("ninety");
    }
}

function unit(c, result) {
    switch (c) {

        case '1': return result.push("one");
        case '2': return result.push("two");
        case '3': return result.push("three");
        case '4': return result.push("four");
        case '5': return result.push("five");
        case '6': return result.push("six");
        case '7': return result.push("seven");
        case '8': return result.push("eight");
        case '9': return result.push("nine");
        case '10': return result.push("ten");
        case '11': return result.push("eleven");
        case '12': return result.push("twelve");
        case '13': return result.push("thirteen");
        case '14': return result.push("fourteen");
        case '15': return result.push("fifteen");
        case '16': return result.push("sixteen");
        case '17': return result.push("seventeen");
        case '18': return result.push("eighteen");
        case '19': return result.push("nineteen");
        case '20': return result.push("twenty");
    }
}
