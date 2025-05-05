it('Покупка новогоо аватара', function () {
    cy.visit('https://pokemonbattle.ru/');
    cy.wait(2000);
    cy.get('#k_email').type('user_login');
    cy.get('#k_password').type('user_password');
    cy.wait(2000);
    cy.get('.MuiButton-root').click();
    cy.wait(2000);
    cy.get('.header_card_trainer').click(); //смотрим текущий аватар в карточке тренера
    cy.wait(2000);
    cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();//кнопка смена аватара
    cy.wait(2000);
    cy.get('.available > button').first().click(); //выбор первого доступного со свойством available
    cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
    cy.get('.card_csv').type('125');                             // вводим CVV карты
    cy.get('.card_date').type('1226');                           // вводим срок действия карты
    cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
    cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
    cy.contains('Покупка прошла успешно').should('be.visible');
    cy.get('.style_1_base_link_blue').click(); //вернуться в магазин после успешной оплаты
    cy.get('.header_card_trainer').click();  // смотрим на новый аватар в карточке тренера
})
