"use strict";
//! App
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q1-2019
Object.defineProperty(exports, "__esModule", { value: true });
require("../img/core2.0.png");
require("../css/site.css");
require("../../node_modules/bootstrap/dist/css/bootstrap.css");
require("lib_virtualkeyboard");
require("lib_jqueryposition");
// Autocomplete demo
var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
    "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript",
    "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
var test1 = $('#text');
test1.keyboard({
    //type: 'qwerty'
    layout: 'qwerty'
})
    .autocomplete({
    source: availableTags
})
    // position options added after v1.23.4
    .addAutocomplete({
    position: {
        of: null,
        my: 'right top',
        at: 'left top',
        collision: 'flip'
    }
})
    .addTyping();
//# sourceMappingURL=App.js.map