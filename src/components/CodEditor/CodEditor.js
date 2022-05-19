import React, { useState, useEffect } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from '../Navbar/Navbar';
import { compileAPI } from '../../actions/compile'; 
import axios from 'axios';



const initialState = { code: '', language: '', input: '' };


const CodEditor = () => {

	// State variable to set users source code
	const [userCode, setUserCode] = useState(``);
	
	// State variable to set editors default language
	const [userLang, setUserLang] = useState("python");
	
	// State variable to set editors default value
	const [value, setValue] = useState(`print("Hello world")`);
	
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
	
	const values = [
		`#include <stdio.h>
	
		int main() {
			// Write C code here
			printf("Hello world");
			
			return 0;
		}`,
		`#include <iostream>
	
		int main() {
			// Write C++ code here
			std::cout << "Hello world!";
		
			return 0;
		}`,
		`print("Hello world")`,
		`class HelloWorld {
			public static void main(String[] args) {
				System.out.println("Hello, World!"); 
			}
		}`,
	];
	
	useEffect(() => {
		switch (userLang) {
			case "c" : setValue(`#include <stdio.h>
	
			int main() {
				// Write C code here
				printf("Hello world");
				
				return 0;
			}`); break;
	
			case "cpp" : setValue(`#include <iostream>
	
			int main() {
				// Write C++ code here
				std::cout << "Hello world!";
			
				return 0;
			}`); break;
	
			case "python3" : setValue(`print("Hello world")`); break;
	
			case "java" : setValue(`class HelloWorld {
				public static void main(String[] args) {
					System.out.println("Hello, World!"); 
				}
			}`); break;
		}
	  });
	
	const options = {
		fontSize: fontSize
	}
	
	// Function to call the compile endpoint
	function compile() {
		setLoading(true);
		console.log(value);
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
		<div className="App">
		<Navbar
			userLang={userLang} setUserLang={setUserLang}
			userTheme={userTheme} setUserTheme={setUserTheme}
			fontSize={fontSize} setFontSize={setFontSize}
			setValue={setValue}
		/>
		<div className="main">
			<div className="left-container">
			<Editor
				options={options}
				height="calc(100vh - 50px)"
				width="100%"
				theme={userTheme}
				language={userLang}
				defaultLanguage={userLang}
				defaultValue={value}
				onChange={(value) => { setUserCode(value) }}
			/>
			<button className="run-btn" onClick={() => compile()}>
				Run
			</button>
			</div>
			<div className="right-container">
			<h4 className='input-field'>Input:</h4>
			<div className="input-box">
				<textarea id="code-inp" onChange=
				{(e) => setUserInput(e.target.value)}>
				</textarea>
			</div>
			<div className="output-box">
				<h4 className='output-field'>Output:</h4>
				{loading ? (
					<div className="text-center">
	
						<div className="spinner-border text-secondary" role="status">
							<span class="sr-only">Loading...</span>
						</div>
					</div>
				) : (
					<div>
					<pre>{userOutput}</pre>
					<pre>{cpuTime}</pre>
					<button onClick={() => { clearOutput() }}
						className="clear-btn">
						Clear
					</button>
					</div>
				)}
			</div>
			</div>
		</div>
		</div>
	);
	}

export default CodEditor;
