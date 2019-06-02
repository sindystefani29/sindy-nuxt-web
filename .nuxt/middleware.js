const middleware = {}

middleware['coba'] = require('..\\middleware\\coba.js');
middleware['coba'] = middleware['coba'].default || middleware['coba']

export default middleware
