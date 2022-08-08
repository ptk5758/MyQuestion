import logo from './logo.svg';
import './App.css';
import './css/init.css';
import './css/main.css';
import { Component } from 'react';
import {QuestionBookInsert, QuestionBtn} from './components/QuestionBookInsert';
import { Question } from './components/Question';
import { QuestionBook } from './components/QuestionBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionInsert from './components/QuestionInsert';
import Header from './components/Header';
import Main from './components/Main';
import { Modal } from './components/Modal';
import { QuestionView } from './components/QuestionView';
import { Developer } from './components/Developer';
import SolveQuestion from './components/SolveQuestion';
import { LoginComponent, RegistComponent } from './components/login';
import KakaoCallback from './components/Kakaoresult';
import { QuestionSolve, WriteAnswerPage } from './components/QuestionSolve';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal_component:"",
      isModal:false,
      modal_title: "",
      useHeader : true
    }
  }  
  openModal(component, title)
  {
    this.setState({modal_component : component, isModal: true, modal_title: title});
  }

  closeModal()
  {
    this.setState({isModal: false}); 
  }

  setHeader(state)
  {
    this.setState({useHeader: state});
  }

  render()
  {    
    //let ele = QuestionView();
    // route 의 속성 path 는 대소문자 구문안함
    return(
      <div>
        <Modal title={this.state.modal_title} isModal={this.state.isModal} content={this.state.modal_component} closeModal={this.closeModal.bind(this)}/>
        <BrowserRouter>
          <Header 
            useHeader={ this.state.useHeader }
            setHeader={this.setHeader.bind(this)}
            openModal={this.openModal.bind(this)}
          />
          <div className='content'>
          <Routes>
            <Route path='' element={<Main/>} />
            {/* <Route path='login' element={ <LoginComponent setHeader={this.setHeader.bind(this)}/> } /> */}
            <Route path='Question' element={<Question/>} />
            <Route path='Question/view' element={<QuestionView/>}/>
            <Route path='QuestionInsert' element={<QuestionInsert/>} />
            <Route path='QuestionBook' element={<QuestionBook/>}/>
            <Route path='QuestionBook/:uid' element={<QuestionSolve/>}/>
            <Route path='QuestionBook/:uid/:quid' element={<WriteAnswerPage/>}/>
            <Route path='QuestionBookInsert' element={<QuestionBookInsert openModal={this.openModal.bind(this)}/>}/>
            <Route path='QuestionView' element={<QuestionView openModal={this.openModal.bind(this)}/>}/>
            <Route path='/kakao/callback' element={<KakaoCallback/>}/>
            <Route path='regist' element={<RegistComponent setHeader={this.setHeader.bind(this)}/>}/>
            <Route path='*' element={<div>404 not found</div>}/>
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }  
}


export default App;