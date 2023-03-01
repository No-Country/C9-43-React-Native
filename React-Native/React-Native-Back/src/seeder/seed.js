const Properties = require("../models/properties.models");
const Users = require("../models/users.models");
const Pictures = require("../models/pictures.models");
const Favorites = require("../models/favorites.models");
const db = require("../utils/db");

const users = [
  { email: "oscarardila96@gmail.com", password: "root123", firstName: "Oscar", lastName: "Ardila", confirmed: true },
  { email: "ascsda96@gmail.com", password: "root123", firstName: "Fede", lastName: "Birman" },
  { email: "avdfds6@gmail.com", password: "root123", firstName: "Malena", lastName: "Hernandez" }
];

const properties = [
  { userId: 1, title: "Casa en Buenos Aires", description: "Casa bonita, buena ubicación, excelente precio", price: 9500000, city: "Buenos Aires", region: "Capital", address: "123 calle falsa", sqMeters: 120.5, ambiances: 3, bedrooms: 3, bathrooms: 2, antiquity: 2010, propertyType: "casa", businessType: "venta", parking: true },
  { userId: 2, title: "Apto grande", description: "Apto grande, buena ubicación, excelente precio", price: 10000000, city: "Mar del Plata", region: "Otra", address: "456 calle falsa", sqMeters: 90, ambiances: 3, bedrooms: 3, bathrooms: 2, antiquity: 2015, propertyType: "departamento", businessType: "alquiler", parking: true },
  { userId: 3, title: "Terreno para negocio", description: "Buena ubicacion, productivo, barato", price: 25000000, city: "Buenos Aires", region: "Posadas", address: "789 calle falsa", sqMeters: 2000, ambiances: 1, bedrooms: 1, bathrooms: 1, antiquity: 2000, propertyType: "terreno", businessType: "venta", parking: false }
];

const pictures = [
  { pictureUrl: "url1", propertyId: 1 }, { pictureUrl: "url2", propertyId: 1 }, { pictureUrl: "url3", propertyId: 1 }, { pictureUrl: "url4", propertyId: 2 }, { pictureUrl: "url5", propertyId: 2 }, { pictureUrl: "url6", propertyId: 2 }, { pictureUrl: "url7", propertyId: 3 }, { pictureUrl: "url8", propertyId: 3 }, { pictureUrl: "url9", propertyId: 3 },]

const favorites = [
  { userId: 1, propertyId: 1 }, { userId: 1, propertyId: 3 }, { userId: 2, propertyId: 1 }, { userId: 2, propertyId: 2 }, { userId: 3, propertyId: 2 }, { userId: 3, propertyId: 3 }
];

db.sync({ force: true })
  .then(() => {
    users.forEach(user => Users.create(user));
    setTimeout(() => {
      properties.forEach(property => Properties.create(property));
    }, 100);
    setTimeout(() => {
      pictures.forEach(picture => Pictures.create(picture));
    }, 200);
    setTimeout(() => {
      favorites.forEach(favorite => Favorites.create(favorite));
    }, 300);
  })
  .catch(error => console.log(error))
  .finally(() => console.log("Seeding finalizado"));

  // {"userId": 1, "title": "Casa en Buenos Aires", "description": "Casa bonita, buena ubicación, excelente precio", "price": 9500000, "imageUrl": "facebook.com", "location": "Buenos Aires", "sqMeters": 120.5, "ambiances": 3, "bedrooms": 3, "bathrooms": 2, "yearBuilt": 2010, "propertyType": "casa", "parking": true}

  // localhost:8000/api/v1/

  //{"email" : "oscarardila96@gmail.com", "password": "root123", "firstName": "oscar", "lastName": "ardila" }

  // cd React-Native/React-Native-Back