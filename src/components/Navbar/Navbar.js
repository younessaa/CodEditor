import React, {useEffect} from 'react';
import Select from 'react-select';

const Navbar = ({userLang, setUserLang, userTheme,
				setUserTheme, fontSize, setFontSize, setValue}) => {
	const languages = [
		{ value: "python3", label: "Python" },
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "java", label: "Java" },
	];


	const themes = [
		{ value: "light", label: "Light" },
		{ value: "vs-dark", label: "Dark" },
	]

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

	return (
		<div className="navbar">
			<h1>CodEditor</h1>
			<Select options={languages}
					onChange={(e) => {
						setUserLang(e.value);
					}}
					placeholder={languages[userLang]} />
			<Select options={themes} 
					onChange={(e) => setUserTheme(e.value)}
					placeholder={themes[userTheme]} />
			<label>Font Size</label>
			<input type="range" min="18" max="30"
				value={fontSize} step="2"
				onChange={(e) => { setFontSize(e.target.value)}}/>
		</div>
	)
}

export default Navbar
