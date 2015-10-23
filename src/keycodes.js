/*
 format is as follows:
 *
 * js-keycode: [display, c-define]
 *
 * Useful documentation:
 *
 * Unicode: Keyboard Symbols: http://xahlee.info/comp/unicode_computing_symbols.html
 * JS keycodes: http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
 * Decode Unicode: http://www.decodeunicode.org/en/
 * List of Unicode characters: https://en.wikipedia.org/wiki/List_of_Unicode_characters
 */
export const keyCodes = {
  500: ["", "KC_NO", "other"],
  501: ["", "KC_ROLL_OVER", "other"],
  502: ["", "KC_POST_FAIL", "other"],
  503: ["", "KC_UNDEFINED", "other"],
  65: ["A", "KC_A", "az"],
  66: ["B", "KC_B", "az"],
  67: ["C", "KC_C", "az"],
  68: ["D", "KC_D", "az"],
  69: ["E", "KC_E", "az"],
  70: ["F", "KC_F", "az"],
  71: ["G", "KC_G", "az"],
  72: ["H", "KC_H", "az"],
  73: ["I", "KC_I", "az"],
  74: ["J", "KC_J", "az"],
  75: ["K", "KC_K", "az"],
  76: ["L", "KC_L", "az"],
  77: ["M", "KC_M", "az"],
  78: ["N", "KC_N", "az"],
  79: ["O", "KC_O", "az"],
  80: ["P", "KC_P", "az"],
  81: ["Q", "KC_Q", "az"],
  82: ["R", "KC_R", "az"],
  83: ["S", "KC_S", "az"],
  84: ["T", "KC_T", "az"],
  85: ["U", "KC_U", "az"],
  86: ["V", "KC_V", "az"],
  87: ["W", "KC_W", "az"],
  88: ["X", "KC_X", "az"],
  89: ["Y", "KC_Y", "az"],
  90: ["Z", "KC_Z", "az"],
  49: ["1", "KC_1", "09"],
  50: ["2", "KC_2", "09"],
  51: ["3", "KC_3", "09"],
  52: ["4", "KC_4", "09"],
  53: ["5", "KC_5", "09"],
  54: ["6", "KC_6", "09"],
  55: ["7", "KC_7", "09"],
  56: ["8", "KC_8", "09"],
  57: ["9", "KC_9", "09"],
  48: ["0", "KC_0", "09"],
  13: ["&#x23ce;", "KC_ENTER", "spacing"],
  27: ["&#x238b;", "KC_ESCAPE", "spacing"],
  8: ["&#x232b;", "KC_BSPACE", "spacing"],
  9: ["&#x21e5;", "KC_TAB", "spacing"],
  32: ["&#x23b5;", "KC_SPACE", "spacing"],
  189: ["-", "KC_MINUS", "other"],
  187: ["=", "KC_EQUAL", "other"],
  219: ["[", "KC_LBRACKET", "punct"],
  221: ["]", "KC_RBRACKET", "punct"],
  220: ["\\", "KC_BSLASH", "punct"],     /* \ (and |) */
  504: ["", "KC_NONUS_HASH", "punct"],     /* Non-US # and ~ */
  186: [";", "KC_SCOLON", "punct"],      /* ; (and :) */
  222: ["\'", "KC_QUOTE", "punct"],      /* ' and " */
  192: ["`", "KC_GRAVE", "other"],       /* Grave accent and tilde */
  188: [",", "KC_COMMA", "punct"],       /* , and < */
  190: [".", "KC_DOT", "punct"],         /* . and > */
  191: ["/", "KC_SLASH", "punct"],       /* / and ? */
  505: ["", "KC_CAPSLOCK", "other"],
  112: ["F1", "KC_F1", "f1"],
  113: ["F2", "KC_F2", "f1"],
  114: ["F3", "KC_F3", "f1"],
  115: ["F4", "KC_F4", "f1"],
  116: ["F5", "KC_F5", "f1"],
  117: ["F6", "KC_F6", "f1"],
  118: ["F7", "KC_F7", "f1"],
  119: ["F8", "KC_F8", "f1"],
  120: ["F9", "KC_F9", "f1"],
  121: ["F10", "KC_F10", "f1"],
  122: ["F11", "KC_F11", "f1"],
  123: ["F12", "KC_F12", "f1"],
  42: ["", "KC_PSCREEN", "other"],
  137: ["", "KC_SCROLLLOCK", "other"],
  19: ["", "KC_PAUSE", "other"],
  45: ["INS", "KC_INSERT", "other"],
  36: ["&#x2196;", "KC_HOME", "nav"],
  33: ["&#x21de;", "KC_PGUP", "nav"],
  46: ["&#x2326;", "KC_DELETE", "nav"],
  35: ["&#x2198;", "KC_END", "nav"],
  34: ["&#x21df;", "KC_PGDOWN", "nav"],
  39: ["&#x25b6;", "KC_RIGHT", "nav"],
  37: ["&#x25c0;", "KC_LEFT", "nav"],
  40: ["&#x25bc;", "KC_DOWN", "nav"],
  38: ["&#x25b2;", "KC_UP", "nav"],
  136: ["NUML", "KC_NUMLOCK", "other"],
  111: ["/", "KC_KP_SLASH", "num"],
  106: ["*", "KC_KP_ASTERISK", "num"],
  109: ["-", "KC_KP_MINUS", "num"],
  107: ["+", "KC_KP_PLUS", "num"],
  506: ["&#x2324;", "KC_KP_ENTER", "num"],
  97: ["1", "KC_KP_1", "num"],
  98: ["2", "KC_KP_2", "num"],
  99: ["3", "KC_KP_3", "num"],
  100: ["4", "KC_KP_4", "num"],
  101: ["5", "KC_KP_5", "num"],
  102: ["6", "KC_KP_6", "num"],
  103: ["7", "KC_KP_7", "num"],
  104: ["8", "KC_KP_8", "num"],
  105: ["9", "KC_KP_9", "num"],
  96:  ["0", "KC_KP_0", "num"],
  110: [".", "KC_KP_DOT", "num"],
  507: ["\\", "KC_NONUS_BSLASH", "other"],   /* Non-US \ and | */
  508: ["", "KC_APPLICATION", "other"],
  509: ["", "KC_POWER", "other"],
  187: ["=", "KC_KP_EQUAL", "num"],
  124: ["F13", "KC_F13", "f1"],
  125: ["F14", "KC_F14", "f1"],
  126: ["F15", "KC_F15", "f1"],
  127: ["F16", "KC_F16", "f1"],
  128: ["F17", "KC_F17", "f1"],
  129: ["F18", "KC_F18", "f1"],
  130: ["F19", "KC_F19", "f1"],
  131: ["F20", "KC_F20", "f1"],
  132: ["F21", "KC_F21", "f1"],
  133: ["F22", "KC_F22", "f1"],
  134: ["F23", "KC_F23", "f1"],
  135: ["F24", "KC_F24", "f1"],
  510: ["", "KC_EXECUTE", "other"],
  47: ["", "KC_HELP", "other"],
  511: ["", "KC_MENU", "other"],
  41: ["", "KC_SELECT", "other"],
  550: ["", "KC_STOP", "other"],
  551: ["", "KC_AGAIN", "other"],
  552: ["", "KC_UNDO", "other"],
  553: ["", "KC_CUT", "other"],
  554: ["", "KC_COPY", "other"],
  555: ["", "KC_PASTE", "other"],
  556: ["", "KC_FIND", "other"],
  557: ["&#x1f507;", "KC__MUTE", "other"],
  558: ["&#x1f50a;", "KC__VOLUP", "other"],
  559: ["&#x1f509;", "KC__VOLDOWN", "other"],
  20: ["&#x21ea;", "KC_LOCKING_CAPS", "other"],   /* locking Caps Lock */
  136: ["NUML", "KC_LOCKING_NUM", "other"],    /* locking Num Lock */
  137: ["", "KC_LOCKING_SCROLL", "other"], /* locking Scroll Lock */
  560: [",", "KC_KP_COMMA", "other"],
  561: ["", "KC_KP_EQUAL_AS400", "other"], /* equal sign on AS/400 */
  600: ["", "KC_INT1", "other"],
  601: ["", "KC_INT2", "other"],
  602: ["", "KC_INT3", "other"],
  603: ["", "KC_INT4", "other"],
  604: ["", "KC_INT5", "other"],
  605: ["", "KC_INT6", "other"],
  606: ["", "KC_INT7", "other"],
  607: ["", "KC_INT8", "other"],
  608: ["", "KC_INT9", "other"],
  609: ["", "KC_LANG1", "other"],
  610: ["", "KC_LANG2", "other"],
  611: ["", "KC_LANG3", "other"],
  612: ["", "KC_LANG4", "other"],
  613: ["", "KC_LANG5", "other"],
  614: ["", "KC_LANG6", "other"],
  615: ["", "KC_LANG7", "other"],
  616: ["", "KC_LANG8", "other"],
  617: ["", "KC_LANG9", "other"],
  618: ["", "KC_ALT_ERASE", "other"],
  619: ["", "KC_SYSREQ", "other"],
  620: ["", "KC_CANCEL", "other"],
  12: ["&#x2327;", "KC_CLEAR", "other"],
  650: ["", "KC_PRIOR", "other"],
  651: ["", "KC_RETURN", "other"],
  652: ["", "KC_SEPARATOR", "other"],
  653: ["", "KC_OUT", "other"],
  654: ["", "KC_OPER", "other"],
  655: ["", "KC_CLEAR_AGAIN", "other"],
  656: ["", "KC_CRSEL", "other"],
  657: ["", "KC_EXSEL", "other"],
  /* Modifiers */
  17: ["&#x2732;", "KC_LCTRL", "mods"],
  16: ["&#x21e7;", "KC_LSHIFT", "mods"],
  18: ["&#x2325;", "KC_LALT", "mods"],
  91: ["&#x2318;", "KC_LGUI", "mods"],
  700: ["", "KC_RCTRL", "mods"],
  701: ["", "KC_RSHIFT", "mods"],
  702: ["", "KC_RALT", "mods"],
  92: ["", "KC_RGUI", "mods"],
  /* System Control */
  750: ["", "KC_SYSTEM_POWER", "system"],
  751: ["", "KC_SYSTEM_SLEEP", "system"],
  752: ["", "KC_SYSTEM_WAKE", "system"],
  /* Media Control */
  800: ["&#x1f507;", "KC_AUDIO_MUTE", "media"],
  801: ["&#x1f50a;", "KC_AUDIO_VOL_UP", "media"],
  802: ["&#x1f509;", "KC_AUDIO_VOL_DOWN", "media"],
  803: ["", "KC_MEDIA_NEXT_TRACK", "media"],
  804: ["", "KC_MEDIA_PREV_TRACK", "media"],
  805: ["&#x25fc;", "KC_MEDIA_STOP", "media"],
  806: ["", "KC_MEDIA_PLAY_PAUSE", "media"],
  807: ["", "KC_MEDIA_SELECT", "media"],
  808: ["&#x23cf;", "KC_MEDIA_EJECT", "media"],
  809: ["", "KC_MAIL", "media"],
  810: ["", "KC_CALCULATOR", "media"],
  811: ["", "KC_MY_COMPUTER", "media"],
  812: ["", "KC_WWW_SEARCH", "media"],
  813: ["", "KC_WWW_HOME", "media"],
  814: ["", "KC_WWW_BACK", "media"],
  815: ["", "KC_WWW_FORWARD", "media"],
  816: ["", "KC_WWW_STOP", "media"],
  817: ["", "KC_WWW_REFRESH", "media"],
  818: ["", "KC_WWW_FAVORITES", "media"],
  819: ["", "KC_MEDIA_FAST_FORWARD", "media"],
  820: ["", "KC_MEDIA_REWIND", "media"],
  /* Fn key */
  850: ["fn0", "KC_FN0", "fn"],
  851: ["fn1", "KC_FN1", "fn"],
  852: ["fn2", "KC_FN2", "fn"],
  853: ["fn3", "KC_FN3", "fn"],
  854: ["fn4", "KC_FN4", "fn"],
  855: ["fn5", "KC_FN5", "fn"],
  856: ["fn6", "KC_FN6", "fn"],
  857: ["fn7", "KC_FN7", "fn"],
  858: ["fn8", "KC_FN8", "fn"],
  859: ["fn9", "KC_FN9", "fn"],
  860: ["fn10", "KC_FN10", "fn"],
  861: ["fn11", "KC_FN11", "fn"],
  862: ["fn12", "KC_FN12", "fn"],
  863: ["fn13", "KC_FN13", "fn"],
  864: ["fn14", "KC_FN14", "fn"],
  865: ["fn15", "KC_FN15", "fn"],
  866: ["fn16", "KC_FN16", "fn"],
  867: ["fn17", "KC_FN17", "fn"],
  868: ["fn18", "KC_FN18", "fn"],
  869: ["fn19", "KC_FN19", "fn"],
  870: ["fn20", "KC_FN20", "fn"],
  871: ["fn21", "KC_FN21", "fn"],
  872: ["fn22", "KC_FN22", "fn"],
  873: ["fn23", "KC_FN23", "fn"],
  874: ["fn24", "KC_FN24", "fn"],
  875: ["fn25", "KC_FN25", "fn"],
  876: ["fn26", "KC_FN26", "fn"],
  877: ["fn27", "KC_FN27", "fn"],
  879: ["fn28", "KC_FN28", "fn"],
  880: ["fn29", "KC_FN29", "fn"],
  881: ["fn30", "KC_FN30", "fn"],
  882: ["fn31", "KC_FN31", "fn"],
  /* Mousekey */
  901: ["", "KC_MS_UP", "mouse"],
  902: ["", "KC_MS_DOWN", "mouse"],
  903: ["", "KC_MS_LEFT", "mouse"],
  904: ["", "KC_MS_RIGHT", "mouse"],
  905: ["", "KC_MS_BTN1", "mouse"],
  906: ["", "KC_MS_BTN2", "mouse"],
  907: ["", "KC_MS_BTN3", "mouse"],
  908: ["", "KC_MS_BTN4", "mouse"],
  909: ["", "KC_MS_BTN5", "mouse"],
  /* Mousekey wheel */
  910: ["", "KC_MS_WH_UP", "mousewheel"],
  911: ["", "KC_MS_WH_DOWN", "mousewheel"],
  912: ["", "KC_MS_WH_LEFT", "mousewheel"],
  913: ["", "KC_MS_WH_RIGHT", "mousewheel"],
  /* Mousekey accel */
  914: ["", "KC_MS_ACCEL0", "mouseaccel"],
  915: ["", "KC_MS_ACCEL1", "mouseaccel"],
  916: ["", "KC_MS_ACCEL2", "mouseaccel"]
};

export const keyCategories = {
  "az": "Alphabet",
  "09": "Numeric",
  "f1": "Function keys",
  "num": "Numpad",
  "punct": "Punctuation",
  "nav": "Navigational",
  "spacing": "Spacing",
  "mods": "Modifiers",
  "system": "System control",
  "media": "Media",
  "fn": "Fn",
  "mouse": "Mouse",
  "mousewheel": "Mouse wheel",
  "mouseaccel": "Mouse acceleration",
  "other": "Other"
};