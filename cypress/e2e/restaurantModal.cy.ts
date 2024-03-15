describe('Restaurant Detail Modal Test', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('/', { timeout: 1000 });
    cy.get('.restaurant[data-id="2"]').click();
    cy.get('#restaurant-detail-main').should('be.visible');
  });

  it('Restaurant Detail Modal에서 닫기 버튼을 누르면 모달이 닫힌다.', () => {
    cy.get('#restaurant-detail-modal-close-button').click();
    cy.get('#restaurant-detail-main').should('not.be.visible');
  });

  it('Restaurant Detail Modal에서 삭제 버튼을 누르면 리스트에서 사라진다.', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm').returns(true);
    });
    cy.get('#restaurant-detail-modal-delete-button').click();
    cy.get('#restaurant-detail-main').should('not.be.visible');
    cy.get('.restaurant[data-id="2"]').should('not.exist');
  });
});
