 function doit(){
let city =document.getElementById("name").value;
let api_key='d885aa1d783fd13a55050afeef620fcb';
let temps=document.getElementById("temperature");
let text1="<div>${data.main.feels_like}</div>"
let r=  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`).then(response=>response.json())
.then(data=>temps.innerHTML=data.main.temp+"<sup>o</sup><span>c</span>"+"<div class='cityname'>"+data.name+"</div>"
	+"<div class='tempitem'> Min/Max Temp:"+data.main.temp_min+"<sup>o</sup><span>c</span>/"
	+data.main.temp_max+"<sup>o</sup><span>c</span>"+"</div>"+
	"<div class='tempitem'>Feels like:"+data.main.feels_like+"<sup>o</sup><span>c</span>"+"</div>")}
let btn=document.getElementById("check-btn");
btn.addEventListener("click", doit);

// below complete output of the api

// {"coord":{"lon":-0.1257,"lat":51.5085},
// "weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],
// "base":"stations","main":{"temp":8.47,"feels_like":6.32,"temp_min":6,"temp_max":10,"pressure":1028,"humidity":100},"visibility":2000,"wind":{"speed":2.57,"deg":80},"rain":{"1h":1.54},"clouds":{"all":90},"dt":1614780824,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1614753682,"sunset":1614793428},
// "timezone":0,"id":2643743,"name":"London","cod":200}