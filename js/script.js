const offset = 0
const limit = 10
const url = 'https://thronesapi.com/api/v2/Characters'

function convertPersonagensToHtml(personagem) {
    return `

        <div id="personagemList" class="personagens2">
            
        
                
             <ul> 

             <img src="${personagem.imageUrl}">

                <h2> ${personagem.fullName} <h2>


                <li>${personagem.title}</li>
                <li>${personagem.family}</li>
            
              
            </ul>
          
            
        </div>
        
    </div>
</section>
`
}


const personagensList = document.getElementById('personagemList')


fetch(url)
    .then(response => response.json())
    .then((jsonBody) => jsonBody)
    .then((personagens) => {

        for (let i = 0; i < personagens.length; i++) {
            const personagem = personagens[i];
            personagensList.innerHTML += convertPersonagensToHtml(personagem)
        }

    })
    .catch((error) => console.error((error)));