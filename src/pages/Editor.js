import React, { useState, useEffect} from 'react';
import Header from '../components/Header/Header';
import CodEditor from '../components/CodEditor/CodEditor';
import Footer from '../components/Footer/Footer';


const Editor = () => {

  // State variable to set users source code
	const [userCode, setUserCode] = useState(``);
  // State variable to set users input
	const [userInput, setUserInput] = useState("");
  // State variable to set editors default language
	const [userLang, setUserLang] = useState("python");
  


  return (
    <>
      <Header />

      <CodEditor
        readOnly={false}
        userLang={userLang} setUserLang={setUserLang} 
        userCode={userCode} setUserCode={setUserCode} 
        userInput={userInput} setUserInput={setUserInput}/>

      <Footer />
    </>
  )
}

export default Editor
