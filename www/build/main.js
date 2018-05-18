webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_preguntas_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Modal4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Modal4Page = (function () {
    function Modal4Page(navCtrl, navParams, preguntasService, viewCtrl, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.preguntasService = preguntasService;
        this.viewCtrl = viewCtrl;
        this.toast = toast;
        this.pregs = [];
        this.score = 0;
        this.id = null;
        this.ultima = false;
        this.siguienteboton = true;
        this.contadorpreg = 1;
        this.respondio = false;
        this.preguntasService.getPreguntas().valueChanges()
            .subscribe(function (preguntas) {
            _this.pregs = preguntas;
            _this.pregs.map(function (preguntas) {
                console.log(_this.pregs);
                preguntas = _this.randomizePreguntas(_this.pregs);
                return preguntas;
            });
            _this.pregs.map(function (preguntas) {
                console.log(_this.pregs);
                var originalOrder = preguntas.opciones;
                preguntas.opciones = _this.randomizeAnswers(originalOrder);
                return preguntas;
            });
        });
        this.getFormattedDate();
    }
    Modal4Page.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
        this.numpregs = this.navParams.get('numpregs');
    };
    Modal4Page.prototype.getSomeText = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('imagendepreg/' + this.pregs.id + '/').child('imagenpregunta.jpg').getDownloadURL()
            .then(function (response) {
            _this.imagenpreg = response;
        })
            .catch(function (error) { return console.log('error', error); });
    };
    Modal4Page.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Modal4Page.prototype.randomizePreguntas = function (rawPreguntas) {
        for (var i = rawPreguntas.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = rawPreguntas[i];
            rawPreguntas[i] = rawPreguntas[j];
            rawPreguntas[j] = temp;
        }
        return rawPreguntas;
    };
    Modal4Page.prototype.randomizeAnswers = function (rawAnswers) {
        for (var i = rawAnswers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }
        return rawAnswers;
    };
    Modal4Page.prototype.siguientepreg = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        this.respondio = false;
        this.contadorpreg++;
        if (this.contadorpreg == this.numpregs) {
            this.ultima = true;
            this.siguienteboton = false;
        }
        return console.log(this.contadorpreg, this.ultima);
    };
    Modal4Page.prototype.seleccionaRespuesta = function (opcion, pregunta) {
        this.respondio = true;
        opcion.selected = true;
        if (opcion.correcta) {
            this.score++;
            var toast = this.toast.create({
                message: 'Respuesta correcta!',
                duration: 500,
                position: 'middle'
            });
            toast.present();
        }
        else {
            var toast = this.toast.create({
                message: 'La respuesta correcta era: ' + pregunta.respuesta,
                duration: 1500,
                position: 'middle'
            });
            toast.present();
        }
    };
    Modal4Page.prototype.finalizar = function () {
        var resultadoexamen = {
            id: Date.now(),
            aciertos: this.score,
            fecha: this.formattedDate,
            numeropreguntas: this.numpregs
        };
        this.viewCtrl.dismiss();
        this.preguntasService.crearresultado(resultadoexamen);
    };
    Modal4Page.prototype.getFormattedDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];
        this.formattedDate = date + "/" + monthArray[month] + "/" + year;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", Object)
    ], Modal4Page.prototype, "slides", void 0);
    Modal4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal4',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal4\modal4.html"*/'<!--\n  Generated template for the Modal4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Preguntas</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <ion-slides #slides>  \n  <ion-slide *ngFor = "let pregunta of pregs; let i= index; " >\n    <ion-list no-lines>\n<ion-item>\n<ion-label> {{formattedDate}}  </ion-label>\n    <ion-badge item-end> Pregunta: {{i+1}} / {{numpregs}}</ion-badge>\n</ion-item>\n<ion-item>\n    \n  <ion-badge item-end>Aciertos: {{score}} </ion-badge>\n</ion-item>\n<ion-item>\n  <h2>Tema: </h2>\n  <h3>{{pregunta.tema}} </h3>\n</ion-item>\n\n<ion-item>\n  <img src= {{pregunta.img}} />\n  <p text-wrap><b> {{pregunta.pregunta}}</b></p>\n</ion-item>\n<ion-item *ngFor= "let opcion of pregunta.opciones; let i=index;">\n    <button ion-button round text-wrap (click)="seleccionaRespuesta(opcion, pregunta)" [disabled]="respondio"> {{opcion.opcion}} </button>\n</ion-item>\n<ion-item>\n  <p>  </p>\n</ion-item>\n\n<ion-item>\n    <button ion-button (click)="siguientepreg()" *ngIf=\'siguienteboton\' item-end >Siguiente</button>\n\n    <button ion-button (click)="finalizar()" *ngIf=\'ultima\' item-end >Finalizar</button>\n</ion-item>\n\n    </ion-list>\n\n\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal4\modal4.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_preguntas_service__["a" /* PreguntasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_preguntas_service__["a" /* PreguntasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object])
    ], Modal4Page);
    return Modal4Page;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=modal4.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreguntasService = (function () {
    function PreguntasService(afDB, afStorage, afAuth) {
        var _this = this;
        this.afDB = afDB;
        this.afStorage = afStorage;
        this.afAuth = afAuth;
        this.preguntas = [];
        this.resultados = [];
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.usuariouid = data.uid;
                console.log(_this.usuariouid);
            }
        });
    }
    PreguntasService.prototype.getPreguntas = function () {
        return this.afDB.list("preguntas/preguntas/");
        //return this.notes
    };
    ;
    PreguntasService.prototype.getPregunta = function (id) {
        //return this.notes.filter( function (e, i) { return e.id == id}) [0]|| {
        //    id: null, cama: null, nombre: null, edad: null, registro: null, dx: null,
        //procedimiento: null, fechacx: null, material: null, cruce: null, consentimiento: null,
        //craneotomo: null, ekg: null, labs: null, rxtorax: null, valanest: null,
        //ayuno: null, labsexp: null, suspanticoag: null, observaciones: null,
        //elaborado: null, modificaciones:[{num: null,fecha:null}]
        return this.afDB.object("preguntas/preguntas" + id);
    };
    ;
    PreguntasService.prototype.crearresultado = function (result) {
        this.afDB.database.ref("resultados/" + this.usuariouid + "/" + result.id).set(result);
        //this.notes.push(note);
    };
    ;
    PreguntasService.prototype.getResultados = function () {
        return this.afDB.list("resultados/" + this.usuariouid + "/");
        //return this.notes
    };
    ;
    PreguntasService.prototype.borrarresult = function (id) {
        //for (let i = 0 ; i< this.notes.length; i++){
        //  if (this.notes[i] == note){
        //    this.notes.splice(i,1);}}
        this.afDB.database.ref("resultados/" + this.usuariouid + "/" + id).remove();
    };
    PreguntasService.prototype.editarpac = function (note) {
        // for (let i ; i< this.notes.length; i++){
        // if (this.notes[i] == note){
        //    this.notes[i] = note } }
        this.afDB.database.ref("notas/" + note.id).set(note);
    };
    PreguntasService.prototype.borrarpac = function (note) {
        //for (let i = 0 ; i< this.notes.length; i++){
        //  if (this.notes[i] == note){
        //    this.notes.splice(i,1);}}
        this.afDB.database.ref("notas/" + note.id).remove();
        this.afStorage.ref('pacientes/' + note.id + '/tac/').delete();
        this.afStorage.ref('pacientes/' + note.id + '/ekg/').delete();
        this.afStorage.ref('pacientes/' + note.id + '/rx/').delete();
    };
    PreguntasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PreguntasService);
    return PreguntasService;
}());

