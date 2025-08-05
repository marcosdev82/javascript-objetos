// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// Cada objeto em JavaScript possui uma propriedade interna, chamada de protótipo

// cadeia de protótipo
// No console do navegador, tente criar um literal de objeto:

const myObject = {
    city: "Madrid",
        greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid

