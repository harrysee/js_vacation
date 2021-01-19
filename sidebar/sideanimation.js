sideicon = document.getElementById("infonav");
sidepullicon=document.getElementById("closenav");
side_bar = document.querySelector("nav");

//메뉴 아이콘을 눌렀을 때 나오는 애니매이션 적용
sideicon.addEventListener("click", function(e) {
    side_bar.style.animationName="putside"; //애니매이션 이름
    side_bar.style.animationDuration = "1s"; //1초동안
    side_bar.style.animationFillMode = "forwards";
    //애니매이션 끝나고 난 후 마지막 style을 계속 적용
    side_bar.style.WebkitAnimationPlayState = "running";
    //애니매이션 멈춘지점부터 시작하기 
    //멈추는 건 paused:animation-play-state: paused;
    document.body.style.background="#7f7f7f";
});

sidepullicon.addEventListener("click",function(e){
    side_bar.style.animationName="pullside";
    side_bar.style.animationDuration = "1s"; 
    side_bar.style.animationFillMode = "forwards";
    //애니매이션 끝나고 난 후 마지막 style을 계속 적용
    side_bar.style.WebkitAnimationPlayState = "running";
    document.body.style.background="rgba(255, 255, 255, 0)";

});