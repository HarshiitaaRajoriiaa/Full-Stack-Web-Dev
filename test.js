setInterval(() => {
    let time = new Date();
    process.stdout.write(`\r${time.toLocaleTimeString()}`);
}, 1000);