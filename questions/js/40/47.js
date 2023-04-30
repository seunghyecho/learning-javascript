window.onload=function(){
    /**
     * 중복된 데이터들을 삭제하여 실제 접수 인원 수 출력 
     */
    const people = {
        이호준: "01050442903",
        이호상: "01051442904",
        이준호: "01050342904",
        이호준: "01050442903",
        이준: "01050412904",
        이호: "01050443904",
        이호준: "01050442903"
      };
    /**
     * 중복된 데이터들 제거
        const set = new Set([people]);
        const newSet = [...set];
        console.log(newSet) 
    */
   let result = new Set(); // size:0
   for (let key in people){
    // console.log(people['이호'])
    result.add(people[key]); // 중복 없는 전화 번호
   }
   console.log(result.size) // size:5  
}