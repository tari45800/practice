function JsPractice(){

  let codeit = {
    name:'이제윤',
    age:16,
    wife:{
      name:'김다은',
      age: 21
    }
  }

  // // 키 + 값 = 프로퍼티
  // console.log('wife' in codeit);
  // console.log(codeit.name);
  // console.log(codeit['wife']['name']);
  // codeit.wife.hb = '이제윤';
  // console.log(codeit.wife.hb);
  // delete codeit.wife;
  // // wife라는 프로퍼티가 있느냐
  // console.log('wife' in codeit);

  // // 함수와 메서드의 차이
  // // 메서드는 같은 이름이더라도 객체로 구분할 수 있다.
  
  // for(let key in codeit){
  //   console.log('--');
  //   console.log(codeit[key]);
  // }

  // // 객체의 정수형 프로퍼티 네임은 자동으로 정렬된다.


  // ==================================================


  let myDate1 = new Date('1998-09-27');
  console.log(myDate1)

  console.log(myDate1.getFullYear())
  console.log(myDate1.getMonth())// month는 0부터 시작한다.
  console.log(myDate1.getDate())
  console.log(myDate1.getDay())// 요일도 0부터 시작한다.

  let myDate2 = new Date(2017, 4, 18, 19, 11, 16);

  myDate2.setFullYear(2002);
  myDate2.setMonth(6);
  myDate2.setDate(20);

  // ==================================================

  
  return(
    <>
      <div>안녕안녕나는지수야</div>
    </>
  )
}
export default JsPractice;