/* eslint-disabled*/ 

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let posts = '강남 고기 맛집';
  function App() {
    return 100
  }
  // var [a,b] = [10, 100];
  // let [글제목,글제목변경] = useState('남자 코트 추천');
  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트']);
  let [따봉, 따봉변경] = useState(0);

  // usestate를 하면 새로고침이 없어도 스무스하게 랜더링가능

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'; 
    글제목변경(newArray);
  }

  return (

    <div className="App">
      <div className='black-nav'>
        <div> 개발 blog </div> 
      </div>
  
      <button type="button" onClick={ 제목바꾸기 }>누르자</button>
      <div className='list'>
        <h3> { 글제목[0] }  <span onClick={() => { 따봉변경(따봉 + 1)}}>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p> 
      </div>
      <Modal />
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p> 
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p> 
      </div>
     

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>상세</p>
    <p>상세내용</p>
    </div>
  )
  
}

export default App;
