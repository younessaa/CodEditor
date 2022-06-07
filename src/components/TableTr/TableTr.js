import React, { useState } from 'react';
import fileDownload from "js-file-download";
import moment from "moment";
import { AiFillCaretDown as IconDown, AiFillCaretUp as IconUp } from "react-icons/ai";

import CodEditor from '../CodEditor/CodEditor';

const TableTr = ({lab}) => {

    const [toggle, setToggle] = useState(true);

    // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
    // State variable to set editors default language
    const [userLang, setUserLang] = useState("python");

    const downloadCode = (lab) => {
        let extention;
        if(lab.lang == "python") {
            extention = "py";
        }
        else{
            extention = lab.lang;
        }
		fileDownload(lab.code, `${lab.studentName}-${lab.name}.${extention}`)
	}

    return (
    <>
        <tr>
            <th scope="row">{lab.studentName.toUpperCase()}</th>
            <td>{lab.name}</td>
            <td>
                {moment(lab.date).format('DD-MM-YYYY, h:mm')}
            </td>
            <td>
                <button onClick={() => downloadCode(lab)} type="button" className="btn btn-outline-success">
                    Télécharger
                </button>
            </td>
            <td>
                <button onClick={() => setToggle(!toggle)} type="button" className="btn btn-outline-secondary">
                    {toggle ? 'Voir '  : 'Fermer '}
                    {toggle ? <IconDown />  : <IconUp />}
                    
                </button>
            </td>
        </tr>
        {
            !toggle &&
            <tr className='col-'>
                <td colSpan={5}>
                    <CodEditor
                        readOnly={true}
                        userLang={lab.lang} setUserLang={setUserLang} 
                        userCode={lab.code} setUserCode={setUserCode} 
                        userInput={userInput} setUserInput={setUserInput}/>
                </td>
            </tr>
        }
    </>
    )
}

export default TableTr
