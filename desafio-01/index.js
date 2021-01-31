const express = require('express');

const server = express();

const projects = [];
var requests = 0;

server.use(express.json());
server.use(incrementRequests);

async function incrementRequests(req, res, next) {
	requests++;
	console.log(`REQUESTS: ${requests}`);
	return next();
}

function checkId(req, res, next) {
	if (req.body.id) {
		return next();
	}
	else {
		return res.status(400).send('Invalid id');
	}
}

function checkTitle(req, res, next) {
	if (req.body.title) {
		return next();
	}
	else {
		return res.status(400).send('Invalid title');
	}
}

function checkIdExists(req, res, next) {
	const { id } = req.params;

	const index = projects.findIndex(item => {
		return item.id == id;
	});

	if (index != -1) {
		req.index = index;
		return next();
	}
	else {
		return res.status(400).send('Nonexistent id');
	}
}

server.post('/projects', checkId, checkTitle, (req, res) => {
	const { id, title } = req.body;

	projects.push({
		id,
		title,
		tasks: []
	});

	return res.send();
});

server.get('/projects', (req, res) => {
	return res.json(projects);
});

server.put('/projects/:id', checkTitle, checkIdExists, (req, res) => {
	const { title } = req.body;
	const { index } = req;

	projects[index].title = title;

	return res.send();
});

server.delete('/projects/:id', checkIdExists, (req, res) => {
	const { index } = req;

	projects.splice(index, 1);

	return res.send();
});

server.post('/projects/:id/tasks', checkTitle, checkIdExists, (req, res) => {
	const { title } = req.body;
	const { index } = req;

	projects[index].tasks.push(title);

	return res.send();
});

server.listen(3000);