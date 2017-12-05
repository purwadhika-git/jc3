// Async Process


console.log("Starting App");

setTimeout(() => {
    console.log("Fired after 3 seconds");
}, 3000);

setTimeout(() => {
    console.log("Fired after 0 seconds");
}, 0);


console.log("Finished !");