!window.qcVideo && function(global) {
    function getMappingArgs(fn) {
        var args = fn.toString().split("{")[0].replace(/\s|function|\(|\)/g, "").split(",")
          , i = 0;
        for (args[0] || (args = []); args[i]; )
            args[i] = require(args[i]),
            i += 1;
        return args
    }
    function newInst(key, ifExist) {
        (ifExist ? ns.instances[key] : !ns.instances[key]) && ns.modules[key] && (ns.instances[key] = ns.modules[key].apply(window, getMappingArgs(ns.modules[key])))
    }
    function require(key) {
        return newInst(key, !1),
        ns.instances[key] || {}
    }
    function loadJs(url, onLoadCB, onErrorCB) {
        var el = document.createElement("script");
        el.setAttribute("type", "text/javascript"),
        el.setAttribute("src", url),
        el.setAttribute("async", !0),
        onLoadCB && (el.onload = onLoadCB),
        onErrorCB && (el.onerror = onErrorCB),
        document.getElementsByTagName("head")[0].appendChild(el)
    }
    function core(key, target) {
        if (!ns.modules[key] && (ns.modules[key] = target,
        newInst(key, !0),
        waiter[key])) {
            for (var i = 0; waiter[key][i]; )
                waiter[key][i](require(key)),
                i += 1;
            delete waiter[key]
        }
    }
    var ns = {
        modules: {},
        instances: {}
    }
      , waiter = {};
    core.use = function(key, cb) {
        if (cb = cb || function() {}
        ,
        ns.modules[key])
            cb(require(key));
        else {
            var config = require("config");
            config[key] && (waiter[key] || (waiter[key] = [],
            loadJs(config[key])),
            waiter[key].push(cb))
        }
    }
    ,
    core.get = function(key) {
        return require(key)
    }
    ,
    core.loadJs = loadJs,
    global.qcVideo = core
}(window)