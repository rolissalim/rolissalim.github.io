import moment from 'moment';
import 'moment/locale/id'; // without this line it didn't work
import { getLanguage } from './Layout.helper';

export function timeFormat(time: any, format: string = "DD-MM-YYYY HH:mm") {
    const langauge = getLanguage()
    const result = moment(time).locale(langauge).format(format) || '';
    return result != 'Invalid date' ? result : '-';
}