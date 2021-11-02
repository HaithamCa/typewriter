

const sentence = "hello there from lighthouse labs\n";
let delay = 200
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char)
    }, delay);
    delay += 100;
}