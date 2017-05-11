'use strict'

function toSimpleUser(user) {
	return {
		id: user.id,
		username: user.username,
		name: user.name,
		surname: user.surname,
		phoneNumber: user.phoneNumber
	};
}

module.exports = {
    toSimpleUser
}