const votes = { "EI": 0, "SN": 0, "FT":0, "PJ":0};
const quizzes = [
   {
      question: "Q1 </br>고등학교 입학 첫 날!</br>새로운 친구들을 만났을 때 나는?",
      selections: [
         { text: "친구는 많으면 많을수록 좋지! 친구들을 사귈 생각에 너무 설레!!", idx: "EI", delta: 1 },
         { text: "너무 떨리고 긴장 돼 아무도 나에게 말을 안 걸어주면 어쩌지?", idx: "EI", delta: -1 }
      ]
   },
   {
      question: "Q2 </br>시험이 다가오는데 공부가 손에 안 잡혀</br> 고민에 빠진 나는?",
      selections: [
         { text: "지난 시험 문제는 어떻게 나왔지? 효율적인 암기 방법은 뭐가 있을까?", idx: "SN", delta: 1 },
         { text: "시험 없는 세상은 없을까..? 시험은 왜 존재하고..왜 봐야만 하는 걸까..", idx: "SN", delta: -1 }
      ]
   },
   {
      question: "Q3 </br>'와 대박! 너 과제 별로 열심히 안 하는 것</br> 같던데 진짜 잘했다!</br> 완전 재능충이었네~'라는 말을 들었을 때 나는?",
      selections: [
         { text: "(내 재능을 칭찬하다니.. 기분 좋다..ㅎㅎ)", idx: "FT", delta: 1 },
         { text: "(지금 나랑 싸우자는 거? 내가 과제를 얼마나 열심히 했는데 니가 뭘 알아...)", idx: "FT", delta: -1 }
      ]
   },
   {
      question: "Q4 </br>다음주까지 해야하는 과제가 있다!</br> 이때 나는??",
      selections: [
         { text: "아직 많이 남았네~~ 지금은 놀자~!!! 당일치기가 최고지ㅋㅋㅋ!", idx: "PJ", delta: 1 },
         { text: "이번주 내로 여기까지 하고... 다음주는 여기까지...<br/>이렇게 하면 이 날까지 끝낼 수 있을거야!", idx: "PJ", delta: -1 }
      ]
   },
   {
      question: "Q5 </br>몰아치는 수행평가와 과제를 끝내고난 뒤 </br>에너지가 빠질대로 빠진 나! </br>빠진 에너지를 채우기 위해 나는?",
      selections: [
         { text: "역시 친구와 노는게 최고! 친구와 만나 즐겁게 논다", idx: "EI", delta: 1 },
         { text: "아...피곤해 누워서 쉬고싶어 집에서 혼자 휴식을 즐긴다", idx: "EI", delta: -1 }
      ]
   },
   {
      question: "Q6 </br>새로운 프로젝트를 시작하려고 한다!</br> 이때 나의 모습은?",
      selections: [
         { text: "이전까지 해온 방식이 더 좋지. 이미 보장되어 있는 방법이니까 더 잘 할 것 같아!", idx: "SN", delta: 1 },
         { text: "이번엔 새로운 방식으로 해볼까? 이게 더 좋은 방법일지도 몰라!", idx: "SN", delta: -1 }
      ]
   },
   {
      question: "Q7 </br>'나 요즘 너무 우울해서</br> 기분 전환으로 머리카락 잘랐어!!'</br>이 말을 듣고 내가 친구에게 할 말은?",
      selections: [
         { text: "무슨 일 있었어?? 지금은 괜찮아??", idx: "FT", delta: 1 },
         { text: "아 진짜? 어떻게 잘랐는데??", idx: "FT", delta: -1 }
      ]
   },
   {
      question: "Q8 </br>제주도로 수학여행을 온 나!</br> 마지막날은 자유롭게 관광을 해도 된다는 </br>선생님 말씀을 듣고난 뒤 나는?",
      selections: [
         { text: "일단 피곤하니까 잠부터 자고 내일 생각해봐야겠어..zzz", idx: "PJ", delta: 1 },
         { text: "4시까지는 숙소에 와야하니까 3시 30분쯤에 미림짬뽕집에서 출발하고...", idx: "PJ", delta: -1 }
      ]
   },
   {
      question: "Q9 </br>드디어 기다리고 기다리던 여름방학이다!</br> 일주일에 내가 약속 잡는 횟수는?",
      selections: [
         { text: "일주일에 3번 만나는건 어때?? 우리 카페가서 회의할까? 점심은 뭐 먹을까?", idx: "EI", delta: 1 },
         { text: "일주일에 3번? 한 달에 3번 잡는 것도 부담스러운데...", idx: "EI", delta: -1 }
      ]
   },
   {
      question: "Q10 </br>친구와 밸런스게임을 시작했다!</br> 말도 안 되는 질문을 나에게 던진 친구에게 </br>나는?",
      selections: [
         { text: "엥? 뭐라는거야? 그런 일은 일어 날 수 없잖아!!", idx: "SN", delta: 1 },
         { text: "음.......나는.......(진지하게 고민한다.)", idx: "SN", delta: -1 }
      ]
   },
   {
      question: "Q11 </br>'욜~ 오늘 OOO 분위기 미쳤는데~~'라고 </br>말하는 친구들에 반응에 나는?",
      selections: [
         { text: "아 뭐야ㅋㅋㅋ 오늘 좀 신경 쓴 보람이 있네 고마워~", idx: "FT", delta: 1 },
         { text: "어디가 어떻게 예뻐보여? 자세히 말해봐~", idx: "FT", delta: -1 }
      ]
   },
   {
      question: "Q12 </br>방과후 시작 전에</br> 반 친구들과 아마스빈에 들린 나!</br> 오늘따라 유독 사람이 많아 줄을 서야할 때 줄을 기다리면서 나는?",
      selections: [
         { text: "가게에 들어가고 나서 천천히 음료를 정해본다", idx: "PJ", delta: 1 },
         { text: "가게에 들어가기 전에 마실 음료를 다 정하고 들어간다", idx: "PJ", delta: -1 }
      ]
   }
];

