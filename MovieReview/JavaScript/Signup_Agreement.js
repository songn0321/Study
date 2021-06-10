    const agreement_Container = document.querySelector('.js-agreement'),
        btn = document.querySelector('.submit'),
        chk_box = document.querySelector('.chk_box1'),
        chk_label = agreement_Container.querySelector('label'),
        main_tit = document.querySelector('.movie_title');
    
        //체크박스 체크확인여부
        function checkBtn(){
            if(chk_box.checked){
                console.log('약관동의');
                location.href= "../HTML/SignUp.html";
            }else if(chk_box.checked===false){
                alert('이용약관에 동의해주세요');
            }
        }
        function move(){
            location.href="../HTML/index.html";
        }
    main_tit.addEventListener('click',move);
    btn.addEventListener('click',checkBtn);
        
    chk_label.className='chk_label';