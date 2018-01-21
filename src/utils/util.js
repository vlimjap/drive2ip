export function createAction(type, payload) {
	return {
		type,
		payload,
	}	
}

export function validateIp(ip) {
  var validRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/ //retrieved from web.

  return validRegex.exec(ip)
}