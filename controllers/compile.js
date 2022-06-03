import axios from 'axios';

export const compile = (req, res) => {
	//getting the required data from the request

    let { code, language, input} = req.body;

	if(language == "python") {
		language = "python3"
	}

	let data = ({
		"script": `${code}`,
		"language": language,
		"stdin": input,
		"clientId": "d482d54459af5e5f17e49a66361417d",
		"clientSecret": "3d704388e133c93d7ef4503d135785e6aae23c673432c7f71ce366df6719b587"
	});
	let config = {
		method: 'post',
		url: 'https://api.jdoodle.com/v1/execute',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data,
	};
	//calling the code compilation API
	axios(config)
		.then((response)=>{
			res.send(response.data)
			console.log(response.data)
		}).catch((error)=>{
			console.log(error);
		});
}