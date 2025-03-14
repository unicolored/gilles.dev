import { v4 as uuidv4 } from 'uuid';
import { ProjectsEnum } from 'js-enum';

/**
 * These helper refers to browser component: DOM, LocalStorage, etc.
 * It can not be tested in Node.js environment (without extra packages, like jsDom, node localstorage, etc.)
 */

export const getSessionID = (domain: ProjectsEnum): string | null => {
  if (!window || !localStorage) {
    return null;
  }

  if (domain === 'gilles.dev') {
    localStorage.setItem('sessionID', 'GILLES');
    return 'GILLES';
  }

  let sessionID = localStorage.getItem('sessionID') ?? '';

  if (!sessionID) {
    sessionID = uuidv4();
    localStorage.setItem('sessionID', sessionID);
  }

  return sessionID ?? '';
};
