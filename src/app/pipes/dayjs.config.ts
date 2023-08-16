
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utcPlugin);
dayjs.extend(customParseFormat);
dayjs.locale("es");

export default dayjs;