MR Cake - Webbutik och Julkampanj

Skapade en webbplats för MR Cake som säljer cupcakes, tårtor och julprodukter.
Sidan innehåller startsida, produkter, kontaktformulär och julkampanj.
Responsiv design för både mobil och dator.


Navigationsmeny med länkar till alla sidor
Produktgalleri med grid-layout
Produktdetaljsidor med bilder, beskrivning och pris
Kontaktformulär med validering
Nyhetsbrevsprenumeration
Sociala länkar och footer

HTML5 – struktur
CSS3 – styling och responsiv design
JavaScript – formulärvalidering och interaktivitet
Eventuell användning av bilder och media

MR-Cake-Webbprojekt/
│
├─ index.html                  # Startsida
├─ about.html                  # Om oss
├─ products.html               # Produkter
├─ sweet_christmas.html        # Julkampanj
├─ product-happy.html          # Happy Cupcake detalj
├─ product-chocolate.html      # Chokladprodukt detalj
├─ css/
│   └─ style.css               # Styling för hela webbplatsen
├─ js/
│   └─ script.js               # JavaScript för formulär och nyhetsbrev
├─ images/
│   ├─ logo.png
│   ├─ cupcake.jpg
│   ├─ christmas.jpg
│   └─ ... fler produktbilder
└─ README.md                   # Kort dokumentation (valfritt)

Webbplatsstruktur

[Website MR Cake]
       |
       +-- [index.html]   (Startsida)
       |
       +-- [about.html]   (Om oss)
       |
       +-- [products.html] --+--> [Cupcakes]
       |                     +--> [Wedding Cakes]
       |
       +-- [sweet_christmas.html] --+--> [Chocolate box]
       |                             +--> [Christmas box]
       |                             +--> [Happy Cupcake]
       |
       +-- [product-happy.html]      (Detaljsida Happy Cupcake)
       +-- [product-chocolate.html]  (Detaljsida Chocolate)
       |
       +-- [css/style.css]           (Styling)
       +-- [js/script.js]            (Formulärvalidering)
       +-- [images/]                 (Bilder)


       Förklaring:

Startsidan leder till alla huvudsektioner.
Produktsidor kan länkas från produktlistan.
CSS och JS används globalt.
Images mappen innehåller alla bilder.

