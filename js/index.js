$(function (){
        $(".js-silder").silder({
            auto: true,//自动播放，传入任何可以转化为true的值都会自动轮播
            speed: 20,//轮播图运动速度
            sideCtrl: true,//是否需要侧边控制按钮
            bottomCtrl: true,//是否需要底部控制按钮
            defaultView: 0,//默认显示的索引
            interval: 1000,//自动轮播的时间，以毫秒为单位，默认3000毫秒
            activeClass: "active",//小的控制按钮激活的样式，不包括作用两边，默认active
        });
    });



window.onload=function(){
 var wrap=document.getElementById('wrap'),
 pic=document.getElementById('pic').getElementsByTagName("li"),
 list=document.getElementById('list').getElementsByTagName('li'),
 index=0,
 timer=null;

 // 定义并调用自动播放函数
 timer = setInterval(autoPlay, 3000);

 // 鼠标划过整个容器时停止自动播放
 wrap.onmouseover = function () {
 clearInterval(timer);
 }

 // 鼠标离开整个容器时继续播放至下一张
 wrap.onmouseout = function () {
 timer = setInterval(autoPlay, 2000);
 }
 // 遍历所有数字导航实现划过切换至对应的图片
 for (var i = 0; i < list.length; i++) {
 list[i].onmouseover = function () {
 clearInterval(timer);
 index = this.innerText - 1;
 changePic(index);
 };
 };

 function autoPlay () {
 if (++index >= pic.length) index = 0;
 changePic(index);
 }

 // 定义图片切换函数
 function changePic (curIndex) {
 for (var i = 0; i < pic.length; ++i) {
 pic[i].style.display = "none";
 list[i].className = "";
 }
 pic[curIndex].style.display = "block";
 list[curIndex].className = "on";
 }
var oDiv = document.getElementById('div1');
      var oUl = document.getElementById('ul1');
      var speed = 2;//初始化速度

      oUl.innerHTML += oUl.innerHTML;//图片内容*2-----参考图（2）
      var oLi= document.getElementsByTagName('li');
      oUl.style.width = oLi.length*160+'px';//设置ul的宽度使图片可以放下

      var oBtn1= document.getElementById('btn1');
      var oBtn2= document.getElementById('btn2');


      function move(){
        if(oUl.offsetLeft<-(oUl.offsetWidth/2)){//向左滚动，当靠左的图4移出边框时
          oUl.style.left = 0;
        }

        if(oUl.offsetLeft > 0){//向右滚动，当靠右的图1移出边框时
          oUl.style.left = -(oUl.offsetWidth/2)+'px';
        }

        oUl.style.left = oUl.offsetLeft + speed + 'px';
      }

      oBtn1.addEventListener('click',function(){
        speed = -2;
      },false);
      oBtn2.addEventListener('click',function(){
        speed = 2;
      },false);

      var timer = setInterval(move,30);//全局变量 ，保存返回的定时器

      oDiv.addEventListener('mouseout', function () {
        timer = setInterval(move,30);
      },false);
      oDiv.addEventListener('mousemove', function () {
        clearInterval(timer);//鼠标移入清除定时器
      },false);
 };











