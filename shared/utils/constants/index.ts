/**
 * Barrel file for shared type exports.
 *
 * This file re-exports all public constants from the `constants` folder
 * so they can be imported from a single entry point.
 *
 */
export * from "./contact";
export * from "./i18n";

export const COOKIE_NOTICE_SHOW_EVENT = "blue-desert:show-cookie-notice";
export const COOKIE_STORAGE_KEY = "blue-desert-cookie-notice-dismissed";
