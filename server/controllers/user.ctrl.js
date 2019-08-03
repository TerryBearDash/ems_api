class userCtrl {
	constructor(app) { this.app = app; }

	postUpdateUser(req, res, next) {
        this.app.logger.log(req.body);
        const d = req.body;
        d.id_profile = parseInt(d.id_profile);
        d.id_user = parseInt(d.id_user);
        if(d.id_profile > 0) {
            this.app.entities.get('user').getQuery('update').run(d).then( async data => {
                this.app.logger.log(data);
                this.app.logger.log(d);
                this.app.entities.get('profile').getQuery('get').run({id_profile: d.id_profile}).then( async _data => {
                    await this.app.logger.log(_data);
                    await res.send(_data);
                }).catch(e => res.send(e));
            }).catch(e => res.send(e));
        } else {
            this.app.entities.get('user').getQuery('create').run(d).then( async data => {
                this.app.logger.log(data);
                this.app.entities.get('profile').getQuery('get').run({id_profile: data.id_profile}).then( async _data => {
                    await this.app.logger.log(_data);
                    await res.send(_data);
                }).catch(e => res.send(e));
                this.app.logger.log(d);
                await res.send(data);
            }).catch(e => res.send(e));
        }
	}
}

module.exports = userCtrl;
