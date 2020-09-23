//Entra SASS Y HTML
//Funciona para conectar html, sass y recibe la los estilos 
//Sale la función Start a la hora de cargar la página estando activa siempre 
export class ExamplePageController {
    view: any;
    component = {
        id: 'example-page',
        view: 'ExamplePage.html',
        style: 'ExamplePage.scss',
        //cargito:()=>{this.cargito();},
        start: () => { this.start(); }
    }

//Constructor llama la funcion LoadView
//Sale la pantalla de carga de loadView
    constructor() {
        this.loadView();
    }

//Funcion start se utiliza para almacenar animaciones, cambiar colores, musica y pantalla de carga
//Entra las classes de los html y sass para su uso
//Salen las animaciones, colores y sonidos segun lo estipulado

    start() {
    //Envia al scroll a la posicion 0,0 de la pantalla
    window.scrollTo(0,0);

    //Estilos de SASS

    const loader: any = this.findInsideMe(".loader");
    const container: any = this.findInsideMe(".containercubo");
    // const TopBarColor: any = this.findInsideMe(".Topbar");
    const TextBien: any = this.findInsideMe(".border");
    const lineaR: any = this.findInsideMe(".linea");
    const linea2: any =this.findInsideMe(".linea2");
    const linea3: any =this.findInsideMe(".linea3");
    const linea4: any =this.findInsideMe(".linea4");
    const linea5: any =this.findInsideMe(".linea5");
    const linea6: any =this.findInsideMe(".linea6");
    const Grafiti: any = this.findInsideMe(".Grafiti");
    const borderTitulo: any = this.findInsideMe(".borderTitulo");
    const Texto_5: any = this.findInsideMe(".Texto_5");
    const Descripcion_5: any = this.findInsideMe(".Descripcion_5");
    const progress: any = this.findInsideMe(".progress-bar");
    const Texto_4: any = this.findInsideMe(".Texto_4");
    const Descripcion_4: any = this.findInsideMe(".Descripcion_4");
    console.log("Entre");
    
    
    // TopBarColor.style.opacity = 0;
    TextBien.style.opacity = 0;
    progress.style.opacity = 1;
    
    //Funcion para darle la duración de carga 
    //Recibe el tiempo
    //Sale las opacidades y posiciones
    setTimeout(function () {
        lineaR.style.opacity = 0;
        borderTitulo.style.opacity = 1;
        linea2.style.opacity = 0;
        linea3.style.opacity = 0;
        linea4.style.opacity = 0;
        linea5.style.opacity = 0;
        linea6.style.opacity = 0;
        Texto_5.style.opacity = 0;
        Grafiti.style.opacity = 0;
        // TopBarColor.style.opacity = 1;
        TextBien.style.opacity = 1;
        progress.style.opacity = 1; 
        loader.style.opacity = 0;
        container.style.opacity = 0;
        Texto_4.style.opacity = 0;
        Descripcion_4.style.opacity = 0;
        Descripcion_5.style.opacity = 0;
        Descripcion_4.style.transform = 'translateX(200px)'; 
        lineaR.style.transform = 'translateX(0px)';
        linea2.style.transform = 'translateX(200px)';
        linea3.style.transform = 'translateX(0px)';
        linea4.style.transform = 'translateX(200px)';
        linea5.style.transform = 'translateX(200px)';
        linea6.style.transform = 'translateX(0px)';
        Grafiti.style.transform = 'translateY(200px)';
    },3000);

        //Condiciones para la Topbar para cambiar el color dependiendo de la altura del scroll en Y
        // Funcion creada par a saber la posicion del scroll bar e animar
        window.onscroll = (_:any) => {
            console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
            // if (window.scrollY <= 600) {
            // TopBarColor.style.background = 'rgb(102,147,74)';
            // }
            // if (window.scrollY >= 601) {
            // TopBarColor.style.background = 'rgb(232, 232, 112)';
            // }
            // if (window.scrollY >= 1550) {
            //     //Azul Guaracha
            // TopBarColor.style.background = '#4581ac';
            // }
            // if (window.scrollY >= 2400) {
            // TopBarColor.style.background = ' #6a8a8a';
            // }
            // if (window.scrollY >= 3100) {
            // TopBarColor.style.background = ' rgb(137, 208, 141)';
            // }
            // if (window.scrollY >= 4000) {
            // TopBarColor.style.background = ' rgb(168, 189, 31)';
            // }
            // if (window.scrollY >= 4680) {
            // TopBarColor.style.background = 'rgb(232, 232, 112)';
            // }
            // if (window.scrollY >= 5600) {
            //     TopBarColor.style.background = 'rgb(99, 99, 99)';
            // }
            
            //Animaciones de las lineas, textos, imagenes y descripciones
            //No se usa en topbar porque la altura de sus elementos es diferente y no alcanzaria a verse 
            if(window.scrollY >= 1500){
                lineaR.style.transform = 'translateX(200px)';
                lineaR.style.opacity = 1;
                lineaR.style.transition = '1.8s linear';
                
                linea2.style.transform = 'translateX(0px)';
                linea2.style.opacity = 1;
                linea2.style.transition = '1.8s linear';

                Grafiti.style.transform = 'translateY(0px)';
                Grafiti.style.opacity = 1;
                Grafiti.style.transition = '1s linear';
            }
            //Animaciones de las lineas, textos, imagenes y descripciones
            //No se usa en topbar porque la altura de sus elementos es diferente y no alcanzaria a verse 
            if(window.scrollY >= 2500){
                linea3.style.transform = 'translateX(200px)';
                linea3.style.opacity = 1;
                linea3.style.transition = '1.8s linear';
                
                linea4.style.transform = 'translateX(-100px)'
                linea4.style.opacity = 1;
                linea4.style.transition = '1.8s linear';

                Texto_4.style.opacity = 1;
                Texto_4.style.transition = '1.8s linear';

                Descripcion_4.style.opacity = 1;
                Descripcion_4.style.transform = 'translateX(0px)';
                Descripcion_4.style.transition = '1.8s linear';
                
            }
            //Animaciones de las lineas, textos, imagenes y descripciones
            //No se usa en topbar porque la altura de sus elementos es diferente y no alcanzaria a verse 
            if(window.scrollY >= 3300){
                linea5.style.transform = 'translateX(-200px)';
                linea5.style.opacity = 1;
                linea5.style.transition = '1s linear';
                
                linea6.style.transform = 'translateX(300px)'
                linea6.style.opacity = 1;
                linea6.style.transition = '1s linear';
                
                Texto_5.style.opacity = 1;
                Texto_5.style.transition = '1s linear';

                Descripcion_5.style.opacity = 1;
                Texto_5.style.transition = '1s linear';
            }
            const p = (window.scrollY / window.innerWidth) * 100;
        }

    }
   

    //Funcion que se encarga de buscar por medio de query una clase de SASS
    findInsideMe(selector: string, all = false) {
        const query = `#app #${this.component.id} ${selector}`;
        if (!all) {
            return document.querySelector(query);
        } else {
            return document.querySelectorAll(query);

        }
    }

    //Funcion que se encarga de enviar la pantalla de carga
    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }

    //Funcion que llama el HTML y lo muestra
    getView(): [string, DocumentFragment] {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }

}
