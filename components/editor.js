import { useEffect,useRef } from "react"
import {EditorState} from '@codemirror/state'
import { basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import {EditorView} from '@codemirror/view'

export default function Editor({content}){
    const elEditor=useRef();
    useEffect(()=>{
        const state=EditorState.create({
            doc:content,
            extensions:[basicSetup,javascript()]
        })
        const view =new EditorView({state,parent:elEditor.current});
        return ()=>{
            view.destroy()
        }

    },[])
    return <div>
        <div ref={elEditor}></div>
    </div>
}