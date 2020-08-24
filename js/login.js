window.onload = function(){
    document.getElementById('btn-submit').addEventListener('click', function(e)
    {
        e.preventDefault();
        cleanMsgError();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;
        let data = new FormData();
        
        data.append('email', email);
        data.append('senha', senha);
        fetch('php/login.php', {
            body: data,
            method: 'POST'
        }).then(response => response.json())
        .then(function(json){
            console.log(json.status, json.mesage);
            if(json.status)
            {
                window.location.href = "php/painel.php";
            }
            else
            {
                msgError()
            }
        });
        
    });
}

function msgError()
{
    document.getElementById('msgError').style.display = "block";  
}
function cleanMsgError()
{
    document.getElementById('msgError').style.display = "none";  
}