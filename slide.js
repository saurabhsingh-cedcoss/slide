var a = $('.block1').length;

var c = 1;
console.log(a);
console.log(c);
$(document).ready(function () {
    setInterval(() => {

        c++;
        if(c==1)
        {
            $('.r1').prop('checked',true);
            $('.r3').prop('checked',false);
            $('.r2').prop('checked',false);

            
        }
        else if(c==2)
        {   
            $('.r1').prop('checked',false);
            $('.r3').prop('checked',false);
            $('.r2').prop('checked',true);
        }
        else if (c == 3) {
            $('.r1').prop('checked',false);
            $('.r2').prop('checked',false);
            $('.r3').prop('checked',true);
            $('.block1').css('marginLeft', '0');
            c = 1;
        }
        if(c<4){

            $('.block1').animate({ marginLeft: '-=100%' });
        }
          else if(c==4){
                $('.block1').css('marginLeft','0');
                c=1;
            }
        }, 2000);

        
   
   

    $(".next").on('click', function () {
        $('.block1').css(
        "marginLeft",'-=100%')
            c++;
            console.log(c);

            if (c == 3) {
                $('.block1').css('marginLeft', '0');
                c = 0;
            
        };
    });

     $(".prev").on('click', function () {
         c--;
        $('.block1').css(
            'marginLeft', '+=100%'
         )
             if(c<=1)
             {
                 $('.block1').css('marginLeft','-100%');
             c=3;
             }
           
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