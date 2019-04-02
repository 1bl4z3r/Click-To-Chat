function redirect()
{
    var num = document.getElementById("url").value;
    var numbers = /^[0-9]+$/;
    if(num.match(numbers))
    {
        if((num.toString().length)>=6 && (num.toString().length)<=15)
        {
            if(document.getElementById("chkbx").checked == true)
            {
                var message = document.getElementById("msgbox").value; 
            }
            else
            {
                var message = '';
            }
            var wpurl = "https://api.whatsapp.com/send?phone=" + num + "&text=" + message;
            var showurl = "https://wa.me/" + num;
            if (window.confirm('Redirect to: ' + showurl + '?')) 
                {
                 window.open(wpurl,'_blank');
                }
            else
                {
                 location.reload();
                }
        }
         else
            {
             alert('Wrong phone number format\nIt must be within 6-15 numbers');
             location.reload();
            }
    }
    else
    {
        alert('You need to type Phone Number');
        location.reload();
    }
}
function disen(status)
{
    status=!status;
    document.getElementById("msgbox").disabled=status;
}
