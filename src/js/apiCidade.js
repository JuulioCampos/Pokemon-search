

 button = document.getElementById('carregar');
 limpar = document.getElementById('limpar');

 limpar.addEventListener('click', function(){
  location.reload();     
})

button.addEventListener('click', function(){

        nomeCidade = document.getElementById('pesquisar');

        temp = document.getElementById('temp');    

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ nomeCidade.value +'&appid=ee57f0e23da8f055a2f87c3e62ca8425')
        .then(response => response.json())
        .then(data => {
            console.clear;

            const estilo = document.getElementById('style');
            tempo = document.getElementById('temp');
            
            temperaturaPadrao = data['main']['temp'];
            removerTempoExtra = 272.5;             //isto é para remover a diferença do json em relacao ao tempo, que está com 273 graus a mais. se precisar voltar, só setar esta variavel como 0
            tempValue = temperaturaPadrao - removerTempoExtra;
            
            clima =  (tempValue).toFixed(2) + 'º' // usei tofixed para setar 2 casas decimais no valor final.
            tempo.setAttribute('value', clima);
            raio = data['weather']['0']['main']
            console.log(raio);
            
            
            
           if(raio == 'Rain'){
                style = 'electric';
                estilo.setAttribute('value', style);
           }
            
            else if(tempValue < 5 ){
                style = 'ice';
                estilo.setAttribute('value', style);

            }else if(tempValue >= 5 && tempValue < 10){
                style = 'water';
                estilo.setAttribute('value', style);

                }else if(tempValue >=12 && tempValue < 15){
                        style = 'grass';            
                        estilo.setAttribute('value', style);

                        }else if(tempValue >=15 && tempValue < 21){
                                style = 'ground';
                                estilo.setAttribute('value', style);
                                
                                }else if(tempValue >= 23 && tempValue < 27){
                                        style = 'bug';
                                        estilo.setAttribute('value', style);

                                        }else if(tempValue >= 27 && tempValue <= 33){
                                                style = 'rock';
                                                estilo.setAttribute('value', style);

                                                }else if (tempValue > 33){
                                                        style = 'fire';
                                                        estilo.setAttribute('value', style);
                                                        
                                                        }else {  
                                                                alert('Não existe pokemon');
                                                                tempo.setAttribute('value', '');          
                                                                Location.reload();
                                                                }
                
        })

        .catch(err => alert('cidade não encontrada'));
        })

                        