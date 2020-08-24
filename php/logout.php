<?php
    session_start();
    session_destroy();
    header('Location: ../')
    // unset($_SESSION['nomedasessao']);
?>