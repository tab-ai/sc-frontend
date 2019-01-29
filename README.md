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

### API 주소 변경 (개발 테스트시)

```
/opt/sc/sc_frontend/src/components/dashboard/DashboardAPI.js
/opt/sc/sc_frontend/src/components/dashboard/BpmBarChart.js
/opt/sc/sc_frontend/src/components/dashboard/TempLineChart.js

위의 axios 코드에서 <라즈베리파이 주소><원래 써있는 주소> 로 변경
예시 : http://192.168.1.197/api/dashboard/?format=json

참고 : icon도 위와 같이 주소를 바꿔야 할 수도 있음 /static/icon/ -> /icon/
```

### development start

```
npm start
```

### build

```
npm run build
```

### build 후 djang에 적용하기

```
build 폴더를 /opt/sc-servers/sc-project/ 에 이동
build 폴더에서 icon 폴더를 static 폴더 내부로 이동
```
