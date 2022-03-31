(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_unfillLike",(function(){u._likeButton.classList.remove("element__vector_active")})),t(this,"_fillLike",(function(){u._likeButton.classList.add("element__vector_active")})),t(this,"deleteElement",(function(){u._element.remove(),u._element=null})),t(this,"_setEventListeners",(function(){u._likeButton.addEventListener("click",(function(){u._handleLikeClick(u._id)})),u._deleteButton.addEventListener("click",(function(){u._handleDeleteClick(u._id)})),u._elementImage.addEventListener("click",(function(){u._handleCardClick(u._link,u._name)}))})),t(this,"_fillCardData",(function(){u._elementImage.src=u._link,u._elementTitle.textContent=u._name,u._elementImage.alt="Фотография с изображением "+u._name})),t(this,"createElement",(function(){return u._element=document.querySelector(u._template).content.querySelector(".element").cloneNode(!0),u._elementImage=u._element.querySelector(".element__image"),u._elementTitle=u._element.querySelector(".element__title"),u._likeButton=u._element.querySelector(".element__vector"),u._deleteButton=u._element.querySelector(".element__delete"),u._fillCardData(),u._setEventListeners(),u.setLikes(u._likes),u._ownerId!==u._userId&&(u._deleteButton.style.display="none"),u._element})),this._link=e.link,this._name=e.name,this._likes=e.likes,this._alt=e.alt,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._template=r,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=a}var r,o;return r=n,(o=[{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._fillLike():this._unfillLike()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"disableSubmitButton",(function(){var e=r._settings.inactiveButtonClass;r._buttonElement.classList.add(e),r._buttonElement.disabled=!0})),o(this,"enableSubmitButton",(function(){var e=r._settings.inactiveButtonClass;r._buttonElement.classList.remove(e),r._buttonElement.disabled=!1})),o(this,"_toggleButtonState",(function(){r._form.checkValidity()?r.enableSubmitButton():r.disableSubmitButton()})),o(this,"_showInputError",(function(e){var t=r._settings,n=t.errorClass,o=t.inputErrorClass;r._errorElement.classList.add(n),r._errorElement.textContent=e.validationMessage,e.classList.add(o)})),o(this,"_hideInputError",(function(e){var t=r._settings,n=t.errorClass,o=t.inputErrorClass;r._errorElement.classList.remove(n),r._errorElement.textContent="",e.classList.remove(o)})),o(this,"_isValid",(function(e){r._errorElement=r._form.querySelector(".".concat(e.id,"-error")),e.validity.valid?r._hideInputError(e):r._showInputError(e),r._toggleButtonState()})),o(this,"errorMessageClean",(function(){var e=r._settings.errorCleanClass;r.errorMessage=Array.from(r._form.querySelectorAll(e)),r.errorMessage.forEach((function(e){e.textContent=""}))})),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._buttonElement=this._form.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t)})),e._toggleButtonState()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialCards.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t.nameSelector),this._userJob=document.querySelector(t.jobSelector),this._userAvatar=document.querySelector(t.avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userJob.textContent=t}},{key:"setAvatar",value:function(e){this._userAvatar.src=e}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),s=document.querySelector(".popup_type_edit"),f=document.querySelector(".popup_type_add"),p=document.querySelector(".popup_type_image"),d=document.querySelector(".popup_type_delete-confirm"),h=document.querySelector(".popup_type_avatar"),_=(Array.from(document.querySelectorAll(".popup")),s.querySelector(".form")),m=f.querySelector(".form"),y=d.querySelector(".form"),b=h.querySelector(".form"),v=document.querySelector(".profile__info-edit-button"),k=document.querySelector(".profile__add-button"),g=document.querySelector(".profile__avatar-edit-button"),S=p.querySelector(".popup__big-image"),w=p.querySelector(".popup__big-image-title"),E=_.querySelector("#name"),L=_.querySelector("#occupation"),C=(b.querySelector("#avatar"),m.querySelector("#element-name"),m.querySelector("#element-link"),s.querySelector(".popup__submit-button"),f.querySelector(".popup__submit-button"),{formSelector:".form",inputSelector:".form__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"form__field_type_error",errorClass:"form__field-error_active",errorCleanClass:".form__field-error_active"});function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t,this._closeButton=this._popupSelector.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(t.target)})),this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function U(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._link=t,r._name=n,r}return t=a,(n=[{key:"open",value:function(e,t){I(x(a.prototype),"open",this).call(this),this._link.src=e,this._name.textContent=t}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(O);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function J(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function a(e,t){var n,r=e.popupForm,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._popupForm=r,n._handleFormSubmit=o,n._buttonElement=n._popupForm.querySelector(".popup__submit-button"),n._buttonElementText=n._buttonElement.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupForm.querySelectorAll(".form__field"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"changeSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"renderLoading",value:function(e){return this._buttonElement.textContent=e?"Сохранение...":this._buttonElementText}},{key:"close",value:function(){D(M(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;D(M(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(O);function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G,K=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"48cc0b45-e42b-4c5c-b541-675efa4f46b4","Content-Type":"application/json"}});K.getProfile().then((function(e){$.setUserInfo(e.name,e.about),$.setAvatar(e.avatar),G=e._id})),K.getCards().then((function(e){e.forEach((function(e){var t=X({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:G,ownerId:e.owner._id});Y.renderItems(t)}))}));var Q=new R(p,S,w);Q.setEventListeners();var W=function(e,t){Q.open(e,t),S.alt="Фотография с изображением ".concat(t)},X=function(e){var t=new n(e,"#place",W,(function(e){ne.open(),ne.changeSubmitHandler((function(){K.deleteCard(e).then((function(e){t.deleteElement(e),ne.close()}))}))}),(function(e){t.isLiked()?K.deleteLike(e).then((function(e){t.setLikes(e.likes)})):K.addLike(e).then((function(e){t.setLikes(e.likes)}))})),r=t.createElement();Y.addItem(r)},Y=new u({items:[],renderer:X},".elements");g.addEventListener("click",(function(){ie.errorMessageClean(),b.reset(),Z.open()}));var Z=new H({popupForm:b,handleFormSubmit:function(e){Z.renderLoading(!0),K.editAvatar(e.avatar).then((function(){$.setAvatar(e.avatar)})).finally((function(){Z.renderLoading(!1),Z.close()}))}},h);Z.setEventListeners(),v.addEventListener("click",(function(){re.errorMessageClean(),re.enableSubmitButton(),ee.open(),E.value=$.getUserInfo().userName,L.value=$.getUserInfo().userJob}));var $=new l({nameSelector:".profile__info-title",jobSelector:".profile__info-subtitle",avatarSelector:".profile__avatar"});$.getUserInfo();var ee=new H({popupForm:_,handleFormSubmit:function(e){ee.renderLoading(!0),K.editProfile(e.name,e.occupation).then((function(t){$.setUserInfo(e.name,e.occupation)})).finally((function(e){ee.renderLoading(!1),ee.close()}))}},s);ee.setEventListeners(),k.addEventListener("click",(function(){oe.disableSubmitButton(),oe.errorMessageClean(),m.reset(),te.open()}));var te=new H({popupForm:m,handleFormSubmit:function(e){te.renderLoading(!0),K.addCard(e["element-name"],e["element-link"]).then((function(e){X({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:G,ownerId:e.owner_id})})).finally((function(){te.renderLoading(!1),te.close()}))}},f);te.setEventListeners();var ne=new H({popupForm:y},d);ne.setEventListeners();var re=new i(C,_),oe=new i(C,m),ie=new i(C,b);re.enableValidation(),oe.enableValidation(),ie.enableValidation()})();