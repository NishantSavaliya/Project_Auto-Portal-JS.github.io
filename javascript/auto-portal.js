/* ----------- toggle menu --------------------- */


// Get the toggle menu element
var toggleMenu = document.querySelector('#tgl');
            
// Add an event listener to the toggle menu
toggleMenu.addEventListener('click', function() {
  // Toggle the visibility of the submenu
  document.querySelector('.tgl-menu').classList.toggle('hidden');
});

/* ------------------ loader ------------------ */

var myVar;

function mainFunction(){
      myVar = setTimeout(loaderLoad, 2000);
      
}

function loaderLoad(){
      document.getElementById("loader").style="display:none";
    document.getElementById("main-page").style="display:block";
      // alert('Well come to Home page')
 }

 /* ----------------- contact form validation ----------------*/ 

 function valid(){
    
// validation for name

      if(document.frm.nm.value==""){
            alert('Please enter Your Name');
            document.frm.nm.focus();
            return false;
      }

      // applied regex for enter only alphabatic char as first name

      var nam=/^[a-zA-Z]+$/;

      if(!nam.test(document.frm.nm.value)){
            alert('Please enter Name as alphabatic charecter only.');
            document.frm.fname.focus();
            return false;
      }

// validation for phone

      if(document.frm.mobile.value==""){
            alert('Please enter Your Phone');
            document.frm.mobile.focus();
            return false;
      }

      // applied regex for valid phone

      var ph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(!ph.test(document.frm.mobile.value)){
            alert('Please enter your valid phone.');
            document.frm.mobile.focus();
            return false;
      }

// validation for email

      if(document.frm.email.value==""){
            alert('Please enter Your Email');
            document.frm.email.focus();
            return false;
      }

      // applied regex for valid email

      var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!em.test(document.frm.email.value)){
            alert('Please enter your valid Email');
            document.frm.email.focus();
            return false;
      }

// validation for subject

      if(document.frm.msg.value==""){
            alert('Please enter Your Subject');
            document.frm.msg.focus();
            return false;
      }

}