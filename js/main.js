let data={}

let searchEl=document.getElementById("searchEl")
let searchBtn=document.querySelector(".searchBtn")
let byname=""
const time = new Date();


 let monthEl= time.toLocaleDateString('en',{month:'long'})
 let day = time.toLocaleDateString('en',{weekday:'long'})
 console.log(monthEl)
 console.log(day)
 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log(days[time.getDay()])
console.log(days[time.getDay()])
let repose=""
let newimg1=""
let newimg2=""
let newimg3=""



async function getWeather(cityname='cairo'){
   repose= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${cityname}&days=3`)
    
    console.log(repose.url);
     data= await repose.json();
    console.log(data)
    
    display()
}

getWeather()
function display(){

    console.log(data.current.condition.icon);

    let temp=""
    let currentD=new Date(data.forecast.forecastday[0].date) ;
    console.log(days[currentD.getDay()])
    
    let nextD=new Date(data.forecast.forecastday[1].date) ;
    console.log(days[nextD.getDay()])
   
 
    let nextDD=new Date(data.forecast.forecastday[2].date) ;
    
    console.log(days[nextDD.getDay()])


    let mounthM= new Date(data.forecast.forecastday[0].date)
    console.log(month[mounthM.getMonth()])
    
        // if(data.current.condition.text=="Partly cloudy"){
        //     newimg1="image/116.webp"
        // }
        // else if(data.current.condition.text=="Sunny"){
        //     newimg1="image/113.webp"
        // }
        // else if(data.current.condition.text=="Moderate rain" ||data.current.condition.text== "Patchy rain possible" || data.forecast.forecastday[1].day.condition.text=="Heavy rain"){
        //     newimg1="image/302.webp"
        // }
        // else if(data.current.condition.text=="Partly cloudy"){
        //     newimg1="image/119.webp"
        // }


        // if(data.forecast.forecastday[1].day.condition.text=="Partly cloudy"){
        //     newimg2="image/116.webp"
        // }
        // else if(data.forecast.forecastday[1].day.condition.text=="Sunny"){
        //     newimg2="image/113.webp"
        // }
        // else if(data.forecast.forecastday[1].day.condition.text=="Moderate rain" ||data.forecast.forecastday[1].day.condition.text== "Patchy rain possible" || data.forecast.forecastday[1].day.condition.text=="Heavy rain"){
        //     newimg2="image/302.webp"
        // }
        // else if(data.forecast.forecastday[1].day.condition.text=="Partly cloudy"){
        //     newimg2="image/119.webp"
        // }

        // if(data.forecast.forecastday[2].day.condition.text=="Partly cloudy"){
        //     newimg3="image/116.webp"
        // }
        // else if(data.forecast.forecastday[2].day.condition.text=="Sunny"){
        //     newimg3="image/113.webp"
        // }
        // else if(data.forecast.forecastday[2].day.condition.text=="Moderate rain" ||data.forecast.forecastday[2].day.condition.text== "Patchy rain possible" || data.forecast.forecastday[1].day.condition.text=="Heavy rain"){
        //     newimg3="image/302.webp"
        // }
        // else if(data.forecast.forecastday[2].day.condition.text=="Partly cloudy"){
        //     newimg3="image/119.webp"
        // }

        console.log(data.current.condition.icon);
        temp=`
        <div class="col-lg-4 col-md-12 box1 ">
                
                    <div class="head d-flex justify-content-between p-2 ">
                        <span>${days[currentD.getDay()] }</span>
                        <span>${ mounthM.getMonth() + month[mounthM.getMonth()]}</span>
                    </div>
                    <div class="content p-2">
                        <h3>${data.location.name}</h3>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="fs-1">${data.current.temp_c}°C</h2>
                            <img class="w-  img1" src="${`https://`+data.current.condition.icon}" alt="">
                            

                         </div>
                        <p class="text-primary">${data.current.condition.text}</p>
            
                
                    </div>
                    <div class="details d-flex gap-3  p-2">
                        <p>
                            <i class="fa-solid fa-umbrella"></i>
                            <span>${data.current.humidity

                            }%</span>
                        </p>
                        <p>
                            <i class="fa-solid fa-wind"></i>
                            <span>${data.current.wind_degree
                            }km/h</span>
                        </p>
                        <p>
                            <i class="fa-solid fa-compass"></i>
                            <span >${data.current.wind_dir}</span>
                        </p>
                    </div>
                
            </div>
            <div class="col-lg-4 col-md-12 box2 text-center p">
                
                    <div class="head  p-2">
                        <span class="text-center">${ days[nextD.getDay()] }</span>
                    </div>
                    <div class="content  p-2">
                        <img class="w-25" src="${`https://`+data.forecast.forecastday[1].day.condition.icon}" alt="">
                        
                        <h3>${data.forecast.forecastday[1].day.avgtemp_c
                        }oC</h3>
                        <p>${data.forecast.forecastday[1].day.mintemp_c
                        }o</p>
                        <p class="text-primary">${data.forecast.forecastday[1].day.condition.text
                        }</p>
                    </div>
                
            </div>
            <div class="col-lg-4 col-md-12 box1 text-center">
                
                    <div class="head p-2">
                        <span class="text-center">${days[nextDD.getDay()] }</span>
                    </div>
                    <div class="content  p-2">
                        <img class="w-25" src="${`https://`+data.forecast.forecastday[2].day.condition.icon}"  alt="">
                        <h3>${data.forecast.forecastday[2].day.avgtemp_c
                        }oC</h3>
                        <p>${data.forecast.forecastday[2].day.mintemp_c
                        }o</p>
                        <p class="text-primary">${data.forecast.forecastday[2].day.condition.text
                        }</p>
                    </div>
                
            </div>
        `
       byname=data.location.name
   
        
    document.querySelector(".myrow").innerHTML=temp






}

//


// searchBtn.addEventListener("click",function(){
//     getWeather(searchEl.value)
    
// })

//  getWeather()



let ulnav=Array.from(document.querySelectorAll(".ulnav li a"))
console.log(ulnav)

ulnav.forEach((ele)=>{
    ele.addEventListener("click",function(e){
        ulnav.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})


// searchEl.addEventListener("keyup",searchChar)

// function searchChar(){
    
//     if(dataWeather[0].location.name){}
// }
// searchChar()





searchEl.addEventListener("keyup",function(){


   
    
    let cityname=searchEl.value;
    if(cityname.length > 2){
        getWeather(cityname)
    }
    else{
        console.log("nooooooo")
    }
    
})

//getWeather()



// console.log(data.location.name)
// const timeNext = new Date(data.forecast.forecastday[0].date);
// console.log(timeNext.getMonth());