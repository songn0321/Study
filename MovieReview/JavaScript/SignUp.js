const main_tit = document.querySelector('.movie_title');

function move(){
    location.href="../HTML/index.html";
}
main_tit.addEventListener('click',move);

//jQuery 작성
$('#id').focusout(function(){
    const id = $('#id').val();
    if(id ==''){
        $('.alert_1').addClass('signup_Alert');
    }else{
        $('.alert_1').removeClass('signup_Alert');
    }
})

$('#pw').focusout(function(){
    const pw = $('#pw').val();
    if(pw==''){
        $('.alert_2').addClass('signup_Alert');
    }else{
        $('.alert_2').removeClass('signup_Alert');
    }
})

//javaScript 작성
const eml= document.querySelector('#email');
function eml_chk(){
    if(eml.value ==''){
        document.querySelector('.alert_3').classList.add('signup_Alert');
    }else{
        document.querySelector('.alert_3').classList.remove('signup_Alert');
    }
}
eml.addEventListener('focusout',eml_chk);

const year = document.querySelector('.bth');
const day = document.querySelector('.day');
function birth(){
    if(year.value =='' || day.value ==''){
        document.querySelector('.alert_4').classList.add('signup_Alert');
    }else{
        document.querySelector('.alert_4').classList.remove('signup_Alert');
    }
}
year.addEventListener('focusout',birth);
day.addEventListener('focusout',birth);

//select option값 가져오기
// $('select[name=sex]').change(function(){
//     console.log($(this).val());//vlaue값
//     console.log($('select[name=sex] option:selected').text());//text값
// });

//이메일 정규식 (추가)

$('.signup_btn2').click(function(e){
    if($('#id').val()==''){
        e.preventDefault();
        alert('아이디를 입력해주세요');
        return $('#id').focus();
    }else if($('#pw').val()==''){
        e.preventDefault();
        alert('비밀번호를 입력해주세요');
        return $('#pw').focus();
    }else if($('#email').val()==''){
        e.preventDefault();
        alert('email을 입력해주세요');
        return $('#email').focus();       
    }else if($('.bth').val()==''||$('.day').val()==''){
        e.preventDefault();
        alert('생년월일을 모두 입력해주세요');
        return $('.bth').focus();
    }else{
        alert('회원가입이 완료되었습니다');
        location.href='../HTML/index.html';
    }

});

