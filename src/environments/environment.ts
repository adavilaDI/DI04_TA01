
export const environment = {
  production: false,
  // URL del backend Express+Puppeteer (carpeta /server).
  // TODO - Añadir informesApiUrl con la URL del backend Express+Puppeteer (carpeta /server) que se va a usar en este proyecto.
  informesApiUrl: 'http://localhost:3000',
  
  auth: {
    email: 'adavila@ikaslea.birt.eus',
    password: 'Test1234',
  },
  firebase : {
    apiKey: "AIzaSyA-toplUGym3pMss2rYMxiANBvMq2v4ltk",
    authDomain: "di-adavila.firebaseapp.com",
    projectId: "di-adavila",
    storageBucket: "di-adavila.firebasestorage.app",
    messagingSenderId: "850591117922",
    appId: "1:850591117922:web:ce8ce1bbc42f044a5f573b"
  }
}