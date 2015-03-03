cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.jfsanda.infotelefonoplugin/www/infotelefonoplugin.js",
        "id": "com.jfsanda.infotelefonoplugin.infotelefonoplugin",
        "clobbers": [
            "window.telefono"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.jfsanda.infotelefonoplugin": "0.1.0"
}
// BOTTOM OF METADATA
});