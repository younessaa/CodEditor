import React, { useState, useEffect } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from '../Navbar/Navbar';
import { compileAPI } from '../../actions/compile'; 
import axios from 'axios';

import styles from './CodEditor.module.css';



const initialState = { code: '', language: '', input: '' };


const CodEditor = ({setFile, setFileType}) => {

	// State variable to set users source code
	const [userCode, setUserCode] = useState(``);
	
	// State variable to set editors default language
	const [userLang, setUserLang] = useState("python");
	
	// State variable to set editors default theme
	const [userTheme, setUserTheme] = useState("light");
	
	// State variable to set editors default font size
	const [fontSize, setFontSize] = useState(20);
	
	// State variable to set users input
	const [userInput, setUserInput] = useState("");
	
	// State variable to set users output
	const [userOutput, setUserOutput] = useState("");
	
	// State variable to set users output
	const [cpuTime, setCpuTime] = useState("");
	
	// Loading state variable to show spinner
	// while fetching data
	const [loading, setLoading] = useState(false);
	
	const options = {
		fontSize: fontSize
	}
	
	// Function to call the compile endpoint
	function compile() {
		setLoading(true);
		if (userCode === ``) {
		return
		}
	
		// Post request to compile endpoint
		axios.post(`http://localhost:5000/compile`, {
		code: userCode,
		language: userLang,
		input: userInput }).then((res) => {
		setUserOutput(res.data.output);
		setCpuTime(res.data.cpuTime);
		}).then(() => {
		setLoading(false);
		})
	}
	
	// Function to clear the output screen
	function clearOutput() {
		setUserOutput("");
	}
	
	return (
		<div className={styles.codEditor}>
			<Navbar
				userLang={userLang} setUserLang={setUserLang}
				userTheme={userTheme} setUserTheme={setUserTheme}
				fontSize={fontSize} setFontSize={setFontSize}
				compile = {compile} setFileType={setFileType}
			/>
			<div className={styles.editorBody}>
				<div className='container-fliud'>
					<div className='row'>
						<div className={'col-8 ' + styles.leftCol}>
							<Editor
								options={options}
								height="calc(100vh - 50px)"
								width="100%"
								theme={userTheme}
								language={userLang}
								defaultLanguage={userLang}
								defaultValue={""}
								onChange={(value) => { setUserCode(value); setFile(value);  }}
							/>
							
						</div>	
						<div className='col-4'>
						<h4 className={styles.inputField}>Input:</h4>
							<div className="input-box">
								<textarea className={styles.codeInput} onChange=
								{(e) => setUserInput(e.target.value)}>
								</textarea>
							</div>
							<div >
								<h4 className={styles.outputField}>Output:</h4>
								{loading ? (
									<div className="text-center">
					
										<div className="spinner-border text-secondary" role="status">
											<span class="sr-only">Loading...</span>
										</div>
									</div>
								) : (
									<div >
										<pre className={styles.output}>{userOutput}</pre>
										<pre>CPU Time: {cpuTime}</pre>
										<button type="button" class="btn btn-secondary" onClick={() => { clearOutput() }}>
											Clear
										</button>
									</div>
								)}
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
	);
	}

export default CodEditor;
