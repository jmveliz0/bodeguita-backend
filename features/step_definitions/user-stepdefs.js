const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const request = require('supertest');
import app from '../../src/app'

var userObj = {}

// ? Given despues de ingresar a la web del sistema desde el navegador

        Given('despues de ingresar a la web del sistema desde el navegador', function () {
          //mockear esta funcion
        });
       
//    ? When escribo en campo Usuario el valor de "jalmacen"

        When('escribo en campo Usuario el valor de {string}', function (string) {
          // Write code here that turns the phrase above into concrete actions
          // this.userobj.code = "jalmacen"           
          userObj.code = string           
        });
       
//    ? And escribo en campo Contraseña el valor de "jalmacen"

        When('escribo en campo Contraseña el valor de {string}', function (string) {
          userObj.password = string
        });

//    ? And luego hago click en el boton de Entrar

        When('luego hago click en el boton de Entrar', async function () {
          console.log('UO: ',userObj)
          let response = await request(app).post('/user/login').send(userObj)
          assert.equal(response.body.data.isAuth,true)
        });
       
//    ? Then el sistema me direcciona a la pantalla de Bienvenida

         Then('el sistema me direcciona a la pantalla de Bienvenida', function () {
           //mock 
         });