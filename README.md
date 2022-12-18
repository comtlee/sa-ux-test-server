# SA-UX-TEST
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/89302818/207787784-dc42c616-0581-4aaa-9470-f6c30414d605.png">

SA-UX-TEST는 특정 사이트를 방문하는 이용자들의 활동에 대한 자료를 수집하고 분석하여 통계 및 영상을 제공해주는 웹 사이트입니다.

프로젝트 생성 시 발급되는 Key를 Script Tag와 접목시켜 테스트 사이트에 추가만 하면 저장된 이용자의 데이터를 실시간으로 확인하실 수 있습니다.

(상세 기능은 [🕹 기능 설명](#-기능-설명) 에서 확인할 수 있습니다!)

[실제 사용자의 이용 데이터를 한눈에 확인하세요](https://sa-ux-test.site) 

### 💡 아이디어 선정 동기
개인 멘토링 마지막 시간에 멘토님께서 자신이 구현하고 있는 기술에 대해 간략하게 보여 주신적이 있습니다. 

스타트업들의 대부분이 이 기술을 사용하고 있으며, 실제 이용자의 행동 데이터를 저장하고 그 데이터를 분석하여 페이지를 계속 해서 수정해 나간다고 하셨습니다. 

이용자 입장에서 무심코 이용했던 사이트였지만 회사는 어떤 식으로 배치를 해야 이용자의 관심을 많이 끌 수 있고, 
어떤 기능들이 이용자를 사이트에 오래 머무르게 하는지와 같은 수많은 고민과 그에 맞는 피드백을 계속해서 한다는 것이 상당히 흥미로웠습니다. <br>

그래서 개인 프로젝트 때 내가 직접 만들어 보면 너무 재미있겠다는 생각이 들어 기록해두었었고, 그걸 토대로 이번 개인 프로젝트를 진행하게 되었습니다.

***

## 🕹 기능 설명
|||
|------|---|
|<img width="1512" alt="스크린샷 2022-12-15 오후 5 51 28" src="https://user-images.githubusercontent.com/89302818/207815917-6af66f9a-17b3-4482-94c7-dfcec1ecb258.png">|   <img width="1512" alt="스크린샷 2022-12-15 오후 5 51 04" src="https://user-images.githubusercontent.com/89302818/207815973-6776d7c6-9196-4f7f-b05d-0a94bb056a1f.png">|
|<img width="1511" alt="스크린샷 2022-12-15 오후 5 50 20" src="https://user-images.githubusercontent.com/89302818/207816114-9426c674-79ee-451a-a6eb-640293011c15.png">|<img width="1503" alt="스크린샷 2022-12-15 오후 5 50 45" src="https://user-images.githubusercontent.com/89302818/207816516-2e1231f6-c141-4f7d-aa93-477790032d33.png">

<details>
  <summary>로그인</summary>
  
  https://user-images.githubusercontent.com/89302818/204107335-4e2436d7-24d9-4836-9f63-574b4e42b504.mov
  
  - 로그인 버튼을 누르면 구글 로그인이 진행됩니다.
  
</details>

<details>
  <summary>프로젝트 생성 및 연결</summary>
  
  https://user-images.githubusercontent.com/89302818/204107341-5dccb9c8-2ff8-4311-a02b-6bf7338cb8bf.mov

  <img width="500" alt="스크린샷 2022-12-13 오후 10 21 09" src="https://user-images.githubusercontent.com/89302818/207331656-1f896378-a719-44e6-a9a8-14b150962e3b.png">
  <img width="500" alt="스크린샷 2022-12-13 오후 10 24 09" src="https://user-images.githubusercontent.com/89302818/207331695-a512a672-23cd-4232-9204-7bb705267677.png">

  

  - "+" 버튼을 누르면 프로젝트 생성하기 모달창이 뜹니다.
  - 정보 입력 후 제출 시 프로젝트 정보가 담긴 카드가 추가되며, 테스트 할 홈페이지에 적용할 고유의 키값이 자동으로 발급됩니다.
  - 발급받은 키값을 script tag와 접목하여 테스트하려는 사이트의 html 파일 속 head에 추가합니다.
    
          <script type="text/javascript" src="https://api.sa-ux-test.site/tests?key=발급받은 Key값 입력"></script>
  - 위의 과정이 완료되면 더 이상의 설정과정은 없으며 이제 설정한 사이트는 테스트 할 준비가 완료됐습니다.
  
  https://user-images.githubusercontent.com/89302818/205474959-34a92425-1dd1-42e6-88f6-5cafb30badde.mov
  - 테스트 사이트에 사용자가 접속하면 서버와의 연결이 시작되며, 이 때부터 사용자의 기본 정보들이 서버에 전송되어 저장됩니다.<br>
    (접속 확인을 보여주기 위해 일시적으로 console창에 찍히도록 한 점 참고 부탁드립니다.)
  
</details>

<details>
  <summary>Dashboard</summary>
  
  https://user-images.githubusercontent.com/89302818/204107351-db53ced6-47ef-4808-a7dc-d8886772815a.mov
  
  - Dashboard 화면에 들어가면 방문자, 평균 이용시간, 유입된 이전 사이트에 대한 정보를 통계로 보여줍니다.
  - 이용자가 테스트 사이트에서 마우스로 클릭을 했을 경우 클릭이벤트가 발생하여 해당 위치의 키워드와 tag정보를 저장합니다.
  - 클릭된 키워드와 태그를 기준으로 데이터 수치화하여 통계와 그래프를 활용해 보여줍니다.
  
  <img width="1421" alt="image" src="https://user-images.githubusercontent.com/89302818/205475964-33dd0850-903f-4cea-9adb-c0a7ac6ce223.png">
  
  - 사이트에 key값 설정이 제대로 되지 않았거나, 아직 이용자가 접속하지 않아 가지고 올 정보가 없는 경우 메시지로 알려줍니다.
  
</details>

<details>
  <summary>Recording</summary>
  
  https://user-images.githubusercontent.com/89302818/204107838-37d9db8d-8381-4336-a18e-871a9dd65572.mov
  
  - 테스트 사이트에 접속했을 시 영상이 자동으로 저장되며 영상을 클라이언트로 전송하여 바로 영상을 볼 수 있도록 구현되어 있습니다. <br>
  
  🔖 issue 사항
  - 테스트 사이트만 영상 저장이 되지 않는 issue가 발생하여 대체 사이트로 영상이 촬영되어있습니다.
  - 기존에 테스트 사이트에 방문하여 저장되어 있던 영상에서 사이트에 접속했을 때 새로운 영상이 저장되는 것을 보여주는 것으로 대체되어 있습니다.
  - 이슈사항 관련해서는 [여기](https://shaded-calculator-f57.notion.site/82bc911301d94b47ae86a2890e2a82b5)를 참조해주시고, 이 부분은 개선해나가기 위해 계속해서 검토하고 있습니다.
  
</details>

<details>
  <summary>프로젝트 삭제</summary>
  
  https://user-images.githubusercontent.com/89302818/204107367-bc4e5438-6347-40f1-ab28-5b3880e9afc3.mov
  
  - 휴지통 아이콘을 클릭하면 삭제 확인 모달창이 뜨고 확인 버튼을 누르면 삭제 됩니다.
  
</details>

<details>
  <summary>잘못된 경로 접속</summary>
  
  https://user-images.githubusercontent.com/89302818/205476163-4d7dd154-12ba-4e06-b1a2-0e8ee06e2989.mov

  - 정상적이지 않은 경로로 접속시 404에러 페이지가 .
  
</details>

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

## 🧗‍♂️ 챌린지
### 1. 영상 전송 및 재생([세부내용](https://shaded-calculator-f57.notion.site/3bd51f90e7744003a17fa69690d680fc))
사용자가 사이트에 접속하면 자동으로 녹화되는 영상이 서버의 지정된 폴더 속에 생성되게 되어 있었기에 저장된 영상을 어떻게 클라이언트 단으로 보내서
재생할지에 대한 고민이 많았었습니다. 프로젝트가 다 끝나갈 때에도 이 문제는 해결되지 않고 있었기에 제일 걱정이 많았던 부분입니다.

처음 기획했던 구현 방법은 GridFs였습니다. 하지만 저장되는 영상이 10초 이내의 영상이어서 5mb가 넘지 않는데 16mb 이상의 대용량 비디오를 다루기 위해 만들어진 GridFs를 쓰는 것은 맞지 않다고 판단하였고, 대체안으로 Multer를 적용하였지만 이 또한 기능 구현을 제대로 하지 못해 번번이 에러가 발생했었습니다.

정해진 프로젝트 기간이 다 되어가고 있어 자동 저장된 비디오 파일을 직접 선택해서 재생하는 방법으로라도 기능구현을 해두었었습니다. 마무리 검토단계에서 다시 문제를 해결하기 위해 시도해보던 중에 console.log를 이용해 선택한 비디오 파일이 어떤 구조로 되어있는지 파악하면 해결하는데 도움이 될 것 같은 생각이 들어 시도하였고 결국에 비디오 파일이 blob url로 변환되고 있다는 것을 찾았습니다. blob url을 video src에 직접 입력해보니 재생이 되는 것을 보고 이 방법으로 해결법을 찾을 수 있을 것 같았습니다.

처음에는 서버에서 blob화 하여 그 url을 클라이언트로 보내줬는데, 변환한 곳의 범위를 벗어나서는 사용되지 않는다는 것을 알게 되어 사용하는 클라이언트단에서 직접 변환하는 방법을 적용하여 성공할 수 있었습니다. 해결법은 axios를 통해 응답받은 데이터를 바로 blob화 하여 URL.createObjectURL 메서드를 적용하는 방법이었습니다. 

새로운 것을 짧은 시간 안에 적용해서 결과물로 보여주는 것에 대해 이전부터 어려움을 많이 느꼈는데 이 문제를 해결하면서 자신감을 얻었습니다. 이제는 새로운 기술을 적용해야 하는 일이 있어도 두려움보다는 일단 시도해보려는 자신감이 많이 생긴 것 같습니다.

### 2. 배포([세부내용](https://shaded-calculator-f57.notion.site/5f8e2fc985b34768ab736cadcc19a8bf))
팀 프로젝트 때 배포해보며 자신감이 붙어서 개인프로젝트에서 배포할 때 어려움이 크게 없으리라 생각하고 시도했었습니다. 하지만 AWS Elastic Beanstalk으로 배포하던 중 비디오 영상을 저장할 때 사용하는 Puppeteer에서 에러가 발생했습니다. 환경을 지웠다 다시 만들기도 하고 해결법도 수없이 찾아 시도해보았지만 에러는 계속해서 발생했습니다.

많은 시간을 투자해도 나아지지 않아 이 에러는 해결할 수 없을 것 같다고 생각하던 중 우연히 발견한 github Puppeteer repo에 있는 이슈 페이지 덕분에 에러를 해결할 수 있었습니다. 가장 주된 해결 방법은 Puppeteer를 환경변수에도 설정해주는 것이었고, AWS EB의 환경변수는 역슬래시를 인식하지 못하기에 2번 연속으로 써주어야 한다는 것도 알게 되었습니다. 

여러 사람이 문제 상황을 공유하고 직접 해결한 방법도 공유하면서 형성된 큰 커뮤니티가 이번에 에러 해결에 많은 도움이 된 것을 보며 나도 참여해서 누군가에게 도움이 되고 싶다고 생각했고, 기회가 된다면 다양한 커뮤니티에 참여해 많은 것들은 배우고 공유해야겠다고 느꼈습니다.

### 3. Database 정보 업데이트([세부내용](https://shaded-calculator-f57.notion.site/Database-8777c2a659044ad0826fec600b9be4aa))
몽고디비는 부트캠프 백엔드 과정 때부터 계속해서 사용해왔었고 데이터를 저장하고, 저장된 데이터를 가져와서 사용하는 것에 있어서 큰 에러를 만난 적이 없어 어려움을 느낀 적이 없었습니다. 그만큼 내가 다양한 시도를 해보지 않았기 때문에 느끼지 못했던 것이라는 생각이 들어 반성하게 되는 부분입니다.

이번에 여러 개의 서브 스키마를 사용하여 다양한 데이터 값들을 하나의 스키마로 이용할 수 있도록 구조를 짰는데 데이터를 업데이트하던 중 처음으로 어려움을 겪었습니다. 업데이트하려는 코드에서 내가 적은 값 외에 나머지 데이터들이 모두 삭제되어버리는 문제가 생긴 것이었습니다 

이 문제를 해결하기 위해 이번에 처음으로 몽고디비 매뉴얼을 전부 다 읽어보았는데 해답은 공식문서에 있었고 사전에 꼼꼼히 잘 읽어보았다면 충분히 해결할 수 있었던 문제였습니다. 

해결 방법은 배열의 인덱스를 적어주는 것이었습니다. 배열인지 객체인지와 배열이라면 인덱스는 있는지? 몇 번째 인덱스인지? 항상 꼼꼼하게 확인하고 데이터를 사용해야겠다고 많이 느꼈습니다. 또한 문제를 해결할 땐 공식사이트를 통해 공식문서를 먼저 찾아보는 방향으로 접근하는 게 좋다는 것을 배우는 과정이었던 것 같습니다.

***

## 🚨 Todo
### Recording 영상 녹화 기능([세부내용](https://shaded-calculator-f57.notion.site/Recording-c025c1140a484481ad2f6b53c893d521))
자동으로 영상이 저장되는 것까지는 구현이 되었으나, 막상 기능이 구현되어야 할 테스트 사이트에서는 자동 녹화가 되지 않고 에러가 발생하였습니다. 테스트 사이트를 제외한 나머지 모든 사이트에서는 영상이 녹화되는 것을 확인하였기에 기능 구현은 우선 되었다고 판단하였고 어떤 문제로 테스트 사이트에서만 녹화가 안 되는지를 파악해야 했습니다. 

녹화 방식을 변경하는 것도 고려하였지만 Puppeteer만큼 내가 원하는 방식으로 자동 녹화기능이 구현되는 것이 없었습니다. Puppeteer를 사용한 이유는 사이트를 이용하는 동안 이용자는 녹화가 된다는 점을 인식할 수 없어야 한다는 것을 핵심으로 두었기 때문입니다. 내가 만약 이용자라면 사이트 접속 시 녹화가 된다는 사실을 알게 되었을 때 거부감이 들어 사이트를 바로 나갈 것 같았고 그렇게 되면 테스트가 되지 않기 때문입니다.

특정 사이트만 녹화가 되지 않고 있어 정황상 CORS가 이 문제의 원인이라는 생각이 들었고 이를 해결하기 위해 많은 방법을 시도했으나 결국엔 해결하지 못하였습니다. 팀 프로젝트와 개인 프로젝트에서 수도 없이 만났던 CORS였기에 어느 정도 해결법을 안다고 생각했지만, 여전히 해결하지 못하고 있는 것을 보니 공부가 더 필요하다는 생각이 들었습니다. 이번 기회에 한 분야의 마스터가 된다는 생각으로 계속해서 파고들어 이 문제를 해결해 볼 생각입니다.

***

## 🍀 회고
모든 과정을 처음부터 끝까지 혼자서 해보니 각 파트에서 내가 잘하는 부분은 어떤 것이고 어렵게 느끼는 것은 어떤 것이었는지를 온몸으로 느낄 수 있었던 좋은 자기 객관화의 시간이었습니다. 

기술적 한계에 부딪혀 내가 구현하고자 하는 것들을 하지 못하게 되고 기획했던 방향과 달라져 실시간으로 기획을 고쳐가며 프로젝트를 완성해 나가다 보니 언제 시간이 지났는지 모를 만큼 빠르게 흘렀습니다. 

사실 몇 주 전까지 내가 무언가를 만들 수 있을지 스스로에 대한 의심이 많았었는데, 어느새 완성된 결과물을 보고 있으니 이제는 조금은 나에 대한 믿음이 생기기도 합니다. 

프로젝트는 이제 끝이 났지만 여기서 멈추지 않고 내가 느꼈던 부족함을 꾸준히 개선해나가 성장할 수 있는 개발자가 될 수 있도록 계속해서 움직이겠습니다.

***

## 💁🏻‍♀️ 만든 사람
### 이상아 comt.mix@gmail.com <br>
프로젝트 관련 세부적인 사항은 노션페이지를 참고해주세요 [CLICK!](https://shaded-calculator-f57.notion.site/SA-UX-TEST-1211dbcd959f4726a1967730571d0e5c)

