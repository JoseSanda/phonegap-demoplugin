cordova.define("com.jfsanda.infotelefonoplugin.infotelefonoplugin", function(require, exports, module) { var ejecutar = require('cordova/exec');

var invocarNativo = function(success,fail){    
    ejecutar(success,fail,'infotelefonoplugin','GET_IDENTIFICACION',[]);
};

var plugin = {};
plugin.obtenerInformacion = invocarNativo;

module.exports = plugin;
});
