import CalendarLocale from 'rc-calendar/lib/locale/hu_HU';
import TimePickerLocale from '../../time-picker/locale/hu_HU';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Dátum kiválasztása',
    rangePlaceholder: ['Kezdeti időpont', 'Végső időpont'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
