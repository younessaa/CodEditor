import React, {useEffect} from 'react';
import Select from 'react-select';
import styles from './Navbar.module.css';

const Navbar = ({userLang, setUserLang, userTheme,
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


	return (
		<div className={'navbar ' + styles.navBar}>
			<h3 className={styles.title}>CodEditor</h3>
			<Select options={languages} defaultValue={languages[0]}
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
