window.onload = function () {
    const d = new Date();

    let time = d.getTime();

    year = Math.floor(time/(1000*3600*24*365))+1970
    console.log("현재 연도: ", year);
    
    console.log("현재 연도: ", new Date(time).getFullYear());
    console.log("1년 후: ",new Date(time + (1000*3600*24*365))); 
    console.log("1시간 후: ",new Date(time + (1000*60*60)))
  };