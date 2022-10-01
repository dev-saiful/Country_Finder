document.querySelector('.get-countries').addEventListener('click',getCountries);

function getCountries(e){
    const cName = document.querySelector('input[type="text"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://restcountries.com/v2/name/${cName}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            //console.log(typeof(this.response));
            const response = JSON.parse(this.responseText);
            const Status = response.status;
            //console.log(Status);
            //console.log(response[0]['name']); 
            let output = ``;
            if(Status === undefined){
                response.forEach(function(country){
                    output +=`
                    <li>Country Name : ${country.name}</li>
                    <li>Country Flag : <img width="320px" height="200px" src="${country.flag}"></li>
                    `;
                });

                document.querySelector('.country').innerHTML = output;
                
            }
            else
            {
                document.querySelector('.country').innerHTML = `<li>Something went Worng!!!!</li>`;
            }
            
                
        }
        else
        {
            document.querySelector('.country').innerHTML = `<li>Something went Worng with Api</li>`;
        }
    }

    xhr.send();

    e.preventDefault();
}