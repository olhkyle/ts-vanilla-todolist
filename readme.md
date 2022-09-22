# TypeScript Todo

## 실행방법
<code>npm install</code><br/>
<code>npm run dev</code>
<br/>

## 구현내용
<p>vite 번들러 + vanilla TypeScript를 사용해, CRUD를 활용한 to do list를 만들었습니다.</p>
<p>순수 JavaScript로만 만들었던 shopping-list-app과 달리 type 추론의 문제 때문에 완성하기 쉽지 않았음을 밝힙니다. </p>

<br/>
<br/>

## Create

- 할 일을 추가할 수 있습니다.
- (UI) todo가 추가됨에 따라, todo 추가 input 영역 하단에 todo 컨테이너가 일부 꽉차게 되면, 자동으로 상하 스크롤링이 되도록 구현했습니다.
<br/>

<img width="1728" alt="2_inputtext" src="https://user-images.githubusercontent.com/99726297/191722871-f8acdc4c-4441-4fae-a26e-c56c75cf9c6c.png">
<br/>

## Read
- 모든 할 일을 조회할 수 있습니다.
- (할 일, 완료된 일, 모두) 필터 기준으로 조회 가능합니다.
- (UI) Total, Ongoing, Finished 버튼을 클릭함에 따라, 상태에 따른 todo 내용이 달리 보여집니다.
<br/>

<img width="1720" alt="4_filtering" src="https://user-images.githubusercontent.com/99726297/191723031-12ad1292-681d-439d-aa99-264688fdb20f.png">
<br/>
<br/>
<hr/>
<br/>
<br/>
<img width="1724" alt="4_filtering_complete" src="https://user-images.githubusercontent.com/99726297/191723093-fb6fda5a-3015-4e4f-b98c-6d77d202420b.png">
<br/>

## Update
- 할 일의 내용과 상태를 수정할 수 있습니다.
- (UI) 할 일이 isDone된 상태에서 해당 todo는 가운데로 줄이 그어집니다.
<br/>
<img width="1727" alt="3_complete" src="https://user-images.githubusercontent.com/99726297/191723335-655372ee-2515-47c0-9fad-2d00b9ccefff.png">
<br/>


## Delete
- 특정 할 일을 제거할 수 있습니다.
- (UI) 삭제 버튼에 마우스를 올리면, hover 스타일링에 의해 배경색이 변합니다.
<br/>
<img width="865" alt="5_todelete" src="https://user-images.githubusercontent.com/99726297/191723406-48deb4d0-c648-4670-8a32-6cb0bbdbc061.png">
<br/>
