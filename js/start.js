const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint= 12;

function addAnswer(answerText, qIdx, idx, delta){
    let section = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-4');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    section.appendChild(answer); //answer이라는 변수가 section에 소속됨을 의미
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        votes[idx] += delta;
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
          children[i].disabled = true;
          children[i].style.WebkitAnimation = "fadeOut 0.5s";
          children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
         for (let i = 0; i < children.length; i++) {
            children[i].style.display = 'none';
          }
          goNext(++qIdx);
        }, 450)
    }, false);
}

function getMBTI() {
    let result = "";

    result += votes["EI"] >= 0 ? "E" : "I";
    console.log(result);
    result += votes["SN"] >= 0 ? "S" : "N";
    console.log(result);
    result += votes["FT"] >= 0 ? "F" : "T";
    console.log(result);
    result += votes["PJ"] >= 0 ? "P" : "J";
    console.log(result);

    return result;

}

function goResult(person) {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
      }, 450)})
      console.log(result);
      setResult(person);
  }

function setResult(person){
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/' + person.img;
    resultImg.src = imgURL;

    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = person.name;
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = person.desc;
    const resultDesc2 = document.querySelector('.resultDesc2');
    resultDesc2.innerHTML = person.desc2;
  }

function goNext(qIdx){
    if(qIdx === endPoint){
        const MBTI = getMBTI();
        //console.log(infoList[MBTI]);
        goResult(infoList[MBTI]);
        return;
    }
    let q = document.querySelector('.qBox');
    q.innerHTML = quizzes[qIdx].question;
    for(let s of quizzes[qIdx].selections){
        addAnswer(s.text, qIdx, s.idx, s.delta);
    }
}

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block"
      }, 450)
      let qIdx = 0;
      goNext(qIdx);
    }, 450);
  }
  