

let nav=$('#Navbar')
slider=1

imgArr=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']
let dongunav=setInterval(function(){
    if(slider<imgArr.length){
        $('#Navbar').fadeOut(1000,function(){
            $(nav).css("background-image", `url(${imgArr[slider]})`);
            $(this).fadeIn(1000)
        })
        slider++
    }else{
        slider=1;
        dongunav()
    }
},5000)


let element=$('.third-info .strong-first')
count=1

let dongu=setInterval(function(){
    if(count<66){
        $(element).html(count)
        count++
    }else{
        clearInterval(dongu)
    }
} ,60)

let second=$('.third-info .strong-second')
secondcount=1

let ikincidongu=setInterval(function(){
    if(secondcount<21){
        $(second).html(secondcount)
        secondcount++
    }else{
        clearInterval(ikincidongu)
    }
} ,200)


$(function(){
    $(".img-first").css({marginTop: "1350px"})
})
$(function(){
    $(".hov").hover(function(){
            $(".img-first").animate({marginTop: '0px'},1000);
    })
    
})



$(function(){
    $(".img3").css({marginLeft: "1350px"})
})
$(function(){
    $(".hov").hover(function(){
            $(".img3").animate({marginLeft: '0px'},2100);
    })
    
})

$(function(){
    $(".img4").css({marginLeft: "1350px"})
})
$(function(){
    $(".hov").hover(function(){
            $(".img4").animate({marginLeft: '0px'},2500);
    })
    
})

$(function(){
    $(".img5").css({marginLeft: "1350px"})
})
$(function(){
    $(".hov").hover(function(){
            $(".img5").animate({marginLeft: '0px'},3600);
    })
    
})

// Interyer
$(function(){
    $(".img6").css({marginLeft: "1350px"})
})
$(function(){
    $(".hov").hover(function(){
            $(".img6").animate({marginLeft: '0px'},2000);
    })
    
})









  
