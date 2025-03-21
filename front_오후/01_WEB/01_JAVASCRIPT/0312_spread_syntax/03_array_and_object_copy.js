//Json
//Javascript Object Notation(자바스크립트 객체 표기법)

/*
{
    "name":"James Ku"
    "email: fpqk7099@gmail.com"
}
*/

//fetch 요청 보내기
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => {
    const extendedData = { ...json };
    console.log('가져온 데이터', json);
    extendedData.title = '변경된 속성';
    console.log('확장된 데이터', extendedData);
  });
