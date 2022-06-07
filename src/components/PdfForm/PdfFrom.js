import React, { useState, useEffect, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { useDispatch, useSelector } from 'react-redux';

import { updateCourse, getCourses} from '../../actions/course';

const PdfForm = ({course, setCourse, idCourse, number, pdf, setPdf}) => {
	const [data, setData] = useState({
		path: "",
	});

	const [file, setFile] = useState({
		path: "",
		name: "",
	});
	const inputRef = useRef();
	const [progress, setProgress] = useState(0);

	const dispatch = useDispatch();

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};
	const [uploading, setUploading] = useState(false);

    const handleUpload = (e) =>  {
		e.preventDefault();

		setUploading(true);

		const fileName = data.path.name;
		const storageRef = ref(
			storage,
			`/pdfs/${fileName}`
		);

		const uploadTask = uploadBytesResumable(storageRef, data.path);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploaded = Math.floor(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(uploaded);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					handleInputState("path", url);
					handleInputState("name", fileName);
					setFile((prev) => ({...prev, path: url, name: fileName, section: number}));	
				});
			}
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if(file.path !== "" && file.name !== "") {
			const list = course.labs;
			list.push(file);
			setCourse({ ...course, labs: list});
			
		}
		else{
			console.log("else")
		}

		//console.log(labs);
		//labs.push(file);
	};

	useEffect(() => {
		if(file.path !== "" && file.name !== ""){
			setPdf((prev) => ({...prev, path: file.path, name: file.name, section: number}));
		}
		dispatch(updateCourse(idCourse, course));
	}, [idCourse, course]);

	return (
		<div>
			<form  onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-6">
						<input
							type="file"
							ref={inputRef}
							onChange={(e) => handleInputState("path", e.currentTarget.files[0])}
							vlaue={data.path}
						/>
						{ (uploading ) && <span className="text-success">{progress} %</span>}	
					</div>
					{
						(progress < 100 || file.path === "" || file.name === "") &&
						<> 
							<button onClick={handleUpload} className="col-2 mr-1 btn btn-outline-secondary btn-sm" >
								Importer
							</button>
						</>
					}
					
					{	(progress === 100 && file.path !== "" && file.name !== "") && 
						<button type="submit" className="col-2 btn btn-outline-primary btn-sm" >
							Sauvgarder
						</button>
					}
				</div>
			</form>
		</div>
	);
};

export default PdfForm;
