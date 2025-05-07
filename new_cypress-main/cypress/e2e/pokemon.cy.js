import * as pokemon_page from "../locators/pokemon_pages.json";
import * as data from "../helpers/default_data.json";

describe('Тесты для покемонов', function () {

    beforeEach('Перед началом теста', function () {
          cy.visit('/');
          cy.get(pokemon_page.login_button).should('be.visible');
            });
 

it('Покупка нового аватара', function () {
    
    cy.get(pokemon_page.email).should('be.visible').then( ($k_email)  =>  { $k_email.click() }); // если инпут виден клик
    cy.get(pokemon_page.email).type(data.login);
    cy.get(pokemon_page.password).type(data.password);
    
    cy.get(pokemon_page.login_button).click();

    cy.get(pokemon_page.trainer_button).should('be.visible'); // кнопка видна
    cy.get(pokemon_page.trainer_button).click(); //клик по кнопке, смотрим текущий аватар в карточке тренера
    
    cy.get(pokemon_page.change_avatar_btn).should('be.visible'); // кнопка видна
    cy.get(pokemon_page.change_avatar_btn).click();// клик, кнопка смена аватара
   
    cy.get('.available > button').first().click(); //выбор первого доступного со свойством available
    cy.get('.card_number').type(data.card_number);                     // вводим номер карты
    cy.get('.card_csv').type(data.card_csv);                             // вводим CVV карты
    cy.get('.card_date').type(data.card_date);                           // вводим срок действия карты
    cy.get('.card_name').type(data.card_name);                           // вводим имя владельца действия карты
    cy.get(pokemon_page.pay_button).click();     // нажимаем кнопку Оплатить
    cy.get('.threeds_number').type(data.code_sms);                            // вводим код подтверждения СМС
    cy.get(pokemon_page.pay_cvv).click();   // нажимаем кнопку Оплатить
    cy.contains('Покупка прошла успешно').should('be.visible');
    cy.get(pokemon_page.back_shop_button).click(); //вернуться в магазин после успешной оплаты
    cy.get(pokemon_page.trainer_button).click();  // смотрим на новый аватар в карточке тренера
})
})
