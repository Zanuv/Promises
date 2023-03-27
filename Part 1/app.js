// Part 1: Number Facts

let favorite = 6;
let apiURL = "http://numbersapi.com";

// 1. Make a request to Numbers API to get a fact about your favorite number.

$.getJSON(`${apiURL}/${favorite}?json`).then((data) => {
	console.log(data);
});

/* 2. Figure out how to get data on multiple numbers in a single request. 
        Make that request and when you get the data back, 
        put all of the number facts on a page.
*/

let favNumbers = [6, 12, 31];
$.getJSON(`${apiURL}/${favNumbers}?json`).then((data) => {
	console.log(data);
});

/* Use the API to get 4 facts about your favorite number. Once you have them all, 
        put them on the page. It is okay if facts are repeats. 
*/

Promise.all(
	Array.from({ length: 4 }, () => {
		return $.getJSON(`${apiURL}/${favorite}?json`);
	})
).then((facts) => {
	facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
