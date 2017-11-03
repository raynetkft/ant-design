import moment from 'moment';
moment.locale('hu');

import Pagination from 'rc-pagination/lib/locale/hu_HU';
import DatePicker from '../date-picker/locale/hu_HU';
import TimePicker from '../time-picker/locale/hu_HU';
import Calendar from '../calendar/locale/hu_HU';

export default {
  locale: 'hu',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Szűrés',
    filterConfirm: 'OK',
    filterReset: 'Visszaállít',
    emptyText: 'Nincs adat',
    selectAll: 'Az aktuális oldal kiválasztása',
    selectInvert: 'Kiválasztás megfordítása',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Mégsem',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Mégsem',
  },
  Transfer: {
    notFoundContent: 'Nem található',
    searchPlaceholder: 'Keresés',
    itemUnit: 'elem',
    itemsUnit: 'elemek',
  },
  Select: {
    notFoundContent: 'Nem található',
  },
  Upload: {
    uploading: 'Feltöltés...',
    removeFile: 'Eltávolítás',
    uploadError: 'Feltöltési hiba',
    previewFile: 'Előnézet',
  },
};
