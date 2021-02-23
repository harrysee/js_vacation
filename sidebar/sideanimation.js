var sideicon = document.getElementById("infonav");
var sidepullicon=document.getElementById("closenav");
var side_bar = document.querySelector("nav");


  
// 맨 처음 위치와 전위치를 담는 변수선언
var scrollPosition = document.documentElement.scrollTop;

//info박스들
var start =document.querySelector(".start");
var info1=document.querySelector(".java");
var info2=document.querySelector(".c");
var info3=document.querySelector(".html");
var info4=document.querySelector("#js");
var info5=document.querySelector(".python");

//메뉴 아이콘을 눌렀을 때 나오는 애니매이션 적용
sideicon.addEventListener("click", function(e) {
    side_bar.style.animationName="putside"; //애니매이션 이름
    side_bar.style.animationDuration = "0.5s"; //1초동안
    side_bar.style.animationFillMode = "forwards";
    //애니매이션 끝나고 난 후 마지막 style을 계속 적용
    side_bar.style.WebkitAnimationPlayState = "running";
    //애니매이션 멈춘지점부터 시작하기 
    //멈추는 건 paused:animation-play-state: paused;
    document.body.style.background="#7f7f7f";
});

sidepullicon.addEventListener("click",function(e){
    side_bar.style.animationName="pullside";
    side_bar.style.animationDuration = "0.5s"; 
    side_bar.style.animationFillMode = "forwards";
    //애니매이션 끝나고 난 후 마지막 style을 계속 적용
    side_bar.style.WebkitAnimationPlayState = "running";
    document.body.style.background="rgba(255, 255, 255, 0)";

});

document.addEventListener('scroll', function() {
    var documentY = document.documentElement.scrollTop;
    //이전 위치보다 크면 1 (내리는스크롤) / 작으면 -1(올리는 스크롤) 방향구분
    var direction = ((documentY - scrollPosition) >= 0) ? 1 : -1; 
    var head = document.querySelector("header"); //위에 header부분 변수선언

    // 각각 애니매이션 적용
    if(direction ==1){ //내리는 거
        head.style.animationName="dishead";
        head.style.animationDuration = "0.5s"; 
        head.style.animationFillMode = "forwards";  
    }else if(direction==-1){ //올리는거
        head.style.animationName="appearhead";
        head.style.animationDuration = "0.5s"; 
        head.style.animationFillMode = "forwards";  
    }
    scrollPosition=document.documentElement.scrollTop;// Update scrollY
});

//스와이퍼
const slide = new Swiper('.swiper-container', {
    slidesPerView : 'auto',
    spaceBetween : 6, 
    loop:true, //반복시켜주는 것이다. 배너 슬라이더가 3개인데 이거 안해주면 3번째에서 첫번째로 다시 안돌아옴

    //밑에 동그라미 모양 현위치
    pagination:{
        el:'.swiper-pagination',
    },

    //양옆에 넘기는 버튼
    // navigation:{
    //     nextEI:'.swiper-button-next',
    //     prevEI:'.swiper-button-prev',
    // },
});

//밑으로 내려가는 함수 다음페이지 스크롤
function moveNext(){
    var next = document.querySelector(".swiper-container").clientHeight; //자바페이지 top 위치반환
    window.scrollTo({ //지정된 곳으로 이동시킴
        top:next,
        behavior:'smooth'
    });
}