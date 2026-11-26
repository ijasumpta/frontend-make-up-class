async function greet() {
    return "Hello Oge";
}

console.log(greet());

async function displayGreeting() {
    const result = await greet();
    console.log(result);
}

displayGreeting();