
button = document.getElementById('carregar');
const estilo = document.getElementById('style');

button.addEventListener('click', function(){
   var pokeReceive = setInterval(function(){

        var pegaPok = estilo.value 
        let url= 'https://pokeapi.co/api/v2/type/'+ pegaPok ;        
        
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) =>{
                // o que vamos fazer com o json
                const inputName = document.getElementById('nomePokemon');

                qtdMax = data['pokemon']
                qtd = Math.floor(Math.random() * qtdMax.length)
                
                nomePk = data['pokemon'][qtd]['pokemon']['name']
                inputName.setAttribute('value', nomePk);
        
            })
            clearInterval(pokeReceive);
    }, 1000);
    
    var imgReceive = setInterval(function(){
        const nomePokemon = document.getElementById('nomePokemon');
        nomePoke = nomePokemon.value 
        let url= 'https://pokeapi.co/api/v2/pokemon/'+ nomePoke ;        
        
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) =>{
                // o que vamos fazer com o json
                imgPokemon = document.getElementById('imgPokemon');

                imgPk = data['sprites']['back_default'];
                imgPokemon.setAttribute('src', imgPk);
                
                if(imgPk !== null || imgPk !=='null'){
                imgPokemon.setAttribute('style', 'display:block')
                }else{
                    d = document.createElement('span');
                    d.innerHTML = 'Não encontramos uma imagem :(';
                }
                
        
            })
            clearInterval(imgReceive);
    }, 1500);

           
            
   

    

  
    
    
    

   
});
    
    