const middleware = {}

middleware['locationID'] = require('..\\..\\middleware\\locationID.js');
middleware['locationID'] = middleware['locationID'].default || middleware['locationID']

export default middleware