//# sourceMappingURL=preguntas.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPageIngresarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ModalPageIngresarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPageIngresarPage = (function () {
    function ModalPageIngresarPage(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.user = {};
    }
    ModalPageIngresarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPageIngresarPage');
    };
    ;
    ModalPageIngresarPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.correo = user.email;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], user.email);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.toast.create({
                            message: "Algo falló al iniciar sesión, verifique sus datos e intente de nuevo.",
                            duration: 3000,
                            position: "middle"
                        }).present();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalPageIngresarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-page-ingresar',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal-page-ingresar\modal-page-ingresar.html"*/'<!--\n  Generated template for the ModalPageIngresarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="secondary">\n        <ion-title>Neurocirugía HCJIM</ion-title>\n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n             <h1>Iniciar sesión</h1>\n        </ion-list-header>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="user.email"  ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="user.password" ></ion-input>\n        </ion-item>\n      </ion-list>\n\n        <ion-row no-padding>\n            <ion-col text-right>\n                <button ion-button item-end (click)="login(user)" block  >Entrar</button>\n               \n            </ion-col>\n          </ion-row>\n           \n       \n\n\n\n     \n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal-page-ingresar\modal-page-ingresar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ModalPageIngresarPage);
    return ModalPageIngresarPage;
}());

//# sourceMappingURL=modal-page-ingresar.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notes_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, notesService, toastCtrl, alertCtrl, actionSheetCtrl, platform, camera, afStorage, loadingCtrl, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notesService = notesService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.camera = camera;
        this.afStorage = afStorage;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.note = {
            id: null,
            cama: null,
            nombre: null,
            edad: null,
            registro: null,
            dx: null,
            procedimiento: null,
            fechacx: null,
            material: null,
            cruce: null,
            consentimiento: null,
            craneotomo: null,
            ekg: null,
            labs: null,
            fechalabs: null,
            rxtorax: null,
            valanest: null,
            ayuno: null,
            labsexp: null,
            suspanticoag: null,
            observaciones: null,
            elaborado: null,
            pendiente: null
        };
        this.id = null;
        this.show = true;
        this.cargadotac = false;
        this.cargadoekg = false;
        this.cargadorx = false;
        this.previewtac = false;
        this.previewekg = false;
        this.previewrx = false;
        this.someTextUrl = '';
        this.someTextUrlekg = '';
        this.someTextUrlrx = '';
        this.iaboptions = {
            location: 'no',
            zoom: 'yes'
        };
        this.onSuccesstac = function (snapshot) {
            _this.currentImagetac = snapshot.downloadURL;
            _this.previewtac = true;
            _this.loading.dismiss();
        };
        this.onErrortac = function (error) {
            console.log('error', error);
            _this.loading.dismiss();
        };
        this.onSuccessrx = function (snapshot) {
            _this.currentImagerx = snapshot.downloadURL;
            _this.previewrx = true;
            _this.loading.dismiss();
        };
        this.onErrorrx = function (error) {
            console.log('error', error);
            _this.loading.dismiss();
        };
        this.onSuccessekg = function (snapshot) {
            _this.currentImageekg = snapshot.downloadURL;
            _this.previewekg = true;
            _this.loading.dismiss();
        };
        this.onErrorekg = function (error) {
            console.log('error', error);
            _this.loading.dismiss();
        };
        this.id = navParams.get('id');
        if (this.id != 0) {
            notesService.getNote(this.id)
                .valueChanges().subscribe(function (note) {
                _this.note = note;
            });
            this.cargadotac = true;
            this.cargadoekg = true;
            this.cargadorx = true;
            this.getSomeText();
        }
        ;
    }
    ;
    ModalPage.prototype.getSomeText = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('images/' + this.id + '/').child('uploadedtac.png').getDownloadURL()
            .then(function (response) {
            _this.currentImagetac = response;
            _this.previewtac = true;
            console.log(_this.someTextUrl);
        })
            .catch(function (error) { return console.log('error', error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('images/' + this.id + '/').child('uploadedekg.png').getDownloadURL()
            .then(function (response) {
            _this.currentImageekg = response;
            _this.previewekg = true;
        })
            .catch(function (error) { return console.log('error', error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('images/' + this.id + '/').child('uploadedrx.png').getDownloadURL()
            .then(function (response) {
            _this.currentImagerx = response;
            _this.previewrx = true;
        })
            .catch(function (error) { return console.log('error', error); });
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    //-------------------------------------
    ModalPage.prototype.capturarimagentac = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            _this.loading = _this.loadingCtrl.create({
                content: 'Espere un momento...'
            });
            _this.loading.present();
            _this.selectedPhototac = _this.dataURItoBlobtac('data:image/jpeg;base64,' + imageData);
            _this.uploadtac();
        }, function (err) {
            console.log('error', err);
        });
        // If it's base64:
        (function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 1000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.dataURItoBlobtac = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    ModalPage.prototype.uploadtac = function () {
        if (this.selectedPhototac) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + this.id + '/uploadedtac.png').put(this.selectedPhototac);
            uploadTask.then(this.onSuccesstac, this.onErrortac);
        }
    };
    //_________________________________________________
    //-------------------------------------
    ModalPage.prototype.capturarimagenrx = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            _this.loading = _this.loadingCtrl.create({
                content: 'Espere un momento...'
            });
            _this.loading.present();
            _this.selectedPhotorx = _this.dataURItoBlobrx('data:image/jpeg;base64,' + imageData);
            _this.uploadrx();
        }, function (err) {
            console.log('error', err);
        });
        // If it's base64:
        (function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 1000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.dataURItoBlobrx = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    ModalPage.prototype.uploadrx = function () {
        if (this.selectedPhotorx) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + this.id + '/uploadedrx.png').put(this.selectedPhotorx);
            uploadTask.then(this.onSuccessrx, this.onErrorrx);
        }
    };
    //_________________________________________________
    //-------------------------------------
    ModalPage.prototype.capturarimagenekg = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            _this.loading = _this.loadingCtrl.create({
                content: 'Espere un momento...'
            });
            _this.loading.present();
            _this.selectedPhotoekg = _this.dataURItoBlobekg('data:image/jpeg;base64,' + imageData);
            _this.uploadekg();
        }, function (err) {
            console.log('error', err);
        });
        // If it's base64:
        (function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 1000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.dataURItoBlobekg = function (dataURI) {
        // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    ;
    ModalPage.prototype.uploadekg = function () {
        if (this.selectedPhotoekg) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child('images/' + this.id + '/uploadedekg.png').put(this.selectedPhotoekg);
            uploadTask.then(this.onSuccessekg, this.onErrorekg);
        }
    };
    //_________________________________________________
    ModalPage.prototype.descargartac = function () {
        var target = "_self";
        this.iab.create(this.currentImagetac, target, this.iaboptions);
    };
    ModalPage.prototype.descargarekg = function () {
        var target = "_self";
        this.iab.create(this.currentImageekg, target, this.iaboptions);
    };
    ModalPage.prototype.descargarrx = function () {
        var target = "_self";
        this.iab.create(this.currentImagerx, target, this.iaboptions);
    };
    ModalPage.prototype.opcionespac = function () {
        var _this = this;
        if (this.id != 0) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.notesService.editarpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente modificado',
                                    duration: 500,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            else {
                                _this.note.id = Date.now();
                                _this.notesService.crearpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente agregado',
                                    duration: 500,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Borrar paciente',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                            var alert = _this.alertCtrl.create({
                                title: 'Atención',
                                subTitle: 'Se borrará el paciente de manera permanente',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        handler: function () {
                                            _this.show = false;
                                            _this.notesService.borrarpac(_this.note);
                                            _this.viewCtrl.dismiss();
                                            var toast = _this.toastCtrl.create({
                                                message: 'Paciente borrado',
                                                duration: 1000,
                                                position: 'bottom'
                                            });
                                            toast.present();
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        handler: function () {
                                            _this.viewCtrl.dismiss();
                                        }
                                    },
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.notesService.editarpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente modificado',
                                    duration: 500,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            else {
                                _this.note.id = Date.now();
                                _this.notesService.crearpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente agregado',
                                    duration: 500,
                                    position: 'bottom'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Paciente</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding *ngIf="show">\n\n<ion-list>\n  <ion-item>\n      <ion-label floating>Cama</ion-label>\n      <ion-input type="text" [(ngModel)]="note.cama"  ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="note.nombre" ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Edad</ion-label>\n      <ion-input type="text" [(ngModel)]="note.edad"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Registro</ion-label>\n      <ion-input type="text" [(ngModel)]="note.registro"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Dx</ion-label>\n      <ion-input type="text" [(ngModel)]="note.dx"></ion-input>\n      \n  </ion-item>\n  <ion-item>\n        <button ion-button  (click)="capturarimagentac()"  icon-left ><ion-icon name="md-camera"  ></ion-icon> Capturar estudio</button>\n        <br>\n        <button ion-button  (click)="descargartac()" icon-left *ngIf="previewtac" ><ion-icon name="md-eye"></ion-icon> Ver Detalles </button>\n  </ion-item>\n  <ion-item *ngIf="previewtac">\n      <label>Vista Previa:</label>\n      <br>\n        <img src= {{currentImagetac}} />\n    \n    </ion-item>\n  <ion-item>\n      <ion-label floating>Procedimiento</ion-label>\n      <ion-input type="text" [(ngModel)]="note.procedimiento"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n      <ion-label floating>Fecha de cirugía</ion-label>\n      <ion-input [(ngModel)]="note.fechacx"> </ion-input>\n    </ion-item>\n    <ion-item>\n            <ion-label floating>Fecha de realización de EKG</ion-label>\n            <ion-input  [(ngModel)]="note.ekg"></ion-input>\n            \n        </ion-item>\n        <ion-item>\n                <button ion-button icon-only (click)="capturarimagenekg()"  icon-left ><ion-icon name="md-camera"  ></ion-icon> Capturar EKG</button>\n                <br>\n                <button ion-button icon-only (click)="descargarekg()"  icon-left *ngIf="previewekg"><ion-icon name="md-eye"  ></ion-icon> Ver Detalles</button>\n        \n        </ion-item>\n        <ion-item *ngIf="previewekg" >\n                <label>Vista Previa:</label>\n                <br>\n                <img src= {{currentImageekg}} />\n            \n            </ion-item>\n            <ion-item>\n                    <ion-label floating >Fecha de realización de la Rx</ion-label>\n                    <ion-input  [(ngModel)]="note.rxtorax"></ion-input>\n                    \n                </ion-item>\n                <ion-item>\n                        <button ion-button icon-only (click)="capturarimagenrx()"  icon-left ><ion-icon name="md-camera"  ></ion-icon> Capturar Rx</button>\n                        <br>\n                        <button ion-button icon-only (click)="descargarrx()"  icon-left *ngIf="previewrx"><ion-icon name="md-eye" ></ion-icon> Ver Detalles</button>\n                </ion-item>\n                <ion-item *ngIf="previewrx">\n                        <label>Vista Previa:</label>\n                        <br>\n                        <img src= {{currentImagerx}} />\n                    \n                    </ion-item>\n\n<ion-item>\n    <ion-label>Material</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.material"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Cruce</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.cruce"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Consentimiento</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.consent"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Craneotomo</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.craneotomo"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n    <ion-label >Labs</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.labs"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label floating>Fecha de realización de labs</ion-label>\n    <ion-input  [(ngModel)]="note.fechalabs"></ion-input>\n    \n</ion-item>\n\n\n<ion-item>\n    <ion-label >Ayuno</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.ayuno"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label >Labs en expediente</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.labsexp"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Suspender anticoagulante</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.anticoag"></ion-checkbox>\n</ion-item>\n<ion-item>\n        <ion-label >Valoración por anestesio</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="note.anest"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label >Completo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="note.pendiente"></ion-checkbox>\n    </ion-item>\n\n<ion-item>\n    <ion-label floating>Modificado por:</ion-label>\n    <ion-input type="text" [(ngModel)]="note.elaborado"></ion-input>\n</ion-item>\n\n\n</ion-list>\n<ion-row padding>\n        <ion-col >\n                <ion-label stacked>Observaciones</ion-label>\n                <ion-textarea [(ngModel)]="note.observaciones" id="txtnotes" rows="12" ></ion-textarea>\n            \n           \n        </ion-col>\n        \n    \n    </ion-row>\n\n\n\n<ion-row no-padding>\n    <ion-col text-right>\n        <button ion-button item-end (click)="opcionespac()" block  >Opciones</button>\n       \n    </ion-col>\n    \n\n</ion-row>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesService = (function () {
    function NotesService(afDB, afStorage) {
        this.afDB = afDB;
        this.afStorage = afStorage;
        this.notes = [];
    }
    NotesService.prototype.getNotes = function () {
        return this.afDB.list("notas/");
        //return this.notes
    };
    ;
    NotesService.prototype.getNote = function (id) {
        //return this.notes.filter( function (e, i) { return e.id == id}) [0]|| {
        //    id: null, cama: null, nombre: null, edad: null, registro: null, dx: null,
        //procedimiento: null, fechacx: null, material: null, cruce: null, consentimiento: null,
        //craneotomo: null, ekg: null, labs: null, rxtorax: null, valanest: null,
        //ayuno: null, labsexp: null, suspanticoag: null, observaciones: null,
        //elaborado: null, modificaciones:[{num: null,fecha:null}]
        return this.afDB.object("notas/" + id);
    };
    ;
    NotesService.prototype.crearpac = function (note) {
        this.afDB.database.ref("notas/" + note.id).set(note);
        //this.notes.push(note);
    };
    ;
    NotesService.prototype.editarpac = function (note) {
        // for (let i ; i< this.notes.length; i++){
        // if (this.notes[i] == note){
        //    this.notes[i] = note } }
        this.afDB.database.ref("notas/" + note.id).set(note);
    };
    NotesService.prototype.borrarpac = function (note) {
        //for (let i = 0 ; i< this.notes.length; i++){
        //  if (this.notes[i] == note){
        //    this.notes.splice(i,1);}}
        this.afDB.database.ref("notas/" + note.id).remove();
        this.afStorage.ref('pacientes/' + note.id + '/tac/').delete();
        this.afStorage.ref('pacientes/' + note.id + '/ekg/').delete();
        this.afStorage.ref('pacientes/' + note.id + '/rx/').delete();
    };
    NotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], NotesService);
    return NotesService;
}());

//# sourceMappingURL=notes.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal4_modal4__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_preguntas_service__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreguntasPage = (function () {
    function PreguntasPage(navCtrl, navParams, modalCtrl, afAuth, preguntasService, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.preguntasService = preguntasService;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.results = [];
        this.ocultar = false;
    }
    PreguntasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.usuariouid = data.uid;
            }
        });
        this.preguntasService.getResultados().valueChanges()
            .subscribe(function (resultados) {
            _this.results = resultados;
            console.log(_this.results);
        });
    };
    PreguntasPage.prototype.borrarresultado = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atención',
            subTitle: 'Se borrará la entrada de manera permanente',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.preguntasService.borrarresult(id);
                        var toast = _this.toast.create({
                            message: 'Resultado borrado',
                            duration: 1000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
            ]
        });
        alert.present();
    };
    PreguntasPage.prototype.iniciarpreguntas = function (pregs) {
        console.log(this.numpregs);
        if (this.numpregs == undefined) {
            this.toast.create({
                message: "Debes elegir al menos 1 pregunta",
                duration: 500,
                position: 'bottom'
            }).present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal4_modal4__["a" /* Modal4Page */], { pregs: pregs, numpregs: this.numpregs });
            modal.present();
        }
    };
    ;
    PreguntasPage.prototype.mostrarResultados = function () {
        this.ocultar = !this.ocultar;
    };
    PreguntasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preguntas',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\preguntas\preguntas.html"*/'<!--\n  Generated template for the PreguntasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Neurocirugía HCJIM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>Preguntas</h1>\n  <ion-card>\n      <ion-card-header text-wrap>\n          Antes de iniciar, elige el número de preguntas a contestar.\n        </ion-card-header>\n        <ion-list>\n          <ion-item>\n\n            <ion-badge > Número de preguntas: {{numpregs}}  </ion-badge>\n          </ion-item>\n            <ion-item>  \n                \n      <ion-range [(ngModel)]="numpregs" #radiusVal min="0" max="10" color="primary" pin="true" snaps="true" step="2">\n      <ion-label range-left>0</ion-label>\n                <ion-label range-right>10</ion-label>\n              </ion-range>\n          </ion-item>\n\n\n        </ion-list>\n\n        <ion-row no-padding>\n          <ion-col >\n            <button ion-button item-end (click)= \'iniciarpreguntas()\' block color="secondary" >Iniciar</button>\n              \n          </ion-col>\n      </ion-row>\n\n   \n\n\n\n  </ion-card>\n  <ion-card padding>\n    \n    <button ion-button block item-end  (click)="mostrarResultados()" >Lista de resultados</button>\n    <ion-card-content *ngIf="ocultar"> \n    <ion-list *ngFor = "let result of results " >\n        <ion-item >\n          <h2 > Fecha:  {{result.fecha}}  </h2>\n          \n          <p>Preguntas contestadas: {{result.numeropreguntas}} </p>\n          <h3 color="danger">Aciertos: {{result.aciertos}} </h3>\n          <button ion-button item-end (click)= \'borrarresultado(result.id)\' color="danger" ><ion-icon name="md-trash"></ion-icon> </button>\n          \n        </ion-item>\n\n\n    </ion-list>\n  </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\preguntas\preguntas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__services_preguntas_service__["a" /* PreguntasService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PreguntasPage);
    return PreguntasPage;
}());

