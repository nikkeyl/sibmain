/*!
 When the lock class is added, the scrollbar is removed,
 and elements with the [data-lp] attribute are set to {padding-right},
 which is equal to the width of the scrollbar
 */
const lockPaddingElements = document.querySelectorAll('[data-lp]');
const pageWrapper = document.querySelector('.content');
const html = document.documentElement;
const body = document.body;
const header = document.querySelector('.header');
const firstScreen = document.querySelector('[data-observ]');

/*! Plugin connection object */
const nodeObjects = {};

export { lockPaddingElements, pageWrapper, nodeObjects, html, body, header, firstScreen };
