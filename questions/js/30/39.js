window.onload = function () {
  const content = prompt("문장이 입력되면 모든 q를 e로 바꾸는 프로그램");

  // Javascript 문자열 치.환. replaceAll 함수
  function replaceAll(str, searchStr, replaceStr) {
    // return str.replace(searchStr, replaceStr);
    return str.split(searchStr).join(replaceStr);
  }

  console.log(replaceAll(content, "q", "e"));
};

/**
 * replace()는 처음 만나는 문자열만 대체.
 * replace()는 전달받은 문자를 수정하는 것이 아니라 새로운 값을 만들어 반환.
 */

/**
 * 정규식 사용 word.replace(/q/gi, 'e')
 */

/**
 * 자주 쓰는 정규식
 * 특정문자 제거(#제거)   : str.replace(/\#/g,'');
 * 앞의 공백 제거           : str.replace(/^\s+/,'');
 * 뒤 공백 제거              : str.replace(/\s+$/,'');
 * 앞 공백 제거              : str.replace(/^\s+|\s+$/g,'');
 * 문자열 내의 공백 제거 : str.replace(/\s/g,'');
 * 줄바꿈 제거               : str.replace(/\n/g,'');
 * 엔터 제거                  : str.replace(/\r/g,'');
 * 0 제거                      : str.replace(/[^(1-9)]/gi,"");
 */
