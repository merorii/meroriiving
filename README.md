# **MERORRIVING**

tving 사이트 디자인을 참고하여 제작한 영화 정보 사이트  
https://meroriiving.vercel.app/
<br/><br/>

# **사용기술**

<img src="https://img.shields.io/badge/next.js -eee?style=flat-square&logo=next.js&logoColor=000"/> <img src="https://img.shields.io/badge/typescript -eee?style=flat-square&logo=typescript&logoColor=3178C6"/>
<img src="https://img.shields.io/badge/styled components -eee?style=flat-square&logo=styled-components&logoColor=DB7093"/>
<img src="https://img.shields.io/badge/vercel -eee?style=flat-square&logo=vercel&logoColor=000"/>
<br/><br/>

# **기능**

**TODO**

- [ ] 코드 리팩토링
  - [ ] css 네이밍 통일
  - [ ] 스타일컴포넌트명 통일
  - [ ] api 두번 호출 이슈 수정
  - [ ] 공통 부분 컴포넌트화
- [ ] 동영상 재생 기능 추가
- [ ] 모바일 반응형 수정

**DONE**

- [x] 메인화면
- [x] 상세화면
- [x] 검색화면
- [x] 항목별리스트화면
- [x] 슬라이드 컴포넌트화
- [x] 리스트페이지 인피니티스크롤 적용
- [x] 각 페이지 반응형 작업
- [x] 검색창 팝업 추가

<br/><br/>

# **블로그**

- [x] 세팅
- [x] react-query
- [x] getserversideprops
- [x] carousel
- [ ] 검색기능
- [ ] infinite scroll
- [ ] 배포
- [ ] 영상기능
      <br/><br/>

# **화면**

_추가예정_
<br/><br/>

# **폴더 구조**

```
  ├── public
  └── src
    ├── common
    ├── components
    │   ├── Card
    │   ├── Carousel
    │   ├── Layout
    │   ├── List
    │   |   └── Card
    │   └── MainNav
    ├── hooks
    ├── pages
    │   ├── auth
    │   │   ├── contents
    │   │   |    └── [id].tsx
    │   │   ├── list
    │   │   |    └── [type].tsx
    │   │   ├── _app.tsx
    │   │   ├── _document.tsx
    │   │   ├── index.tsx
    │   │   └── search.tsx
    │   └── todo
    └── types

```

<br/>

# **설치 및 실행**

### **설치**

```
$ yarn
```

**실행**

```
$ yarn dev
```
