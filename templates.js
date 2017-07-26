(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layers.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">Layers</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<ul class=\"nav nav-pills nav-stacked\">\r\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "layers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("layer", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t<li><a href=\"#\">\r\n\t\t\t\t<div class=\"btn-group\" role=\"group\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span></button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></span></button>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name"), env.opts.autoescape);
output += "</span>\r\n\t\t\t</a></li>\r\n\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t</ul>\r\n\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["main.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div id=\"editor\" class=\"row\" style=\"height: 100%;\">\r\n\t<div id=\"sidebar\" class=\"col-md-3 row\"></div>\r\n\r\n\t<div class=\"col-md-7\" style=\"height: 100%;\">\r\n\t\t<div id=\"viewport\">\r\n\t\t\t<canvas id=\"canvas\" width=\"500\" height=\"300\"></canvas>\r\n\t\t</div>\r\n\r\n\t\t<div id=\"panel\"></div>\t\r\n\t</div>\r\n\r\n\t<div id=\"layers\" class=\"col-md-2 row\"></div>\r\n</div>\r\n\r\n<div id=\"splash\" aria-hidden=\"false\">\r\n\t<div id=\"splash-spinner\"></div>\r\n</div>\t";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["sidebar.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"side-menu navbar navbar-inverse col-md-3\" role=\"navigation\">\r\n\t<div class=\"navbar-header\">\r\n\t\t<div class=\"brand-wrapper\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<ul id=\"navigation\" class=\"nav navbar-nav side-menu-container\">\r\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "tabs");
if(t_3) {var t_1;
if(runtime.isArray(t_3)) {
var t_2 = t_3.length;
for(t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1][0]
frame.set("tabID", t_3[t_1][0]);
var t_5 = t_3[t_1][1]
frame.set("tab", t_3[t_1][1]);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t<li class=\"text-center\"><a href=\"#\" data-target-tab=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">\r\n\t\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_5),"icon")) > 0) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_5),"icon")), env.opts.autoescape);
;
}
output += "\r\n\t\t\t\t<div>";
output += runtime.suppressValue(runtime.memberLookup((t_5),"caption"), env.opts.autoescape);
output += "</div>\r\n\t\t\t</a></li>\r\n\t\t";
;
}
} else {
t_1 = -1;
var t_2 = runtime.keys(t_3).length;
for(var t_6 in t_3) {
t_1++;
var t_7 = t_3[t_6];
frame.set("tabID", t_6);
frame.set("tab", t_7);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t<li class=\"text-center\"><a href=\"#\" data-target-tab=\"";
output += runtime.suppressValue(t_6, env.opts.autoescape);
output += "\">\r\n\t\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_7),"icon")) > 0) {
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_7),"icon")), env.opts.autoescape);
;
}
output += "\r\n\t\t\t\t<div>";
output += runtime.suppressValue(runtime.memberLookup((t_7),"caption"), env.opts.autoescape);
output += "</div>\r\n\t\t\t</a></li>\r\n\t\t";
;
}
}
}
frame = frame.pop();
output += "\r\n\t</ul>\r\n</div>\r\n\r\n<div id=\"tabs\" class=\"panel panel-default side-body\">\r\n\t<div class=\"panel-body\">\r\n\t\t";
frame = frame.push();
var t_10 = runtime.contextOrFrameLookup(context, frame, "tabs");
if(t_10) {var t_8;
if(runtime.isArray(t_10)) {
var t_9 = t_10.length;
for(t_8=0; t_8 < t_10.length; t_8++) {
var t_11 = t_10[t_8][0]
frame.set("tabID", t_10[t_8][0]);
var t_12 = t_10[t_8][1]
frame.set("tab", t_10[t_8][1]);
frame.set("loop.index", t_8 + 1);
frame.set("loop.index0", t_8);
frame.set("loop.revindex", t_9 - t_8);
frame.set("loop.revindex0", t_9 - t_8 - 1);
frame.set("loop.first", t_8 === 0);
frame.set("loop.last", t_8 === t_9 - 1);
frame.set("loop.length", t_9);
output += "\r\n\t\t<div id=\"";
output += runtime.suppressValue(t_11, env.opts.autoescape);
output += "\" class=\"tab\">\r\n\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_12),"title")) > 0) {
output += "\t\r\n\t\t\t\t<legend class=\"tab-title\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"title"), env.opts.autoescape);
output += "</legend>\r\n\t\t\t";
;
}
output += "\r\n\r\n\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_12),"items")) > 0) {
output += "\r\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\r\n\t\t\t\t";
frame = frame.push();
var t_15 = runtime.memberLookup((t_12),"items");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("item", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\r\n\t\t\t\t\t<li><a href=\"#\" onclick=\"pie.getEditor( '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "' ).";
output += runtime.suppressValue(t_11, env.opts.autoescape);
output += ".";
output += runtime.suppressValue(runtime.memberLookup((t_16),"action"), env.opts.autoescape);
output += "\">\r\n\t\t\t\t\t";
if(runtime.memberLookup((t_16),"type") === "text") {
output += "\r\n\t\t\t\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_16),"icon")) > 0) {
output += "<span>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"icon"), env.opts.autoescape);
output += "</span>";
;
}
output += "\r\n\t\t\t\t\t\t<span>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"caption"), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((t_16),"type") === "image") {
output += "\r\n\t\t\t\t\t\t<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"image"), env.opts.autoescape);
output += "\" />\r\n\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t ";
env.getTemplate("tabs/" + t_11 + "-item.tpl", false, "sidebar.tpl", null, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
t_17.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
output += t_18
output += "\r\n\t\t\t\t\t";
})});
}
;
}
output += "\r\n\t\t\t\t\t</a></li>\r\n\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t<ul>\r\n\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t ";
env.getTemplate("tabs/" + t_11 + ".tpl", false, "sidebar.tpl", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\r\n\t\t\t";
})});
}
output += "\r\n\t\t</div>\r\n\t\t";
;
}
} else {
t_8 = -1;
var t_9 = runtime.keys(t_10).length;
for(var t_25 in t_10) {
t_8++;
var t_26 = t_10[t_25];
frame.set("tabID", t_25);
frame.set("tab", t_26);
frame.set("loop.index", t_8 + 1);
frame.set("loop.index0", t_8);
frame.set("loop.revindex", t_9 - t_8);
frame.set("loop.revindex0", t_9 - t_8 - 1);
frame.set("loop.first", t_8 === 0);
frame.set("loop.last", t_8 === t_9 - 1);
frame.set("loop.length", t_9);
output += "\r\n\t\t<div id=\"";
output += runtime.suppressValue(t_25, env.opts.autoescape);
output += "\" class=\"tab\">\r\n\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_26),"title")) > 0) {
output += "\t\r\n\t\t\t\t<legend class=\"tab-title\">";
output += runtime.suppressValue(runtime.memberLookup((t_26),"title"), env.opts.autoescape);
output += "</legend>\r\n\t\t\t";
;
}
output += "\r\n\r\n\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_26),"items")) > 0) {
output += "\r\n\t\t\t<ul class=\"nav nav-pills nav-stacked\">\r\n\t\t\t\t";
frame = frame.push();
var t_29 = runtime.memberLookup((t_26),"items");
if(t_29) {var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("item", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
output += "\r\n\t\t\t\t\t<li><a href=\"#\" onclick=\"pie.getEditor( '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "' ).";
output += runtime.suppressValue(t_25, env.opts.autoescape);
output += ".";
output += runtime.suppressValue(runtime.memberLookup((t_30),"action"), env.opts.autoescape);
output += "\">\r\n\t\t\t\t\t";
if(runtime.memberLookup((t_30),"type") === "text") {
output += "\r\n\t\t\t\t\t\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_30),"icon")) > 0) {
output += "<span>";
output += runtime.suppressValue(runtime.memberLookup((t_30),"icon"), env.opts.autoescape);
output += "</span>";
;
}
output += "\r\n\t\t\t\t\t\t<span>";
output += runtime.suppressValue(runtime.memberLookup((t_30),"caption"), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((t_30),"type") === "image") {
output += "\r\n\t\t\t\t\t\t<img src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_30),"image"), env.opts.autoescape);
output += "\" />\r\n\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t ";
env.getTemplate("tabs/" + t_25 + "-item.tpl", false, "sidebar.tpl", null, function(t_33,t_31) {
if(t_33) { cb(t_33); return; }
t_31.render(context.getVariables(), frame, function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
output += t_32
output += "\r\n\t\t\t\t\t";
})});
}
;
}
output += "\r\n\t\t\t\t\t</a></li>\r\n\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t<ul>\r\n\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t ";
env.getTemplate("tabs/" + t_25 + ".tpl", false, "sidebar.tpl", null, function(t_37,t_35) {
if(t_37) { cb(t_37); return; }
t_35.render(context.getVariables(), frame, function(t_38,t_36) {
if(t_38) { cb(t_38); return; }
output += t_36
output += "\r\n\t\t\t";
})});
}
output += "\r\n\t\t</div>\r\n\t\t";
;
}
}
}
frame = frame.pop();
output += "\r\n\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["panels/basics.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("panels/main.tpl", true, "panels/basics.tpl", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\r\n\r\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\r\n\r\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\r\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "\r\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\r\n\t";
if(runtime.contextOrFrameLookup(context, frame, "type") === "crop") {
output += "\r\n\r\n\t";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") === "rotate") {
output += "\r\n\r\n\t";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") === "resize") {
output += "\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"width\">Width</label>\r\n\t\t\t<input type=\"number\" name=\"width\" class=\"form-control\" data-prop-bind=\"width\"/>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"height\">Height</label>\r\n\t\t\t<input type=\"number\" name=\"height\" class=\"form-control\" data-prop-bind=\"height\" />\r\n\t\t</div>\r\n\t";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") === "round") {
output += "\r\n\r\n\t";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") === "color") {
output += "\r\n\t\t<input type=\"color\" data-prop-bind=\"backgroundColor\">\r\n\t";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "type") === "image") {
output += "\r\n\r\n\t";
;
}
;
}
;
}
;
}
;
}
;
}
output += "\r\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_content: b_content,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["panels/main.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n\t</div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_content: b_content,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["panels/text.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("panels/main.tpl", true, "panels/text.tpl", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n<div class=\"btn-toolbar\" role=\"toolbar\">\n\t<div class=\"btn-group\"> \n\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n\t\t\t<span class=\"glyphicon glyphicon-align-left\" aria-hidden=\"true\"></span>\n\t\t</button>\n\t\t\n\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Center Align\">\n\t\t\t<span class=\"glyphicon glyphicon-align-center\" aria-hidden=\"true\"></span>\n\t\t</button> \n\t\t\n\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Right Align\">\n\t\t\t<span class=\"glyphicon glyphicon-align-right\" aria-hidden=\"true\"></span>\n\t\t</button>\n\t\t\n\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Justify\">\n\t\t\t<span class=\"glyphicon glyphicon-align-justify\" aria-hidden=\"true\"></span>\n\t\t</button>\n\t</div> \n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_content: b_content,
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tabs/basics.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tabs/text-fonts.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "fonts");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("font", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t";
if(env.getFilter("length").call(context, runtime.memberLookup((t_4),"name")) > 0) {
output += "\r\n\t<li><a href=\"#\" style=\"font-family: ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name"), env.opts.autoescape);
output += ";\" onclick=\"pie.getEditor( '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "' ).";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tabID"), env.opts.autoescape);
output += ".addText( '";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name"), env.opts.autoescape);
output += "' );\">\r\n\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name"), env.opts.autoescape);
output += "\r\n\t</a></li>\r\n\t";
;
}
output += "\r\n";
;
}
}
frame = frame.pop();
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tabs/text.tpl"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div>\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"f-family\">Font family</label>\r\n\t\t<select id=\"f-family\" class=\"form-control\">\r\n\t\t\t<option>AL</option>\r\n\t\t\t<option>CA</option>\r\n\t\t\t<option>IL</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"f-search\">Search</label>\r\n\t\t<input type=\"text\" id=\"f-search\" class=\"form-control\" />\r\n\t</div>\r\n</div>\r\n<div>\r\n    <ul id=\"fonts\" class=\"nav nav-pills nav-stacked\">\r\n\t\t";
env.getTemplate("tabs/text-fonts.tpl", false, "tabs/text.tpl", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\r\n\t</ul>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
