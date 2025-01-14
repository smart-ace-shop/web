/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* eslint-disable ts/no-use-before-define, ts/no-namespace, ts/method-signature-style  */

Cypress.Commands.add('metatag', (name: string) => {
  return cy.get(`head > meta[name="${name}"]`);
});

declare namespace Cypress {
  interface Chainable<Subject> {
    metatag(name: string): Chainable<JQuery<HTMLMetaElement>>;
    metatag(name: string): Chainable<Subject>;
  }
}

/* eslint-enable ts/no-use-before-define, ts/no-namespace, ts/method-signature-style  */
