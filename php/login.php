<?php

    header('Content-Type: application/json'); // indica o formado que está página retorna.
    session_start();
    include('conexao.php');
    
    if(empty($_POST['email']) || empty($_POST['senha']))
    {
        echo json_encode(array(
            "status" => false,
            "mesage" => 'Preencha os campos corretamente!'
        ));
    }
    else
    {
        
        
        $email = mysqli_real_escape_string($conexao, $_POST['email']);
        $senha = mysqli_real_escape_string($conexao, $_POST['senha']);
        $query = "SELECT * FROM `usuarios` WHERE login = '{$email}' AND senha = md5('$senha')";
        $result = mysqli_query($conexao, $query);
        $row = mysqli_num_rows($result);
        $valores_database = $result->fetch_row();

        if($row == 1)
        {
            $returned_user = $valores_database[1];
            $returned_email = $valores_database[2];
            $returned_senha = $valores_database[3];

            $_SESSION['email'] = $_POST['email'];
            $_SESSION['nome'] = $returned_user;
            echo json_encode(array(
                "status" => true,
                "mesage" => 'Usuário logado com sucesso!'
            ));
        }
        else{
            echo json_encode(array(
                "status" => false,
                "mesage" => 'Email ou senha inválidos!'
            ));
        }
    }
    exit();
?>