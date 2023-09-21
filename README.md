# Repository-Issue-Web
- 원티드 프리온보딩 12차 2주차 개인과제 입니다.

### 🌐 배포링크
[Repository-Issue-Web](https://repository-issue-web.vercel.app/)

## 🎬 프로젝트 로컬 실행 방법

```
 git clone https://github.com/taegeun1111/repository-issue-web.git
 npm install
 npm start
```

## 🛠️ 기술 스택

<div>
   <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
   <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
   <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
   <br/>
   <img src="https://img.shields.io/badge/octokit-efefef?style=flat&logo=octokit&logoColor=white">
   <img src="https://img.shields.io/badge/react spinners-efefef?style=flat&logo=react-spinners&logoColor=white">
   <img src="https://img.shields.io/badge/react markdown preview-efefef?style=flat&logo=react-markdown-preview&logoColor=white">
</div>

<br/>

## 📝 요구 사항

### **[Assignment 0] 이슈 목록 화면**

> - 이슈 목록 가져오기 API 활용
> - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
> - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
> - 다섯번째 셀마다 광고 이미지 출력
> - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

#### **구현 방법**

사용 기술 : octokit

1. GitHub REST API를 사용하여 데이터를 받아옵니다.
2. token을 발급받아 데이터를 받아옵니다.
3. map으로 반복시 index를 통해 광고 이미지를 출력해줬습니다.
4. 화면을 아래로 스크롤 시 인피니트 스크롤을 구현했습니다.
   - 현재 `EvnetListener` 로 구현하였으나 버벅임이 발생해 교육이 끝나고 난 뒤 `observer`로 수정할 예정입니다. [09.22 수정 완료 - 해결 방법](https://wind-hardboard-c59.notion.site/React-ee2dde9ed6b04f65a9c24ec376aeedb2?pvs=4)


### **[Assignment 0] 이슈 상세 화면**

> - 이슈의 상세 내용 표시
> - 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문 표시

#### **구현 방법**

사용 기술 : react-markdown-preview

1.이슈의 상세 내용 표시
    - 데이터를 받아오기 전까지 Loading Spinner를 통해 데이터를 기다렸다 상세화면을 보여줍니다. 상세화면은 `markdown` 으로 데이터가 넘어오기 때문에 `react-markdown-preview` 로 렌더링 시켜 보여주었습니다.

## 🗂️ 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜issueInstance.ts
 ┣ 📂assets
 ┃ ┗ 📜20210419-wanted.jpg
 ┣ 📂components
 ┃ ┗ 📂Layout
 ┃ ┃ ┣ 📜Header.styled.ts
 ┃ ┃ ┗ 📜Layout.tsx
 ┣ 📂constants
 ┃ ┗ 📜constants.ts
 ┣ 📂hooks
 ┃ ┗ 📜useIntersectionObserver.ts
 ┣ 📂pages
 ┃ ┣ 📂issueDetail
 ┃ ┃ ┣ 📜IssueDetail.styled.ts
 ┃ ┃ ┣ 📜IssueDetail.tsx
 ┃ ┃ ┗ 📜IssueDetailElement.tsx
 ┃ ┗ 📂issueList
 ┃ ┃ ┣ 📜IssueElement.styled.ts
 ┃ ┃ ┣ 📜IssueElement.tsx
 ┃ ┃ ┣ 📜IssueList.styled.ts
 ┃ ┃ ┗ 📜IssueList.tsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📂types
 ┃ ┗ 📜Issue.ts
 ┗ 📜App.tsx
```
