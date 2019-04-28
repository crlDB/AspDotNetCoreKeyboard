//! App
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q1-2019

import "../img/core2.0.png";
import "../css/site.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/jquery-ui/themes/base/theme.css";
import "../../node_modules/virtual-keyboard/dist/css/keyboard.min.css";

import "lib_virtualkeyboard";
import "lib_jqueryposition";


// Autocomplete demo


let test1: any = $('.keyboard');



test1

    .keyboard({
        layout: 'num',
//        layout: 'qwerty',
//        layout: 'international',
//        layout: 'alpha',
//        layout: 'colemak',
//        layout: 'dvorak',

//        restrictInput: true, // Prevent keys not in the displayed keyboard from being typed in
//        preventPaste: true,  // prevent ctrl-v and right click
        stickyShift: false,
        autoAccept: true,
        tabNavigation: true,
        enterNavigation: true,

        //position: {
        //    //of: $('.keyboard'),
        //    my: 'center top',
        //    at: 'center top'
        //},

        visible: function (e, keyboard, el) {
            keyboard.$preview[0].select();
        }
    });



let test2: any = $('.keyboard2');

test2
    .keyboard({
        stickyShift: false,
        autoAccept: true,
        tabNavigation: true,
        enterNavigation: true,


        layout: 'custom',
        customLayout: {
            'normal': [
                'C D E F',
                '8 9 A B',
                '4 5 6 7',
                '0 1 2 3',
                '{bksp} {a} {c}'
            ]
        },
        maxLength: 6,
        // Prevent keys not in the displayed keyboard from being typed in
        restrictInput: true,
        // include lower case characters (added v1.25.7)
        restrictInclude: 'a b c d e f',
        // don't use combos or A+E could become a ligature
        useCombos: false,
        // activate the "validate" callback function
        acceptValid: false,
        validate: function (keyboard, value, isClosing) {
            // only make valid if input is 6 characters in length
            return value.length === 6;
        }
    });




