var a = $('.block').length;

console.log(a);
var c = 1;
$(document).ready(function () {
    setInterval(() => {

        $('.block1').animate({
            marginLeft: '-=100vw'
        }, 3000, function () {
            c++;
            if(c==1)
            {
                $('.r1').prop('checked',true);
            }
            else if(c==2)
            {
                $('.r2').prop('checked',true);
            }
            else if (c == a) {
                $('.block1').css('marginLeft', '0');
                c = 1;
            }
        })
    }, 5000);
   


    $("#next").on('click', function () {
        $('.block1').animate({
            marginLeft: '-100vw'
        }, 3000, function () {
            c++;
            console.log(c, a);
            if (c == a) {
                $('.block1').css('marginLeft', '0');
                c = 1;
            }
        })
    });
     $("#prev").on('click', function () {
        $('.block1').animate({
            marginLeft: '0px'
         },3000,function () {
             c++;
             console.log(c,a);
             if(c==a)
             {
                 $('.block1').css('marginRight','200vw');
             c=1;
             }
           })
     });   

 $('.r1').on('click',function(){
        $(".r1").prop("checked", true)
        $(".r2").prop("checked", false)
        $(".r3").prop("checked", false)
        $('.block1').css('marginLeft','0');
    })
    $('.r2').on('click',function(){
        $(".r1").prop("checked", false)
        $(".r2").prop("checked", true)
        $(".r3").prop("checked", false)
        $('.block1').css('marginLeft','-100vw');
    })
    $('.r3').on('click',function(){
        $(".r1").prop("checked", false)
        $(".r2").prop("checked", false)
        $(".r3").prop("checked", true)
        $('.block1').css('marginLeft','-200vw');
    })
 
});