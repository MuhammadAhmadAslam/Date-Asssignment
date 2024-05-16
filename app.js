let now = new Date()
console.log(now);

let moth = ['Jnuary','Feburary','March','April','May','June','July','August','September','October','November','December']
console.log(moth[now.getMonth()]);

let weeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
console.log(weeks[now.getDay()]);
if (now.getDay() == 6 || now.getDay() == 0) {
    console.log(`Its a Fun Day`);
}


if (now.getMonth() >= 15) {
    console.log(`First Fifteen Days Of Month`);
}else{
    console.log(`Last Fifteen Days Of Month`);
}


let check
if (now.getHours() <= 12) {
    check = 'AM'
}else{
    check = 'PM'
}
let laterDate = new Date('31 Dec 2020')
console.log(laterDate);

laterDate = new Date('10 March 2024')
let time = now.getTime() - laterDate.getTime()
let daysPast = Math.floor(time / (1000 * 60 * 60 * 24));
console.log(`Past Days of Ramdan ${daysPast}`);



laterDate = new Date(`05 Dec 2015`)
let laterDate1 = new Date(`01 Jan 2015`)
let sec= Math.floor((laterDate.getTime() - laterDate1.getTime())/1000)
console.log(sec);


now = new Date()
console.log(`Current Date ${now}`);
console.log(now.getHours());