const bodyParser = require('body-parser');

class logsCtrl {
    constructor(app) {
        this.app = app;
    }

    postLogs(req, res, next) {
        
        console.log(JSON.stringify(req.body));

        if (req.body) {
            const DATA = {
                id_log: null,
                data: JSON.stringify(req.body)
            };
            this.app.entities.get('log').getQuery('create').run(DATA).then( d => res.send('Ok') ).catch(e => res.send(e));
        } else {
            res.send('Ok, No data received.')
        }
	}
}

module.exports = logsCtrl;
