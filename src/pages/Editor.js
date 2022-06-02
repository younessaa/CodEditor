import React, { useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import CodEditor from '../components/CodEditor/CodEditor';
import Footer from '../components/Footer/Footer';
import fileDownload from "js-file-download";
import moment from "moment";

const Editor = () => {

  const [file, setFile] = useState("");
  const [fileType, setFileType] = useState("py");
  const [fileName, setFileName] = useState("fichier");

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
  // State variable to set users input
	const [userInput, setUserInput] = useState("");
  
  let dateNow;

  const downloadCode = () => {
    dateNow = moment().format('DD-MM-YYYY, h:mm:ss');
    if(fileType === "python"){
      setFileType("py");
    }
    fileDownload(file, `${fileName}-${dateNow}.${fileType}`)

  }

  const handleChange = (e) => {
    console.log(fileName);
    setFileName(e.target.value)
  }


  return (
    <>
      <Header />
      <CodEditor
        readOnly={false}
        userCode={userCode} setUserCode={setUserCode} 
        userInput={userInput} setUserInput={setUserInput}
        setFile={setFile} setFileType={setFileType}/>
      <div className='container-fliud text-center'>
        <div className='row justify-content-md-center mt-2'>
            <div className='col-md-auto'>
              <div className="input-group mb-3">
                <input onChange={handleChange} type="text" className="form-control" placeholder="Le nom de fichier" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button onClick={() => downloadCode()} className="btn btn-success" type="button">Télécharger le fichier</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Editor
