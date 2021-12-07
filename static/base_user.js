console.log("Hello World");
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function(){
        navbar_height = document.querySelector('#navbar1').offsetHeight;
        if(window.scrollY > navbar_height){
            document.querySelector('#navbar1').style.position = 'fixed';
        }else{
            document.querySelector('#navbar1').style.position = 'relative';
            document.body.style.paddingTop = '0';
        }
    })
})


// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 40) {
//           document.getElementById('navbar1').classList.add('fixed-top');
//           // add padding top to show content behind navbar
//           navbar_height = document.querySelector('#navbar1').offsetHeight;
//           document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//           document.getElementById('navbar1').classList.remove('fixed-top');
//            // remove padding top from body
//           document.body.style.paddingTop = '0';
//         } 
//     });
//   }); 