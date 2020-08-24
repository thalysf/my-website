<?php
session_start();
include('conexao.php');
$email = mysqli_real_escape_string($conexao,  trim($_POST['email']));
$senha = mysqli_real_escape_string($conexao, trim($_POST['senha']));
$nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
$sql = "SELECT * FROM usuarios WHERE login = '{$email}'";
$result = mysqli_query($conexao, $sql);
$row = mysqli_num_rows($result);
if($row == 1)
{
    echo json_encode(array(
        "status" => false,
        "mesage" => 'Email já cadastrado!'
    ));
    $_SESSION['email_exist'] = true;
    exit();
}
else
{
    echo json_encode(array(
        "status" => true,
        "mesage" => 'Usuário cadastrado com sucesso!'
    ));
    $sql = "INSERT INTO usuarios (login, senha, nome, data_cadastro) VALUES ('$email', md5('$senha'), '$nome', NOW());";
    if($conexao->query($sql) === TRUE)
    {
        $_SESSION['status_cadastro'] = true;
    }    
    $conexao->close();
    header('Location: ../');
    exit();
}

?>