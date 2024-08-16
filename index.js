const h1 = document.getElementById('h1')
const h2 = document.getElementsByTagName('h2')

   async function fata() {
    
   let  res = await fetch('https://api.ipify.org?format=json') ; 
   let  data = await res.json() ;
   console.log(data.ip);
   h1.innerText += ' ' +  data.ip;
       
    let res2 =  await fetch(`https://freeipapi.com/api/json/${await data.ip}`) ; 
    let data2 = await res2.json();
       console.log(data2) ;
       h2[0].innerText += ' ' +  data2.cityName; 
       h2[1].innerText += ' ' +  data2.continent; 
       h2[2].innerText += ' ' +  data2.countryName; 
       h2[3].innerText += ' ' +  data2.ipVersion; 
       h2[4].innerText += ' ' +  data2.isProxy; 
       h2[5].innerText += ' ' +  data2.language; 
       h2[6].innerText += ' ' +  data2.latitude; 
       h2[7].innerText += ' ' +  data2.longitude; 
       h2[8].innerText += ' ' +  data2.regionName; 
       h2[9].innerText += ' ' +  data2.timeZone; 

       
   }
   fata()