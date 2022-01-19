$(document).ready(function ($){
   $(function (){
      $("#Contact").click(function () {
         $(".Modal").css({
            transform: "translateY(200px)",
            opacity: "1",
            transition: "0.5s",
            zIndex: "1"
         });
         $(".btn-back img").css({
            transform : "translateY(400px)",
            transition : "0.5s",
            opacity : "1",
            zIndex: "1"
         });
      });
      $(".btn-back img").click(function (){
         $(".Modal").css({
            transform : "translateY(0px)",
            opacity : "0",
            zIndex: "0"
         });
         $(".btn-back img").css({
            transform : "translateY(-400px)",
            opacity: "0",
            zIndex: "0"
         });
      });
      $(".Modal-Btn .btn img").click(function (){
         $(".Modal-Btn .btn img").toggleClass("isHas");
         // $(".left-Modal").toggleClass("isHas");
         if ($(".Modal-Btn .btn img").hasClass("isHas")){                  //&& $(".left-Modal").hasClass("isHas")){
            $(".left-Modal").css({
               transition : "0.5s",
               width: "20%"
            });

            $(".Modal-Btn .btn img").css({
               transition: "0.5s",
               transform: "translateX(360px)"
            });
         }
         else{
            $(".left-Modal").css({
               transition : "0.5s",
               width: "0%"
            });

            $(".Modal-Btn .btn img").css({
               transition: "0.5s",
               transform: "translateX(0px)"
            });
         }

      });
      $("#pop").click(function (){
         $(".ModalUs").css({
            opacity : "1",
            transform : "translateY(150px)",
            transition : "0.5s",
            zIndex: "1"
         });
         $(".btn-back_2 img").css({
            opacity : "1",
            transform : "translateY(550px)",
            transition : "0.5s",
            zIndex: "1"
         });
      });
      $(".btn-back_2").click(function () {
         $(".ModalUs").css({
            opacity : "0",
            transform : "translateY(0px)",
            transition : "0.5s",
            zIndex: "0"
         });
         $(".btn-back_2 img").css({
            opacity : "0",
            transform : "translateY(0px)",
            transition : "0.5s",
            zIndex: "0"
         });
      });
      let value_1, value_2, value_3;
      // function send_message(){
      //    await send_message_toGmail();
      // };
      $(".ModalUs #btn-send").click(function () {
         value_1 = $(".ModalUs #input_1").val();
         value_2 = $(".ModalUs #input_2").val();
         value_3 = $(".ModalUs #input_3").val();
         console.log(" Здравствуйте, " + value_2 + "!" + " Мы свяжемся с вами либо по номеру телефона: " + value_1 + ", либо по почте: " + value_3);
      });
      $(".moon").click(function (){
         $(".moon").toggleClass("isHas");
         $("body").css({
            backgroundColor : "rgb(28, 28, 28)"
         });
         $(".ModalUs h1").css({
            textShadow: "0 0 4px white"
         });
         $("#btn-send").css({
            textShadow: "0 0 7px rgb(255, 195, 8)"
         });
         $(".navigation-border").css({
            backgroundColor : "rgb(36, 36, 36)"
         });
         $(".left-Modal").css({
            backgroundColor : "rgb(36, 36, 36)"
         });
         $(".Header").css({
            textShadow: "0 0 10px rgb(255, 195, 8)"
         });
         if ($(".moon").hasClass("isHas")){
            $(".moon").css({
               opacity : "0",
               top : "-1000px"
            });
            $(".sun").css({
               opacity: "1",
               top : "95px"
            });
         }
         else{
            $("body").css({
               backgroundColor : "rgb(219, 219, 219)"
            });
            $(".navigation-border").css({
               backgroundColor : "rgb(87, 87, 87)"
            });
            $(".ModalUs h1").css({
               textShadow: "0 0 0px white"
            });
            $("#btn-send").css({
               textShadow: "0 0 0px rgb(255, 195, 8)"
            });

            $(".left-Modal").css({
               backgroundColor : "rgb(130, 130, 130)"
            });
            $(".sun").css({
               opacity : "0",
               top : "-1000px"
            });
            $(".moon").css({
               opacity : "1",
               top : "100px"
            });
            $(".Header").css({
               textShadow: "0 0 0 rgb(255, 195, 8)"
            });

         }
         $(".moon").toggleClass("isHas");
      });
      $(".sun").click(function(){
         $(".sun").toggleClass("isHas");
         $("body").css({
            backgroundColor : "rgb(219, 219, 219)"
         });
         $(".ModalUs h1").css({
            textShadow: "0 0 0px white"
         });
         $(".left-Modal").css({
            backgroundColor : "rgb(130, 130, 130)"
         });
         $("#btn-send").css({
            textShadow: "0 0 0px rgb(255, 195, 8)"
         });
         $(".navigation-border").css({
            backgroundColor : "rgb(87, 87, 87)"
         });
         $(".Header").css({
            textShadow: "0 0 0 rgb(255, 195, 8)"
         });
         if ($(".sun").hasClass("isHas")){
            $(".sun").css({
               opacity : "0",
               top : "-1000px"
            });
            $(".moon").css({
               opacity : "1",
               top : "100px"
            });
         }
         else{
            $("body").css({
               backgroundColor : "rgb(28, 28, 28)"
            });
            $(".navigation-border").css({
               backgroundColor : "rgb(36, 36, 36)"
            });
            $(".left-Modal").css({
               backgroundColor : "rgb(36, 36, 36)"
            });
            $("#btn-send").css({
               textShadow: "0 0 7px rgb(255, 195, 8)"
            });
            $(".moon").css({
               opacity : "0",
               top : "-1000px"
            });
            $(".ModalUs h1").css({
               textShadow: "0 0 4px white"
            });
            $(".sun").css({
               opacity: "1",
               top : "95px"
            });
            $(".Header").css({
               textShadow: "0 0 10px rgb(255, 195, 8)"
            });
         }
         $(".sun").toggleClass("isHas");
      });

   });
});






