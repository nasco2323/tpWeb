// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.canvas = canvas;
    this.interactor = interactor;
    // definition des cordonnées initial
    this.positionInitx = 0;
    this.positionInity = 0;

    // cordonnes position final
    this.positionFinalx = 0;
    this.positionFinaly = 0;

    // Developper les 3 fonctions gérant les événements
    this.pression = function (evt) {
        console.log("pression");
        this.positionInitx = getMousePosition(this.canvas, evt).x;
        this.positionInity = getMousePosition(this.canvas, evt).y;
        console.log("cordonnee x pression " + this.positionInitx + "cordonnee y pression " + this.positionInity);


    }.bind(this);

    this.deplacement = function (evt) {
        console.log('deplacement');
        var positiondeplacex = this.positionInitx + getMousePosition(this.canvas, evt).x;
        var positiondeplacey = this.positionInity + getMousePosition(this.canvas, evt).y;
        console.log("cordonnee x du deplacemnt " + positiondeplacex + "cordonnee y du deplacement " + positiondeplacey);

    }.bind(this);
    this.relachement = function (evt) {

        console.log("relachement");
        this.positionFinalx = getMousePosition(this.canvas, evt).x;
        this.positionFinaly = getMousePosition(this.canvas, evt).y;
        console.log("cordonnee x relachement: " + this.positionFinalx + "cordonnee y du deplacement: " + this.positionFinaly);


    }.bind(this);


    // Associer les fonctions précédentes aux évènements du canvas.
    this.canvas.addEventListener('mousedown', this.pression, false);
    this.canvas.addEventListener('mousemove', this.deplacement, false);
    this.canvas.addEventListener('mouseup', this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



