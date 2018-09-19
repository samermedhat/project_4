$("document").ready(function(){
    
 
   
 
   
 $(".start .str , .start .str2 ").mouseenter(function(){
    $(".start .glyphicon").fadeToggle() 
 });   
  $(".start .str .glyphicon , .start .str2 .glyphicon").mouseleave(function(){
    $(".start .glyphicon").fadeToggle()
 });   
$(".start .glyphicon").click(function(){
   $(".start .str").fadeToggle(0);
    $(".start .str2").fadeToggle(0);
});
    


    
    
    
    
    
    
    
    
    
    
 $(".second .sec").mouseenter(function(){
   $(".second .sec p").fadeToggle();
   $(".second .sec header h2").animate({
       marginTop : 100
   }); 
   $(".second .sec header").addClass("siko");  
 });
   $(".second .sec").mouseleave(function(){
    $(".second .sec p").fadeToggle();
    $(".second .sec header").removeClass("siko");
    $(".second .sec header h2").animate({
       marginTop : 40
   });        
 });   
    

 $(".second .sec2").mouseenter(function(){
   $(".second .sec2 p").fadeToggle();
   $(".second .sec2 header h2").animate({
       marginTop : 100
   }); 
   $(".second .sec2 header").addClass("siko");  
 });
   $(".second .sec2").mouseleave(function(){
    $(".second .sec2 p").fadeToggle();
    $(".second .sec2 header").removeClass("siko");
    $(".second .sec2 header h2").animate({
       marginTop : 40
   });        
 });   
    
    
 $(".second .sec3").mouseenter(function(){
   $(".second .sec3 p").fadeToggle();
   $(".second .sec3 header h2").animate({
       marginTop : 100
   }); 
   $(".second .sec3 header").addClass("siko");  
 });
   $(".second .sec3").mouseleave(function(){
    $(".second .sec3 p").fadeToggle();
    $(".second .sec3 header").removeClass("siko");
    $(".second .sec3 header h2").animate({
       marginTop : 40
   });        
 });   
    
   
    
    
    
    
    
    
    
    $(".smsm .samer").mouseenter(function(){
        
      $(".img1").fadeToggle(0);  
       $(".smsm .samer .sika").fadeToggle(0) 
        
    });

    $(".smsm .samer").mouseleave(function(){
        
        $(".img1").fadeToggle(0);    
       $(".smsm .samer .sika").fadeToggle(0) 
        
    });
    

    $(".smsm .samer2").mouseenter(function(){
        
      $(".img2").fadeToggle(0);  
       $(".smsm .samer2 .sika2").fadeToggle(0) 
        
    });
    
    $(".smsm .samer2").mouseleave(function(){
        
        $(".img2").fadeToggle(0);    
       $(".smsm .samer2 .sika2").fadeToggle(0) 
        
    });
    

    $(".smsm .samer3").mouseenter(function(){
        
      $(".img3").fadeToggle(0);  
       $(".smsm .samer3 .sika3").fadeToggle(0) 
        
    });

    $(".smsm .samer3").mouseleave(function(){
        
        $(".img3").fadeToggle(0);    
       $(".smsm .samer3 .sika3").fadeToggle(0) 
        
    });
    

    $(".smsm .samer4").mouseenter(function(){
        
      $(".img4").fadeToggle(0);  
       $(".smsm .samer4 .sika4").fadeToggle(0) 
        
    });
 
    $(".smsm .samer4").mouseleave(function(){
        
        $(".img4").fadeToggle(0);    
       $(".smsm .samer4 .sika4").fadeToggle(0) 
        
    });
  
         
       $(".smsm .samer5").mouseenter(function(){
        
      $(".img5").fadeToggle(0);  
       $(".smsm .samer5 .sika5").fadeToggle(0) 
        
    });
 
    $(".smsm .samer5").mouseleave(function(){
        
        $(".img5").fadeToggle(0);    
       $(".smsm .samer5 .sika5").fadeToggle(0) 
        
    });

         
       $(".smsm .samer6").mouseenter(function(){
        
      $(".img6").fadeToggle(0);  
       $(".smsm .samer6 .sika6").fadeToggle(0) 
        
    });
 
    $(".smsm .samer6").mouseleave(function(){
        
        $(".img6").fadeToggle(0);    
       $(".smsm .samer6 .sika6").fadeToggle(0) 
        
    });
    
     
       
    
    
    
    
    
     
    
 $(".sel").mouseenter(function(){
   $(".sel p").fadeToggle();
   $(".sel header h1").animate({
       marginTop : 200
   }); 
 });
    
   $(".sel").mouseleave(function(){
    $(".sel p").fadeToggle();
    $(".sel header h1").animate({
       marginTop : 240
   });        
 });     
    
    
    
    
$(".end p span a").mouseenter(function(){
    
$(".end p span a").animate({
   
    fontSize: 30,
    
});     
});    
    
    
    
    
 $(".end p span a").mouseleave(function(){
    
$(".end p span a").animate({
   
    fontSize: 20
    
});    
});    
    
 
 
    
    
    
  
$(".myform").show(0,function(){
  $(".myform").animate({
      
     top:300,
      
     height:290
  
  },3000,function(){
      $(".myform .glyphicon").fadeIn(500)
      $(".myform .myform2 h1").fadeIn(1000)
      $(".myform .myform2 p").fadeIn(2500)
      $(".myform .myform2 form input").fadeIn(4000)
      $(".myform3").fadeIn(5500,function(){
          
         $(".myform3").animate({
             
            left:520
             
         }); 
      });
  });  
   
});
    
$(".myform .glyphicon").click(function(){
    
  $(".myform , .myform3").fadeOut(1000) 
    
});    
    
     
    
    
    

    
   

});    
