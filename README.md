# SA-UX-TEST
SA-UX-TEST는 특정 사이트를 방문하는 이용자들의 활동에 대한 자료를 수집하고 분석하여 통계 및 영상을 제공해주는 <br>
웹 사이트입니다.

[SA-UX-TEST: 실제 사용자의 이용 데이터를 한눈에 확인하세요](https://sa-ux-test.site)

*** 

## 💡 프로젝트 동기
개인 멘토링 마지막 시간에 멘토님께서 자신이 구현하고 있는 기술에 대해 간략하게 보여 주신적이 있습니다. 

초창기 스타트업들의 경우 대부분이 이 기술을 사용하고 있으며, 실제 이용자의 행동 데이터를 저장하고 그 데이터를 분석하여 페이지를 계속 해서 수정해 나간다고 하셨습니다. 

이용자 입장에서 무심코 이용했던 사이트였지만 회사는 어떤 식으로 배치를 해야 이용자의 관심을 많이 끌 수 있고, 
어떤 기능들이 이용자를 사이트에 오래 머무르게 하는지와 같은 수많은 고민과 그에 맞는 피드백을 계속해서 한다는 것이 상당히 흥미로웠습니다. <br>

이번 개인 프로젝트 아이디어 고민 중에 이 생각이 났고, 해당 기능들을 내가 직접 만들어 보면 너무 재미있겠다는 생각이 들어 시작하게 되었습니다.

***

## 🔌 설치 방법
### 🖥️ Frontend (React)
1. 원격 저장소 클론하기

  ```
  git clone https://github.com/comt-mix/sa-ux-test-client.git
  npm install
  npm start
  ```

2. 환경 변수(.env) 설정하기

  ```jsx
  <firebase 설정>

  REACT_APP_API_KEY=<YOUR_API_KEY>
  REACT_APP_AUTH_DOMAIN=<YOUR_AUTH_DOMAIN>
  REACT_APP_PROJECT_ID=<YOUR_PROJECT_ID>
  REACT_APP_STORAGE_BUCKET=<YOUR_STORAGE_BUCKET>
  REACT_APP_MESSAGING_SENDER_ID=<YOUR_MESSAGING_SENDER_ID>
  REACT_APP_APP_ID=<YOUR_APP_ID>
  REACT_APP_DOMAIN=<YOUR_SERVER_DOMAIN> / Backend 원격 저장소 클론 후 bin/www 파일에서 확인 가능
  ```
  
### 🖥️ Backend (Node)
1. 원격 저장소 클론하기

  ```
  git clone https://github.com/comt-mix/sa-ux-test-server.git
  npm install
  npm start
  ```

2. 환경 변수(.env) 설정하기

  ```jsx
  MONGODB_URL=<YOUR_MONGODB_URL>

  <firebase 설정>

  TYPE=<YOUR_TYPE>
  PROJECT_ID=<YOUR_PROJECT_ID>
  PRIVATE_KEY_ID=<YOUR_PRIVATE_KEY_ID>
  PRIVATE_KEY=<YOUR_PRIVATE_KEY>
  CLIENT_EMAIL=<YOUR_CLIENT_EMAIL>
  CLIENT_ID=<YOUR_LIENT_ID>
  AUTH_URI=<YOUR_AUTH_URI>
  TOKEN_URI=<YOUR_TOKEN_URI>
  AUTH_PROVIDER_CERT_URL=<YOUR_AUTH_PROVIDER_CERT_URL>
  CLIENT_CERT_URL=<YOUR_CLIENT_CERT_URL>
  ```
  
***

## 🕹 기능 설명

<details>
  <summary>로그인</summary>
  
  https://user-images.githubusercontent.com/89302818/204107335-4e2436d7-24d9-4836-9f63-574b4e42b504.mov
  
  - 로그인 버튼을 누르면 구글 로그인이 진행된다.
  
</details>

<details>
  <summary>프로젝트 생성 및 연결</summary>
  
  https://user-images.githubusercontent.com/89302818/204107341-5dccb9c8-2ff8-4311-a02b-6bf7338cb8bf.mov
  
  <img width="400" alt="key 설정" src="https://user-images.githubusercontent.com/89302818/204108290-e68b4381-3281-49df-a8bb-60703edcc107.png">
  <img width="400" alt="개발자 도구 key 확인" src="https://user-images.githubusercontent.com/89302818/204108352-9846b6df-47af-4481-aef1-76f289251a1d.png">

  - "+" 버튼을 누르면 프로젝트 생성하기 모달창이 뜬다.
  - 정보 입력 후 제출 시 프로젝트 정보가 담긴 카드가 추가되며, 테스트 할 홈페이지에 적용할 고유의 키값이 자동으로 발급된다.
  - 발급받은 키값을 테스트하려는 사이트의 html 파일 속 head에 위와 같이 입력한다.(key=”발급받은 key값 입력”)
  - 위의 과정이 완료되면 더 이상의 설정과정은 없다. 이제 설정한 사이트는 테스트 할 준비가 완료된다.
  
  https://user-images.githubusercontent.com/89302818/205474959-34a92425-1dd1-42e6-88f6-5cafb30badde.mov
  - 테스트 사이트에 사용자가 접속하면 서버와의 연결이 시작되며, 이 때부터 사용자의 기본 정보들이 서버에 전송되어 저장된다.<br>
    (접속 확인을 위해 일시적으로 console창에 찍히도록 한 점 참고 바랍니다.)
  
</details>

<details>
  <summary>Dashboard</summary>
  
  https://user-images.githubusercontent.com/89302818/204107351-db53ced6-47ef-4808-a7dc-d8886772815a.mov
  
  - Dashboard 화면에 들어가면 방문자, 평균 이용시간, 유입된 이전 사이트에 대한 정보를 통계로 보여준다.
  - 이용자가 테스트 사이트에서 마우스로 클릭을 했을 경우 클릭이벤트가 발생하여 해당 위치의 키워드와 tag정보를 저장한다.
  - 클릭된 키워드와 태그를 기준으로 count를 측정하여 통계와 그래프를 활용했다.
  
  <img width="1421" alt="image" src="https://user-images.githubusercontent.com/89302818/205475964-33dd0850-903f-4cea-9adb-c0a7ac6ce223.png">
  
  - 사이트에 key값 설정이 제대로 되지 않았거나, 아직 이용자가 접속하지 않아 가지고 올 정보가 없는 경우 메시지로 알려준다.
  
</details>

<details>
  <summary>Recording</summary>
  
  https://user-images.githubusercontent.com/89302818/204107838-37d9db8d-8381-4336-a18e-871a9dd65572.mov
  
  - 테스트 사이트에 접속했을 시 영상이 자동으로 저장되며 영상을 클라이언트로 전송하여 바로 영상을 볼 수 있도록 구현되어 있다. <br>
  
  🔖 issue 사항
  - 테스트 사이트만 영상 저장이 되지 않는 issue가 발생하여 대체 사이트로 영상이 촬영되어있습니다.
  - 기존에 테스트 사이트에 방문하여 저장되어 있던 영상에서 사이트에 접속했을 때 새로운 영상이 저장되는 것을 보여주는 것으로 대체되어 있습니다.
  - 이슈사항 관련해서는 [여기](https://shaded-calculator-f57.notion.site/82bc911301d94b47ae86a2890e2a82b5)를 참조해주시고, 이 부분은 개선해나가기 위해 계속해서 검토하고 있습니다.
  
</details>

<details>
  <summary>프로젝트 삭제</summary>
  
  https://user-images.githubusercontent.com/89302818/204107367-bc4e5438-6347-40f1-ab28-5b3880e9afc3.mov
  
  - 휴지통 아이콘을 클릭하면 삭제 확인 모달창이 뜨고 확인 버튼을 누르면 삭제 된다.
  
</details>

<details>
  <summary>잘못된 경로 접속</summary>
  
  https://user-images.githubusercontent.com/89302818/205476163-4d7dd154-12ba-4e06-b1a2-0e8ee06e2989.mov

  - 정상적이지 않은 경로로 접속시 404에러 페이지가 뜬다.
  
</details>

***

## 🛠 기술 스택
### Frontend
- React
- Firebase
- React Query
- Styled Components
- chart.js
- Jest

### Backend
- Node
- Express
- Firebase-admin
- MongoDB
- Puppeteer
- Jest

***

## 🚨이슈사항 및 🧗‍♂️챌린지
[Issue](https://shaded-calculator-f57.notion.site/82bc911301d94b47ae86a2890e2a82b5)<br>
[Challenge](https://shaded-calculator-f57.notion.site/73e25a7f26a74e16bcccc98c6872eac9)

***

## 💁🏻‍♀️ 만든 사람
### 이상아 comt.mix@gmail.com <br>
프로젝트 관련 세부적인 사항은 노션페이지를 참고해주세요 [CLICK!](https://shaded-calculator-f57.notion.site/SA-UX-TEST-1211dbcd959f4726a1967730571d0e5c)



