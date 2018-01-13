'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _hu_HU = require('rc-pagination/lib/locale/hu_HU');

var _hu_HU2 = _interopRequireDefault(_hu_HU);

var _hu_HU3 = require('../date-picker/locale/hu_HU');

var _hu_HU4 = _interopRequireDefault(_hu_HU3);

var _hu_HU5 = require('../time-picker/locale/hu_HU');

var _hu_HU6 = _interopRequireDefault(_hu_HU5);

var _hu_HU7 = require('../calendar/locale/hu_HU');

var _hu_HU8 = _interopRequireDefault(_hu_HU7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_moment2['default'].locale('hu');
exports['default'] = {
    locale: 'hu',
    Pagination: _hu_HU2['default'],
    DatePicker: _hu_HU4['default'],
    TimePicker: _hu_HU6['default'],
    Calendar: _hu_HU8['default'],
    Table: {
        filterTitle: 'Szűrés',
        filterConfirm: 'OK',
        filterReset: 'Visszaállít',
        emptyText: 'Nincs adat',
        selectAll: 'Az aktuális oldal kiválasztása',
        selectInvert: 'Kiválasztás megfordítása'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Mégsem',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Mégsem'
    },
    Transfer: {
        notFoundContent: 'Nem található',
        searchPlaceholder: 'Keresés',
        itemUnit: 'elem',
        itemsUnit: 'elemek'
    },
    Select: {
        notFoundContent: 'Nem található'
    },
    Upload: {
        uploading: 'Feltöltés...',
        removeFile: 'Eltávolítás',
        uploadError: 'Feltöltési hiba',
        previewFile: 'Előnézet'
    }
};