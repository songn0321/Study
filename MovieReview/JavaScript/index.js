$('#star a').click(function(){ 
    $(this).parent().children("a").removeClass("on"); 
    $(this).addClass("on").prevAll("a").addClass("on"); 
 });
 $('.add_btn').click(function(){
     $('.black_modal').addClass('slide_down');
 });
$('.close').click(function(){
    $('.black_modal').removeClass('slide_down');
})
$('.signUp_btn').click(function(){
    location.href="../HTML/Signup_Agreement.html";
})

//slider
const slide_List = document.querySelector('.Img_Slider_list');//list
const slide_box = document.querySelector('.Img_Slider_Box');//box
const slide_content = document.querySelectorAll('.Img_Slider')//slider
const slide_Len = slide_content.length;
const next_Btn =  document.querySelector('.Slider_Btn_next');
const prev_Btn = document.querySelector('.Slider_Btn_prev');
const slideWidth = 1000;
const slideSpd = 300;
const startNum = 0;

slide_List.style.width = slideWidth * (slide_Len+2) +"px";

let firstChild = slide_List.firstElementChild;
let lastChild = slide_List.lastElementChild;
let clonedFrist = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

slide_List.appendChild(clonedFrist);
slide_List.insertBefore(clonedLast, slide_List.firstElementChild);

slide_List.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

let count = startNum;
let curSlide = slide_content[count];
curSlide.classList.add('slide_active');

//Next Button
next_Btn.addEventListener('click', function(){
    if(count <= slide_Len -1){
        slide_List.style.transition  = slideSpd+ "ms" ;
        slide_List.style.transform = "translate3d(-" + (slideWidth * (count + 2)) + "px, 0px, 0px)";
    }
    if(count === slide_Len -1){
        setTimeout(function(){
            slide_List.style.transition= "0ms";
            slide_List.style.transform="translate3d(-" + slideWidth + "px, 0px, 0px)";
        },slideSpd);
        count= -1;
    }
    curSlide.classList.remove('slide_active');
    curSlide = slide_content[++count];
    curSlide.classList.add('slide_active');
});
//Prev Button
prev_Btn.addEventListener('click',function(){
    if(count >= 0){
        slide_List.style.transition = slideSpd +"ms";
        slide_List.style.transform ="translate3d(-" + (slideWidth * count) + "px, 0px, 0px)";
    }if(count === 0){
        setTimeout(function(){
        slide_List.style.transition ="0ms";
        slide_List.style.transform = "translate3d(-" +(slideWidth*slide_Len)+ "px,0px,0px)";
    },slideSpd);

    count=slide_Len;
    }
curSlide.classList.remove('slide_active');
curSlide = slide_content[--count];
curSlide.classList.add('slide_active');
});
