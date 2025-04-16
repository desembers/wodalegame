const answer = "APPLE";

let index = 0;
let attempts = 0;
let timer 

function appStart() {
const displayGameover = () => {
  const div = document.createElement("div"); //div요소 만들기
  div.innerText = '게임이 종료됐습니다.'
  div.style = 
  "display:flex; justify-content:center; algin-itmes: center; position:absoulte; top:40vh; background-color:white; height: 100px;";
  bocument.body.appendChlid(div); //div넣기 body네
};
  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts += 1;
    index = 0;
    //줄을 나타내는 단위 attempts 
    //index는 다시 진행 
    //그다음줄 입력한다 
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown); //키보드 입력 제거 removeEventListener 키 입력이 안됨
    displayGameover(); //게임이 종료되었습니다
    clearInterval(timer); //게임 종료료
  }  

  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts += 1;
    index = 0;
  };

  const handleEnterkey = () => {
    let 맞은_갯갯수 = 0;
    for(let i=0; i<5; i++) {
        //console.log('i는 이겁니다', i);
        const block = document.querySelector(`.board-column[data-index='${attempts}${i}']`);
        //console.log(block.innerText);
        const input_글자 = block.innerText;
        const answer_글자 = answer[i];
        if(input_글자 === answer_글자) {
            맞은_갯갯수 += 1;
            block.style.background = "#6AAA64";
        }else if(answer.includes(input_글자)) block.style.background = "#C9B458";
        else block.style.background = "#787C7E";
        block.style.color = "white";
        //console.log('입력한글자', input_글자, '정답글자', answer_글자);
    }
    //정답확인
    //console.log('엔터키');
    if (맞은_갯수 === 5) gameover();
    else nextLine();
   };

   const handleBackspace = () => { //받아서 하는 매개변수
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-column[data=index='${attempts}${index-1}]`
      );
        preBlock.innerText = "";
    }
    /*
    //const thisBlock = document.querySelector(`.board-column[data-index='${attempts}${index}']`);
    thisBlock.innerText = "";
    */ 
    if (index!==0) index -= 1; //키보드가 지워지고 입력되는 것
   };

    const handleKeydown = (event) => {
        //console.log("키가 입력!!", event.key);
        const key = event.key.ToUpperCase(); //대문자 변환 ToUpperCase 
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.board-column[data-index='${attempts}${index}']`); //class 속성값 .클래스명명
        //document.querySelector(class칼럼명[데이터인데스=번호]) data-index번호00이면 q만 입력 추출
        //``하면 $ 선언된 변수 값 나옴 반드시 ``해야함
        //console.log(event.key, event.keyCode); 
        if(event.key === 'Backspace') handleBackspace(thisBlock); //전달하는 매개변수 
        else if (index === 5) {
        if (event.key === 'Enter') handleEnterkey();
            //console.log("엔터키!!");
        else return;
        }else if (65 <= keyCode && keyCode <= 90){ //자바스크립트 and는 &&
            thisBlock.innerText = key; //키누르기
            index += 1; //인덱스를 1에 더해서 넣어줘라 첫번째칸 두번째....N번째 칸 입력 
        }
        //console.log(event.key)
        //console.log(event.key, event.keyCode); //key는 a keycode 65번
        //console.log("키가 눌렸습니다!! event=>", event);
    };
    const startTimer = () => {
      const start_time = new Date();

      function setTime() {
        const new_time = new Date();
        const flow_time = new Date(now_time - start_time);
        const minute = flow_time.getMinutes().toString().padStart(2, "0");
        const second = flow_time.getSeconds().toString().padStart(2, "0");
        const timeH1 = document.querySelector("#timer"); //id일때 #id이름름
        timeH1.innerText = `${minuter}:${second}`;
      }
    }

    timer = setInterval(setTime, 1000);
    console.log(timer);
    startTimer();
    //로직들
    window.addEventListener("keydown", handleKeydown); //전체 윈도우에 keydown하면 누르고 뗄때  
    
}

appStart();



