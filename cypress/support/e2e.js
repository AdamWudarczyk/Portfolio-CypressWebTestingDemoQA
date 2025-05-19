import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.warn('Ignored uncaught error:', err.message);
    return false;
});