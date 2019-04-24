
  $(document).ready(function(){
    $('#state').autocomplete({
      data: {
        "Aguascalientes": 'https://rae-api.inadem.gob.mx//resources/providers_avatars/1487790600.jpg',
        "Baja California": 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Coat_of_arms_of_Baja_California.svg/50px-Coat_of_arms_of_Baja_California.svg.png',
        "Baja California Sur": 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Baja_California_Sur.svg/50px-Coat_of_arms_of_Baja_California_Sur.svg.png',
        "Campeche": 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Coat_of_arms_of_Campeche.svg/50px-Coat_of_arms_of_Campeche.svg.png',
        "Chiapas":'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_arms_of_Chiapas.svg/50px-Coat_of_arms_of_Chiapas.svg.png',
        "Chihuahua":'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Coat_of_arms_of_Chihuahua.svg/50px-Coat_of_arms_of_Chihuahua.svg.png',
        "Ciudad de México":'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_arms_of_Mexican_Federal_District.svg/50px-Coat_of_arms_of_Mexican_Federal_District.svg.png',
        "Coahuila de Zaragoza":'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coat_of_arms_of_Coahuila.svg/50px-Coat_of_arms_of_Coahuila.svg.png',
        "Colima":'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coat_of_arms_of_Colima.svg/50px-Coat_of_arms_of_Colima.svg.png',
        "Durango":'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coat_of_arms_of_Durango.svg/50px-Coat_of_arms_of_Durango.svg.png',
        "Guanajuato":'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Escudo_de_armas_de_la_Ciudad_y_Estado_de_Guanajuato.svg/50px-Escudo_de_armas_de_la_Ciudad_y_Estado_de_Guanajuato.svg.png',
        "Guerrero":'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Coat_of_arms_of_Guerrero.svg/50px-Coat_of_arms_of_Guerrero.svg.png',
        "Hidalgo":'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Escudo_del_Estado_Libre_y_Soberano_de_Hidalgo.png/60px-Escudo_del_Estado_Libre_y_Soberano_de_Hidalgo.png',
        "Jalisco":'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Coat_of_arms_of_Jalisco.svg/50px-Coat_of_arms_of_Jalisco.svg.png',
        "México":'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Coat_of_arms_of_Mexico_State.svg/50px-Coat_of_arms_of_Mexico_State.svg.png',
        "Michoacán de Ocampo":'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Escudo_de_Michoac%C3%A1n.png/50px-Escudo_de_Michoac%C3%A1n.png',
        "Morelos":'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Morelos.svg/50px-Coat_of_arms_of_Morelos.svg.png',
        "Nayarit":'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Coat_of_arms_of_Nayarit.svg/50px-Coat_of_arms_of_Nayarit.svg.png',
        "Nuevo León":'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Coat_of_arms_of_Nuevo_Leon.svg/50px-Coat_of_arms_of_Nuevo_Leon.svg.png',
        "Oaxaca":'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Coat_of_arms_of_Oaxaca.svg/50px-Coat_of_arms_of_Oaxaca.svg.png',
        "Puebla":'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Coat_of_arms_of_Puebla.svg/50px-Coat_of_arms_of_Puebla.svg.png',
        "Querétaro":'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Coat_of_arms_of_Queretaro.svg/50px-Coat_of_arms_of_Queretaro.svg.png',
        "Quintana Roo":'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Coat_of_arms_of_Quintana_Roo.svg/50px-Coat_of_arms_of_Quintana_Roo.svg.png',
        "San Luis Potosí":'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Coat_of_arms_of_San_Luis_Potosi.svg/50px-Coat_of_arms_of_San_Luis_Potosi.svg.png',
        "Sinaloa":'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Coat_of_arms_of_Sinaloa.svg/50px-Coat_of_arms_of_Sinaloa.svg.png',
        "Sonora":'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Coat_of_arms_of_Sonora.svg/50px-Coat_of_arms_of_Sonora.svg.png',
        "Tabasco":'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Coat_of_arms_of_Tabasco_%28M%C3%A9xico%29.svg/50px-Coat_of_arms_of_Tabasco_%28M%C3%A9xico%29.svg.png',
        "Tamaulipas":'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Coat_of_arms_of_Tamaulipas.svg/50px-Coat_of_arms_of_Tamaulipas.svg.png',
        "Tlaxcala":'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Coat_of_arms_of_Tlaxcala.svg/50px-Coat_of_arms_of_Tlaxcala.svg.png',
        "Veracruz de Ignacio de la Llave":'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_Veracruz.svg/50px-Coat_of_arms_of_Veracruz.svg.png',
        "Yucatán":'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Yucatan.svg/50px-Coat_of_arms_of_Yucatan.svg.png',    
        "Zacatecas": 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coat_of_arms_of_Zacatecas.svg/50px-Coat_of_arms_of_Zacatecas.svg.png'
      },
    });
  });


  $(document).ready(function(){
    $('#job').autocomplete({
      data: {
        "Programador": null,
        "Matematico": null,
        "Intel": null
      },
    });
  });