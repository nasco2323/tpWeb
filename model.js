// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {

    this.tab = new Array();


};

function Rectangle(x, y, longueur, largeur) {
    Forme.call(this, x, y, longueur, largeur)
    this.x = x;
    this.y = y;
    this.longueur = longueur;
    this.largeur = largeur;

};
Rectangle.prototype= new Forme();

function Ligne(x1, y1, x2, y2) {
    Forme.call(this,x1,y1,x2,y2)
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;


};
Ligne.prototype= new Forme();

function Forme(couleur , lineborder) {
    this.couleur= couleur;
    this.lineborder=lineborder;

};

