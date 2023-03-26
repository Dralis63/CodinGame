const line1 = readline();
const line2 = readline();
const line3 = readline();

const segments = [
    [" _ ", "   ", " _ ", " _ ", "   ", " _ ", " _ ", " _ ", " _ ", " _ "],
    ["| |", "  |", " _|", " _|", "|_|", "|_ ", "|_ ", "  |", "|_|", "|_|"],
    ["|_|", "  |", "|_ ", " _|", "  |", " _|", "|_|", "  |", "|_|", " _|"]
];

let number = "";
for (let i = 0; i < line1.length; i += 3) {
    let digit = "";
    digit += line1.slice(i, i + 3);
    digit += line2.slice(i, i + 3);
    digit += line3.slice(i, i + 3);
    for (let j = 0; j < 10; j++) {
        if (segments[0][j] === digit.slice(0, 3) && segments[1][j] === digit.slice(3, 6) && segments[2][j] === digit.slice(6)) {
            number += j;
            break;
        }
    }
}
console.log(number);