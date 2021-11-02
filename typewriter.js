

const sentence = "hello there from lighthouse labs\n";
let delay = 200
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char)
    }, delay);
    delay += 100;
}






    // sentence.split(' ').forEach((letter) => {
    //     setTimeout(() => {
    //         process.stdout.write(letter)
    //     }, delay)
    //     delay += 200
    // })