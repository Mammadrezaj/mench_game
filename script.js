// این تابع به عنوان ورودی یک CSS selector می‌گیرد و تمام المان‌هایی را که با آن selector مطابقت دارند را انتخاب می‌کند

// این تابع تمام المان هایی که دارای کلس هستند را انتخاب میکند که بتونیم روی انها عملیات مورد نظز را اجرا کنیم
const redPlayers = document.querySelectorAll('.red, .red2, .red3, .red4, .red5, .red6, .red7, .red8, .red9 ,.red10');
const bluePlayers = document.querySelectorAll('.blue, .blue2, .blue3, .blue4, .blue5, .blue6, .blue7, .blue8, .blue9 ,.blue10');
const yellowPlayers = document.querySelectorAll('.yellow, .yellow2, .yellow3, .yellow4, .yellow5, .yellow6, .yellow7, .yellow8, .yellow9 ,.yellow10');
const greenPlayers = document.querySelectorAll('.green, .green2, .green3, .green4, .green5, .green6, .green7, .green8, .green9 ,.green10 ');
const whiteWay = document.querySelectorAll('.white, .white2, .white3, .white4, .white6, .white7, .white8, .white9, .white10, .white11, .white12, .white13, .white14, .white16, .white17, .white18, .white19, .white20, .white21, .white22, .white23, .white24, .white26, .white27, .white28, .white29, .white30, .white31, .white32, .white33, .white34, .white36, .white37, .white38, .white39, .white40');



// این تکه کد از جاوااسکریپت وظیفه ایجاد یک تابع با نام پلی سوند را دارد 

// یک المان صوتی را به عنوان ورودی می‌گیرد و سپس این المان صوتی را مجدداً از ابتدا پخش می‌کند

//یا اگر صوت در حال پخش بوده و متوقف شده باشد، پخش آن را از مکانی که متوقف شده بود ادامه می‌دهد.
const playSound = (audioElement) => {
 audioElement.currentTime = 0; // Reset audio to start
 audioElement.play();
};


// این تیکه کد از جاوا اسکریپت برای هر پلی در ردپلی یه ایونت اضافه میکنه که وقتی ماوس رو پلیرها حرکت کرد صدایی که گذاشتیم پخش شود

// وقتی ماوس روی پلیر رفت تایع پلی سوند صدا را اجرا میکند
redPlayers.forEach(player => {
 player.addEventListener('mouseenter', () => {
 const redSound = document.getElementById('redSound');
 playSound(redSound);
 });
});

// بقیه کدها هم دیقا مثل کد بالا کار میکنه که برای پلیرها با رنگای دیگ در نظر گرفتم
bluePlayers.forEach(player => {
 player.addEventListener('mouseenter', () => {
 const blueSound = document.getElementById('blueSound');
 playSound(blueSound);
 });
});

yellowPlayers.forEach(player => {
 player.addEventListener('mouseenter', () => {
 const yellowSound = document.getElementById('yellowSound');
 playSound(yellowSound);
 });
});

greenPlayers.forEach(player => {
 player.addEventListener('mouseenter', () => {
 const greenSound = document.getElementById('greenSound');
 playSound(greenSound);
 });
});

whiteWay.forEach(player => {
 player.addEventListener('mouseenter', () => {
 const whiteWay = document.getElementById('whiteSound');
 playSound(whiteSound);
 });
});