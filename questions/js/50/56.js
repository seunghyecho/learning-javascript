window.onload = function () {
    /**
     * 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
     * 
     *  데이터
        nationWidth = {
            'Korea': 220877,
            'Rusia': 17098242,
            'China': 9596961,
            'France': 543965,
            'Japan': 377915,
            'England' : 242900,
        }

        출력
        ['England', 242900]
     */



    const nationWidth = {
        'Korea': 220877,
        'England': 242900,
        'Rusia': 17098242,
        'China': 9596961,
        'France': 543965,
        'Japan': 377915,

    }

    // 기준값을 빼온다.
    const nationDefault = nationWidth['Korea'];
    // 해당 객체에서 기준값을 삭제한다.
    delete nationWidth['Korea'];

    const entry = Object.entries(nationWidth);
    const values = Object.values(nationWidth);

    // 최댓값을 저장한다.
    let nationMax = Math.max.apply(null, values);
    let item = [];

    // for문으로 최댓값과 객체의 값을 비교해서 제일 차이가 나지 않는 값을 빈 배열에 저장한다.

    for (let i in entry) {
        console.log(entry, nationMax)
        if (nationMax > Math.abs(entry[i][1] - nationDefault)) {
            nationMax = Math.abs(entry[i][1] - nationDefault);
            item = entry[i];
        }
    }

    console.log(item)

}