import React, { Component } from 'react';

// function QuestionView()
// {    
//     return <div>test입니다</div>;
// }    
class QuestionView extends Component
{
    render()
    {
        console.log(this);
        return(
            <div>테스트입니다.</div>
        );
    }
}

export { QuestionView } ;
