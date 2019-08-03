var Request = require("request");

const options = {
  host: 'localhost',
  port: '8080',
  path: '/materia/endpoints',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
};


class swaggerCtrl {
	constructor(app, api) {
		this.app = app;
  }

	getProfiles(req, res, next) {
    this.app.entities.get('profile').getQuery('list').run().then( async data => {
      await res.send(data);
    }).catch(e => res.send(e));
  }

	getSwaggerDocs(req, res, next) {

        Request.get("http://localhost:8080/materia/endpoints", (error, response, body) => {
            res.send(JSON.parse(response.body));
        });

	}
}

module.exports = swaggerCtrl;
