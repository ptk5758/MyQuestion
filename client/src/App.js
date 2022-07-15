import logo from './logo.svg';
import './App.css';
import './css/main.css';
import { Component } from 'react';
import Question from './components/Question';
import QuestionBook from './components/QuestionBook';
import QuestionBookInsert from './components/QuestionBookInsert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      
    }
  }
  render()
  {
    // route 의 속성 path 는 대소문자 구문안함
    return(
      <div>
        <BrowserRouter>
          <Header/>
          <div className='content'>
          <Routes>
            <Route path='Question' element={<Question/>} />
            <Route path='QuestionBook' element={<QuestionBook/>}/>
            <Route path='QuestionBookInsert' element={<QuestionBookInsert/>}/>
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }  
}

export default App;
