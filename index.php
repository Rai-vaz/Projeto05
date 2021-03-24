<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="imagens/icone.ico" type="image/x-icon">
    <script src="js/jquery.js"></script>
    <script src="js/funcoes.js"></script>

    <title>Projeto05</title>
</head>
<body>
    <header style="border-bottom: 3px solid #eb2d2d">
        <div class="container">
                <div class="logo">
                    <img src="imagens/logo.jpg">
                </div><!--logo-->

            <nav class="menu-desktop">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="venda">Vendas</a></li>
                    <li><a href="sobre">Sobre</a></li>
                    <li><a href="home?contato" goto="contato">Contato</a></li>
                </ul>
            </nav><!--menu-desktop-->

            <nav class="menu-mobile">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="venda">Vendas</a></li>
                    <li><a href="sobre">Sobre</a></li>
                    <li><a href="" goto="contato">Contato</a></li>
                </ul>
            </nav><!--menu-mobile-->
            <div class="clear"></div><!--clear-->
        </div><!--container-->
    </header>

<?php
if ( isset($_GET['url'])) {
   if (file_exists($_GET['url'].'.html')) {
       include($_GET['url'].'.html');
   }else{
       echo"Essa página não existe";
   }
}else{
    include("home.html");
}


?>


<footer>
        <div class="container">
            <nav>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="venda">Vendas</a></li>
                    <li><a href="sobre">Sobre</a></li>
                    <li><a href="" goto="contato">Contato</a></li>
                </ul>
            </nav>
        </div><!--container-->
        <p>Todos os direitos reservados</p>
        <div class="clear"></div>

    </footer>
    
</body>
</html>