const infoList = {
   ENFJ: {
     name: '김명준 선생님',
     desc: '인간 골든 리트리버st',
     desc2: "#윤선희T",
     img: 'ENFJ.png'
   },
   ENFP: {
      name: '미림엔 없궁...',
      desc: '인싸 of 인싸st',
      desc2: "",
      img: 'ENFP.png'
    },
    ENTJ: {
      name: '정하나 선생님',
      desc: '자기관리 끝판왕st',
      desc2: "",
      img: 'ENTJ.png'
    },
   ENTP: {
     name: '유병석 선생님',
     desc: '물음표 살인마st',
     desc2: "",
     img: 'ENTP.png'
   },
   ESFJ: {
      name: '미림엔 없궁..',
      desc: '사교성 100%st',
      desc2: "",
      img: 'ESFJ.png'
    },
   ESFP: {
     name: '이하얀 선생님',
     desc: '인간 햇살st',
     desc2: "",
     img: 'ESFP.png'
   },
   ESTJ: { 
     name: '똑최규정 선생님',
     desc: '부러지는 휴먼st',
     desc2: "#백현정T",
     img: 'ESTJ.png'
   },
   ESTP: { 
     name: '이재민 선생님',
     desc: '미림 뼈그맨st',
     desc2: "",
     img: 'ESTP.png'
   },
   INFJ: {
     name: '신혜정 선생님',
     desc: '불타는 열정st',
     desc2: "",
     img: 'INFJ.png'
   },
   INFP: { 
     name: '이형섭 선생님',
     desc: '범접불가 4차원st',
     desc2: "#오수연T",
     img: 'INFP.png'
   },
   INTJ: { 
     name: '함기훈 선생님',
     desc: '진정한 플랜맨st',
     desc2: "",
     img: 'INTJ.png'
   },
   INTP: {
     name: '임정훈 선생님',
     desc: '고독한 츤데레st',
     desc2: "#박지우T",
     img: 'INTP.png'
   },
   ISFJ: {
      name: '미림엔 없궁...',
      desc: '인간계의 놀러온 천사st',
      desc2: "",
      img: 'ISFJ.png'
    },
   ISFP: { 
     name: '장민주 선생님',
     desc: '인간 고양이st',
     desc2: "",
     img: 'ISFP.png'
   },
   ISTJ: { 
     name: '민주리 선생님',
     desc: '얼음 심장st',
     desc2: "",
     img: 'ISTJ.png'
   },
   ISTP: { 
     name: '권오재 선생님',
     desc: '쿨함의 정석st',
     desc2: "",
     img: 'ISTP.png'
   }
}


