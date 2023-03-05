window.onload = function () {
    const planetKo = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
    const planetEn = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    const name = window.prompt('Write Planet');
    if (planetKo.includes(name)) {
        console.log(planetEn[planetKo.indexOf(name)])
    }

    /** 정답
    const planets = {
        '수성' : 'Mercury',
        '금성' : 'Venus',
        '지구' : 'Earth',
        '화성' : 'Mars',
        '목성' : 'Jupiter',
        '토성' : 'Saturn',
        '천왕성' : 'Uranus',
        '해왕성' : 'Neptune',
    };
    const planetsName = window.prompt('Write Planet');
    console.log(planets[planetsName])
     */
}