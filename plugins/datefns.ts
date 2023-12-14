import { format, parse, parseISO, getDay } from 'date-fns';
import { ru } from 'date-fns/locale';

const datefns = {
  parse,
  parseISO,
  getDay,
  format: (date: any, formatStr: string): string => format(date, formatStr,
    { locale: ru })
};

export default defineNuxtPlugin(() => {
  return {
    provide: {
      datefns
    }
  };
});
