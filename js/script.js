
let btn = document.getElementById("changeBtn");


btn.onclick = function() {
    
   
    document.body.classList.toggle("dark-mode");
    

    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "切换日间模式";
    } else {
        btn.innerText = "切换夜间模式";
    }
    
};

let textBox = document.getElementById("myText");
let countText = document.getElementById("wordCount");

textBox.oninput = function() {

    let length = textBox.value.length;
    
    countText.innerText = length;
};
// 【来源】：参考了菜鸟教程 / CSDN 社区的原生 JS 轮播图基础逻辑
// 【改动处】：原本代码使用的图片路径改为了我自己的 images 文件夹，并且修改了切换逻辑，使用数组循环切换。


// 【改动处】：这里替换成了我自己的图片名字
let imgArray = [
    "images/pic1.jpg",  // 第一张图
    "images/pic2.jpg",    // 第二张图
    "images/pic3.jpg"     // 第三张图
];

//  记录当前显示的是第几张图片（数组从 0 开始计数，0 代表第一张）
let currentIndex = 0;

// 3. 在网页上找到图片和按钮
let carouselImg = document.getElementById("carouselImg");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

//  点击“下一张”按钮
nextBtn.onclick = function() {
    currentIndex++; // 索引加 1
    // 如果到了最后一张，就回到第一张（0）
    if (currentIndex >= imgArray.length) {
        currentIndex = 0;
    }
    // 把网页上图片的 src 换成数组里的下一张
    carouselImg.src = imgArray[currentIndex];
};

// 5点击“上一张”按钮
prevBtn.onclick = function() {
    currentIndex--; // 索引减 1
    // 如果到了第一张（0），再往前就变成最后一张
    if (currentIndex < 0) {
        currentIndex = imgArray.length - 1;
    }
    carouselImg.src = imgArray[currentIndex];
};
