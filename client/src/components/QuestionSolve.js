import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function QuestionSolve()
{
    const { uid } = useParams();

    const [book, setBook] = useState({});    

    useEffect(()=>{
        getBook(uid)
        .then(res=>{console.log(res);});
    }, []);

    return (
        <div>문제집 문제풀기</div>
    );
}

function getBook(uid)
{
    return axios({
        method : "GET",
        url : `http://localhost:5000/book/${uid}`
    });
}

export { QuestionSolve };