import {ReactElement, useEffect, useState} from "react";
import db from '../firebase.config';

interface NoteData{
    note:string,
    posted_by:string
}

const NotesList = ():ReactElement =>{
    const [notes,setNotes] = useState<any>([]);
    useEffect(()=>{
        fetchNotes();
    },[]);

    const fetchNotes = async ()=>{
        const response = db.collection('notes');
        const data = await response.get();
        data.docs.forEach(item=>{
            console.log(item);
            setNotes([...notes,item.data()])
        })
    }

    const addNotes = async ()=>{
        const data ={
            note:'Gheralt',
            posted_by: '12'
        }
        await db.collection('notes').doc('UjTPQhzVtKmOog8raKxK').update(data);
    }
    return (
        <div>
            {
                notes&&notes.map((note:NoteData)=>{
                    return(
                        <div onClick={addNotes} className='hero' key={Math.random()}>
                            {note.note}
                            {note.posted_by}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default NotesList;