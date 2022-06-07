const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.static('public'));

const rappers = {
	'21 savage': {
		'age': 29,
		'birthName': 'Shéyaa Bin Abraham-Joseph',
		'birthLocation': 'London, England',
		},
	'chance the rapper': {
		'age': 29,
		'birthName': 'Chancelor Johnathan Bennett',
		'birthLocation': 'Chicago, Illinois',
	},
	'dylan': {
		'age': 29,
		'birthName': 'Dylan',
		'birthLocation': 'Dylan',
	},
	'dr. shredder': {
		'age': 34,
		'birthName': 'T Unit',
		'birthLocation': 'J-Town',
}
}

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
	const rapperName = request.params.name.toLowerCase()
	if(rappers[rapperName]){
		response.json(rappers[rapperName])
	}else{
		response.json(rappers['dylan'])
	}
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}!`);
})