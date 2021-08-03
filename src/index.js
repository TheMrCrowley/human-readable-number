module.exports = function toReadable (number) {
    const numbers = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20:'twenty',
        30:'thirty',
        40:'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80:'eighty',
        90:'ninety'
    };

    if (number in numbers) {
        return numbers[number];
    }

    if (number < 100) {
        return `${numbers[Math.floor(number / 10) * 10]} ${numbers[+number.toString().charAt(1)]}`;
    }

    if (number < 1000) {
        const res = `${numbers[+number.toString().charAt(0)]} hundred`;
        if (!(number % 100)) {
            return res;
        }
        const rest = number - (+number.toString().charAt(0) * 100);

        if (rest in numbers) {
            return `${res} ${numbers[rest]}`;
        }

        return `${numbers[+number.toString().charAt(0)]} hundred ${numbers[(+number.toString().charAt(1)) * 10]} ${numbers[+number.toString().charAt(2)]}`;
    }
};
