window.onload = function () {
    const str = window.prompt('Write string');
    // const reg = str.match(/[A-Z]/g);
    if (str === str.toUpperCase()) {
        console.log('yes',str.toUpperCase());
    } else {
        console.log('no');
    }

}