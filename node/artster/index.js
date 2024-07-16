const figlet = require("figlet");
const color = require("colors");

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
    // 在後面.rainbow是引用color的意思
});