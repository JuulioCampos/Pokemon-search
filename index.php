<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="shortcut icon" href="src/img/fiveicon.png" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>Teste Envyabybus</title>
</head>
<body>
    <div class="container px-5 mt-5" align= "center"> 
        <div class="d-flex flex-column">
            <label for="nomeCidade">Digite a cidade:</label>
            <input class='p-1  mx-auto ' type="text" id='pesquisar'>
            <br/>
        </div>
        <div class="d-inline-flex">
            <input class='btn btn-primary d-flex' type="submit" id="carregar" value='Procurar Pokemon'>
            <input style='margin-left:5%' class='btn btn-danger d-flex' type="submit" id="limpar" value='Limpar dados'>
        </div>
    <hr/>
    <br/>

        <form >    
            <div class="d-flex flex-column col-md-3" >
                <label for="nomePk" class="nomePokemon text-center col-md-3" >Nome:</label>
                <input class='p-1  form-control' type="text" id='nomePokemon' value='' disabled></span>
                <br/> 
                <label for="tipo" class="text-center col-md-3" >temperatura: </label>
                <input class='p-1  form-control' type="text" id='temp' value='' disabled></span>
                </br>
                <label for="tipo" class="text-center col-md-3">Estilo:</label>
                <input class='p-1  form-control' type="text" id='style' value ='' disabled> </span>
            </div>
        </form>

   
        <div class=" ">
            <span>[imagem do pokemon]</span>
        <img src="" alt="" class="img-thumbnail rounded mx-auto d-block" style='display:none' id='imgPokemon'>
    </div>
    </div>
    <!-- <script src="src/js/apiCidade.js"></script> -->
    <script src="src/js/apiCidade.js"></script>
    <script src="src/js/apiPokemon.js"></script>
</body>
</html>