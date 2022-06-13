import React, {useEffect, useRef, useState} from 'react';
import Select from 'react-select';
import styles from './Navbar.module.css';

const Navbar = ({readOnly, userCode, setUserCode, userLang, setUserLang, userTheme,
				setUserTheme, fontSize, setFontSize, compile, setFileType}) => {
	const languages = [
		{ value: "python", label: "Python" },
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "java", label: "Java" },
	];


	const themes = [
		{ value: "light", label: "Light" },
		{ value: "vs-dark", label: "Dark" },
	]
	const inputRef = useRef();
	const [data, setData] = useState("");
	const [fileName, setFileName] = useState("");
	let fr = new FileReader();

	const handleChange = (e) => {
		setFileName(e.currentTarget.files[0].name.split(".")[1]);
		fr.onload = function(){
			setData(fr.result);
			setUserCode(fr.result);
			
		}
		fr.readAsText(e.currentTarget.files[0]);
	}

	useEffect(()=> {
		console.log(fileName)
		if(fileName === "py") {
			setUserLang("python");
			setFileName("python");
		}
		else {
			setUserLang(fileName);
		}
	}, [fileName])


	return (
		<div className={'navbar ' + styles.navBar}>
			<h3 className={styles.title}>CodEditor</h3>
			{	!readOnly && 
				<input
					type="file"
					ref={inputRef}
					onChange={handleChange}
				/>
			}
			<Select options={languages} value={languages.find((item) => item.value === userLang)}
					onChange={(e) => {
						setUserLang(e.value);
						setFileType(e.value);
					}}
					placeholder={languages[userLang]} />
			<Select options={themes} defaultValue={themes[0]}
					onChange={(e) => setUserTheme(e.value)}
					placeholder={themes[userTheme]} />
			<button type="button" className="btn btn-primary" onClick={() => compile()}>
				Run
			</button>
			<label>Font Size</label>
			<input type="range" min="12" max="24"
				value={fontSize} step="1"
				onChange={(e) => { setFontSize(e.target.value)}}/>
		</div>
	)
}

export default Navbar
