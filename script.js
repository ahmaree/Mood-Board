  $('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        HappyMood();
    } else if(input==="sad"){
        SadMood();
    }else if(input==="depleted"){
     DepletedMood();
    }else if(input==="humorous"){ 
        HumorousMood();
    }else{  
         alert("Please enter happy,sad,depleted,humorous!");   
    }
}); 
        function HappyMood(){
    changeBackground("https://res.cloudinary.com/teepublic/image/private/s--oA9jd3sB--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1540021755/production/designs/3353166_0.jpg");
    changeTextColor("red"); 
     displayImage("https://followdirk.files.wordpress.com/2011/07/happy-mood.jpg");
        }
function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
} 
function changeTextColor(color){
    $('body').css('color', color);
}
function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

} 
function SadMood(){
    changeBackground("https://i.ytimg.com/vi/k0umq3PVIzw/maxresdefault.jpg");
    changeTextColor("blue");
    displayImage("https://data.whicdn.com/images/309762065/large.jpg");
} 
function DepletedMood(){
    changeBackground("https://st4.depositphotos.com/7158420/19858/i/1600/depositphotos_198585470-stock-photo-portrait-depleted-man-young-bearded.jpg");
    changeTextColor("green");
    displayImage();
}  
function HumorousMood(){
    changeBackground("https://i.pinimg.com/originals/5e/c4/51/5ec4510dcb2bb536f3ee57f1c0120f5c.jpg");
    changeTextColor("pink");
    displayImage(); 
}
    function HappyMood(){
    changeBackground("https://res.cloudinary.com/teepublic/image/private/s--oA9jd3sB--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1540021755/production/designs/3353166_0.jpg");
    changeTextColor("red"); 
     displayImage("https://rlv.zcache.com/todays_mood_emoticon_cool_with_shades_classic_round_sticker-r9ff0ffcbcd764fa0837da8375a8de40b_v9wth_8byvr_307.jpg");
        } 
        function SadMood(){
    changeBackground("https://i.ytimg.com/vi/k0umq3PVIzw/maxresdefault.jpg");
    changeTextColor("blue");
    displayImage("https://coubsecure-s.akamaihd.net/get/b186/p/coub/simple/cw_timeline_pic/c7acd00ee51/48c44d33571e1acb824eb/med_1522381056_image.jpg");
}  
function DepletedMood(){
    changeBackground("https://christianmilitaryschool.org/wp-content/uploads/2016/01/iStock_000008319170Medium-240x160.jpg");
    changeTextColor("green");
    displayImage("https://f4.bcbits.com/img/0004605168_10.jpg"); 
} 
function HumorousMood(){
    changeBackground("https://i.pinimg.com/originals/5e/c4/51/5ec4510dcb2bb536f3ee57f1c0120f5c.jpg");
    changeTextColor("pink");
    displayImage("https://wallpapersafari.com/w/8rhia7/"); 
} 
 function HappyMood(){
    changeBackground("https://res.cloudinary.com/teepublic/image/private/s--oA9jd3sB--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1540021755/production/designs/3353166_0.jpg");
    changeTextColor("red"); 
     displayImage("https://i.pinimg.com/originals/cc/fa/fd/ccfafdd3431d6ef6a18ca2a2a8a23a41.jpg");
        }   
         function SadMood(){
    changeBackground("https://i.ytimg.com/vi/k0umq3PVIzw/maxresdefault.jpg");
    changeTextColor("blue");
    displayImage("https://cdn4.vectorstock.com/i/1000x1000/35/88/cyber-bullying-phone-sad-background-graphic-vector-20263588.jpg");
}    
function DepletedMood(){
    changeBackground("https://christianmilitaryschool.org/wp-content/uploads/2016/01/iStock_000008319170Medium-240x160.jpg");
    changeTextColor("green");
    displayImage("https://transparent.clipartof.com/Clipart-Of-A-Depleted-Battery-Character-Royalty-Free-Vector-Illustration-10241429514.jpg"); 
} 
function HumorousMood(){
    changeBackground("https://i.pinimg.com/originals/5e/c4/51/5ec4510dcb2bb536f3ee57f1c0120f5c.jpg");
    changeTextColor("pink");
    displayImage("https://i.ytimg.com/vi/pZ_R4glgnOg/maxresdefault.jpg"); 
} 
        