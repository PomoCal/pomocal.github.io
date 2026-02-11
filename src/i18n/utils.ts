import { translations, type Locale } from './translations';

/**
 * Extract locale from the current URL.
 * - /en/... → 'en'
 * - everything else → 'ko' (default)
 */
export function getLocaleFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) {
        return lang as Locale;
    }
    return 'ko';
}

/**
 * Get the translation object for a given locale.
 */
export function t(locale: Locale) {
    return translations[locale];
}

/**
 * Build a localized path.
 * - ko (default) → /path
 * - en → /en/path
 */
export function getLocalizedPath(locale: Locale, path: string = '/'): string {
    if (locale === 'ko') return path;
    return `/${locale}${path}`;
}

/**
 * Get the alternate locale (for the language switcher).
 */
export function getAlternateLocale(locale: Locale): Locale {
    return locale === 'ko' ? 'en' : 'ko';
}
