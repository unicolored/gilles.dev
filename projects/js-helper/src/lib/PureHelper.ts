/**
 * Helpers standalone - No dependencies
 * Works both on browser and node environment
 */

export const encodeQueryData = (data: Record<string, string | number | boolean>) => {
  const ret = [];
  // const dataLoop = data as Record<string, unknown>;
  for (const d in data) {
    // if (data.hasOwnProperty(d)) {
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    // }
  }
  return ret.join('&');
};

export const stripTags = (text: string): string => {
  return text.replace(/<[^>]*>?/gm, '');
};

export const capitalize = (str: string | null = null): string => {
  if (!str) {
    return '';
  }

  const words = str.split(' ');
  const CapitalizedWords: unknown[] = [];
  words.forEach((element) => {
    CapitalizedWords.push(element[0].toLocaleUpperCase() + element.slice(1, element.length));
  });
  return CapitalizedWords.join(' ');
};

export const sanitize = (str: string | null = null): string => {
  if (!str) {
    return '';
  }
  const iteration = removeAccents(str.toLowerCase());

  const iteration2 = removeSpecialCharacters(iteration);
  const iteration3 = stripTags(iteration2);

  return removeExtraSpaces(iteration3);
};

export const removeSpecialCharacters = (str: string) => {
  if (!str) {
    return '';
  }

  str = str.replace(/\\|\//g, ' ') + ' ';

  const strPunctuationLess = str.replace(/[.',/#÷!$%^&*;:{}|=\-_`~()]/g, ' ');
  return strPunctuationLess.replace(/\s{2,}/g, ' ');
};

export const removeExtraSpaces = (str: string) => {
  if (!str) {
    return '';
  }

  return str.replace(/\s+/g, ' ').trim();
};

export const removeAccents = (str: string | null = null): string => {
  if (!str) {
    return '';
  }

  const ACCENTS =
    'ÀÁÂÃÄÅĄĀāàáâãäåąßÒÓÔÕÕÖØŐòóôőõöøĎďDŽdžÈÉÊËĘèéêëęðÇçČčĆćÐÌÍÎÏĪìíîïīÙÚÛÜŰùűúûüĽĹŁľĺłÑŇŃňñńŔŕŠŚŞšśşŤťŸÝÿýŽŻŹžżźđĢĞģğ';
  const NON_ACCENTS =
    'AAAAAAAAaaaaaaaasOOOOOOOOoooooooDdDZdzEEEEEeeeeeeCcCcCcDIIIIIiiiiiUUUUUuuuuuLLLlllNNNnnnRrSSSsssTtYYyyZZZzzzdGGgg';

  const strAccents: string[] = str.split('');
  const strAccentsOut: string[] = [];

  const strAccentsLen: number = strAccents.length;

  for (let y = 0; y < strAccentsLen; y++) {
    if (ACCENTS.indexOf(strAccents[y]) != -1) {
      strAccentsOut[y] = NON_ACCENTS.substr(ACCENTS.indexOf(strAccents[y]), 1);
    } else {
      strAccentsOut[y] = strAccents[y];
    }
  }

  return strAccentsOut.join('');
};

/**
 * @deprecated
 * @param words
 * @param blackListWords
 */
export const removeBlacklistWords = (words: string[] = [], blackListWords: string[] = []): string[] => {
  return words.filter((u) => !blackListWords.some((s) => u.includes(s)));
};

export const moveToSearchUrl = (query = '', filterFacets: { id: string }[]) => {
  const params = buildSearchQueryString(query, filterFacets);

  if (!window.location.href.endsWith(`${window.location.pathname}?${params}`)) {
    const href = `${window.location.origin}${window.location.pathname}?${params}`;
    window.history.pushState({}, '', href);
  }
};

export const buildSearchQueryString = (
  query = '',
  filterFacets: { id: string }[],
  urlLocation: string = window.location.href,
): URLSearchParams => {
  const url = new URL(urlLocation);

  const params = new URLSearchParams(url.search);

  params.set('recherche', query);

  const ffIds = filterFacets.map((f) => f.id).join(';');
  if (ffIds) {
    params.set('ffIds', ffIds);
  }

  return params;
};

export const handleError = (e: unknown) => {
  const error = e as { error: string; status: number };
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('🚨 An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(`🚨 Backend returned code ${error.status}, body was: `, error.error);
  }
};

export const validateEmail = (email: string): string | null => {
  const emailToTest = email.trim().toLocaleLowerCase();

  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailReg.test(emailToTest) ? emailToTest : null;
};

/**
 * Call an async function with a maximum time limit (in milliseconds) for the timeout
 */
export const asyncCallWithTimeout = async (asyncPromise: Promise<unknown>, timeLimit = 10000): Promise<unknown> => {
  let timeoutHandle: string | number | unknown;

  const timeoutPromise = new Promise((_resolve, reject) => {
    timeoutHandle = setTimeout(() => reject(new Error('Async call timeout limit reached')), timeLimit);
  });

  return Promise.race([asyncPromise, timeoutPromise]).then((result: unknown) => {
    clearTimeout(timeoutHandle as number);
    return result;
  });
};

export const orderByIdAlphabetically = (arr: { id: number }[]) => {
  return arr.sort((a, b) => {
    return a.id > b.id ? 1 : -1;
  });
};

export const convertToCsv = (terms: { id: string; name: string; code: string }[]) => {
  let csv = '';

  terms.forEach((t) => {
    csv += `${t.id.replace(';', ' ')};${t.name.replace(';', ' ')};${t.code}\n`;
  });

  return csv;

  // const blob = new Blob([csv], {type: 'text/plain;charset=utf-8'});
  // saveAs(blob, `${filename}.csv`);
};

export const sliceSecret = (secret: string | undefined): string => {
  if (!secret) {
    return '--secret is undefined--';
  }
  return `${secret?.slice(0, 5)}...${secret?.slice(secret.length - 5)}`;
};
