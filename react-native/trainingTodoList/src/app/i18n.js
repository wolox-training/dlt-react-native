import { buildTranslations, buildConstants } from '../utils/i18nUtils';
import * as Routes from '../constants/routes';

// TODO: Replace here the screens titles

const namespace = 'app';
const translations = {
  es: {
    [Routes.Tab1]: 'TODO List',
    [Routes.Tab2]: 'TODO List',
    [Routes.Home]: 'Home',
    DELETE_SELECTED: 'Borrar Seleccionados',
    ADD_SOME_TASKS: 'Agrega Tareas!'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
