window.onload = function(){
    document.getElementById('btn-cad-submit').addEventListener('click', function(e)
    {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirma_senha = document.getElementById('confirma-senha').value;
        const jsonStatus = true;
        let validated = validations(nome, senha, confirma_senha, email, jsonStatus);
  
        if(validated)
        {
            let data = new FormData();
            data.append('nome', nome);
            data.append('email', email);
            data.append('senha', senha);  
            fetch('php/cadastro.php', {
                body: data,
                method: 'POST'
            }).then(response => response.json())
            .then(function(json){
                if(json.status)
                {
                    console.log('Aqui 0');
                    window.location.href = "../";
                }
                else
                {
                    console.log('Aqui 1');
                    validations(nome, senha, confirma_senha, email, json.status);
                }
            })
        }
        
    });

}

function validations(nome, senha, confirma_senha, email, jsonStatus)
{
    let validated = 1;
    const alertEvenPass = document.getElementById('unevemPass');
    const alertEmail = document.getElementById('emailError');
    const alertName = document.getElementById('emptyName');
    const alertChecked = document.getElementById('notChecked');
    const checkBox = document.getElementById('checkTermos');
    if(nome == '')
    {
        alertName.style.display = "block";
        validated = 0; 
    }
    else{
        alertName.style.display = "none";
    }
    if(senha != confirma_senha)
    {
        alertEvenPass.style.display = "block";
        validated = 0;
    }
    else{
        alertEvenPass.style.display = "none";
       }
    if(jsonStatus == false)
    {
        alertEmail.style.display = "block";
        validated = 0;
    }
    else{
        alertEmail.style.display = "none";
    }
    if(!checkBox.checked)
    {
        alertChecked.style.display = "block";
        validated = 0;
    }
    else{
        alertChecked.style.display = "none";
    }
    return validated;
}