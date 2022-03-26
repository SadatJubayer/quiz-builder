/* covert numbers to letters, 1=A, 2=B, 3=C....  */

export const numberToLetter = (number: number) => {
    const baseChar = 'A'.charCodeAt(0);
    let letters = '';
    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while (number > 0);

    return letters;
};