//# sourceMappingURL=preguntas.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal4/modal4.module": [
		625,
		1
	],
	"../pages/preguntas/preguntas.module": [
		626,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preguntas_preguntas__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_page_ingresar_modal_page_ingresar__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal4_modal4__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_4__preguntas_preguntas__["a" /* PreguntasPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_7__modal4_modal4__["a" /* Modal4Page */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Checklist" tabIcon="md-checkbox-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Prevaloración" tabIcon="ios-list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Directorio" tabIcon="ios-call"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="Preguntas" tabIcon="md-help"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Neurocirugía HCJIM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Prevaloración</h1>\n    \n        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0qVsU2BQdNp_5DwdhuXoc7LetgNTuzFyOfzNbLbPRQCRFfA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.adscritos = [
            {
                nombre: "Dr Héctor",
                telefono: "3331561837",
                rud: "981787"
            },
            {
                nombre: "Dr Guerrero",
                telefono: "3314106193",
                rud: "2013231"
            },
            {
                nombre: "Dr Andrade",
                telefono: "3310417254",
                rud: "2015035"
            },
            {
                nombre: "Dr Ubaldo",
                telefono: "3331297430",
                rud: "980379"
            },
            {
                nombre: "Dr Santana",
                telefono: "3334595538",
                rud: "2002062"
            },
            {
                nombre: "Dr Gaspar",
                telefono: "3313107936",
                rud: ""
            },
            {
                nombre: "Dr Neri",
                telefono: "3331377149",
                rud: ""
            },
            {
                nombre: "Dr Domínguez",
                telefono: "3331285222",
                rud: ""
            },
            {
                nombre: "Dr Ramiro",
                telefono: "3331379996",
                rud: ""
            }
        ];
        this.proveedores = [
            {
                id: 0,
                nombre: "Roger",
                empresa: "Complementos",
                telefono: "3310433374"
            },
            {
                id: 1,
                nombre: "Edgar",
                empresa: "Complementos",
                telefono: "3339546743"
            },
            {
                id: 2,
                nombre: "Pablo Paganoni",
                empresa: "Johnson",
                telefono: "3314176868"
            },
            {
                id: 3,
                nombre: "Carlos Valtierra",
                empresa: "Suplementos",
                telefono: "3314615355"
            },
            {
                id: 4,
                nombre: "Leidi Alvarado",
                empresa: "TSI",
                telefono: "3335703110"
            },
            {
                id: 5,
                nombre: "Rodrigo",
                empresa: "Lovimedic",
                telefono: "3318060800"
            },
            {
                id: 6,
                nombre: "Priscila",
                empresa: "Avicena",
                telefono: "3312189689"
            }
        ];
        this.otros = [
            {
                id: 0,
                nombre: "Dr González Jaime",
                empresa: "Monitoreo",
                telefono: "3331710533"
            },
            {
                id: 1,
                nombre: "Dr Glicerio",
                empresa: "Orl ISSSTE",
                telefono: "3331480448"
            }
        ];
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.ocultar3 = false;
    }
    ContactPage.prototype.showadscritos = function () {
        this.ocultar1 = !this.ocultar1;
    };
    ContactPage.prototype.showproveedores = function () {
        this.ocultar2 = !this.ocultar2;
    };
    ContactPage.prototype.showotros = function () {
        this.ocultar3 = !this.ocultar3;
    };
    ContactPage.prototype.callprov = function (id) {
        this.telprov = this.proveedores[id].telefono;
        this.callNumber.callNumber(String(this.telprov), true);
        console.log(this.telprov);
    };
    ContactPage.prototype.callotros = function (id) {
        this.telotros = this.otros[id].telefono;
        this.callNumber.callNumber(String(this.telotros), true);
        console.log(this.telotros);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Neurocirugía HCJIM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Directorio</h1>\n\n    <ion-list>\n        <ion-item>\n          Información de adscritos\n          <button ion-button item-end icon-left (click)="showadscritos ()" >\n            \n            Mostrar\n          </button>\n        </ion-item>\n        <ion-item>\n            Información de proveedores\n            <button ion-button item-end icon-left (click)="showproveedores ()" >\n              \n              Mostrar\n            </button>\n          </ion-item>\n          <ion-item>\n            Otros\n            <button ion-button item-end icon-left (click)="showotros ()" >\n              \n              Mostrar\n            </button>\n          </ion-item>\n\n\n\n\n      </ion-list>\n  \n\n\n    <ion-card *ngIf="ocultar1">\n        <ion-card-header>\n          Adscritos\n        </ion-card-header>\n      \n        <ion-list>\n          <ion-item *ngFor="let item of adscritos" >\n            <ion-icon name="md-contacts" item-start></ion-icon>\n            \n            <h2> {{item.nombre}} </h2>  \n            <h3>Tel:{{item.telefono}} </h3>\n            <h4>RUD: {{item.rud}} </h4>\n          </ion-item>\n      \n        </ion-list>\n      </ion-card>\n\n      <ion-card *ngIf="ocultar2">\n          <ion-card-header>\n            Proveedores\n          </ion-card-header>\n        \n          <ion-list>\n            <ion-item *ngFor="let item of proveedores" >\n              <ion-icon name="md-call" item-start></ion-icon>\n              <button ion-button item-end (click)="callprov(item.id)" >Llamar</button>\n              <h2 > {{item.nombre}} </h2> \n              <h3> {{item.empresa}} </h3> \n              <h4>{{item.telefono}} </h4>\n            </ion-item>\n        \n          </ion-list>\n        </ion-card>\n\n        <ion-card *ngIf="ocultar3">\n          <ion-card-header>\n            Otros\n          </ion-card-header>\n        \n          <ion-list>\n            <ion-item *ngFor="let item of otros" >\n              <ion-icon name="md-call" item-start></ion-icon>\n              <button ion-button item-end (click)="callotros(item.id)" >Llamar</button>\n              <h2 > {{item.nombre}} </h2> \n              <h3> {{item.empresa}} </h3> \n              <h4>{{item.telefono}} </h4>\n            </ion-item>\n        \n          </ion-list>\n        </ion-card>\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notes_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, viewCtrl, modalCtrl, platform, noteService, alertCtrl, afAuth, toast, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.noteService = noteService;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.navParams = navParams;
        this.notes = [];
        this.noteService.getNotes().valueChanges()
            .subscribe(function (notas) {
            _this.notes = notas;
        });
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.usuariouid = data.uid;
                console.log(_this.usuariouid);
                _this.toast.create({
                    message: "Inicio se sesión exitoso!",
                    duration: 500,
                    position: 'bottom'
                }).present();
            }
        });
    };
    HomePage.prototype.verpaciente = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { id: id });
        modal.present();
    };
    ;
    HomePage.prototype.nuevopac = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { id: 0 });
        modal.present();
    };
    HomePage.prototype.acomodar = function () {
        this.notes.sort(function (a, b) {
            return a.cama - b.cama;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Neurocirugía HCJIM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Pacientes pre-quirúrgicos <br>(hospitalizados)</h1>\n    \n  \n  <ion-card *ngFor = "let note of notes ">\n      \n        <ion-card-content>\n                <ion-item>\n                        \n                        <ion-icon name="md-checkbox" item-end *ngIf="note.pendiente"></ion-icon>\n                        <h1> Cama: {{note.cama}} </h1>\n                        <h2> {{note.nombre}} </h2>\n                        <h3> {{note.registro}} </h3>\n                        <p> Fecha probable de Cx: </p>\n                        <p>{{note.fechacx}} </p>\n                    </ion-item>\n                    \n                   \n\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col >\n                <button ion-button item-end (click)= \'verpaciente(note.id)\' block >Ver checklist</button>\n                \n            </ion-col>\n        </ion-row>\n\n        \n      \n  </ion-card>\n  <ion-fab right bottom>\n\n      <button ion-fab color="secondary"><ion-icon name="md-arrow-round-up"></ion-icon></button>\n\n      <ion-fab-list side="top" >\n          \n          <button ion-fab color="secondary" (click)= "nuevopac()" ><ion-icon name="md-person-add"></ion-icon></button>\n          <button ion-fab color="primary" (click)= "acomodar()" ><ion-icon name="md-refresh"></ion-icon></button>\n      </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(380);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_preguntas_preguntas__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal4_modal4__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_page_ingresar_modal_page_ingresar__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_notes_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_preguntas_service__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyDWA4wmWdgaJt9sWRv_I5xy_3OM4l-G1Ow",
    authDomain: "nxcxjim.firebaseapp.com",
    databaseURL: "https://nxcxjim.firebaseio.com",
    storageBucket: "nxcxjim.appspot.com",
    messagingSenderId: "873366827067"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_preguntas_preguntas__["a" /* PreguntasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal4_modal4__["a" /* Modal4Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal4/modal4.module#Modal4PageModule', name: 'Modal4Page', segment: 'modal4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preguntas/preguntas.module#PreguntasPageModule', name: 'PreguntasPage', segment: 'preguntas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_preguntas_preguntas__["a" /* PreguntasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal4_modal4__["a" /* Modal4Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__services_notes_service__["a" /* NotesService */],
                __WEBPACK_IMPORTED_MODULE_22__services_preguntas_service__["a" /* PreguntasService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_page_ingresar_modal_page_ingresar__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map