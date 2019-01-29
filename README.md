## SC frontend

해당 코드는 react-create-app 기반으로 작업하였습니다.

### 선행 설치 조건

```
node.js
```

### 패키지 설치

```
npm install
```

### 프론트엔드 개발시 변경해야 할 사항 (개발 테스트시)

```
npm start를 하면 <라즈베리파이 주소>:3000 으로 들어가지기 때문에   
api를 못불러와서 수정작업을해야함
src/components/dashboard/DashboardAPI.js
src/components/dashboard/BpmBarChart.js
src/components/dashboard/TempLineChart.js

위의 axios 코드에서 <라즈베리파이 주소><원래 써있는 주소> 로 변경
예시 : http://192.168.1.197/api/dashboard/?format=json

/src/components/dashboard/DashboardCard.js
위의 코드에서 icon 관련 주소를 바꿔야 함 /static/icon/ 을 /icon/ 로 변경
```

### Development start

```
npm start
```

### Build

```
npm run build
```

### Build 후 Django에 적용하기

```
build 폴더를 /opt/sc-servers/sc-project/ 에 이동
build 폴더에서 icon 폴더를 static 폴더 내부로 이동
```
