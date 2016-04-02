/**
 * Adapters 
 * @exports {object}
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

var ipc = require('./ipc.adapter');
var tcp = require('./tcp.adapter');
var udp = require('./udp.adapter');

var debug = require('debug')('kalm');

/* Local variables -----------------------------------------------------------*/

var list = {
	ipc: ipc,
	tcp: tcp,
	udp: udp
};

/* Methods -------------------------------------------------------------------*/

/**
 * Returns the selected adapter
 * @method resolve
 * @param {string} name The name of the adapter to return
 * @returns {object|undefined} The adapter
 */
function resolve(name) {
	if (list[name]) {
		return list[name];
	}
	else {
		debug('error: no adapter "' + name + '" found');
		return;
	}
}

/**
 * Registers a new adapter
 * @method register
 * @param {string} name The name of the adapter
 * @param {object} mod The body of the adapter
 */
function register(name, mod) {
	debug('log: registering new adapter "' + name + '":');
	list[name] = mod;
}

/* Exports -------------------------------------------------------------------*/

module.exports = {
	resolve: resolve,
	register: register
};