import {React, useState} from 'react';
import './bibleChapters.css'

export default function Biblechapters(props){




    return(
        <>
<div className="full-chapter__container">
    {props.displayChapter?props.displayChapter.Verse.map((completeChapter, i)=>{
       return <span className="full-chapter__verses" key={i}>{completeChapter.Verse}</span>
        
    }):<p className="full-chapter__verses--not-active">Chapters Loading....</p>}
    </div>
         
        </>
    )
}