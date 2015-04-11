var config = {
	locale: 'en',

	port: 9001,

	db: {
		connection: 'mongodb://localhost/DemocracyOS-devel-demo2',
		aliases: {
			user: 'users'
		}
	},

	accessToken: '1234',

	hook: {
		url: 'http://localhost:5000/api/notify/',
		token: 'fake-hook-token'
	},

	logentries: {
		token: null
	},

	transport: {
		mandrill: {
			token: 'Zs6ePWZb9FWJZ6QCMkEBQw',
			from: {
				email: 'no-reply@democracyos.org',
				name: 'DemocracyOS'
			}
		},
		twilio : {
			accountSid: 'fake-twilio-account-sid',
			authToken: 'fake-twilio-auth-token'
		},
		gcm : {
			serverApiKey: 'fake-google-server-api-key'
		},
		apn : {
			cert: 'fake-cert-path',
			key: 'fake-key-path'
		},
		nodemailer: {
			mail: {
			    port: 25,
			    host: "relay.plus.net",
			    secure: false,
			    auth: {
			        user: 'runwithwolves',
			        pass: 'alltogethernow'
			    }
			},
			from: {
				email: 'no-reply@democracyos.uk',
				name: 'UKDemocracyOS'
			}
		}
	},

	jobs: {
		run: {
			resolve: 5,
			execute: 10
		},

		collection: 'notifierJobs'
	}
};

module.exports = config;
