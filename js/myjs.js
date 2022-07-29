window.onload = function()
    {
        window.onscroll=function()
        {
            if(document.body.scrollTop>=200 || 
                document.documentElement.scrollTop>=200 )
                {
                    document.getElementsByClassName("nav-main")
                    [0].classList.add("hide");
                    document.getElementsByClassName("navbar")
                    [0].classList.add("b-white");

                }
            else
            {
                document.getElementsByClassName("nav-main")
                [0].classList.remove("hide");
                document.getElementsByClassName("navbar")
                    [0].classList.remove("b-white");
            }

        }
    }
    $('form').submit(function(){

        var fname=$.trim($('#fname').val());
        var lname=$.trim($('#lname').val());
        var email=$.trim($('#email').val());

        if (fname === '') {
            alert('First name is empty.');
            return false;
        }
        else if (lname === '') {
            alert('Last Name is empty.');
            return false;
        }
        else if (email === '') {
            alert('email is empty.');
            return false;
        }
        
        
       
    });

    function showAlert() {
        alert ("Please fill the required place ! ");
      }
   


    
    