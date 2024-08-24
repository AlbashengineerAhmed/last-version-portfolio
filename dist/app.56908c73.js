// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/images/avatars/1.png":[function(require,module,exports) {
module.exports = "/1.df23daac.png";
},{}],"assets/images/avatars/2.png":[function(require,module,exports) {
module.exports = "/2.a6d77134.png";
},{}],"assets/images/avatars/3.png":[function(require,module,exports) {
module.exports = "/3.3b8c18db.png";
},{}],"assets/images/avatars/4.png":[function(require,module,exports) {
module.exports = "/4.143b2156.png";
},{}],"assets/images/avatars/5.png":[function(require,module,exports) {
module.exports = "/5.e7bd33e0.png";
},{}],"assets/images/avatars/6.png":[function(require,module,exports) {
module.exports = "/6.98fc865b.png";
},{}],"assets/images/avatars/7.png":[function(require,module,exports) {
module.exports = "/7.0532b546.png";
},{}],"assets/images/avatars/8.png":[function(require,module,exports) {
module.exports = "/8.db512d58.png";
},{}],"assets/images/avatars/9.png":[function(require,module,exports) {
module.exports = "/9.bf0b46ef.png";
},{}],"assets/images/avatars/10.png":[function(require,module,exports) {
module.exports = "/10.7e2e114b.png";
},{}],"assets/images/avatars/11.png":[function(require,module,exports) {
module.exports = "/11.fd46832c.png";
},{}],"assets/images/wallpapers/220.jpg":[function(require,module,exports) {
module.exports = "/220.92d465e1.jpg";
},{}],"assets/images/wallpapers/227.jpg":[function(require,module,exports) {
module.exports = "/227.3caf29a1.jpg";
},{}],"assets/images/wallpapers/26.jpg":[function(require,module,exports) {
module.exports = "/26.ecb5dca4.jpg";
},{}],"assets/images/wallpapers/44.jpg":[function(require,module,exports) {
module.exports = "/44.78560deb.jpg";
},{}],"assets/images/wallpapers/213.png":[function(require,module,exports) {
module.exports = "/213.93c3418b.png";
},{}],"assets/js/images.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.images = void 0;
var _ = _interopRequireDefault(require("../images/avatars/1.png"));
var _2 = _interopRequireDefault(require("../images/avatars/2.png"));
var _3 = _interopRequireDefault(require("../images/avatars/3.png"));
var _4 = _interopRequireDefault(require("../images/avatars/4.png"));
var _5 = _interopRequireDefault(require("../images/avatars/5.png"));
var _6 = _interopRequireDefault(require("../images/avatars/6.png"));
var _7 = _interopRequireDefault(require("../images/avatars/7.png"));
var _8 = _interopRequireDefault(require("../images/avatars/8.png"));
var _9 = _interopRequireDefault(require("../images/avatars/9.png"));
var _10 = _interopRequireDefault(require("../images/avatars/10.png"));
var _11 = _interopRequireDefault(require("../images/avatars/11.png"));
var _12 = _interopRequireDefault(require("../images/wallpapers/220.jpg"));
var _13 = _interopRequireDefault(require("../images/wallpapers/227.jpg"));
var _14 = _interopRequireDefault(require("../images/wallpapers/26.jpg"));
var _15 = _interopRequireDefault(require("../images/wallpapers/44.jpg"));
var _16 = _interopRequireDefault(require("../images/wallpapers/213.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const images = {
  avatar1: _.default,
  avatar2: _2.default,
  avatar3: _3.default,
  avatar4: _4.default,
  avatar5: _5.default,
  avatar6: _6.default,
  avatar7: _7.default,
  avatar8: _8.default,
  avatar9: _9.default,
  avatar10: _10.default,
  avatar11: _11.default,
  bg1: _12.default,
  bg2: _13.default,
  bg3: _14.default,
  bg4: _15.default,
  bg5: _16.default
};
exports.images = images;
},{"../images/avatars/1.png":"assets/images/avatars/1.png","../images/avatars/2.png":"assets/images/avatars/2.png","../images/avatars/3.png":"assets/images/avatars/3.png","../images/avatars/4.png":"assets/images/avatars/4.png","../images/avatars/5.png":"assets/images/avatars/5.png","../images/avatars/6.png":"assets/images/avatars/6.png","../images/avatars/7.png":"assets/images/avatars/7.png","../images/avatars/8.png":"assets/images/avatars/8.png","../images/avatars/9.png":"assets/images/avatars/9.png","../images/avatars/10.png":"assets/images/avatars/10.png","../images/avatars/11.png":"assets/images/avatars/11.png","../images/wallpapers/220.jpg":"assets/images/wallpapers/220.jpg","../images/wallpapers/227.jpg":"assets/images/wallpapers/227.jpg","../images/wallpapers/26.jpg":"assets/images/wallpapers/26.jpg","../images/wallpapers/44.jpg":"assets/images/wallpapers/44.jpg","../images/wallpapers/213.png":"assets/images/wallpapers/213.png"}],"assets/js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reviews = void 0;
var _images = require("./images");
let reviews = [{
  name: "John Smith",
  position: "Web Designer",
  image: _images.images.avatar1,
  review: "The project portfolio website is a testament to the developer's creativity in web design. It elegantly showcases a diverse array of projects, each with insightful descriptions. The visually appealing layout, user-friendly navigation, and clever interactive elements combine to deliver an exceptional user experience. Its emphasis on code quality and accessibility demonstrates its readiness to impress potential clients and employers."
}, {
  name: "Emily Johnson",
  position: "Software Engineer",
  image: _images.images.avatar2,
  review: "As a fellow developer, I'm truly impressed by this project portfolio website. It skillfully exhibits a wide range of projects, offering comprehensive insights into each one. The minimalist design, smooth navigation, and creative use of interactive features make for an enjoyable user journey. The dedication to code quality and accessibility sets a high standard for anyone in the field."
}, {
  name: "Sophia Lee",
  position: "UI/UX Designer",
  image: _images.images.avatar3,
  review: "This project portfolio website is a testament to the developer's keen eye for design. It elegantly presents an assortment of projects, each with informative descriptions. The sleek design, intuitive user experience, and tasteful interactive elements result in an engaging user journey. Its commitment to code quality and accessibility is evident and commendable."
}, {
  name: "Maria Rodriguez",
  position: "Front-end Developer",
  image: _images.images.avatar4,
  review: "I'm thoroughly impressed by this project portfolio website. It masterfully presents an array of projects, each with insightful descriptions. The modern design, seamless navigation, and creative use of interactive elements result in a captivating user experience. Its dedication to code quality and accessibility sets a high standard in the web development community."
}, {
  name: "Daniel Chen",
  position: "Digital Marketer",
  image: _images.images.avatar5,
  review: "The project portfolio website is a fine example of the developer's web development expertise. It elegantly showcases various projects, offering in-depth descriptions for each. The user-friendly design, intuitive navigation, and interactive elements make it a joy to explore. Its focus on code quality and accessibility ensures it stands out in the eyes of potential clients and employers."
}, {
  name: "David Anderson",
  position: "Project Manager",
  image: _images.images.avatar6,
  review: "The project portfolio website is a compelling showcase of the developer's skills. It expertly displays a variety of projects, providing comprehensive descriptions for each. The professional design, user-centric navigation, and subtle interactive features create a delightful user experience. Its strong emphasis on code quality and accessibility makes it a standout choice for potential clients and employers."
}, {
  name: "Waleed Ahmed",
  position: "Client",
  image: _images.images.avatar7,
  review: "he project portfolio website demonstrates a high level of skill in web development. It effectively showcases the developer's work, providing detailed insights into each project. The clean design, smooth navigation, and interactive elements make for an engaging user experience. With a strong emphasis on code quality and accessibility, this portfolio is well-prepared to impress potential clients or employers."
}, {
  name: "Mona Moustafa",
  position: "Client",
  image: _images.images.avatar8,
  review: "The project portfolio website serves as a testament to the developer's proficiency in web development. It effectively showcases an array of projects, providing comprehensive descriptions for each. The elegant design, user-friendly navigation, and interactive features contribute to a captivating user journey. With a strong commitment to code quality and accessibility, this portfolio is a compelling resource for potential clients and employers."
}, {
  name: "Ali Mahmoud",
  position: "Client",
  image: _images.images.avatar9,
  review: "Impressively crafted, this project portfolio website vividly reflects the developer's expertise in web development. It excels at presenting a diverse portfolio with detailed project descriptions. The clean and contemporary design, coupled with intuitive navigation and subtle interactive elements, crafts an immersive user experience. The portfolio's dedication to code quality and accessibility underscores its readiness to impress both clients and potential employers."
}, {
  name: "Mostaf Youssef",
  position: "Client",
  image: _images.images.avatar10,
  review: "This project portfolio website is a testament to the developer's web development prowess. It adeptly showcases a variety of projects, offering comprehensive insights into each one. The polished design, user-friendly navigation, and tasteful interactive features come together to provide an engaging user experience. Its commitment to code quality and accessibility demonstrates its readiness to leave a lasting impression on potential clients and employers."
}, {
  name: "Alaa Mohamed",
  position: "Client",
  image: _images.images.avatar11,
  review: "The project portfolio website is a showcase of the developer's web development skills. It masterfully presents a range of projects, offering detailed descriptions for each one. The clean and intuitive design, coupled with seamless navigation and interactive elements, creates an immersive user experience. With a strong focus on code quality and accessibility, this portfolio is well-prepared to leave a positive impression on both clients and prospective employers."
}];
exports.reviews = reviews;
},{"./images":"assets/js/images.js"}],"../node_modules/ev-emitter/ev-emitter.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );

},{}],"../node_modules/imagesloaded/imagesloaded.js":[function(require,module,exports) {
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( window, require('ev-emitter') );
  } else {
    // browser global
    window.imagesLoaded = factory( window, window.EvEmitter );
  }

} )( typeof window !== 'undefined' ? window : this,
    function factory( window, EvEmitter ) {

let $ = window.jQuery;
let console = window.console;

// -------------------------- helpers -------------------------- //

// turn element or nodeList into an array
function makeArray( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {[Array, Element, NodeList, String]} elem
 * @param {[Object, Function]} options - if function, use as callback
 * @param {Function} onAlways - callback function
 * @returns {ImagesLoaded}
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  let queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = {};
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    Object.assign( this.options, options );
  }

  if ( onAlways ) this.on( 'always', onAlways );

  this.getImages();
  // add jQuery Deferred object
  if ( $ ) this.jqDeferred = new $.Deferred();

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

const elementNodeTypes = [ 1, 9, 11 ];

/**
 * @param {Node} elem
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName === 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  let { nodeType } = elem;
  if ( !nodeType || !elementNodeTypes.includes( nodeType ) ) return;

  let childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( let img of childImgs ) {
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    let children = elem.querySelectorAll( this.options.background );
    for ( let child of children ) {
      this.addElementBackgroundImages( child );
    }
  }
};

const reURL = /url\((['"])?(.*?)\1\)/gi;

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  let style = getComputedStyle( elem );
  // Firefox returns null if in a hidden iframe https://bugzil.la/548397
  if ( !style ) return;

  // get url inside url("...")
  let matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    let url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  let loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  let background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  /* eslint-disable-next-line func-style */
  let onProgress = ( image, elem, message ) => {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( () => {
      this.progress( image, elem, message );
    } );
  };

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  } );
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount === this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( `progress: ${message}`, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  let eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  let isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  // add crossOrigin attribute. #204
  if ( this.img.crossOrigin ) {
    this.proxyImage.crossOrigin = this.img.crossOrigin;
  }
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.currentSrc || this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  let { parentNode } = this.img;
  // emit progress with parent <picture> or self <img>
  let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;
  this.emitEvent( 'progress', [ this, elem, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  let isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) return;

  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, onAlways ) {
    let instance = new ImagesLoaded( this, options, onAlways );
    return instance.jqDeferred.promise( $( this ) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

} );

},{"ev-emitter":"../node_modules/ev-emitter/ev-emitter.js"}],"../node_modules/mixitup/dist/mixitup.js":[function(require,module,exports) {
var define;
/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function(window) {
    'use strict';

    var mixitup = null,
        h       = null;

    (function() {
        var VENDORS = ['webkit', 'moz', 'o', 'ms'],
            canary  = window.document.createElement('div'),
            i       = -1;

        // window.requestAnimationFrame

        for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
            window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame'];
        }

        // Element.nextElementSibling

        if (typeof canary.nextElementSibling === 'undefined') {
            Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
                get: function() {
                    var el = this.nextSibling;

                    while (el) {
                        if (el.nodeType === 1) {
                            return el;
                        }

                        el = el.nextSibling;
                    }

                    return null;
                }
            });
        }

        // Element.matches

        (function(ElementPrototype) {
            ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.machesSelector ||
                ElementPrototype.mozMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                ElementPrototype.oMatchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                function (selector) {
                    return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                };
        })(window.Element.prototype);

        // Object.keys
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

        if (!Object.keys) {
            Object.keys = (function() {
                var hasOwnProperty      = Object.prototype.hasOwnProperty,
                    hasDontEnumBug      = false,
                    dontEnums           = [],
                    dontEnumsLength     = -1;

                hasDontEnumBug = !({
                    toString: null
                })
                    .propertyIsEnumerable('toString');

                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ];

                dontEnumsLength = dontEnums.length;

                return function(obj) {
                    var result  = [],
                        prop    = '',
                        i       = -1;

                    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                        throw new TypeError('Object.keys called on non-object');
                    }

                    for (prop in obj) {
                        if (hasOwnProperty.call(obj, prop)) {
                            result.push(prop);
                        }
                    }

                    if (hasDontEnumBug) {
                        for (i = 0; i < dontEnumsLength; i++) {
                            if (hasOwnProperty.call(obj, dontEnums[i])) {
                                result.push(dontEnums[i]);
                            }
                        }
                    }

                    return result;
                };
            }());
        }

        // Array.isArray
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        // Object.create
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create

        if (typeof Object.create !== 'function') {
            Object.create = (function(undefined) {
                var Temp = function() {};

                return function (prototype, propertiesObject) {
                    if (prototype !== Object(prototype) && prototype !== null) {
                        throw TypeError('Argument must be an object, or null');
                    }

                    Temp.prototype = prototype || {};

                    var result = new Temp();

                    Temp.prototype = null;

                    if (propertiesObject !== undefined) {
                        Object.defineProperties(result, propertiesObject);
                    }

                    if (prototype === null) {
                        /* jshint ignore:start */
                        result.__proto__ = null;
                        /* jshint ignore:end */
                    }

                    return result;
                };
            })();
        }

        // String.prototyoe.trim

        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        // Array.prototype.indexOf
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(searchElement) {
                var n, k, t, len;

                if (this === null) {
                    throw new TypeError();
                }

                t = Object(this);

                len = t.length >>> 0;

                if (len === 0) {
                    return -1;
                }

                n = 0;

                if (arguments.length > 1) {
                    n = Number(arguments[1]);

                    if (n !== n) {
                        n = 0;
                    } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }

                if (n >= len) {
                    return -1;
                }

                for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k;
                    }
                }

                return -1;
            };
        }

        // Function.prototype.bind
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

        if (!Function.prototype.bind) {
            Function.prototype.bind = function(oThis) {
                var aArgs, self, FNOP, fBound;

                if (typeof this !== 'function') {
                    throw new TypeError();
                }

                aArgs = Array.prototype.slice.call(arguments, 1);

                self = this;

                FNOP = function() {};

                fBound = function() {
                    return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                };

                if (this.prototype) {
                    FNOP.prototype = this.prototype;
                }

                fBound.prototype = new FNOP();

                return fBound;
            };
        }

        // Element.prototype.dispatchEvent

        if (!window.Element.prototype.dispatchEvent) {
            window.Element.prototype.dispatchEvent = function(event) {
                try {
                    return this.fireEvent('on' + event.type, event);
                } catch (err) {}
            };
        }
    })();

    /**
     * The `mixitup()` "factory" function creates and returns individual instances
     * of MixItUp, known as "mixers", on which API methods can be called.
     *
     * When loading MixItUp via a script tag, the factory function is accessed
     * via the global variable `mixitup`. When using a module loading
     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
     * exported into your module when you require the MixItUp library.
     *
     * @example
     * mixitup(container [,config] [,foreignDoc])
     *
     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
     * var containerEl = document.querySelector('.container');
     *
     * var mixer = mixitup(containerEl);
     *
     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 3: Passing a configuration object</caption>
     * var mixer = mixitup(containerEl, {
     *     animation: {
     *         effects: 'fade scale(0.5)'
     *     }
     * });
     *
     * @example <caption>Example 4: Passing an iframe reference</caption>
     * var mixer = mixitup(containerEl, config, foreignDocument);
     *
     * @global
     * @namespace
     * @public
     * @kind        function
     * @since       3.0.0
     * @param       {(Element|string)}  container
     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
     * @param       {object}            [config]
     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
     * @param       {object}            [foreignDoc]
     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
     * @return      {mixitup.Mixer}
     *      A "mixer" object holding the MixItUp instance.
     */

    mixitup = function(container, config, foreignDoc) {
        var el                  = null,
            returnCollection    = false,
            instance            = null,
            facade              = null,
            doc                 = null,
            output              = null,
            instances           = [],
            id                  = '',
            elements            = [],
            i                   = -1;

        doc = foreignDoc || window.document;

        if (returnCollection = arguments[3]) {
            // A non-documented 4th paramater enabling control of multiple instances

            returnCollection = typeof returnCollection === 'boolean';
        }

        if (typeof container === 'string') {
            elements = doc.querySelectorAll(container);
        } else if (container && typeof container === 'object' && h.isElement(container, doc)) {
            elements = [container];
        } else if (container && typeof container === 'object' && container.length) {
            // Although not documented, the container may also be an array-like list of
            // elements such as a NodeList or jQuery collection, is returnCollection is true

            elements = container;
        } else {
            throw new Error(mixitup.messages.errorFactoryInvalidContainer());
        }

        if (elements.length < 1) {
            throw new Error(mixitup.messages.errorFactoryContainerNotFound());
        }

        for (i = 0; el = elements[i]; i++) {
            if (i > 0 && !returnCollection) break;

            if (!el.id) {
                id = 'MixItUp' + h.randomHex();

                el.id = id;
            } else {
                id = el.id;
            }

            if (mixitup.instances[id] instanceof mixitup.Mixer) {
                instance = mixitup.instances[id];

                if (!config || (config && config.debug && config.debug.showWarnings !== false)) {
                    console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                }
            } else {
                instance = new mixitup.Mixer();

                instance.attach(el, doc, id, config);

                mixitup.instances[id] = instance;
            }

            facade = new mixitup.Facade(instance);

            if (config && config.debug && config.debug.enable) {
                instances.push(instance);
            } else {
                instances.push(facade);
            }
        }

        if (returnCollection) {
            output = new mixitup.Collection(instances);
        } else {
            // Return the first instance regardless

            output = instances[0];
        }

        return output;
    };

    /**
     * The `.use()` static method is used to extend the functionality of mixitup with compatible
     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
     *
     * You need only call the `.use()` function once per project, per extension, as module loaders
     * will cache a single reference to MixItUp inclusive of all changes made.
     *
     * @example
     * mixitup.use(extension)
     *
     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
     *
     * import mixitup from 'mixitup';
     * import mixitupPagination from 'mixitup-pagination';
     *
     * mixitup.use(mixitupPagination);
     *
     * // All mixers created by the factory function in all modules will now
     * // have pagination functionality
     *
     * var mixer = mixitup('.container');
     *
     * @public
     * @name     use
     * @memberof mixitup
     * @kind     function
     * @static
     * @since    3.0.0
     * @param    {*}  extension   A reference to the extension or library to be used.
     * @return   {void}
     */

    mixitup.use = function(extension) {
        mixitup.Base.prototype.callActions.call(mixitup, 'beforeUse', arguments);

        // Call the extension's factory function, passing
        // the mixitup factory as a paramater

        if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
            // Mixitup extension

            if (typeof mixitup.extensions[extension.NAME] === 'undefined') {
                extension(mixitup);

                mixitup.extensions[extension.NAME] = extension;
            }
        } else if (extension.fn && extension.fn.jquery) {
            // jQuery

            mixitup.libraries.$ = extension;
        }

        mixitup.Base.prototype.callActions.call(mixitup, 'afterUse', arguments);
    };

    mixitup.instances   = {};
    mixitup.extensions  = {};
    mixitup.libraries   = {};

    /**
     * @private
     */

    h = {

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {boolean}
         */

        hasClass: function(el, cls) {
            return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        addClass: function(el, cls) {
            if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls;
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        removeClass: function(el, cls) {
            if (this.hasClass(el, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');

                el.className = el.className.replace(reg, ' ').trim();
            }
        },

        /**
         * Merges the properties of the source object onto the
         * target object. Alters the target object.
         *
         * @private
         * @param   {object}    destination
         * @param   {object}    source
         * @param   {boolean}   [deep=false]
         * @param   {boolean}   [handleErrors=false]
         * @return  {void}
         */

        extend: function(destination, source, deep, handleErrors) {
            var sourceKeys  = [],
                key         = '',
                i           = -1;

            deep = deep || false;
            handleErrors = handleErrors || false;

            try {
                if (Array.isArray(source)) {
                    for (i = 0; i < source.length; i++) {
                        sourceKeys.push(i);
                    }
                } else if (source) {
                    sourceKeys = Object.keys(source);
                }

                for (i = 0; i < sourceKeys.length; i++) {
                    key = sourceKeys[i];

                    if (!deep || typeof source[key] !== 'object' || this.isElement(source[key])) {
                        // All non-object properties, or all properties if shallow extend

                        destination[key] = source[key];
                    } else if (Array.isArray(source[key])) {
                        // Arrays

                        if (!destination[key]) {
                            destination[key] = [];
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    } else {
                        // Objects

                        if (!destination[key]) {
                            destination[key] = {};
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    }
                }
            } catch(err) {
                if (handleErrors) {
                    this.handleExtendError(err, destination);
                } else {
                    throw err;
                }
            }

            return destination;
        },

        /**
         * @private
         * @param   {Error}  err
         * @param   {object} destination
         * @return  {void}
         */

        handleExtendError: function(err, destination) {
            var re                  = /property "?(\w*)"?[,:] object/i,
                matches             = null,
                erroneous           = '',
                message             = '',
                suggestion          = '',
                probableMatch       = '',
                key                 = '',
                mostMatchingChars   = -1,
                i                   = -1;

            if (err instanceof TypeError && (matches = re.exec(err.message))) {
                erroneous = matches[1];

                for (key in destination) {
                    i = 0;

                    while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
                        i++;
                    }

                    if (i > mostMatchingChars) {
                        mostMatchingChars = i;
                        probableMatch = key;
                    }
                }

                if (mostMatchingChars > 1) {
                    suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: probableMatch
                    });
                }

                message = mixitup.messages.errorConfigInvalidProperty({
                    erroneous: erroneous,
                    suggestion: suggestion
                });

                throw new TypeError(message);
            }

            throw err;
        },

        /**
         * @private
         * @param   {string} str
         * @return  {function}
         */

        template: function(str) {
            var re          = /\${([\w]*)}/g,
                dynamics    = {},
                matches     = null;

            while ((matches = re.exec(str))) {
                dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g');
            }

            return function(data) {
                var key     = '',
                    output  = str;

                data = data || {};

                for (key in dynamics) {
                    output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '');
                }

                return output;
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @param   {boolean}       useCapture
         * @return  {void}
         */

        on: function(el, type, fn, useCapture) {
            if (!el) return;

            if (el.addEventListener) {
                el.addEventListener(type, fn, useCapture);
            } else if (el.attachEvent) {
                el['e' + type + fn] = fn;

                el[type + fn] = function() {
                    el['e' + type + fn](window.event);
                };

                el.attachEvent('on' + type, el[type + fn]);
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @return  {void}
         */

        off: function(el, type, fn) {
            if (!el) return;

            if (el.removeEventListener) {
                el.removeEventListener(type, fn, false);
            } else if (el.detachEvent) {
                el.detachEvent('on' + type, el[type + fn]);
                el[type + fn] = null;
            }
        },

        /**
         * @private
         * @param   {string}      eventType
         * @param   {object}      detail
         * @param   {Document}    [doc]
         * @return  {CustomEvent}
         */

        getCustomEvent: function(eventType, detail, doc) {
            var event = null;

            doc = doc || window.document;

            if (typeof window.CustomEvent === 'function') {
                event = new window.CustomEvent(eventType, {
                    detail: detail,
                    bubbles: true,
                    cancelable: true
                });
            } else if (typeof doc.createEvent === 'function') {
                event = doc.createEvent('CustomEvent');
                event.initCustomEvent(eventType, true, true, detail);
            } else {
                event = doc.createEventObject(),
                event.type = eventType;

                event.returnValue = false;
                event.cancelBubble = false;
                event.detail = detail;
            }

            return event;
        },

        /**
         * @private
         * @param   {Event} e
         * @return  {Event}
         */

        getOriginalEvent: function(e) {
            if (e.touches && e.touches.length) {
                return e.touches[0];
            } else if (e.changedTouches && e.changedTouches.length) {
                return e.changedTouches[0];
            } else {
                return e;
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        selector
         * @return  {Number}
         */

        index: function(el, selector) {
            var i = 0;

            while ((el = el.previousElementSibling) !== null) {
                if (!selector || el.matches(selector)) {
                    ++i;
                }
            }

            return i;
        },

        /**
         * Converts a dash or snake-case string to camel case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        camelCase: function(str) {
            return str.toLowerCase().replace(/([_-][a-z])/g, function($1) {
                return $1.toUpperCase().replace(/[_-]/, '');
            });
        },

        /**
         * Converts a dash or snake-case string to pascal case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        pascalCase: function(str) {
            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Converts a camel or pascal-case string to dash case.
         *
         * @private
         * @param   {string}    str
         * @return  {string}
         */

        dashCase: function(str) {
            return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {boolean}
         */

        isElement: function(el, doc) {
            doc = doc || window.document;

            if (
                window.HTMLElement &&
                el instanceof window.HTMLElement
            ) {
                return true;
            } else if (
                doc.defaultView &&
                doc.defaultView.HTMLElement &&
                el instanceof doc.defaultView.HTMLElement
            ) {
                return true;
            } else {
                return (
                    el !== null &&
                    el.nodeType === 1 &&
                    typeof el.nodeName === 'string'
                );
            }
        },

        /**
         * @private
         * @param   {string}            htmlString
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {DocumentFragment}
         */

        createElement: function(htmlString, doc) {
            var frag = null,
                temp = null;

            doc = doc || window.document;

            frag = doc.createDocumentFragment();
            temp = doc.createElement('div');

            temp.innerHTML = htmlString.trim();

            while (temp.firstChild) {
                frag.appendChild(temp.firstChild);
            }

            return frag;
        },

        /**
         * @private
         * @param   {Node} node
         * @return  {void}
         */

        removeWhitespace: function(node) {
            var deleting;

            while (node && node.nodeName === '#text') {
                deleting = node;

                node = node.previousSibling;

                deleting.parentElement && deleting.parentElement.removeChild(deleting);
            }
        },

        /**
         * @private
         * @param   {Array<*>}  a
         * @param   {Array<*>}  b
         * @return  {boolean}
         */

        isEqualArray: function(a, b) {
            var i = a.length;

            if (i !== b.length) return false;

            while (i--) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {object}  a
         * @param   {object}  b
         * @return  {boolean}
         */

        deepEquals: function(a, b) {
            var key;

            if (typeof a === 'object' && a && typeof b === 'object' && b) {
                if (Object.keys(a).length !== Object.keys(b).length) return false;

                for (key in a) {
                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                }
            } else if (a !== b) {
                return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {Array<*>}  oldArray
         * @return  {Array<*>}
         */

        arrayShuffle: function(oldArray) {
            var newArray    = oldArray.slice(),
                len         = newArray.length,
                i           = len,
                p           = -1,
                t           = [];

            while (i--) {
                p = ~~(Math.random() * len);
                t = newArray[i];

                newArray[i] = newArray[p];
                newArray[p] = t;
            }

            return newArray;
        },

        /**
         * @private
         * @param   {object}    list
         */

        arrayFromList: function(list) {
            var output, i;

            try {
                return Array.prototype.slice.call(list);
            } catch(err) {
                output = [];

                for (i = 0; i < list.length; i++) {
                    output.push(list[i]);
                }

                return output;
            }
        },

        /**
         * @private
         * @param   {function}  func
         * @param   {Number}    wait
         * @param   {boolean}   immediate
         * @return  {function}
         */

        debounce: function(func, wait, immediate) {
            var timeout;

            return function() {
                var self     = this,
                    args     = arguments,
                    callNow  = immediate && !timeout,
                    later    = null;

                later = function() {
                    timeout  = null;

                    if (!immediate) {
                        func.apply(self, args);
                    }
                };

                clearTimeout(timeout);

                timeout = setTimeout(later, wait);

                if (callNow) func.apply(self, args);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   element
         * @return  {object}
         */

        position: function(element) {
            var xPosition       = 0,
                yPosition       = 0,
                offsetParent    = element;

            while (element) {
                xPosition -= element.scrollLeft;
                yPosition -= element.scrollTop;

                if (element === offsetParent) {
                    xPosition += element.offsetLeft;
                    yPosition += element.offsetTop;

                    offsetParent = element.offsetParent;
                }

                element = element.parentElement;
            }

            return {
                x: xPosition,
                y: yPosition
            };
        },

        /**
         * @private
         * @param   {object}    node1
         * @param   {object}    node2
         * @return  {Number}
         */

        getHypotenuse: function(node1, node2) {
            var distanceX = node1.x - node2.x,
                distanceY = node1.y - node2.y;

            distanceX = distanceX < 0 ? distanceX * -1 : distanceX,
            distanceY = distanceY < 0 ? distanceY * -1 : distanceY;

            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        },

        /**
         * Calcuates the area of intersection between two rectangles and expresses it as
         * a ratio in comparison to the area of the first rectangle.
         *
         * @private
         * @param   {Rect}  box1
         * @param   {Rect}  box2
         * @return  {number}
         */

        getIntersectionRatio: function(box1, box2) {
            var controlArea         = box1.width * box1.height,
                intersectionX       = -1,
                intersectionY       = -1,
                intersectionArea    = -1,
                ratio               = -1;

            intersectionX =
                Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));

            intersectionY =
                Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));

            intersectionArea = intersectionY * intersectionX;

            ratio = intersectionArea / controlArea;

            return ratio;
        },

        /**
         * @private
         * @param   {object}            el
         * @param   {string}            selector
         * @param   {boolean}           [includeSelf]
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {Element|null}
         */

        closestParent: function(el, selector, includeSelf, doc) {
            var parent  = el.parentNode;

            doc = doc || window.document;

            if (includeSelf && el.matches(selector)) {
                return el;
            }

            while (parent && parent != doc.body) {
                if (parent.matches && parent.matches(selector)) {
                    return parent;
                } else if (parent.parentNode) {
                    parent = parent.parentNode;
                } else {
                    return null;
                }
            }

            return null;
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {string}            selector
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {NodeList}
         */

        children: function(el, selector, doc) {
            var children    = [],
                tempId      = '';

            doc = doc || window.doc;

            if (el) {
                if (!el.id) {
                    tempId = 'Temp' + this.randomHexKey();

                    el.id = tempId;
                }

                children = doc.querySelectorAll('#' + el.id + ' > ' + selector);

                if (tempId) {
                    el.removeAttribute('id');
                }
            }

            return children;
        },

        /**
         * Creates a clone of a provided array, with any empty strings removed.
         *
         * @private
         * @param   {Array<*>} originalArray
         * @return  {Array<*>}
         */

        clean: function(originalArray) {
            var cleanArray = [],
                i = -1;

            for (i = 0; i < originalArray.length; i++) {
                if (originalArray[i] !== '') {
                    cleanArray.push(originalArray[i]);
                }
            }

            return cleanArray;
        },

        /**
         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
         *
         * @private
         * @param  {object} libraries
         * @return {h.Deferred}
         */

        defer: function(libraries) {
            var deferred       = null,
                promiseWrapper = null,
                $              = null;

            promiseWrapper = new this.Deferred();

            if (mixitup.features.has.promises) {
                // ES6 native promise or polyfill

                promiseWrapper.promise = new Promise(function(resolve, reject) {
                    promiseWrapper.resolve = resolve;
                    promiseWrapper.reject  = reject;
                });
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.Deferred === 'function') {
                // jQuery

                deferred = $.Deferred();

                promiseWrapper.promise = deferred.promise();
                promiseWrapper.resolve = deferred.resolve;
                promiseWrapper.reject  = deferred.reject;
            } else if (window.console) {
                // No implementation

                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return promiseWrapper;
        },

        /**
         * @private
         * @param   {Array<Promise>}    tasks
         * @param   {object}            libraries
         * @return  {Promise<Array>}
         */

        all: function(tasks, libraries) {
            var $ = null;

            if (mixitup.features.has.promises) {
                return Promise.all(tasks);
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.when === 'function') {
                return $.when.apply($, tasks)
                    .done(function() {
                        // jQuery when returns spread arguments rather than an array or resolutions

                        return arguments;
                    });
            }

            // No implementation

            if (window.console) {
                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return [];
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        property
         * @param   {Array<string>} vendors
         * @return  {string}
         */

        getPrefix: function(el, property, vendors) {
            var i       = -1,
                prefix  = '';

            if (h.dashCase(property) in el.style) return '';

            for (i = 0; prefix = vendors[i]; i++) {
                if (prefix + property in el.style) {
                    return prefix.toLowerCase();
                }
            }

            return 'unsupported';
        },

        /**
         * @private
         * @return  {string}
         */

        randomHex: function() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
        },

        /**
         * @private
         * @param   {HTMLDocument}  [doc]
         * @return  {object}
         */

        getDocumentState: function(doc) {
            doc = typeof doc.body === 'object' ? doc : window.document;

            return {
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset,
                docHeight: doc.documentElement.scrollHeight,
                docWidth: doc.documentElement.scrollWidth,
                viewportHeight: doc.documentElement.clientHeight,
                viewportWidth: doc.documentElement.clientWidth
            };
        },

        /**
         * @private
         * @param   {object}    obj
         * @param   {function}  fn
         * @return  {function}
         */

        bind: function(obj, fn) {
            return function() {
                return fn.apply(obj, arguments);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @return  {boolean}
         */

        isVisible: function(el) {
            var styles = null;

            if (el.offsetParent) return true;

            styles = window.getComputedStyle(el);

            if (
                styles.position === 'fixed' &&
                styles.visibility !== 'hidden' &&
                styles.opacity !== '0'
            ) {
                // Fixed elements report no offsetParent,
                // but may still be invisible

                return true;
            }

            return false;
        },

        /**
         * @private
         * @param   {object}    obj
         */

        seal: function(obj) {
            if (typeof Object.seal === 'function') {
                Object.seal(obj);
            }
        },

        /**
         * @private
         * @param   {object}    obj
         */

        freeze: function(obj) {
            if (typeof Object.freeze === 'function') {
                Object.freeze(obj);
            }
        },

        /**
         * @private
         * @param   {string}    control
         * @param   {string}    specimen
         * @return  {boolean}
         */

        compareVersions: function(control, specimen) {
            var controlParts    = control.split('.'),
                specimenParts   = specimen.split('.'),
                controlPart     = -1,
                specimenPart    = -1,
                i               = -1;

            for (i = 0; i < controlParts.length; i++) {
                controlPart     = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
                specimenPart    = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);

                if (specimenPart < controlPart) {
                    return false;
                } else if (specimenPart > controlPart) {
                    return true;
                }
            }

            return true;
        },

        /**
         * @private
         * @constructor
         */

        Deferred: function() {
            this.promise    = null;
            this.resolve    = null;
            this.reject     = null;
            this.id         = h.randomHex();
        },

        /**
         * @private
         * @param   {object}  obj
         * @return  {boolean}
         */

        isEmptyObject: function(obj) {
            var key = '';

            if (typeof Object.keys === 'function') {
                return Object.keys(obj).length === 0;
            }

            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }

            return true;
        },

        /**
         * @param   {mixitup.Config.ClassNames}   classNames
         * @param   {string}                      elementName
         * @param   {string}                      [modifier]
         * @return  {string}
         */

        getClassname: function(classNames, elementName, modifier) {
            var classname = '';

            classname += classNames.block;

            if (classname.length) {
                classname += classNames.delineatorElement;
            }

            classname += classNames['element' + this.pascalCase(elementName)];

            if (!modifier) return classname;

            if (classname.length) {
                classname += classNames.delineatorModifier;
            }

            classname += modifier;

            return classname;
        },

        /**
         * Returns the value of a property on a given object via its string key.
         *
         * @param   {object}    obj
         * @param   {string}    stringKey
         * @return  {*} value
         */

        getProperty: function(obj, stringKey) {
            var parts           = stringKey.split('.'),
                returnCurrent   = null,
                current         = '',
                i               = 0;

            if (!stringKey) {
                return obj;
            }

            returnCurrent = function(obj) {
                if (!obj) {
                    return null;
                } else {
                    return obj[current];
                }
            };

            while (i < parts.length) {
                current = parts[i];

                obj = returnCurrent(obj);

                i++;
            }

            if (typeof obj !== 'undefined') {
                return obj;
            } else {
                return null;
            }
        }
    };

    mixitup.h = h;

    /**
     * The Base class adds instance methods to all other extensible MixItUp classes,
     * enabling the calling of any registered hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Base = function() {};

    mixitup.Base.prototype = {
        constructor: mixitup.Base,

        /**
         * Calls any registered hooks for the provided action.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    actionName
         * @param       {Array<*>}  args
         * @return      {void}
         */

        callActions: function(actionName, args) {
            var self            = this,
                hooks           = self.constructor.actions[actionName],
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return;

            for (extensionName in hooks) {
                hooks[extensionName].apply(self, args);
            }
        },

        /**
         * Calls any registered hooks for the provided filter.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    filterName
         * @param       {*}         input
         * @param       {Array<*>}  args
         * @return      {*}
         */

        callFilters: function(filterName, input, args) {
            var self            = this,
                hooks           = self.constructor.filters[filterName],
                output          = input,
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return output;

            args = args || [];

            for (extensionName in hooks) {
                args = h.arrayFromList(args);

                args.unshift(output);

                output = hooks[extensionName].apply(self, args);
            }

            return output;
        }
    };

    /**
     * The BaseStatic class holds a set of static methods which are then added to all other
     * extensible MixItUp classes as a means of integrating extensions via the addition of new
     * methods and/or actions and hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.BaseStatic = function() {
        this.actions = {};
        this.filters = {};

        /**
         * Performs a shallow extend on the class's prototype, adding one or more new members to
         * the class in a single operation.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {object} extension
         * @return      {void}
         */

        this.extend = function(extension) {
            h.extend(this.prototype, extension);
        };

        /**
         * Registers a function to be called on the action hook of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerAction = function(hookName, extensionName, func) {
            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
        };

        /**
         * Registers a function to be called on the filter of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerFilter = function(hookName, extensionName, func) {
            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
        };
    };

    /**
     * The `mixitup.Features` class performs all feature and CSS prefix detection
     * neccessary for MixItUp to function correctly, as well as storing various
     * string and array constants. All feature decection is on evaluation of the
     * library and stored in a singleton instance for use by other internal classes.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Features = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.boxSizingPrefix            = '';
        this.transformPrefix            = '';
        this.transitionPrefix           = '';

        this.boxSizingPrefix            = '';
        this.transformProp              = '';
        this.transformRule              = '';
        this.transitionProp             = '';
        this.perspectiveProp            = '';
        this.perspectiveOriginProp      = '';

        this.has                        = new mixitup.Has();

        this.canary                     = null;

        this.BOX_SIZING_PROP            = 'boxSizing';
        this.TRANSITION_PROP            = 'transition';
        this.TRANSFORM_PROP             = 'transform';
        this.PERSPECTIVE_PROP           = 'perspective';
        this.PERSPECTIVE_ORIGIN_PROP    = 'perspectiveOrigin';
        this.VENDORS                    = ['Webkit', 'moz', 'O', 'ms'];

        this.TWEENABLE = [
            'opacity',
            'width', 'height',
            'marginRight', 'marginBottom',
            'x', 'y',
            'scale',
            'translateX', 'translateY', 'translateZ',
            'rotateX', 'rotateY', 'rotateZ'
        ];

        this.callActions('afterConstruct');
    };

    mixitup.BaseStatic.call(mixitup.Features);

    mixitup.Features.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Features.prototype,
    /** @lends mixitup.Features */
    {
        constructor: mixitup.Features,

        /**
         * @private
         * @return  {void}
         */

        init: function() {
            var self = this;

            self.callActions('beforeInit', arguments);

            self.canary = document.createElement('div');

            self.setPrefixes();
            self.runTests();

            self.callActions('beforeInit', arguments);
        },

        /**
         * @private
         * @return  {void}
         */

        runTests: function() {
            var self = this;

            self.callActions('beforeRunTests', arguments);

            self.has.promises       = typeof window.Promise === 'function';
            self.has.transitions    = self.transitionPrefix !== 'unsupported';

            self.callActions('afterRunTests', arguments);

            h.freeze(self.has);
        },

        /**
         * @private
         * @return  {void}
         */

        setPrefixes: function() {
            var self = this;

            self.callActions('beforeSetPrefixes', arguments);

            self.transitionPrefix   = h.getPrefix(self.canary, 'Transition', self.VENDORS);
            self.transformPrefix    = h.getPrefix(self.canary, 'Transform', self.VENDORS);
            self.boxSizingPrefix    = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);

            self.boxSizingProp = self.boxSizingPrefix ?
                self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;

            self.transitionProp = self.transitionPrefix ?
                self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;

            self.transformProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;

            self.transformRule = self.transformPrefix ?
                '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;

            self.perspectiveProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;

            self.perspectiveOriginProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) :
                self.PERSPECTIVE_ORIGIN_PROP;

            self.callActions('afterSetPrefixes', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Has = function() {
        this.transitions    = false;
        this.promises       = false;

        h.seal(this);
    };

    // Assign a singleton instance to `mixitup.features` and initialise:

    mixitup.features = new mixitup.Features();

    mixitup.features.init();

    /**
     * A group of properties defining the mixer's animation and effects settings.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        animation
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigAnimation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
         * If `false`, all operations will occur instantly and syncronously, although callback
         * functions and any returned promises will still be fulfilled.
         *
         * @example <caption>Example: Create a mixer with all animations disabled</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         enable: false
         *     }
         * });
         *
         * @name        enable
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A string of one or more space-seperated properties to which transitions will be
         * applied for all filtering animations.
         *
         * Properties can be listed any order or combination, although they will be applied in a specific
         * predefined order to produce consistent results.
         *
         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
         *
         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
         * // As targets are filtered in and out, they will fade between
         * // opacity 1 and 0 and transform between translateZ(-100px) and
         * // translateZ(0).
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateZ(-100px)'
         *     }
         * });
         *
         * @name        effects
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'fade scale'
         */

        this.effects = 'fade scale';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-in
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsIn: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsIn
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsIn = '';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-out
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsOut: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsOut = '';

        /**
         * An integer dictating the duration of all MixItUp animations in milliseconds, not
         * including any additional delay apllied via the `'stagger'` effect.
         *
         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         duration: 200
         *     }
         * });
         *
         * @name        duration
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     600
         */

        this.duration = 600;

        /**
         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
         *
         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'ease-in-out'
         *     }
         * });
         *
         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
         *     }
         * });
         *
         * @name        easing
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'ease'
         */

        this.easing = 'ease';

        /**
         * A boolean dictating whether or not to apply perspective to the MixItUp container
         * during animations. By default, perspective is always applied and creates the
         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
         * and `rotateY`.
         *
         * You may wish to disable this and define your own perspective settings via CSS.
         *
         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         applyPerspective: false
         *     }
         * });
         *
         * @name        applyPerspective
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {bolean}
         * @default     true
         */

        this.applyPerspective = true;

        /**
         * The perspective distance value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective distance of 2000px</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'rotateY(-25deg)',
         *         perspectiveDistance: '2000px'
         *     }
         * });
         *
         * @name        perspectiveDistance
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '3000px'
         */

        this.perspectiveDistance = '3000px';

        /**
         * The perspective-origin value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'transateZ(-200px)',
         *         perspectiveOrigin: '100% 0'
         *     }
         * });
         *
         * @name        perspectiveOrigin
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '50% 50%'
         */

        this.perspectiveOrigin = '50% 50%';

        /**
         * A boolean dictating whether or not to enable the queuing of operations.
         *
         * If `true` (default), and a control is clicked or an API call is made while another
         * operation is progress, the operation will go into the queue and will be automatically exectuted
         * when the previous operaitons is finished.
         *
         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
         *
         * @example <caption>Example: Disable queuing</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queue: false
         *     }
         * });
         *
         * @name        queue
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.queue = true;

        /**
         * An integer dictacting the maximum number of operations allowed in the queue at
         * any time, when queuing is enabled.
         *
         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queueLimit: 5
         *     }
         * });
         *
         * @name        queueLimit
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     3
         */

        this.queueLimit = 3;

        /**
         * A boolean dictating whether or not to transition the height and width of the
         * container as elements are filtered in and out. If disabled, the container height
         * will change abruptly.
         *
         * It may be desirable to disable this on mobile devices as the CSS `height` and
         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
         *
         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
         *     }
         * });
         *
         * @name        animateResizeContainer
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.animateResizeContainer = true;

        /**
         * A boolean dictating whether or not to transition the height and width of target
         * elements as they change throughout the course of an animation.
         *
         * This is often a must for flex-box grid layouts where the size of target elements may change
         * depending on final their position in relation to their siblings, or for `.changeLayout()`
         * operations where the size of targets change between layouts.
         *
         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
         * properties which may adversely affect performance on slower devices, and is therefore
         * disabled by default.
         *
         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeTargets: true
         *     }
         * });
         *
         * @name        animateResizeTargets
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.animateResizeTargets = false;

        /**
         * A custom function used to manipulate the order in which the stagger delay is
         * incremented when using the ‘stagger’ effect.
         *
         * When using the 'stagger' effect, the delay applied to each target element is incremented
         * based on its index. You may create a custom function to manipulate the order in which the
         * delay is incremented and create engaging non-linear stagger effects.
         *
         * The function receives the index of the target element as a parameter, and must
         * return an integer which serves as the multiplier for the stagger delay.
         *
         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return i % 3;
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
         *         }
         *     }
         * });
         *
         * @name        staggerSequence
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {function}
         * @default     null
         */

        this.staggerSequence = null;

        /**
         * A boolean dictating whether or not to reverse the direction of `translate`
         * and `rotate` transforms for elements being filtered out.
         *
         * It can be used to create carousel-like animations where elements enter and exit
         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
         * being filtered in would become `translateX(100%)` for targets being filtered out.
         *
         * This functionality can also be achieved by providing seperate effects
         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
         *
         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
         * // Elements being filtered in will be translated from '100%' to '0' while
         * // elements being filtered out will be translated from 0 to '-100%'
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateX(100%)',
         *         reverseOut: true,
         *         nudge: false // Disable nudging to create a carousel-like effect
         *     }
         * });
         *
         * @name        reverseOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.reverseOut = false;

        /**
         * A boolean dictating whether or not to "nudge" the animation path of targets
         * when they are being filtered in and out simulatenously.
         *
         * This has been the default behavior of MixItUp since version 1, but it
         * may be desirable to disable this effect when filtering directly from
         * one exclusive set of targets to a different exclusive set of targets,
         * to create a carousel-like effect, or a generally more subtle animation.
         *
         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         nudge: false
         *     }
         * });
         *
         * @name        nudge
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.nudge = true;

        /**
         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * height of the container might affect its vertical positioning in the viewport
         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container height-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampHeight: false
         *     }
         * });
         *
         * @name        clampHeight
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampHeight = true;

        /**
         * A boolean dictating whether or not to clamp the width of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * width of the container might affect its horitzontal positioning in the viewport
         * (e.g. a horizontall-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container width-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampWidth: false
         *     }
         * });
         *
         * @name        clampWidth
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampWidth = true;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigAnimation);

    mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;

    /**
     * A group of properties relating to the behavior of the Mixer.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        behavior
     * @namespace
     * @public
     * @since       3.1.12
     */

    mixitup.ConfigBehavior = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether to allow "live" sorting of the mixer.
         *
         * Because of the expensive nature of sorting, MixItUp makes use of several
         * internal optimizations to skip redundant sorting operations, such as when
         * the newly requested sort command is the same as the active one. The caveat
         * to this optimization is that "live" edits to the value of a target's sorting
         * attribute will be ignored when requesting a re-sort by the same attribute.
         *
         * By setting to `behavior.liveSort` to `true`, the mixer will always re-sort
         * regardless of whether or not the sorting attribute and order have changed.
         *
         * @example <caption>Example: Enabling `liveSort` to allow for re-sorting</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     behavior: {
         *         liveSort: true
         *     },
         *     load: {
         *         sort: 'edited:desc'
         *     }
         * });
         *
         * var target = containerEl.children[3];
         *
         * console.log(target.getAttribute('data-edited')); // '2015-04-24'
         *
         * target.setAttribute('data-edited', '2017-08-10'); // Update the target's edited date
         *
         * mixer.sort('edited:desc')
         *     .then(function(state) {
         *         // The target is now at the top of the list
         *
         *         console.log(state.targets[0] === target); // true
         *     });
         *
         * @name        liveSort
         * @memberof    mixitup.Config.behavior
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.liveSort = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigBehavior);

    mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;

    /**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * Each function is analogous to an event of the same name triggered from the
     * container element, and is invoked immediately after it.
     *
     * All callback functions receive the current `state` object as their first
     * argument, as well as other more specific arguments described below.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigCallbacks = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A callback function invoked immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * A second `futureState` argument is passed to the function which represents the final
         * state of the mixer once the requested operation has completed.
         *
         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixStart: function(state, futureState) {
         *              console.log('Starting operation...');
         *         }
         *     }
         * });
         *
         * @name        onMixStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixStart = null;

        /**
         * A callback function invoked when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixBusy: function(state) {
         *              console.log('Mixer busy');
         *         }
         *     }
         * });
         *
         * @name        onMixBusy
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixBusy  = null;

        /**
         * A callback function invoked after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: function(state) {
         *              console.log('Operation complete');
         *         }
         *     }
         * });
         *
         * @name        onMixEnd
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixEnd   = null;

        /**
         * A callback function invoked whenever an operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixFail: function(state) {
         *              console.log('No items could be found matching the requested filter');
         *         }
         *     }
         * });
         *
         * @name        onMixFail
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixFail  = null;

        /**
         * A callback function invoked whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * The clicked element is assigned to the `this` keyword within the function. The original
         * click event is passed to the function as the second argument, which can be useful if
         * using `<a>` tags as controls where the default behavior needs to be prevented.
         *
         * Returning `false` from the callback will prevent the control click from triggering
         * an operation.
         *
         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              console.log('The control "' + this.innerText + '" was clicked');
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Prevent original click event from bubbling up:
         *              originalEvent.stopPropagation();
         *
         *              // Prevent default behavior of clicked element:
         *              originalEvent.preventDefault();
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Perform some conditional check:
         *
         *              if (myApp.isLoading) {
         *                  // By returning false, we can prevent the control click from triggering an operation.
         *
         *                  return false;
         *              }
         *         }
         *     }
         * });
         *
         * @name        onMixClick
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigCallbacks);

    mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;

    /**
     * A group of properties relating to clickable control elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        controls
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigControls = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not controls should be enabled for the mixer instance.
         *
         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
         *
         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
         * via the mixer's API methods.
         *
         * If you do not intend to use the default controls, setting this property to `false` will
         * marginally improve the startup time of your mixer instance, and will also prevent any other active
         * mixer instances in the DOM which are bound to controls from controlling the instance.
         *
         * @example <caption>Example: Disabling controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         enable: false
         *     }
         * });
         *
         * // With the default controls disabled, we can only control
         * // the mixer via its API methods, e.g.:
         *
         * mixer.filter('.cat-1');
         *
         * @name        enable
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A boolean dictating whether or not to use event delegation when binding click events
         * to the default controls.
         *
         * If `false` (default behavior), each control button in the DOM will be found and
         * individually bound when a mixer is instantiated, with their corresponding actions
         * cached for performance.
         *
         * If `true`, a single click handler will be applied to the `window` (or container element - see
         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
         *
         * If you require a user interface where control buttons may be added, removed, or changed during the
         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
         * performance deficit when using live controls, as the value of each control button must be read
         * from the DOM in real time once the click event has propagated.
         *
         * @example <caption>Example: Setting live controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         live: true
         *     }
         * });
         *
         * // Control buttons can now be added, remove and changed without breaking
         * // the mixer's UI
         *
         * @name        live
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.live = false;

        /**
         * A string dictating the "scope" to use when binding or querying the default controls. The available
         * values are `'global'` or `'local'`.
         *
         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
         * to bind, or delegate click events from (see `config.controls.live`).
         *
         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
         * This may be desireable if you require multiple active mixer instances within the same document, with
         * controls that would otherwise intefere with each other if scoped globally.
         *
         * Conversely, if you wish to control multiple instances with a single UI, you would create one
         * set of controls and keep the controls scope of each mixer set to `global`.
         *
         * @example <caption>Example: Setting 'local' scoped controls</caption>
         * var mixerOne = mixitup(containerOne, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * var mixerTwo = mixitup(containerTwo, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * // Both mixers can now exist within the same document with
         * // isolated controls placed within their container elements.
         *
         * @name        scope
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'global'
         */

        this.scope = 'global'; // enum: ['local' ,'global']

        /**
         * A string dictating the type of logic to apply when concatenating the filter selectors of
         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
         *
         * If set to `'or'` (default behavior), selectors will be concatenated together as
         * a comma-seperated list. For example:
         *
         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
         *
         * If set to `'and'`, selectors will be directly concatenated together. For example:
         *
         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
         *
         * @example <caption>Example: Setting "and" toggle logic</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleLogic: 'and'
         *     }
         * });
         *
         * @name        toggleLogic
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'or'
         */

        this.toggleLogic = 'or'; // enum: ['or', 'and']

        /**
         * A string dictating the filter behavior when all toggles are inactive.
         *
         * When set to `'all'` (default behavior), *all* targets will be shown by default
         * when no toggles are active, or at the moment all active toggles are toggled off.
         *
         * When set to `'none'`, no targets will be shown by default when no toggles are
         * active, or at the moment all active toggles are toggled off.
         *
         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'all'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'all'
         *          console.log(state.totalShow); // 12
         *     });
         *
         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'none'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'none'
         *          console.log(state.totalShow); // 0
         *     });
         *
         * @name        toggleDefault
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.toggleDefault = 'all'; // enum: ['all', 'none']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigControls);

    mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;

    /**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * Most commonly, class names are added to controls by MixItUp to indicate that
     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
     *
     * Using a "BEM" like structure, each classname is broken into the three parts:
     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
     * name (e.g. `'active'`) reflecting the state of the element.
     *
     * By default, each part of the classname is concatenated together using single hyphens as
     * delineators, but this can be easily customised to match the naming convention and style of
     * your project.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
         *
         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio'
         *     }
         * });
         *
         * // Active control output: "portfolio-control-active"
         *
         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: ''
         *     }
         * });
         *
         * // Active control output: "control-active"
         *
         * @name        block
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'mixitup'
         */

        this.block = 'mixitup';

        /**
         * The "element" portion of the class name added to container.
         *
         * @name        elementContainer
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'container'
         */

        this.elementContainer = 'container';

        /**
         * The "element" portion of the class name added to filter controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "mixitup-filter-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "portfolio-filter-active"
         *
         * @name        elementFilter
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementFilter = 'control';

        /**
         * The "element" portion of the class name added to sort controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "mixitup-sort-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "portfolio-sort-active"
         *
         * @name        elementSort
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementSort = 'control';

        /**
         * The "element" portion of the class name added to multimix controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementMultimix: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "mixitup-multimix-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "portfolio-multimix-active"
         *
         * @name        elementMultimix
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementMultimix = 'control';

        /**
         * The "element" portion of the class name added to toggle controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "mixitup-toggle-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "portfolio-toggle-active"
         *
         * @name        elementToggle
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementToggle = 'control';

        /**
         * The "modifier" portion of the class name added to active controls.
         * @name        modifierActive
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'active'
         */

        this.modifierActive = 'active';

        /**
         * The "modifier" portion of the class name added to disabled controls.
         *
         * @name        modifierDisabled
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'disabled'
         */

        this.modifierDisabled = 'disabled';

        /**
         * The "modifier" portion of the class name added to the container when in a "failed" state.
         *
         * @name        modifierFailed
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'failed'
         */

        this.modifierFailed = 'failed';

        /**
         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
         *
         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing the delineator to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *     }
         * });
         *
         * // example active control output: "mixitup__control-active"
         *
         * @name        delineatorElement
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorElement = '-';

        /**
         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
         *
         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing both delineators to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *         delineatorModifier: '--'
         *     }
         * });
         *
         * // Active control output: "mixitup__control--active"
         *
         * @name        delineatorModifier
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorModifier = '-';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigClassNames);

    mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;

    /**
     * A group of properties relating to MixItUp's dataset API.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        data
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string specifying the name of the key containing your data model's unique
         * identifier (UID). To use the dataset API, a UID key must be specified and
         * be present and unique on all objects in the dataset you provide to MixItUp.
         *
         * For example, if your dataset is made up of MongoDB documents, the UID
         * key would be `'id'` or `'_id'`.
         *
         * @example <caption>Example: Setting the UID to `'id'`</caption>
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     }
         * });
         *
         * @name        uidKey
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.uidKey = '';

        /**
         * A boolean dictating whether or not MixItUp should "dirty check" each object in
         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
         * for which a change is found.
         *
         * Depending on the complexity of your data model, dirty checking can be expensive
         * and is therefore disabled by default.
         *
         * NB: For changes to be detected, a new immutable instance of the edited model must be
         * provided to mixitup, rather than manipulating properties on the existing instance.
         * If your changes are a result of a DB write and read, you will most likely be calling
         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
         *
         * @example <caption>Example: Enabling dirty checking</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0"
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1"
         *         ...
         *     }
         * ];
         *
         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
         * // function defined
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id',
         *         dirtyCheck: true
         *     },
         *     load: {
         *         dataset: myDataset
         *     },
         *     render: {
         *         target: function() { ... }
         *     }
         * });
         *
         * // For illustration, we will clone and edit the second object in the dataset.
         * // NB: this would typically be done server-side in response to a DB update,
         * and then re-queried via an API.
         *
         * myDataset[1] = Object.assign({}, myDataset[1]);
         *
         * myDataset[1].title = 'Blog Post Title 11';
         *
         * mixer.dataset(myDataset)
         *    .then(function() {
         *        // the target with ID "1", will be re-rendered reflecting its new title
         *    });
         *
         * @name        dirtyCheck
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.dirtyCheck = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigData);

    mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;

    /**
     * A group of properties allowing the toggling of various debug features.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        debug
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigDebug = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not the mixer instance returned by the
         * `mixitup()` factory function should expose private properties and methods.
         *
         * By default, mixer instances only expose their public API, but enabling
         * debug mode will give you access to various mixer internals which may aid
         * in debugging, or the authoring of extensions.
         *
         * @example <caption>Example: Enabling debug mode</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         enable: true
         *     }
         * });
         *
         * // Private properties and methods will now be visible on the mixer instance:
         *
         * console.log(mixer);
         *
         * @name        enable
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.enable = false;

        /**
         * A boolean dictating whether or not warnings should be shown when various
         * common gotchas occur.
         *
         * Warnings are intended to provide insights during development when something
         * occurs that is not a fatal, but may indicate an issue with your integration,
         * and are therefore turned on by default. However, you may wish to disable
         * them in production.
         *
         * @example <caption>Example 1: Disabling warnings</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disabling warnings based on environment</caption>
         *
         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: showWarnings
         *     }
         * });
         *
         * @name        showWarnings
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.showWarnings = true;

        /**
         * Used for server-side testing only.
         *
         * @private
         * @name        fauxAsync
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.fauxAsync = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigDebug);

    mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;

    /**
     * A group of properties relating to the layout of the container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        layout
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not mixitup should query all descendants
         * of the container for targets, or only immediate children.
         *
         * By default, mixitup will query all descendants matching the
         * `selectors.target` selector when indexing targets upon instantiation.
         * This allows for targets to be nested inside a sub-container which is
         * useful when ring-fencing targets from locally scoped controls in your
         * markup (see `controls.scope`).
         *
         * However, if you are building a more complex UI requiring the nesting
         * of mixers within mixers, you will most likely want to limit targets to
         * immediate children of the container by setting this property to `false`.
         *
         * @example <caption>Example: Restricting targets to immediate children</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         allowNestedTargets: false
         *     }
         * });
         *
         * @name        allowNestedTargets
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.allowNestedTargets = true;

        /**
         * A string specifying an optional class name to apply to the container when in
         * its default state.
         *
         * By changing this class name or adding a class name to the container via the
         * `.changeLayout()` API method, the CSS layout of the container can be changed,
         * and MixItUp will attemp to gracefully animate the container and its targets
         * between states.
         *
         * @example <caption>Example 1: Specifying a container class name</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * mixer.changeLayout('list')
         *     .then(function(state) {
         *          console.log(state.activeContainerClass); // "list"
         *     });
         *
         * @name        containerClassName
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.containerClassName = '';

        /**
         * A reference to a non-target sibling element after which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
         *
         * var addButton = containerEl.querySelector('button');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingBefore: addButton
         *     }
         * });
         *
         * @name        siblingBefore
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingBefore = null;

        /**
         * A reference to a non-target sibling element before which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
         *
         * var gap = containerEl.querySelector('.gap');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingAfter: gap
         *     }
         * });
         *
         * @name        siblingAfter
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingAfter = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLayout);

    mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;

    /**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigLoad = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string defining any filtering to be statically applied to the mixer on load.
         * As per the `.filter()` API, this can be any valid selector string, or the
         * values `'all'` or `'none'`.
         *
         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
         *
         * // The mixer will show only those targets matching '.category-a' on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: '.category-a'
         *     }
         * });
         *
         * @example <caption>Example 2: Hiding all targets on load</caption>
         *
         * // The mixer will show hide all targets on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: 'none'
         *     }
         * });
         *
         * @name        filter
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.filter = 'all';

        /**
         * A string defining any sorting to be statically applied to the mixer on load.
         * As per the `.sort()` API, this should be a valid "sort string" made up of
         * an attribute to sort by (or `'default'`) followed by an optional sorting
         * order, or the value `'random'`;
         *
         * @example <caption>Example: Defining sorting to be applied on load</caption>
         *
         * // The mixer will sort the container by the value of the `data-published-date`
         * // attribute, in descending order.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         sort: 'published-date:desc'
         *     }
         * });
         *
         * @name        sort
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'default:asc'
         */

        this.sort = 'default:asc';

        /**
         * An array of objects representing the underlying data of any pre-rendered targets,
         * when using the `.dataset()` API.
         *
         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
         *
         * @example <caption>Example: Defining the initial underyling dataset</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0",
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1",
         *         ...
         *     }
         * ];
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     },
         *     load: {
         *         dataset: myDataset
         *     }
         * });
         *
         * @name        dataset
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLoad);

    mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;

    /**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigSelectors = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A selector string used to query and index target elements within the container.
         *
         * By default, the class selector `'.mix'` is used, but this can be changed to an
         * attribute or element selector to match the style of your project.
         *
         * @example <caption>Example 1: Changing the target selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '.portfolio-item'
         *     }
         * });
         *
         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
         *
         * // The mixer will search for any children with the attribute `data-ref="mix"`
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '[data-ref="mix"]'
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mix'
         */

        this.target = '.mix';

        /**
         * A optional selector string used to add further specificity to the querying of control elements,
         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
         *
         * This can be used if other elements in your document must contain the above attributes
         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
         * an additional `control` selector of your choice allows MixItUp to restrict event handling
         * to only those elements matching the defined selector.
         *
         * @name        control
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     ''
         *
         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         control: '.mixitup-control'
         *     }
         * });
         *
         * // Will not be handled:
         * // <button data-filter=".category-a"></button>
         *
         * // Will be handled:
         * // <button class="mixitup-control" data-filter=".category-a"></button>
         */

        this.control = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigSelectors);

    mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;

    /**
     * A group of optional render functions for creating and updating elements.
     *
     * All render functions receive a data object, and should return a valid HTML string.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigRender = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A function returning an HTML string representing a target element, or a reference to a
         * single DOM element.
         *
         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
         *
         * The function receives the relevant dataset item as its first parameter.
         *
         * @example <caption>Example 1: Using string concatenation</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 '&lt;div class="mix"&gt;' +
         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
         *                 '&lt;/div&gt;'
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an ES2015 template literal</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 `&lt;div class="mix"&gt;
         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
         *                  &lt;/div&gt;`
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using a Handlebars template</caption>
         *
         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: targetTemplate
         *     }
         * });
         *
         * @example <caption>Example 4: Returning a DOM element</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *              // Create a single element using your framework's built-in renderer
         *
         *              var el = ...
         *
         *              return el;
         *         }
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */

        this.target = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigRender);

    mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.ConfigTemplates = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigTemplates);

    mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;

    /**
     * `mixitup.Config` is an interface used for customising the functionality of a
     * mixer instance. It is organised into several semantically distinct sub-objects,
     * each one pertaining to a particular aspect of MixItUp functionality.
     *
     * An object literal containing any or all of the available properies,
     * known as the "configuration object", can be passed as the second parameter to
     * the `mixitup` factory function when creating a mixer instance to customise its
     * functionality as needed.
     *
     * If no configuration object is passed, the mixer instance will take on the default
     * configuration values detailed below.
     *
     * @example <caption>Example 1: Creating and passing the configuration object</caption>
     * // Create a configuration object with desired values
     *
     * var config = {
     *     animation: {
     *         enable: false
     *     },
     *     selectors: {
     *         target: '.item'
     *     }
     * };
     *
     * // Pass the configuration object to the mixitup factory function
     *
     * var mixer = mixitup(containerEl, config);
     *
     * @example <caption>Example 2: Passing the configuration object inline</caption>
     * // Typically, the configuration object is passed inline for brevity.
     *
     * var mixer = mixitup(containerEl, {
     *     controls: {
     *         live: true,
     *         toggleLogic: 'and'
     *     }
     * });
     *
     *
     * @constructor
     * @memberof    mixitup
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.Config = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.animation          = new mixitup.ConfigAnimation();
        this.behavior           = new mixitup.ConfigBehavior();
        this.callbacks          = new mixitup.ConfigCallbacks();
        this.controls           = new mixitup.ConfigControls();
        this.classNames         = new mixitup.ConfigClassNames();
        this.data               = new mixitup.ConfigData();
        this.debug              = new mixitup.ConfigDebug();
        this.layout             = new mixitup.ConfigLayout();
        this.load               = new mixitup.ConfigLoad();
        this.selectors          = new mixitup.ConfigSelectors();
        this.render             = new mixitup.ConfigRender();
        this.templates          = new mixitup.ConfigTemplates();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Config);

    mixitup.Config.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Config.prototype.constructor = mixitup.Config;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.MixerDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.document               = null;
        this.body                   = null;
        this.container              = null;
        this.parent                 = null;
        this.targets                = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.MixerDom);

    mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UiClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.base       = '';
        this.active     = '';
        this.disabled   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UiClassNames);

    mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;

    /**
     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandDataset = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandDataset);

    mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;

    /**
     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandMultimix = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.filter       = null;
        this.sort         = null;
        this.insert       = null;
        this.remove       = null;
        this.changeLayout = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandMultimix);

    mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;

    /**
     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandFilter = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.selector   = '';
        this.collection = null;
        this.action     = 'show'; // enum: ['show', 'hide']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandFilter);

    mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;

    /**
     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandSort = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.sortString = '';
        this.attribute  = '';
        this.order      = 'asc';
        this.collection = null;
        this.next       = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandSort);

    mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;

    /**
     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandInsert = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.index      = 0;
        this.collection = [];
        this.position   = 'before'; // enum: ['before', 'after']
        this.sibling    = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandInsert);

    mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;

    /**
     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandRemove = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.targets    = [];
        this.collection = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandRemove);

    mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;

    /**
     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandChangeLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.containerClassName = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandChangeLayout);

    mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {string}        type
     * @param       {string}        selector
     * @param       {boolean}       [live]
     * @param       {string}        [parent]
     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
     */

    mixitup.ControlDefinition = function(type, selector, live, parent) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.type    = type;
        this.selector  = selector;
        this.live      = live || false;
        this.parent    = parent || '';

        this.callActions('afterConstruct');

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ControlDefinition);

    mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;

    mixitup.controlDefinitions = [];

    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('filter', '[data-filter]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('sort', '[data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('toggle', '[data-toggle]'));

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Control = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el         = null;
        this.selector   = '';
        this.bound      = [];
        this.pending    = -1;
        this.type       = '';
        this.status     = 'inactive'; // enum: ['inactive', 'active', 'disabled', 'live']
        this.filter     = '';
        this.sort       = '';
        this.canDisable = false;
        this.handler    = null;
        this.classNames = new mixitup.UiClassNames();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Control);

    mixitup.Control.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Control.prototype,
    /** @lends mixitup.Control */
    {
        constructor: mixitup.Control,

        /**
         * @private
         * @param {HTMLElement} el
         * @param {string}      type
         * @param {string}      selector
         */

        init: function(el, type, selector) {
            var self = this;

            this.callActions('beforeInit', arguments);

            self.el         = el;
            self.type       = type;
            self.selector   = selector;

            if (self.selector) {
                self.status = 'live';
            } else {
                self.canDisable = typeof self.el.disable === 'boolean';

                switch (self.type) {
                    case 'filter':
                        self.filter = self.el.getAttribute('data-filter');

                        break;
                    case 'toggle':
                        self.filter = self.el.getAttribute('data-toggle');

                        break;
                    case 'sort':
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        self.filter = self.el.getAttribute('data-filter');
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                }
            }

            self.bindClick();

            mixitup.controls.push(self);

            this.callActions('afterInit', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {boolean}
         */

        isBound: function(mixer) {
            var self    = this,
                isBound = false;

            this.callActions('beforeIsBound', arguments);

            isBound = self.bound.indexOf(mixer) > -1;

            return self.callFilters('afterIsBound', isBound, arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        addBinding: function(mixer) {
            var self = this;

            this.callActions('beforeAddBinding', arguments);

            if (!self.isBound()) {
                self.bound.push(mixer);
            }

            this.callActions('afterAddBinding', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        removeBinding: function(mixer) {
            var self        = this,
                removeIndex = -1;

            this.callActions('beforeRemoveBinding', arguments);

            if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
                self.bound.splice(removeIndex, 1);
            }

            if (self.bound.length < 1) {
                // No bindings exist, unbind event click handlers

                self.unbindClick();

                // Remove from `mixitup.controls` list

                removeIndex = mixitup.controls.indexOf(self);

                mixitup.controls.splice(removeIndex, 1);

                if (self.status === 'active') {
                    self.renderStatus(self.el, 'inactive');
                }
            }

            this.callActions('afterRemoveBinding', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        bindClick: function() {
            var self = this;

            this.callActions('beforeBindClick', arguments);

            self.handler = function(e) {
                self.handleClick(e);
            };

            h.on(self.el, 'click', self.handler);

            this.callActions('afterBindClick', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        unbindClick: function() {
            var self = this;

            this.callActions('beforeUnbindClick', arguments);

            h.off(self.el, 'click', self.handler);

            self.handler = null;

            this.callActions('afterUnbindClick', arguments);
        },

        /**
         * @private
         * @param   {MouseEvent} e
         * @return  {void}
         */

        handleClick: function(e) {
            var self        = this,
                button      = null,
                mixer       = null,
                isActive    = false,
                returnValue = void(0),
                command     = {},
                clone       = null,
                commands    = [],
                i           = -1;

            this.callActions('beforeHandleClick', arguments);

            this.pending = 0;

            mixer = self.bound[0];

            if (!self.selector) {
                button = self.el;
            } else {
                button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
            }

            if (!button) {
                self.callActions('afterHandleClick', arguments);

                return;
            }

            switch (self.type) {
                case 'filter':
                    command.filter = self.filter || button.getAttribute('data-filter');

                    break;
                case 'sort':
                    command.sort = self.sort || button.getAttribute('data-sort');

                    break;
                case 'multimix':
                    command.filter  = self.filter || button.getAttribute('data-filter');
                    command.sort    = self.sort || button.getAttribute('data-sort');

                    break;
                case 'toggle':
                    command.filter  = self.filter || button.getAttribute('data-toggle');

                    if (self.status === 'live') {
                        isActive = h.hasClass(button, self.classNames.active);
                    } else {
                        isActive = self.status === 'active';
                    }

                    break;
            }

            for (i = 0; i < self.bound.length; i++) {
                // Create a clone of the command for each bound mixer instance

                clone = new mixitup.CommandMultimix();

                h.extend(clone, command);

                commands.push(clone);
            }

            commands = self.callFilters('commandsHandleClick', commands, arguments);

            self.pending = self.bound.length;

            for (i = 0; mixer = self.bound[i]; i++) {
                command = commands[i];

                if (!command) {
                    // An extension may set a command null to indicate that the click should not be handled

                    continue;
                }

                if (!mixer.lastClicked) {
                    mixer.lastClicked = button;
                }

                mixitup.events.fire('mixClick', mixer.dom.container, {
                    state: mixer.state,
                    instance: mixer,
                    originalEvent: e,
                    control: mixer.lastClicked
                }, mixer.dom.document);

                if (typeof mixer.config.callbacks.onMixClick === 'function') {
                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);

                    if (returnValue === false) {
                        // User has returned `false` from the callback, so do not handle click

                        continue;
                    }
                }

                if (self.type === 'toggle') {
                    isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
                } else {
                    mixer.multimix(command);
                }
            }

            this.callActions('afterHandleClick', arguments);
        },

        /**
         * @param   {object}          command
         * @param   {Array<string>}   toggleArray
         * @return  {void}
         */

        update: function(command, toggleArray) {
            var self    = this,
                actions = new mixitup.CommandMultimix();

            self.callActions('beforeUpdate', arguments);

            self.pending--;

            self.pending = Math.max(0, self.pending);

            if (self.pending > 0) return;

            if (self.status === 'live') {
                // Live control (status unknown)

                self.updateLive(command, toggleArray);
            } else {
                // Static control

                actions.sort    = self.sort;
                actions.filter  = self.filter;

                self.callFilters('actionsUpdate', actions, arguments);

                self.parseStatusChange(self.el, command, actions, toggleArray);
            }

            self.callActions('afterUpdate', arguments);
        },

        /**
         * @param   {mixitup.CommandMultimix} command
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        updateLive: function(command, toggleArray) {
            var self            = this,
                controlButtons  = null,
                actions         = null,
                button          = null,
                i               = -1;

            self.callActions('beforeUpdateLive', arguments);

            if (!self.el) return;

            controlButtons = self.el.querySelectorAll(self.selector);

            for (i = 0; button = controlButtons[i]; i++) {
                actions = new mixitup.CommandMultimix();

                switch (self.type) {
                    case 'filter':
                        actions.filter = button.getAttribute('data-filter');

                        break;
                    case 'sort':
                        actions.sort = button.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        actions.filter  = button.getAttribute('data-filter');
                        actions.sort    = button.getAttribute('data-sort');

                        break;
                    case 'toggle':
                        actions.filter  = button.getAttribute('data-toggle');

                        break;
                }

                actions = self.callFilters('actionsUpdateLive', actions, arguments);

                self.parseStatusChange(button, command, actions, toggleArray);
            }

            self.callActions('afterUpdateLive', arguments);
        },

        /**
         * @param   {HTMLElement}             button
         * @param   {mixitup.CommandMultimix} command
         * @param   {mixitup.CommandMultimix} actions
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        parseStatusChange: function(button, command, actions, toggleArray) {
            var self    = this,
                alias   = '',
                toggle  = '',
                i       = -1;

            self.callActions('beforeParseStatusChange', arguments);

            switch (self.type) {
                case 'filter':
                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'multimix':
                    if (command.sort === actions.sort && command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'sort':
                    if (command.sort.match(/:asc/g)) {
                        alias = command.sort.replace(/:asc/g, '');
                    }

                    if (command.sort === actions.sort || alias === actions.sort) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'toggle':
                    if (toggleArray.length < 1) self.renderStatus(button, 'inactive');

                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    }

                    for (i = 0; i < toggleArray.length; i++) {
                        toggle = toggleArray[i];

                        if (toggle === actions.filter) {
                            // Button matches one active toggle

                            self.renderStatus(button, 'active');

                            break;
                        }

                        self.renderStatus(button, 'inactive');
                    }

                    break;
            }

            self.callActions('afterParseStatusChange', arguments);
        },

        /**
         * @param   {HTMLElement}   button
         * @param   {string}        status
         * @return  {void}
         */

        renderStatus: function(button, status) {
            var self = this;

            self.callActions('beforeRenderStatus', arguments);

            switch (status) {
                case 'active':
                    h.addClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'inactive':
                    h.removeClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'disabled':
                    if (self.canDisable) self.el.disabled = true;

                    h.addClass(button, self.classNames.disabled);
                    h.removeClass(button, self.classNames.active);

                    break;
            }

            if (self.status !== 'live') {
                // Update the control's status propery if not live

                self.status = status;
            }

            self.callActions('afterRenderStatus', arguments);
        }
    });

    mixitup.controls = [];

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.StyleData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.x              = 0;
        this.y              = 0;
        this.top            = 0;
        this.right          = 0;
        this.bottom         = 0;
        this.left           = 0;
        this.width          = 0;
        this.height         = 0;
        this.marginRight    = 0;
        this.marginBottom   = 0;
        this.opacity        = 0;
        this.scale          = new mixitup.TransformData();
        this.translateX     = new mixitup.TransformData();
        this.translateY     = new mixitup.TransformData();
        this.translateZ     = new mixitup.TransformData();
        this.rotateX        = new mixitup.TransformData();
        this.rotateY        = new mixitup.TransformData();
        this.rotateZ        = new mixitup.TransformData();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.StyleData);

    mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.StyleData.prototype.constructor = mixitup.StyleData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.value  = 0;
        this.unit   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformData);

    mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TransformData.prototype.constructor = mixitup.TransformData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformDefaults = function() {
        mixitup.StyleData.apply(this);

        this.callActions('beforeConstruct');

        this.scale.value        = 0.01;
        this.scale.unit         = '';

        this.translateX.value   = 20;
        this.translateX.unit    = 'px';

        this.translateY.value   = 20;
        this.translateY.unit    = 'px';

        this.translateZ.value   = 20;
        this.translateZ.unit    = 'px';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateY.value      = 90;
        this.rotateY.unit       = 'deg';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateZ.value      = 180;
        this.rotateZ.unit       = 'deg';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformDefaults);

    mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);

    mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;

    /**
     * @private
     * @static
     * @since   3.0.0
     * @type    {mixitup.TransformDefaults}
     */

    mixitup.transformDefaults = new mixitup.TransformDefaults();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.EventDetail = function() {
        this.state          = null;
        this.futureState    = null;
        this.instance       = null;
        this.originalEvent  = null;
    };

    /**
     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
     * points within the lifecycle of a mixer operation.
     *
     * Each event is analogous to the callback function of the same name defined in
     * the `callbacks` configuration object, and is triggered immediately before it.
     *
     * Events are always triggered from the container element on which MixItUp is instantiated
     * upon.
     *
     * As with any event, registered event handlers receive the event object as a parameter
     * which includes a `detail` property containting references to the current `state`,
     * the `mixer` instance, and other event-specific properties described below.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Events = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A custom event triggered immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * The `mixStart` event also exposes a `futureState` property via the
         * `event.detail` object, which represents the final state of the mixer once
         * the requested operation has completed.
         *
         * @name        mixStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixStart = null;

        /**
         * A custom event triggered when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @name        mixBusy
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixBusy = null;

        /**
         * A custom event triggered after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @name        mixEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixEnd = null;

        /**
         * A custom event triggered whenever a filter operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @name        mixFail
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixFail = null;

        /**
         * A custom event triggered whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * This event also exposes an `originalEvent` property via the `event.detail`
         * object, which holds a reference to the original click event.
         *
         * @name        mixClick
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Events);

    mixitup.Events.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Events.prototype.constructor = mixitup.Events;

    /**
     * @private
     * @param   {string}      eventType
     * @param   {Element}     el
     * @param   {object}      detail
     * @param   {Document}    [doc]
     */

    mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
        var self        = this,
            event       = null,
            eventDetail = new mixitup.EventDetail();

        self.callActions('beforeFire', arguments);

        if (typeof self[eventType] === 'undefined') {
            throw new Error('Event type "' + eventType + '" not found.');
        }

        eventDetail.state = new mixitup.State();

        h.extend(eventDetail.state, detail.state);

        if (detail.futureState) {
            eventDetail.futureState = new mixitup.State();

            h.extend(eventDetail.futureState, detail.futureState);
        }

        eventDetail.instance = detail.instance;

        if (detail.originalEvent) {
            eventDetail.originalEvent = detail.originalEvent;
        }

        event = h.getCustomEvent(eventType, eventDetail, doc);

        self.callFilters('eventFire', event, arguments);

        el.dispatchEvent(event);
    };

    // Asign a singleton instance to `mixitup.events`:

    mixitup.events = new mixitup.Events();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.QueueItem = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.args           = [];
        this.instruction    = null;
        this.triggerElement = null;
        this.deferred       = null;
        this.isToggling     = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.QueueItem);

    mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);

    mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;

    /**
     * The `mixitup.Mixer` class is used to hold discreet, user-configured
     * instances of MixItUp on a provided container element.
     *
     * Mixer instances are returned whenever the `mixitup()` factory function is called,
     * which expose a range of methods enabling API-based filtering, sorting,
     * insertion, removal and more.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Mixer = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.config            = new mixitup.Config();

        this.id                = '';

        this.isBusy            = false;
        this.isToggling        = false;
        this.incPadding        = true;

        this.controls          = [];
        this.targets           = [];
        this.origOrder         = [];
        this.cache             = {};

        this.toggleArray       = [];

        this.targetsMoved      = 0;
        this.targetsImmovable  = 0;
        this.targetsBound      = 0;
        this.targetsDone       = 0;

        this.staggerDuration   = 0;
        this.effectsIn         = null;
        this.effectsOut        = null;
        this.transformIn       = [];
        this.transformOut      = [];
        this.queue             = [];

        this.state             = null;
        this.lastOperation     = null;
        this.lastClicked       = null;
        this.userCallback      = null;
        this.userDeferred      = null;

        this.dom               = new mixitup.MixerDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Mixer);

    mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Mixer.prototype,
    /** @lends mixitup.Mixer */
    {
        constructor: mixitup.Mixer,

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @param {HTMLElement} container
         * @param {HTMLElement} document
         * @param {string}      id
         * @param {object}      [config]
         */

        attach: function(container, document, id, config) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeAttach', arguments);

            self.id = id;

            if (config) {
                h.extend(self.config, config, true, true);
            }

            self.sanitizeConfig();

            self.cacheDom(container, document);

            if (self.config.layout.containerClassName) {
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            if (!mixitup.features.has.transitions) {
                self.config.animation.enable = false;
            }

            if (typeof window.console === 'undefined') {
                self.config.debug.showWarnings = false;
            }

            if (self.config.data.uidKey) {
                // If the dataset API is in use, force disable controls

                self.config.controls.enable = false;
            }

            self.indexTargets();

            self.state = self.getInitialState();

            for (i = 0; target = self.lastOperation.toHide[i]; i++) {
                target.hide();
            }

            if (self.config.controls.enable) {
                self.initControls();

                self.buildToggleArray(null, self.state);

                self.updateControls({
                    filter: self.state.activeFilter,
                    sort: self.state.activeSort
                });
            }

            self.parseEffects();

            self.callActions('afterAttach', arguments);
        },

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @return {void}
         */

        sanitizeConfig: function() {
            var self = this;

            self.callActions('beforeSanitizeConfig', arguments);

            // Sanitize enum/string config options

            self.config.controls.scope          = self.config.controls.scope.toLowerCase().trim();
            self.config.controls.toggleLogic    = self.config.controls.toggleLogic.toLowerCase().trim();
            self.config.controls.toggleDefault  = self.config.controls.toggleDefault.toLowerCase().trim();

            self.config.animation.effects       = self.config.animation.effects.trim();

            self.callActions('afterSanitizeConfig', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {mixitup.State}
         */

        getInitialState: function() {
            var self        = this,
                state       = new mixitup.State(),
                operation   = new mixitup.Operation();

            self.callActions('beforeGetInitialState', arguments);

            // Map initial values into a mock state object in order to construct an operation

            state.activeContainerClassName = self.config.layout.containerClassName;

            if (self.config.load.dataset) {
                // Dataset API

                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
                    throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                }

                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                operation.show = self.targets.slice();

                state = self.callFilters('stateGetInitialState', state, arguments);
            } else {
                // DOM API

                state.activeFilter              = self.parseFilterArgs([self.config.load.filter]).command;
                state.activeSort                = self.parseSortArgs([self.config.load.sort]).command;
                state.totalTargets              = self.targets.length;

                state = self.callFilters('stateGetInitialState', state, arguments);

                if (
                    state.activeSort.collection || state.activeSort.attribute ||
                    state.activeSort.order === 'random' || state.activeSort.order === 'desc'
                ) {
                    // Sorting on load

                    operation.newSort = state.activeSort;

                    self.sortOperation(operation);

                    self.printSort(false, operation);

                    self.targets = operation.newOrder;
                } else {
                    operation.startOrder = operation.newOrder = self.targets;
                }

                operation.startFilter               = operation.newFilter               = state.activeFilter;
                operation.startSort                 = operation.newSort                 = state.activeSort;
                operation.startContainerClassName   = operation.newContainerClassName   = state.activeContainerClassName;

                if (operation.newFilter.selector === 'all') {
                    operation.newFilter.selector = self.config.selectors.target;
                } else if (operation.newFilter.selector === 'none') {
                    operation.newFilter.selector = '';
                }
            }

            operation = self.callFilters('operationGetInitialState', operation, [state]);

            self.lastOperation = operation;

            if (operation.newFilter) {
                self.filterOperation(operation);
            }

            state = self.buildState(operation);

            return state;
        },

        /**
         * Caches references of DOM elements neccessary for the mixer's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   document
         * @return  {void}
         */

        cacheDom: function(el, document) {
            var self    = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.document  = document;
            self.dom.body      = self.dom.document.querySelector('body');
            self.dom.container = el;
            self.dom.parent    = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * Indexes all child elements of the mixer matching the `selectors.target`
         * selector, instantiating a mixitup.Target for each one.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        indexTargets: function() {
            var self            = this,
                target          = null,
                el              = null,
                dataset         = null,
                i               = -1;

            self.callActions('beforeIndexTargets', arguments);

            self.dom.targets = self.config.layout.allowNestedTargets ?
                self.dom.container.querySelectorAll(self.config.selectors.target) :
                h.children(self.dom.container, self.config.selectors.target, self.dom.document);

            self.dom.targets = h.arrayFromList(self.dom.targets);

            self.targets = [];

            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
                throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
            }

            if (self.dom.targets.length) {
                for (i = 0; el = self.dom.targets[i]; i++) {
                    target = new mixitup.Target();

                    target.init(el, self, dataset ? dataset[i] : void(0));

                    target.isInDom = true;

                    self.targets.push(target);
                }

                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ?
                    self.dom.container :
                    self.dom.targets[0].parentElement;
            }

            self.origOrder = self.targets;

            self.callActions('afterIndexTargets', arguments);
        },

        initControls: function() {
            var self                = this,
                definition          = '',
                controlElements     = null,
                el                  = null,
                parent              = null,
                delagators          = null,
                control             = null,
                i                   = -1,
                j                   = -1;

            self.callActions('beforeInitControls', arguments);

            switch (self.config.controls.scope) {
                case 'local':
                    parent = self.dom.container;

                    break;
                case 'global':
                    parent = self.dom.document;

                    break;
                default:
                    throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
            }

            for (i = 0; definition = mixitup.controlDefinitions[i]; i++) {
                if (self.config.controls.live || definition.live) {
                    if (definition.parent) {
                        delagators = self.dom[definition.parent];

                        if (!delagators || delagators.length < 0) continue;

                        if (typeof delagators.length !== 'number') {
                            delagators = [delagators];
                        }
                    } else {
                        delagators = [parent];
                    }

                    for (j = 0; (el = delagators[j]); j++) {
                        control = self.getControl(el,  definition.type, definition.selector);

                        self.controls.push(control);
                    }
                } else {
                    controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);

                    for (j = 0; (el = controlElements[j]); j++) {
                        control = self.getControl(el, definition.type, '');

                        if (!control) continue;

                        self.controls.push(control);
                    }
                }
            }

            self.callActions('afterInitControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement} el
         * @param   {string}      type
         * @param   {string}      selector
         * @return  {mixitup.Control|null}
         */

        getControl: function(el, type, selector) {
            var self    = this,
                control = null,
                i       = -1;

            self.callActions('beforeGetControl', arguments);

            if (!selector) {
                // Static controls only

                for (i = 0; control = mixitup.controls[i]; i++) {
                    if (control.el === el && control.isBound(self)) {
                        // Control already bound to this mixer (as another type).

                        // NB: This prevents duplicate controls from being registered where a selector
                        // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"

                        return self.callFilters('controlGetControl', null, arguments);
                    } else if (control.el === el && control.type === type && control.selector === selector) {
                        // Another mixer is already using this control, add this mixer as a binding

                        control.addBinding(self);

                        return self.callFilters('controlGetControl', control, arguments);
                    }
                }
            }

            // Create new control

            control = new mixitup.Control();

            control.init(el, type, selector);

            control.classNames.base     = h.getClassname(self.config.classNames, type);
            control.classNames.active   = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);

            // Add a reference to this mixer as a binding

            control.addBinding(self);

            return self.callFilters('controlGetControl', control, arguments);
        },

        /**
         * Creates a compound selector by joining the `toggleArray` value as per the
         * defined toggle logic.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {string}
         */

        getToggleSelector: function() {
            var self            = this,
                delineator      = self.config.controls.toggleLogic === 'or' ? ', ' : '',
                toggleSelector  = '';

            self.callActions('beforeGetToggleSelector', arguments);

            self.toggleArray = h.clean(self.toggleArray);

            toggleSelector = self.toggleArray.join(delineator);

            if (toggleSelector === '') {
                toggleSelector = self.config.controls.toggleDefault;
            }

            return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments);
        },

        /**
         * Breaks compound selector strings in an array of discreet selectors,
         * as per the active `controls.toggleLogic` configuration option. Accepts
         * either a dynamic command object, or a state object.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object}        [command]
         * @param   {mixitup.State} [state]
         * @return  {void}
         */

        buildToggleArray: function(command, state) {
            var self                    = this,
                activeFilterSelector    = '';

            self.callActions('beforeBuildToggleArray', arguments);

            if (command && command.filter) {
                activeFilterSelector = command.filter.selector.replace(/\s/g, '');
            } else if (state) {
                activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '');
            } else {
                return;
            }

            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
                activeFilterSelector = '';
            }

            if (self.config.controls.toggleLogic === 'or') {
                self.toggleArray = activeFilterSelector.split(',');
            } else {
                self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
            }

            self.toggleArray = h.clean(self.toggleArray);

            self.callActions('afterBuildToggleArray', arguments);
        },

        /**
         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
         * and breaks into its individual selectors.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string} compoundSelector
         * @return  {string[]}
         */

        splitCompoundSelector: function(compoundSelector) {
            // Break at a `.` or `[`, capturing the delineator

            var partials    = compoundSelector.split(/([\.\[])/g),
                toggleArray = [],
                selector    = '',
                i           = -1;

            if (partials[0] === '') {
                partials.shift();
            }

            for (i = 0; i < partials.length; i++) {
                if (i % 2 === 0) {
                    selector = '';
                }

                selector += partials[i];

                if (i % 2 !== 0) {
                    toggleArray.push(selector);
                }
            }

            return toggleArray;
        },

        /**
         * Updates controls to their active/inactive state based on the command or
         * current state of the mixer.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object} command
         * @return  {void}
         */

        updateControls: function(command) {
            var self    = this,
                control = null,
                output  = new mixitup.CommandMultimix(),
                i       = -1;

            self.callActions('beforeUpdateControls', arguments);

            // Sanitise to defaults

            if (command.filter) {
                output.filter = command.filter.selector;
            } else {
                output.filter = self.state.activeFilter.selector;
            }

            if (command.sort) {
                output.sort = self.buildSortString(command.sort);
            } else {
                output.sort = self.buildSortString(self.state.activeSort);
            }

            if (output.filter === self.config.selectors.target) {
                output.filter = 'all';
            }

            if (output.filter === '') {
                output.filter = 'none';
            }

            h.freeze(output);

            for (i = 0; control = self.controls[i]; i++) {
                control.update(output, self.toggleArray);
            }

            self.callActions('afterUpdateControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort}   command
         * @return  {string}
         */

        buildSortString: function(command) {
            var self    = this;
            var output  = '';

            output += command.sortString;

            if (command.next) {
                output += ' ' + self.buildSortString(command.next);
            }

            return output;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}        command
         * @param   {Operation}     operation
         * @return  {Promise.<mixitup.State>}
         */

        insertTargets: function(command, operation) {
            var self            = this,
                nextSibling     = null,
                insertionIndex  = -1,
                frag            = null,
                target          = null,
                el              = null,
                i               = -1;

            self.callActions('beforeInsertTargets', arguments);

            if (typeof command.index === 'undefined') command.index = 0;

            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
            frag        = self.dom.document.createDocumentFragment();

            if (nextSibling) {
                insertionIndex = h.index(nextSibling, self.config.selectors.target);
            } else {
                insertionIndex = self.targets.length;
            }

            if (command.collection) {
                for (i = 0; el = command.collection[i]; i++) {
                    if (self.dom.targets.indexOf(el) > -1) {
                        throw new Error(mixitup.messages.errorInsertPreexistingElement());
                    }

                    // Ensure elements are hidden when they are added to the DOM, so they can
                    // be animated in gracefully

                    el.style.display = 'none';

                    frag.appendChild(el);
                    frag.appendChild(self.dom.document.createTextNode(' '));

                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;

                    target = new mixitup.Target();

                    target.init(el, self);

                    target.isInDom = true;

                    self.targets.splice(insertionIndex, 0, target);

                    insertionIndex++;
                }

                self.dom.parent.insertBefore(frag, nextSibling);
            }

            // Since targets have been added, the original order must be updated

            operation.startOrder = self.origOrder = self.targets;

            self.callActions('afterInsertTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Number}      [index]
         * @param   {Element}     [sibling]
         * @param   {string}      [position]
         * @return  {Element}
         */

        getNextSibling: function(index, sibling, position) {
            var self    = this,
                element = null;

            index = Math.max(index, 0);

            if (sibling && position === 'before') {
                // Explicit sibling

                element = sibling;
            } else if (sibling && position === 'after') {
                // Explicit sibling

                element = sibling.nextElementSibling || null;
            } else if (self.targets.length > 0 && typeof index !== 'undefined') {
                // Index and targets exist

                element = (index < self.targets.length || !self.targets.length) ?
                    self.targets[index].dom.el :
                    self.targets[self.targets.length - 1].dom.el.nextElementSibling;
            } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
                // No targets but other siblings

                if (self.config.layout.siblingAfter) {
                    element = self.config.layout.siblingAfter;
                } else if (self.config.layout.siblingBefore) {
                    element = self.config.layout.siblingBefore.nextElementSibling;
                } else {
                    self.dom.parent.children[0];
                }
            } else {
                element === null;
            }

            return self.callFilters('elementGetNextSibling', element, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        filterOperation: function(operation) {
            var self        = this,
                testResult  = false,
                index       = -1,
                action      = '',
                target      = null,
                i           = -1;

            self.callActions('beforeFilterOperation', arguments);

            action = operation.newFilter.action;

            for (i = 0; target = operation.newOrder[i]; i++) {
                if (operation.newFilter.collection) {
                    // show via collection

                    testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
                } else {
                    // show via selector

                    if (operation.newFilter.selector === '') {
                        testResult = false;
                    } else {
                        testResult = target.dom.el.matches(operation.newFilter.selector);
                    }
                }

                self.evaluateHideShow(testResult, target, action, operation);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = operation.show[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        // If any shown targets should be removed, move them into the toHide array

                        operation.show.splice(i, 1);

                        if ((index = operation.toShow.indexOf(target)) > -1) {
                            operation.toShow.splice(index, 1);
                        }

                        operation.toHide.push(target);
                        operation.hide.push(target);

                        i--;
                    }
                }
            }

            operation.matching = operation.show.slice();

            if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
                operation.hasFailed = true;
            }

            self.callActions('afterFilterOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   testResult
         * @param   {Element}   target
         * @param   {string}    action
         * @param   {Operation} operation
         * @return  {void}
         */

        evaluateHideShow: function(testResult, target, action, operation) {
            var self = this,
                filteredTestResult = false,
                args = Array.prototype.slice.call(arguments, 1);

            filteredTestResult = self.callFilters('testResultEvaluateHideShow', testResult, args);

            self.callActions('beforeEvaluateHideShow', arguments);

            if (
                filteredTestResult === true && action === 'show' ||
                filteredTestResult === false && action === 'hide'
            ) {
                operation.show.push(target);

                !target.isShown && operation.toShow.push(target);
            } else {
                operation.hide.push(target);

                target.isShown && operation.toHide.push(target);
            }

            self.callActions('afterEvaluateHideShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        sortOperation: function(operation) {
            var self     = this,
                newOrder = [],
                target   = null,
                el       = null,
                i        = -1;

            self.callActions('beforeSortOperation', arguments);

            operation.startOrder = self.targets;

            if (operation.newSort.collection) {
                // Sort by collection

                newOrder = [];

                for (i = 0; (el = operation.newSort.collection[i]); i++) {
                    if (self.dom.targets.indexOf(el) < 0) {
                        throw new Error(mixitup.messages.errorSortNonExistentElement());
                    }

                    target = new mixitup.Target();

                    target.init(el, self);

                    target.isInDom = true;

                    newOrder.push(target);
                }

                operation.newOrder = newOrder;
            } else if (operation.newSort.order === 'random') {
                // Sort random

                operation.newOrder = h.arrayShuffle(operation.startOrder);
            } else if (operation.newSort.attribute === '') {
                // Sort by default

                operation.newOrder = self.origOrder.slice();

                if (operation.newSort.order === 'desc') {
                    operation.newOrder.reverse();
                }
            } else {
                // Sort by attribute

                operation.newOrder = operation.startOrder.slice();

                operation.newOrder.sort(function(a, b) {
                    return self.compare(a, b, operation.newSort);
                });
            }

            if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
                operation.willSort = false;
            }

            self.callActions('afterSortOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {mixitup.Target}        a
         * @param   {mixitup.Target}        b
         * @param   {mixitup.CommandSort}   command
         * @return  {Number}
         */

        compare: function(a, b, command) {
            var self        = this,
                order       = command.order,
                attrA       = self.getAttributeValue(a, command.attribute),
                attrB       = self.getAttributeValue(b, command.attribute);

            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                attrA = attrA.toLowerCase();
                attrB = attrB.toLowerCase();
            } else {
                attrA = attrA * 1;
                attrB = attrB * 1;
            }

            if (attrA < attrB) {
                return order === 'asc' ? -1 : 1;
            }

            if (attrA > attrB) {
                return order === 'asc' ? 1 : -1;
            }

            if (attrA === attrB && command.next) {
                return self.compare(a, b, command.next);
            }

            return 0;
        },

        /**
         * Reads the values of any data attributes present the provided target element
         * which match the current sort command.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Target}    target
         * @param   {string}            [attribute]
         * @return  {(String|Number)}
         */

        getAttributeValue: function(target, attribute) {
            var self    = this,
                value   = '';

            value = target.dom.el.getAttribute('data-' + attribute);

            if (value === null) {
                if (self.config.debug.showWarnings) {
                    // Encourage users to assign values to all targets to avoid erroneous sorting
                    // when types are mixed

                    console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                        attribute: 'data-' + attribute
                    }));
                }
            }

            // If an attribute is not present, return 0 as a safety value

            return self.callFilters('valueGetAttributeValue', value || 0, arguments);
        },

        /**
         * Inserts elements into the DOM in the appropriate
         * order using a document fragment for minimal
         * DOM thrashing
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   isResetting
         * @param   {Operation} operation
         * @return  {void}
         */

        printSort: function(isResetting, operation) {
            var self        = this,
                startOrder  = isResetting ? operation.newOrder : operation.startOrder,
                newOrder    = isResetting ? operation.startOrder : operation.newOrder,
                nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null,
                frag        = window.document.createDocumentFragment(),
                whitespace  = null,
                target      = null,
                el          = null,
                i           = -1;

            self.callActions('beforePrintSort', arguments);

            // Empty the container

            for (i = 0; target = startOrder[i]; i++) {
                el = target.dom.el;

                if (el.style.position === 'absolute') continue;

                h.removeWhitespace(el.previousSibling);

                el.parentElement.removeChild(el);
            }

            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;

            if (whitespace && whitespace.nodeName === '#text') {
                h.removeWhitespace(whitespace);
            }

            for (i = 0; target = newOrder[i]; i++) {
                // Add targets into a document fragment

                el = target.dom.el;

                if (h.isElement(frag.lastChild)) {
                    frag.appendChild(window.document.createTextNode(' '));
                }

                frag.appendChild(el);
            }

            // Insert the document fragment into the container
            // before any other non-target elements

            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
                frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0]);
            }

            if (nextSibling) {
                frag.appendChild(window.document.createTextNode(' '));

                self.dom.parent.insertBefore(frag, nextSibling);
            } else {
                self.dom.parent.appendChild(frag);
            }

            self.callActions('afterPrintSort', arguments);
        },

        /**
         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}                sortString
         * @param   {mixitup.CommandSort}   command
         * @return  {mixitup.CommandSort}
         */

        parseSortString: function(sortString, command) {
            var self        = this,
                rules       = sortString.split(' '),
                current     = command,
                rule        = [],
                i           = -1;

            // command.sortString = sortString;

            for (i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');

                current.sortString  = rules[i];
                current.attribute   = h.dashCase(rule[0]);
                current.order       = rule[1] || 'asc';

                switch (current.attribute) {
                    case 'default':
                        // treat "default" as sorting by no attribute

                        current.attribute = '';

                        break;
                    case 'random':
                        // treat "random" as an order not an attribute

                        current.attribute   = '';
                        current.order       = 'random';

                        break;
                }

                if (!current.attribute || current.order === 'random') break;

                if (i < rules.length - 1) {
                    // Embed reference to the next command

                    current.next = new mixitup.CommandSort();

                    h.freeze(current);

                    current = current.next;
                }
            }

            return self.callFilters('commandsParseSort', command, arguments);
        },

        /**
         * Parses all effects out of the user-defined `animation.effects` string into
         * their respective properties and units.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @return  {void}
         */

        parseEffects: function() {
            var self            = this,
                transformName   = '',
                effectsIn       = self.config.animation.effectsIn || self.config.animation.effects,
                effectsOut      = self.config.animation.effectsOut || self.config.animation.effects;

            self.callActions('beforeParseEffects', arguments);

            self.effectsIn      = new mixitup.StyleData();
            self.effectsOut     = new mixitup.StyleData();
            self.transformIn    = [];
            self.transformOut   = [];

            self.effectsIn.opacity = self.effectsOut.opacity = 1;

            self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, true);

            for (transformName in mixitup.transformDefaults) {
                if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) {
                    continue;
                }

                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
            }

            self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, true);

            self.callActions('afterParseEffects', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {string}    effectName
         * @param   {string}    effectString
         * @param   {StyleData} effects
         * @param   {String[]}  transform
         * @param   {boolean}   [isOut]
         */

        parseEffect: function(effectName, effectString, effects, transform, isOut) {
            var self        = this,
                re          = /\(([^)]+)\)/,
                propIndex   = -1,
                str         = '',
                match       = [],
                val         = '',
                units       = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'],
                unit        = '',
                i           = -1;

            self.callActions('beforeParseEffect', arguments);

            if (typeof effectString !== 'string') {
                throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
            }

            if (effectString.indexOf(effectName) < 0) {
                // The effect is not present in the effects string

                if (effectName === 'stagger') {
                    // Reset stagger to 0

                    self.staggerDuration = 0;
                }

                return;
            }

            // The effect is present

            propIndex = effectString.indexOf(effectName + '(');

            if (propIndex > -1) {
                // The effect has a user defined value in parentheses

                // Extract from the first parenthesis to the end of string

                str = effectString.substring(propIndex);

                // Match any number of characters between "(" and ")"

                match = re.exec(str);

                val = match[1];
            }

            switch (effectName) {
                case 'fade':
                    effects.opacity = val ? parseFloat(val) : 0;

                    break;
                case 'stagger':
                    self.staggerDuration = val ? parseFloat(val) : 100;

                    // TODO: Currently stagger must be applied globally, but
                    // if seperate values are specified for in/out, this should
                    // be respected

                    break;
                default:
                    // All other effects are transforms following the same structure

                    if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1;
                    } else {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value);
                    }

                    if (val) {
                        for (i = 0; unit = units[i]; i++) {
                            if (val.indexOf(unit) > -1) {
                                effects[effectName].unit = unit;

                                break;
                            }
                        }
                    } else {
                        effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                    }

                    transform.push(
                        effectName +
                        '(' +
                        effects[effectName].value +
                        effects[effectName].unit +
                        ')'
                    );
            }

            self.callActions('afterParseEffect', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {State}
         */

        buildState: function(operation) {
            var self        = this,
                state       = new mixitup.State(),
                target      = null,
                i           = -1;

            self.callActions('beforeBuildState', arguments);

            // Map target elements into state arrays.
            // the real target objects should never be exposed

            for (i = 0; target = self.targets[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.targets.push(target.dom.el);
                }
            }

            for (i = 0; target = operation.matching[i]; i++) {
                state.matching.push(target.dom.el);
            }

            for (i = 0; target = operation.show[i]; i++) {
                state.show.push(target.dom.el);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.hide.push(target.dom.el);
                }
            }

            state.id                        = self.id;
            state.container                 = self.dom.container;
            state.activeFilter              = operation.newFilter;
            state.activeSort                = operation.newSort;
            state.activeDataset             = operation.newDataset;
            state.activeContainerClassName  = operation.newContainerClassName;
            state.hasFailed                 = operation.hasFailed;
            state.totalTargets              = self.targets.length;
            state.totalShow                 = operation.show.length;
            state.totalHide                 = operation.hide.length;
            state.totalMatching             = operation.matching.length;
            state.triggerElement            = operation.triggerElement;

            return self.callFilters('stateBuildState', state, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   shouldAnimate
         * @param   {Operation} operation
         * @return  {void}
         */

        goMix: function(shouldAnimate, operation) {
            var self        = this,
                deferred    = null;

            self.callActions('beforeGoMix', arguments);

            // If the animation duration is set to 0ms,
            // or no effects specified,
            // or the container is hidden
            // then abort animation

            if (
                !self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)
            ) {
                shouldAnimate = false;
            }

            if (
                !operation.toShow.length &&
                !operation.toHide.length &&
                !operation.willSort &&
                !operation.willChangeLayout
            ) {
                // If nothing to show or hide, and not sorting or
                // changing layout

                shouldAnimate = false;
            }

            if (
                !operation.startState.show.length &&
                !operation.show.length
            ) {
                // If nothing currently shown, nothing to show

                shouldAnimate = false;
            }

            mixitup.events.fire('mixStart', self.dom.container, {
                state: operation.startState,
                futureState: operation.newState,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixStart === 'function') {
                self.config.callbacks.onMixStart.call(
                    self.dom.container,
                    operation.startState,
                    operation.newState,
                    self
                );
            }

            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));

            if (!self.userDeferred) {
                // Queue empty, no pending operations

                deferred = self.userDeferred = h.defer(mixitup.libraries);
            } else {
                // Use existing deferred

                deferred = self.userDeferred;
            }

            self.isBusy = true;

            if (!shouldAnimate || !mixitup.features.has.transitions) {
                // Abort

                if (self.config.debug.fauxAsync) {
                    setTimeout(function() {
                        self.cleanUp(operation);
                    }, self.config.animation.duration);
                } else {
                    self.cleanUp(operation);
                }

                return self.callFilters('promiseGoMix', deferred.promise, arguments);
            }

            // If we should animate and the platform supports transitions, go for it

            if (window.pageYOffset !== operation.docState.scrollTop) {
                window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
            }

            if (self.config.animation.applyPerspective) {
                self.dom.parent.style[mixitup.features.perspectiveProp] =
                    self.config.animation.perspectiveDistance;

                self.dom.parent.style[mixitup.features.perspectiveOriginProp] =
                    self.config.animation.perspectiveOrigin;
            }

            if (
                self.config.animation.animateResizeContainer &&
                operation.startHeight !== operation.newHeight &&
                operation.viewportDeltaY !== operation.startHeight - operation.newHeight
            ) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (
                self.config.animation.animateResizeContainer &&
                operation.startWidth !== operation.newWidth &&
                operation.viewportDeltaX !== operation.startWidth - operation.newWidth
            ) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            if (operation.startHeight === operation.newHeight) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (operation.startWidth === operation.newWidth) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) {
                self.dom.parent.style.overflow = 'hidden';
            }

            requestAnimationFrame(function() {
                self.moveTargets(operation);
            });

            return self.callFilters('promiseGoMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getStartMixData: function(operation) {
            var self        = this,
                parentStyle = window.getComputedStyle(self.dom.parent),
                parentRect  = self.dom.parent.getBoundingClientRect(),
                target      = null,
                data        = {},
                i           = -1,
                boxSizing   = parentStyle[mixitup.features.boxSizingProp];

            self.incPadding = (boxSizing === 'border-box');

            self.callActions('beforeGetStartMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                data = target.getPosData();

                operation.showPosData[i] = {
                    startPosData: data
                };
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                data = target.getPosData();

                operation.toHidePosData[i] = {
                    startPosData: data
                };
            }

            operation.startX = parentRect.left;
            operation.startY = parentRect.top;

            operation.startHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.startWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            self.callActions('afterGetStartMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setInter: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetInter', arguments);

            // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height/width

            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height    = operation.startHeight + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            if (self.config.animation.clampWidth) {
                self.dom.parent.style.width     = operation.startWidth + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterSetInter', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getInterMixData: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeGetInterMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].interPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].interPosData = target.getPosData();
            }

            self.callActions('afterGetInterMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setFinal: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetFinal', arguments);

            operation.willSort && self.printSort(false, operation);

            for (i = 0; target = operation.toHide[i]; i++) {
                target.hide();
            }

            self.callActions('afterSetFinal', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getFinalMixData: function(operation) {
            var self        = this,
                parentStyle = null,
                parentRect  = null,
                target      = null,
                i           = -1;

            self.callActions('beforeGetFinalMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].finalPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].finalPosData = target.getPosData();
            }

            // Remove clamping

            if (self.config.animation.clampHeight || self.config.animation.clampWidth) {
                self.dom.parent.style.height    =
                self.dom.parent.style.width     =
                self.dom.parent.style.overflow  = '';
            }

            if (!self.incPadding) {
                parentStyle = window.getComputedStyle(self.dom.parent);
            }

            parentRect  = self.dom.parent.getBoundingClientRect();

            operation.newX = parentRect.left;
            operation.newY = parentRect.top;

            operation.newHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.newWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
            operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;

            if (operation.willSort) {
                self.printSort(true, operation);
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.hide();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.newContainerClassName);
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            self.callActions('afterGetFinalMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since    3.0.0
         * @param    {Operation}     operation
         */

        getTweenData: function(operation) {
            var self            = this,
                target          = null,
                posData         = null,
                effectNames     = Object.getOwnPropertyNames(self.effectsIn),
                effectName      = '',
                effect          = null,
                widthChange     = -1,
                heightChange    = -1,
                i               = -1,
                j               = -1;

            self.callActions('beforeGetTweenData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                posData             = operation.showPosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                if (target.isShown) {
                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                } else {
                    posData.posIn.x = posData.posIn.y = 0;
                }

                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;

                // Process opacity

                posData.posIn.opacity       = target.isShown ? 1 : self.effectsIn.opacity;
                posData.posOut.opacity      = 1;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Adjust x and y if not nudging

                if (!target.isShown && !self.config.animation.nudge) {
                    posData.posIn.x = posData.posOut.x;
                    posData.posIn.y = posData.posOut.y;
                }

                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width     = posData.startPosData.width;
                    posData.posIn.height    = posData.startPosData.height;

                    // "||" Prevents width/height change from including 0 width/height if hiding or showing

                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;

                    posData.posOut.width    = posData.finalPosData.width;
                    posData.posOut.height   = posData.finalPosData.height;

                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;

                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;

                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;

                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;

                    posData.tweenData.width         = posData.posOut.width - posData.posIn.width;
                    posData.tweenData.height        = posData.posOut.height - posData.posIn.height;
                    posData.tweenData.marginRight   = posData.posOut.marginRight - posData.posIn.marginRight;
                    posData.tweenData.marginBottom  = posData.posOut.marginBottom - posData.posIn.marginBottom;
                }

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsIn[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = effect.value;
                    posData.posOut[effectName].value    = 0;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData             = operation.toHidePosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                posData.posIn.x     = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                posData.posIn.y     = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                posData.posOut.x    = self.config.animation.nudge ? 0 : posData.posIn.x;
                posData.posOut.y    = self.config.animation.nudge ? 0 : posData.posIn.y;
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width         = posData.startPosData.width;
                    posData.posIn.height        = posData.startPosData.height;

                    widthChange = posData.startPosData.width - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = posData.startPosData.height - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                }

                // Process opacity

                posData.posIn.opacity       = 1;
                posData.posOut.opacity      = self.effectsOut.opacity;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsOut[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = 0;
                    posData.posOut[effectName].value    = effect.value;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            self.callActions('afterGetTweenData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        moveTargets: function(operation) {
            var self            = this,
                target          = null,
                moveData        = null,
                posData         = null,
                statusChange    = '',
                willTransition  = false,
                staggerIndex    = -1,
                i               = -1,
                checkProgress   = self.checkProgress.bind(self);

            self.callActions('beforeMoveTargets', arguments);

            // TODO: this is an extra loop in addition to the calcs
            // done in getOperation, could some of this be done there?

            for (i = 0; target = operation.show[i]; i++) {
                moveData    = new mixitup.IMoveData();
                posData     = operation.showPosData[i];

                statusChange = target.isShown ? 'none' : 'show';

                willTransition = self.willTransition(
                    statusChange,
                    operation.hasEffect,
                    posData.posIn,
                    posData.posOut
                );

                if (willTransition) {
                    // Prevent non-transitioning targets from incrementing the staggerIndex

                    staggerIndex++;
                }

                target.show();

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = staggerIndex;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData  = operation.toHidePosData[i];
                moveData = new mixitup.IMoveData();

                statusChange = 'hide';

                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = i;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            if (self.config.animation.animateResizeContainer) {
                self.dom.parent.style[mixitup.features.transitionProp] =
                    'height ' + self.config.animation.duration + 'ms ease, ' +
                    'width ' + self.config.animation.duration + 'ms ease ';

                requestAnimationFrame(function() {
                    if (
                        operation.startHeight !== operation.newHeight &&
                        operation.viewportDeltaY !== operation.startHeight - operation.newHeight
                    ) {
                        self.dom.parent.style.height = operation.newHeight + 'px';
                    }

                    if (
                        operation.startWidth !== operation.newWidth &&
                        operation.viewportDeltaX !== operation.startWidth - operation.newWidth
                    ) {
                        self.dom.parent.style.width = operation.newWidth + 'px';
                    }
                });
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterMoveTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @return  {boolean}
         */

        hasEffect: function() {
            var self        = this,
                EFFECTABLES = [
                    'scale',
                    'translateX', 'translateY', 'translateZ',
                    'rotateX', 'rotateY', 'rotateZ'
                ],
                effectName  = '',
                effect      = null,
                result      = false,
                value       = -1,
                i           = -1;

            if (self.effectsIn.opacity !== 1) {
                return self.callFilters('resultHasEffect', true, arguments);
            }

            for (i = 0; effectName = EFFECTABLES[i]; i++) {
                effect  = self.effectsIn[effectName];
                value   = (typeof effect && effect.value !== 'undefined') ?
                    effect.value : effect;

                if (value !== 0) {
                    result = true;

                    break;
                }
            }

            return self.callFilters('resultHasEffect', result, arguments);
        },

        /**
         * Determines if a target element will transition in
         * some fasion and therefore requires binding of
         * transitionEnd
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}        statusChange
         * @param   {boolean}       hasEffect
         * @param   {StyleData}     posIn
         * @param   {StyleData}     posOut
         * @return  {boolean}
         */

        willTransition: function(statusChange, hasEffect, posIn, posOut) {
            var self    = this,
                result  = false;

            if (!h.isVisible(self.dom.container)) {
                // If the container is not visible, the transitionEnd
                // event will not occur and MixItUp will hang

                result = false;
            } else if (
                (statusChange !== 'none' && hasEffect) ||
                posIn.x !== posOut.x ||
                posIn.y !== posOut.y
            ) {
                // If opacity and/or translate will change

                result = true;
            } else if (self.config.animation.animateResizeTargets) {
                // Check if width, height or margins will change

                result = (
                    posIn.width !== posOut.width ||
                    posIn.height !== posOut.height ||
                    posIn.marginRight !== posOut.marginRight ||
                    posIn.marginTop !== posOut.marginTop
                );
            } else {
                result = false;
            }

            return self.callFilters('resultWillTransition', result, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        checkProgress: function(operation) {
            var self = this;

            self.targetsDone++;

            if (self.targetsBound === self.targetsDone) {
                self.cleanUp(operation);
            }
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        cleanUp: function(operation) {
            var self                = this,
                target              = null,
                whitespaceBefore    = null,
                whitespaceAfter     = null,
                nextInQueue         = null,
                i                   = -1;

            self.callActions('beforeCleanUp', arguments);

            self.targetsMoved          =
                self.targetsImmovable  =
                self.targetsBound      =
                self.targetsDone       = 0;

            for (i = 0; target = operation.show[i]; i++) {
                target.cleanUp();

                target.show();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.cleanUp();

                target.hide();
            }

            if (operation.willSort) {
                self.printSort(false, operation);
            }

            // Remove any styles applied to the parent container

            self.dom.parent.style[mixitup.features.transitionProp]             =
                self.dom.parent.style.height                                   =
                self.dom.parent.style.width                                    =
                self.dom.parent.style.overflow                                 =
                self.dom.parent.style[mixitup.features.perspectiveProp]        =
                self.dom.parent.style[mixitup.features.perspectiveOriginProp]  = '';

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        if (
                            (whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' &&
                            (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text'
                        ) {
                            h.removeWhitespace(whitespaceBefore);
                        }

                        if (!operation.willSort) {
                            // NB: Sorting will remove targets as a bi-product of `printSort()`

                            self.dom.parent.removeChild(target.dom.el);
                        }

                        self.targets.splice(i, 1);

                        target.isInDom = false;

                        i--;
                    }
                }

                // Since targets have been removed, the original order must be updated

                self.origOrder = self.targets;
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            self.state = operation.newState;
            self.lastOperation = operation;

            self.dom.targets = self.state.targets;

            // mixEnd

            mixitup.events.fire('mixEnd', self.dom.container, {
                state: self.state,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixEnd === 'function') {
                self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
            }

            if (operation.hasFailed) {
                // mixFail

                mixitup.events.fire('mixFail', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixFail === 'function') {
                    self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                }

                h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
            }

            // User-defined callback function

            if (typeof self.userCallback === 'function') {
                self.userCallback.call(self.dom.container, self.state, self);
            }

            if (typeof self.userDeferred.resolve === 'function') {
                self.userDeferred.resolve(self.state);
            }

            self.userCallback  = null;
            self.userDeferred  = null;
            self.lastClicked   = null;
            self.isToggling    = false;
            self.isBusy        = false;

            if (self.queue.length) {
                self.callActions('beforeReadQueueCleanUp', arguments);

                nextInQueue = self.queue.shift();

                // Update non-public API properties stored in queue

                self.userDeferred  = nextInQueue.deferred;
                self.isToggling    = nextInQueue.isToggling;
                self.lastClicked   = nextInQueue.triggerElement;

                if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) {
                    self.multimix.apply(self, nextInQueue.args);
                } else {
                    self.dataset.apply(self, nextInQueue.args);
                }
            }

            self.callActions('afterCleanUp', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseMultimixArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandMultimix();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'object') {
                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            // Coerce arbitrary command arguments into typed command objects

            if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) {
                instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command;
            }

            if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) {
                instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command;
            }

            if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) {
                instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command;
            }

            if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) {
                instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command;
            }

            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) {
                instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command;
            }

            instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseFilterArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandFilter();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (typeof arg === 'string') {
                    // Selector

                    instruction.command.selector = arg;
                } else if (arg === null) {
                    instruction.command.collection = [];
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    instruction.command.collection = [arg];
                } else if (typeof arg === 'object' && typeof arg.length !== 'undefined') {
                    // Multiple elements in array, NodeList or jQuery collection

                    instruction.command.collection = h.arrayFromList(arg);
                } else if (typeof arg === 'object') {
                    // Filter command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.selector && instruction.command.collection) {
                throw new Error(mixitup.messages.errorFilterInvalidArguments());
            }

            instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        parseSortArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                sortString  = '',
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandSort();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        // Sort string

                        sortString = arg;

                        break;
                    case 'object':
                        // Array of element references

                        if (arg.length) {
                            instruction.command.collection = h.arrayFromList(arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (sortString) {
                instruction.command = self.parseSortString(sortString, instruction.command);
            }

            instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseInsertArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandInsert();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'number') {
                    // Insert index

                    instruction.command.index = arg;
                } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
                    // 'before'/'after'

                    instruction.command.position = arg;
                } else if (typeof arg === 'string') {
                    // Markup

                    instruction.command.collection =
                        h.arrayFromList(h.createElement(arg).childNodes);
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    !instruction.command.collection.length ?
                        (instruction.command.collection = [arg]) :
                        (instruction.command.sibling = arg);
                } else if (typeof arg === 'object' && arg.length) {
                    // Multiple elements in array or jQuery collection

                    !instruction.command.collection.length ?
                        (instruction.command.collection = arg) :
                        instruction.command.sibling = arg[0];
                } else if (typeof arg === 'object' && arg.childNodes && arg.childNodes.length) {
                    // Document fragment

                    !instruction.command.collection.length ?
                        instruction.command.collection = h.arrayFromList(arg.childNodes) :
                        instruction.command.sibling = arg.childNodes[0];
                } else if (typeof arg === 'object') {
                    // Insert command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.index && instruction.command.sibling) {
                throw new Error(mixitup.messages.errorInsertInvalidArguments());
            }

            if (!instruction.command.collection.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningInsertNoElements());
            }

            instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseRemoveArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                target      = null,
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandRemove();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'number':
                        if (self.targets[arg]) {
                            instruction.command.targets[0] = self.targets[arg];
                        }

                        break;
                    case 'string':
                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));

                        break;
                    case 'object':
                        if (arg && arg.length) {
                            instruction.command.collection = arg;
                        } else if (h.isElement(arg, self.dom.document)) {
                            instruction.command.collection = [arg];
                        } else {
                            // Remove command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (instruction.command.collection.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (instruction.command.collection.indexOf(target.dom.el) > -1) {
                        instruction.command.targets.push(target);
                    }
                }
            }

            if (!instruction.command.targets.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningRemoveNoElements());
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseDatasetArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandDataset();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'object':
                        if (Array.isArray(arg) || typeof arg.length === 'number') {
                            instruction.command.dataset = arg;
                        } else {
                            // Change layout command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseChangeLayoutArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandChangeLayout();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        instruction.command.containerClassName = arg;

                        break;
                    case 'object':
                        // Change layout command

                        h.extend(instruction.command, arg);

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @param       {mixitup.QueueItem}         queueItem
         * @return      {Promise.<mixitup.State>}
         */

        queueMix: function(queueItem) {
            var self            = this,
                deferred        = null,
                toggleSelector  = '';

            self.callActions('beforeQueueMix', arguments);

            deferred = h.defer(mixitup.libraries);

            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                queueItem.deferred = deferred;

                self.queue.push(queueItem);

                // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.

                if (self.config.controls.enable) {
                    if (self.isToggling) {
                        self.buildToggleArray(queueItem.instruction.command);

                        toggleSelector = self.getToggleSelector();

                        self.updateControls({
                            filter: {
                                selector: toggleSelector
                            }
                        });
                    } else {
                        self.updateControls(queueItem.instruction.command);
                    }
                }
            } else {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                }

                deferred.resolve(self.state);

                mixitup.events.fire('mixBusy', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixBusy === 'function') {
                    self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                }
            }

            return self.callFilters('promiseQueueMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array.<object>}    newDataset
         * @return  {Operation}
         */

        getDataOperation: function(newDataset) {
            var self                = this,
                operation           = new mixitup.Operation(),
                startDataset        = [];

            operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);

            if (self.dom.targets.length && !(startDataset = (self.state.activeDataset || [])).length) {
                throw new Error(mixitup.messages.errorDatasetNotSet());
            }

            operation.id            = h.randomHex();
            operation.startState    = self.state;
            operation.startDataset  = startDataset;
            operation.newDataset    = newDataset.slice();

            self.diffDatasets(operation);

            operation.startOrder = self.targets;
            operation.newOrder = operation.show;

            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            self.targets = operation.show.slice();

            operation.newState = self.buildState(operation);

            // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
            // but are added after state is built so that state is accurate

            Array.prototype.push.apply(self.targets, operation.toRemove);

            operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);

            return operation;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */

        diffDatasets: function(operation) {
            var self                = this,
                persistantStartIds  = [],
                persistantNewIds    = [],
                insertedTargets     = [],
                data                = null,
                target              = null,
                el                  = null,
                frag                = null,
                nextEl              = null,
                uids                = {},
                id                  = '',
                i                   = -1;

            self.callActions('beforeDiffDatasets', arguments);

            for (i = 0; data = operation.newDataset[i]; i++) {
                if (typeof (id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: self.config.data.uidKey
                    }));
                }

                if (!uids[id]) {
                    uids[id] = true;
                } else {
                    throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                        uid: id
                    }));
                }

                if ((target = self.cache[id]) instanceof mixitup.Target) {
                    // Already in cache

                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                        // change detected

                        el = target.render(data);

                        target.data = data;

                        if (el !== target.dom.el) {
                            // Update target element reference

                            if (target.isInDom) {
                                target.unbindEvents();

                                self.dom.parent.replaceChild(el, target.dom.el);
                            }

                            if (!target.isShown) {
                                el.style.display = 'none';
                            }

                            target.dom.el = el;

                            if (target.isInDom) {
                                target.bindEvents();
                            }
                        }
                    }

                    el = target.dom.el;
                } else {
                    // New target

                    target = new mixitup.Target();

                    target.init(null, self, data);

                    target.hide();
                }

                if (!target.isInDom) {
                    // Adding to DOM

                    if (!frag) {
                        // Open frag

                        frag = self.dom.document.createDocumentFragment();
                    }

                    if (frag.lastElementChild) {
                        frag.appendChild(self.dom.document.createTextNode(' '));
                    }

                    frag.appendChild(target.dom.el);

                    target.isInDom = true;

                    target.unbindEvents();
                    target.bindEvents();
                    target.hide();

                    operation.toShow.push(target);

                    insertedTargets.push(target);
                } else {
                    // Already in DOM

                    nextEl = target.dom.el.nextElementSibling;

                    persistantNewIds.push(id);

                    if (frag) {
                        // Close and insert previously opened frag

                        if (frag.lastElementChild) {
                            frag.appendChild(self.dom.document.createTextNode(' '));
                        }

                        self.insertDatasetFrag(frag, target.dom.el, insertedTargets);

                        frag = null;
                    }
                }

                operation.show.push(target);
            }

            if (frag) {
                // Unclosed frag remaining

                nextEl = nextEl || self.config.layout.siblingAfter;

                if (nextEl) {
                    frag.appendChild(self.dom.document.createTextNode(' '));
                }

                self.insertDatasetFrag(frag, nextEl, insertedTargets);
            }

            for (i = 0; data = operation.startDataset[i]; i++) {
                id = data[self.config.data.uidKey];

                target = self.cache[id];

                if (operation.show.indexOf(target) < 0) {
                    // Previously shown but now absent

                    operation.hide.push(target);
                    operation.toHide.push(target);
                    operation.toRemove.push(target);
                } else {
                    persistantStartIds.push(id);
                }
            }

            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
                operation.willSort = true;
            }

            self.callActions('afterDiffDatasets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.1.5
         * @param   {DocumentFragment}          frag
         * @param   {(HTMLElement|null)}        nextEl
         * @param   {Array.<mixitup.Target>}    targets
         * @return  {void}
         */

        insertDatasetFrag: function(frag, nextEl, targets) {
            var self = this;
            var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;

            self.dom.parent.insertBefore(frag, nextEl);

            while (targets.length) {
                self.targets.splice(insertAt, 0, targets.shift());

                insertAt++;
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort} sortCommandA
         * @param   {mixitup.CommandSort} sortCommandB
         * @return  {boolean}
         */

        willSort: function(sortCommandA, sortCommandB) {
            var self    = this,
                result  = false;

            if (
                self.config.behavior.liveSort ||
                sortCommandA.order       === 'random' ||
                sortCommandA.attribute   !== sortCommandB.attribute ||
                sortCommandA.order       !== sortCommandB.order ||
                sortCommandA.collection  !== sortCommandB.collection ||
                (sortCommandA.next === null && sortCommandB.next) ||
                (sortCommandA.next && sortCommandB.next === null)
            ) {
                result = true;
            } else if (sortCommandA.next && sortCommandB.next) {
                result = self.willSort(sortCommandA.next, sortCommandB.next);
            } else {
                result = false;
            }

            return self.callFilters('resultWillSort', result, arguments);
        },

        /**
         * A shorthand method for `.filter('all')`. Shows all targets in the container.
         *
         * @example
         *
         * .show()
         *
         * @example <caption>Example: Showing all targets</caption>
         *
         * mixer.show()
         *     .then(function(state) {
         *         console.log(state.totalShow === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        show: function() {
            var self = this;

            return self.filter('all');
        },

        /**
         * A shorthand method for `.filter('none')`. Hides all targets in the container.
         *
         * @example
         *
         * .hide()
         *
         * @example <caption>Example: Hiding all targets</caption>
         *
         * mixer.hide()
         *     .then(function(state) {
         *         console.log(state.totalShow === 0); // true
         *         console.log(state.totalHide === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        hide: function() {
            var self = this;

            return self.filter('none');
        },

        /**
         * Returns a boolean indicating whether or not a MixItUp operation is
         * currently in progress.
         *
         * @example
         *
         * .isMixing()
         *
         * @example <caption>Example: Checking the status of a mixer</caption>
         *
         * mixer.sort('random', function() {
         *     console.log(mixer.isMixing()) // false
         * });
         *
         * console.log(mixer.isMixing()) // true
         *
         * @public
         * @instance
         * @since   2.0.0
         * @return  {boolean}
         */

        isMixing: function() {
            var self = this;

            return self.isBusy;
        },

        /**
         * Filters all targets in the container by a provided selector string, or the values `'all'`
         * or `'none'`. Only targets matching the selector will be shown.
         *
         * @example
         *
         * .filter(selector [, animate] [, callback])
         *
         * @example <caption>Example 1: Filtering targets by a class selector</caption>
         *
         * mixer.filter('.category-a')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
         *     });
         *
         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
         *
         * mixer.filter('[data-category~="a"]')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
         *     });
         *
         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
         *
         * // Show only those targets with the classes 'category-a' AND 'category-b'
         *
         * mixer.filter('.category-a.category-c')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
         *     });
         *
         * @example <caption>Example 4: Filtering via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * console.log(collection.length); // 34
         *
         * // Filter the collection manually using Array.prototype.filter
         *
         * var filtered = collection.filter(function(target) {
         *    return parseInt(target.getAttribute('data-price')) > 10;
         * });
         *
         * console.log(filtered.length); // 22
         *
         * // Pass the filtered collection to MixItUp
         *
         * mixer.filter(filtered)
         *    .then(function(state) {
         *        console.log(state.activeFilter.collection.length === 22); // true
         *    });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        filter: function() {
            var self        = this,
                instruction = self.parseFilterArgs(arguments);

            return self.multimix({
                filter: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Adds an additional selector to the currently active filter selector, concatenating
         * as per the logic defined in `controls.toggleLogic`.
         *
         * @example
         *
         * .toggleOn(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling on a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
         *
         * mixer.toggleOn('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOn: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                toggleSelector  = '';

            self.isToggling = true;

            if (self.toggleArray.indexOf(selector) < 0) {
                self.toggleArray.push(selector);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Removes a selector from the active filter selector.
         *
         * @example
         *
         * .toggleOff(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling off a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
         *
         * mixer.toggleOff('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOff: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                selectorIndex   = self.toggleArray.indexOf(selector),
                toggleSelector  = '';

            self.isToggling = true;

            if (selectorIndex > -1) {
                self.toggleArray.splice(selectorIndex, 1);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Sorts all targets in the container according to a provided sort string.
         *
         * @example
         *
         * .sort(sortString [, animate] [, callback])
         *
         * @example <caption>Example 1: Sorting by the default DOM order</caption>
         *
         * // Reverse the default order of the targets
         *
         * mixer.sort('default:desc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'default'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *     });
         *
         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute
         *
         * mixer.sort('published-date:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 3: Sorting by multiple attributes</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
         *
         * mixer.sort('published-date:desc data-title:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *
         *         console.log(state.activeSort.next.attribute === 'title'); // true
         *         console.log(state.activeSort.next.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 4: Sorting by random</caption>
         *
         * mixer.sort('random')
         *     .then(function(state) {
         *         console.log(state.activeSort.order === 'random') // true
         *     });
         *
         * @example <caption>Example 5: Sorting via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * // Swap the position of two elements in the collection:
         *
         * var temp = collection[1];
         *
         * collection[1] = collection[0];
         * collection[0] = temp;
         *
         * // Pass the sorted collection to MixItUp
         *
         * mixer.sort(collection)
         *     .then(function(state) {
         *         console.log(state.targets[0] === collection[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|Array.<HTMLElement>)}    sortString
         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        sort: function() {
            var self        = this,
                instruction = self.parseSortArgs(arguments);

            return self.multimix({
                sort: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Changes the layout of the container by adding, removing or updating a
         * layout-specific class name. If `animation.animateResizetargets` is
         * enabled, MixItUp will attempt to gracefully animate the width, height,
         * and position of targets between layout states.
         *
         * @example
         *
         * .changeLayout(containerClassName [, animate] [, callback])
         *
         * @example <caption>Example 1: Adding a new class name to the container</caption>
         *
         * mixer.changeLayout('container-list')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === 'container-list'); // true
         *      });
         *
         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
         *
         * mixer.changeLayout('')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === ''); // true
         *      });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    containerClassName
         *      A layout-specific class name to add to the container.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        changeLayout: function() {
            var self        = this,
                instruction = self.parseChangeLayoutArgs(arguments);

            return self.multimix({
                changeLayout: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Updates the contents and order of the container to reflect the provided dataset,
         * if the dataset API is in use.
         *
         * The dataset API is designed for use in API-driven JavaScript applications, and
         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
         * achieved purely via changes to your data model, without the uglyness of having
         * to interact with or query the DOM directly.
         *
         * @example
         *
         * .dataset(dataset [, animate] [, callback])
         *
         * @example <caption>Example 1: Rendering a dataset</caption>
         *
         * var myDataset = [
         *     {id: 1, ...},
         *     {id: 2, ...},
         *     {id: 3, ...}
         * ];
         *
         * mixer.dataset(myDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 3); // true
         *     });
         *
         * @example <caption>Example 2: Sorting a dataset</caption>
         *
         * // Create a new dataset in reverse order
         *
         * var newDataset = myDataset.slice().reverse();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.activeDataset[0] === myDataset[2]); // true
         *     });
         *
         * @example <caption>Example 3: Removing an item from the dataset</caption>
         *
         * console.log(myDataset.length); // 3
         *
         * // Create a new dataset with the last item removed.
         *
         * var newDataset = myDataset.slice().pop();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {Array.<object>}    dataset
         *      An array of objects, each one representing the underlying data model of a target to be rendered.
         * @param       {boolean}           [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}          [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        dataset: function() {
            var self        = this,
                instruction = self.parseDatasetArgs(arguments),
                operation   = null,
                queueItem   = null,
                animate     = false;

            self.callActions('beforeDataset', arguments);

            if (!self.isBusy) {
                if (instruction.callback) self.userCallback = instruction.callback;

                animate = (instruction.animate ^ self.config.animation.enable) ? instruction.animate : self.config.animation.enable;

                operation = self.getDataOperation(instruction.command.dataset);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args          = arguments;
                queueItem.instruction   = instruction;

                return self.queueMix(queueItem);
            }
        },

        /**
         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
         * operations as requested.
         *
         * @example
         *
         * .multimix(multimixCommand [, animate] [, callback])
         *
         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
         *
         * mixer.multimix({
         *     filter: '.category-b',
         *     sort: 'published-date:desc'
         * })
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector === '.category-b'); // true
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *     });
         *
         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
         *
         * console.log(mixer.getState().totalShow); // 6
         *
         * // NB: When inserting via `multimix()`, an object should be provided as the value
         * // for the `insert` portion of the command, allowing for a collection of elements
         * // and an insertion index to be specified.
         *
         * mixer.multimix({
         *     sort: 'published-date:desc', // Sort the container, including any new elements
         *     insert: {
         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
         *         index: 5
         *     },
         *     remove: existingElementReference // Remove 1 existing element
         * })
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.totalShow === 7); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {object}    multimixCommand
         *      An object containing one or more things to do
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        multimix: function() {
            var self        = this,
                operation   = null,
                animate     = false,
                queueItem   = null,
                instruction = self.parseMultimixArgs(arguments);

            self.callActions('beforeMultimix', arguments);

            if (!self.isBusy) {
                operation = self.getOperation(instruction.command);

                if (self.config.controls.enable) {
                    // Update controls for API calls

                    if (instruction.command.filter && !self.isToggling) {
                        // As we are not toggling, reset the toggle array
                        // so new filter overrides existing toggles

                        self.toggleArray.length = 0;
                        self.buildToggleArray(operation.command);
                    }

                    if (self.queue.length < 1) {
                        self.updateControls(operation.command);
                    }
                }

                if (instruction.callback) self.userCallback = instruction.callback;

                // Always allow the instruction to override the instance setting

                animate = (instruction.animate ^ self.config.animation.enable) ?
                    instruction.animate :
                    self.config.animation.enable;

                self.callFilters('operationMultimix', operation, arguments);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args           = arguments;
                queueItem.instruction    = instruction;
                queueItem.triggerElement = self.lastClicked;
                queueItem.isToggling     = self.isToggling;

                return self.queueMix(queueItem);
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}            multimixCommand
         * @param   {boolean}           [isPreFetch]
         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
         * @return  {Operation|null}
         */

        getOperation: function(multimixCommand) {
            var self                = this,
                sortCommand         = multimixCommand.sort,
                filterCommand       = multimixCommand.filter,
                changeLayoutCommand = multimixCommand.changeLayout,
                removeCommand       = multimixCommand.remove,
                insertCommand       = multimixCommand.insert,
                operation           = new mixitup.Operation();

            operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);

            operation.id                = h.randomHex();
            operation.command           = multimixCommand;
            operation.startState        = self.state;
            operation.triggerElement    = self.lastClicked;

            if (self.isBusy) {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                }

                return null;
            }

            if (insertCommand) {
                self.insertTargets(insertCommand, operation);
            }

            if (removeCommand) {
                operation.toRemove = removeCommand.targets;
            }

            operation.startSort = operation.newSort = operation.startState.activeSort;
            operation.startOrder = operation.newOrder = self.targets;

            if (sortCommand) {
                operation.startSort = operation.startState.activeSort;
                operation.newSort   = sortCommand;

                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);

                if (operation.willSort) {
                    self.sortOperation(operation);
                }
            }

            operation.startFilter = operation.startState.activeFilter;

            if (filterCommand) {
                operation.newFilter = filterCommand;
            } else {
                operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter);
            }

            if (operation.newFilter.selector === 'all') {
                operation.newFilter.selector = self.config.selectors.target;
            } else if (operation.newFilter.selector === 'none') {
                operation.newFilter.selector = '';
            }

            self.filterOperation(operation);

            operation.startContainerClassName = operation.startState.activeContainerClassName;

            if (changeLayoutCommand) {
                operation.newContainerClassName = changeLayoutCommand.containerClassName;

                if (operation.newContainerClassName !== operation.startContainerClassName) {
                    operation.willChangeLayout = true;
                }
            } else {
                operation.newContainerClassName = operation.startContainerClassName;
            }

            if (self.config.animation.enable) {
                // Populate the operation's position data

                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            operation.newState = self.buildState(operation);

            return self.callFilters('operationMappedGetOperation', operation, arguments);
        },

        /**
         * Renders a previously created operation at a specific point in its path, as
         * determined by a multiplier between 0 and 1.
         *
         * @example
         * .tween(operation, multiplier)
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation}     operation
         *      An operation object created via the `getOperation` method
         *
         * @param   {Float}                 multiplier
         *      Any number between 0 and 1 representing the percentage complete of the operation
         * @return  {void}
         */

        tween: function(operation, multiplier) {
            var target          = null,
                posData         = null,
                toHideIndex     = -1,
                i               = -1;

            multiplier = Math.min(multiplier, 1);
            multiplier = Math.max(multiplier, 0);

            for (i = 0; target = operation.show[i]; i++) {
                posData = operation.showPosData[i];

                target.applyTween(posData, multiplier);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (target.isShown) {
                    target.hide();
                }

                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                    posData = operation.toHidePosData[toHideIndex];

                    if (!target.isShown) {
                        target.show();
                    }

                    target.applyTween(posData, multiplier);
                }
            }
        },

        /**
         * Inserts one or more new target elements into the container at a specified
         * index.
         *
         * To be indexed as targets, new elements must match the `selectors.target`
         * selector (`'.mix'` by default).
         *
         * @example
         *
         * .insert(newElements [, index] [, animate], [, callback])
         *
         * @example <caption>Example 1: Inserting a single element via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 0
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insert(newElement)
         *     .then(function(state) {
         *         console.log(state.totalShow === 1); // true
         *     });
         *
         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
         *
         * console.log(mixer.getState().totalShow); // 1
         *
         * // Create a new element via reference
         *
         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
         *
         * // Create and insert the new element at index 1
         *
         * mixer.insert(newElementHtml, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *         console.log(state.show[1].outerHTML === newElementHtml); // true
         *     });
         *
         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * // Create an array of new elements to insert.
         *
         * var newElement1 = document.createElement('div');
         * var newElement2 = document.createElement('div');
         *
         * newElement1.classList.add('mix');
         * newElement2.classList.add('mix');
         *
         * var newElementsCollection = [newElement1, newElement2];
         *
         * // Insert the new elements starting at index 1
         *
         * mixer.insert(newElementsCollection, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 4); // true
         *         console.log(state.show[1] === newElement1); // true
         *         console.log(state.show[2] === newElement2); // true
         *     });
         *
         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
         *
         * console.log(mixer.getState().totalShow); // 4
         *
         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
         *
         * // Insert the new elements starting at index 3
         *
         * mixer.insert($newElement, 3)
         *     .then(function(state) {
         *         console.log(state.totalShow === 5); // true
         *         console.log(state.show[3] === $newElement[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {number}    index=0
         *      The index at which to insert the new element(s). `0` by default.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insert: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.multimix({
                insert: args.command
            }, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements before a provided reference element.
         *
         * @example
         *
         * .insertBefore(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element before a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertBefore(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 2, before the reference element
         *
         *         console.log(state.show[2] === newElement); // true
         *
         *         // The reference element is now at index 3
         *
         *         console.log(state.show[3] === referenceElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements before.
         *@param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertBefore: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements after a provided reference element.
         *
         * @example
         *
         * .insertAfter(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element after a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertAfter(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 3, after the reference element
         *
         *         console.log(state.show[3] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements after.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertAfter: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container before all existing targets.
         *
         * @example
         *
         * .prepend(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Prepending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.prepend(newElement)
         *     .then(function(state) {
         *         console.log(state.show[0] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        prepend: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(0, args.command.collection, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container after all existing targets.
         *
         * @example
         *
         * .append(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Appending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.append(newElement)
         *     .then(function(state) {
         *         console.log(state.show[state.show.length - 1] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        append: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
        },

        /**
         * Removes one or more existing target elements from the container.
         *
         * @example
         *
         * .remove(elements [, animate] [, callback])
         *
         * @example <caption>Example 1: Removing an element by reference</caption>
         *
         * var elementToRemove = containerEl.firstElementChild;
         *
         * mixer.remove(elementToRemove)
         *      .then(function(state) {
         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
         *      });
         *
         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
         *
         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
         *
         * console.log(elementsToRemove.length) // 3
         *
         * mixer.remove(elementsToRemove)
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 3: Removing one or more elements by selector</caption>
         *
         * mixer.remove('.category-a')
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 4: Removing an element by index</caption>
         *
         * console.log(mixer.getState.totalShow); // 4
         *
         * // Remove the element at index 3
         *
         * mixer.remove(3)
         *      .then(function(state) {
         *          console.log(state.totalShow); // 3
         *          console.log(state.show[3]); // undefined
         *      });
         *
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        remove: function() {
            var self = this,
                args = self.parseRemoveArgs(arguments);

            return self.multimix({
                remove: args.command
            }, args.animate, args.callback);
        },

        /**
         * Retrieves the the value of any property or sub-object within the current
         * mixitup configuration, or the whole configuration object.
         *
         * @example
         *
         * .getConfig([stringKey])
         *
         * @example <caption>Example 1: retrieve the entire configuration object</caption>
         *
         * var config = mixer.getConfig(); // Config { ... }
         *
         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
         *
         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
         *
         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
         *
         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    [stringKey]    A "dot-notation" string key
         * @return      {*}
         */

        getConfig: function(stringKey) {
            var self    = this,
                value   = null;

            if (!stringKey) {
                value = self.config;
            } else {
                value = h.getProperty(self.config, stringKey);
            }

            return self.callFilters('valueGetConfig', value, arguments);
        },

        /**
         * Updates the configuration of the mixer, after it has been instantiated.
         *
         * See the Configuration Object documentation for a full list of avilable
         * configuration options.
         *
         * @example
         *
         * .configure(config)
         *
         * @example <caption>Example 1: Updating animation options</caption>
         *
         * mixer.configure({
         *     animation: {
         *         effects: 'fade translateX(-100%)',
         *         duration: 300
         *     }
         * });
         *
         * @example <caption>Example 2: Removing a callback after it has been set</caption>
         *
         * var mixer;
         *
         * function handleMixEndOnce() {
         *     // Do something ..
         *
         *     // Then nullify the callback
         *
         *     mixer.configure({
         *         callbacks: {
         *             onMixEnd: null
         *         }
         *     });
         * };
         *
         * // Instantiate a mixer with a callback defined
         *
         * mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: handleMixEndOnce
         *     }
         * });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {object}    config
         *      An object containing one of more configuration options.
         * @return      {void}
         */

        configure: function(config) {
            var self = this;

            self.callActions('beforeConfigure', arguments);

            h.extend(self.config, config, true, true);

            self.callActions('afterConfigure', arguments);
        },

        /**
         * Returns an object containing information about the current state of the
         * mixer. See the State Object documentation for more information.
         *
         * NB: State objects are immutable and should therefore be regenerated
         * after any operation.
         *
         * @example
         *
         * .getState();
         *
         * @example <caption>Example: Retrieving a state object</caption>
         *
         * var state = mixer.getState();
         *
         * console.log(state.totalShow + 'targets are currently shown');
         *
         * @public
         * @instance
         * @since       2.0.0
         * @return      {mixitup.State} An object reflecting the current state of the mixer.
         */

        getState: function() {
            var self    = this,
                state   = null;

            state = new mixitup.State();

            h.extend(state, self.state);

            h.freeze(state);

            return self.callFilters('stateGetState', state, arguments);
        },

        /**
         * Forces the re-indexing all targets within the container.
         *
         * This should only be used if some other piece of code in your application
         * has manipulated the contents of your container, which should be avoided.
         *
         * If you need to add or remove target elements from the container, use
         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
         * itself up to date.
         *
         * @example
         *
         * .forceRefresh()
         *
         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * // An element is removed from the container via some external DOM manipulation code:
         *
         * containerEl.removeChild(containerEl.firstElementChild);
         *
         * // The mixer does not know that the number of targets has changed:
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * mixer.forceRefresh();
         *
         * // After forceRefresh, the mixer is in sync again:
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * @public
         * @instance
         * @since 2.1.2
         * @return {void}
         */

        forceRefresh: function() {
            var self = this;

            self.indexTargets();
        },

        /**
         * Forces the re-rendering of all targets when using the Dataset API.
         *
         * By default, targets are only re-rendered when `data.dirtyCheck` is
         * enabled, and an item's data has changed when `dataset()` is called.
         *
         * The `forceRender()` method allows for the re-rendering of all targets
         * in response to some arbitrary event, such as the changing of the target
         * render function.
         *
         * Targets are rendered against their existing data.
         *
         * @example
         *
         * .forceRender()
         *
         * @example <caption>Example: Force render targets after changing the target render function</caption>
         *
         * console.log(container.innerHTML); // ... &lt;span class="mix"&gt;Foo&lt;/span&gt; ...
         *
         * mixer.configure({
         *     render: {
         *         target: (item) => `&lt;a href="/${item.slug}/" class="mix"&gt;${item.title}&lt;/a&gt;`
         *     }
         * });
         *
         * mixer.forceRender();
         *
         * console.log(container.innerHTML); // ... &lt;a href="/foo/" class="mix"&gt;Foo&lt;/a&gt; ...
         *
         * @public
         * @instance
         * @since 3.2.1
         * @return {void}
         */

        forceRender: function() {
            var self    = this,
                target  = null,
                el      = null,
                id      = '';

            for (id in self.cache) {
                target = self.cache[id];

                el = target.render(target.data);

                if (el !== target.dom.el) {
                    // Update target element reference

                    if (target.isInDom) {
                        target.unbindEvents();

                        self.dom.parent.replaceChild(el, target.dom.el);
                    }

                    if (!target.isShown) {
                        el.style.display = 'none';
                    }

                    target.dom.el = el;

                    if (target.isInDom) {
                        target.bindEvents();
                    }
                }
            }

            self.state = self.buildState(self.lastOperation);
        },

        /**
         * Removes mixitup functionality from the container, unbinds all control
         * event handlers, and deletes the mixer instance from MixItUp's internal
         * cache.
         *
         * This should be performed whenever a mixer's container is removed from
         * the DOM, such as during a page change in a single page application,
         * or React's `componentWillUnmount()`.
         *
         * @example
         *
         * .destroy([cleanUp])
         *
         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
         *
         * mixer.destroy();
         *
         * containerEl.parentElement.removeChild(containerEl);
         *
         * @public
         * @instance
         * @since   2.0.0
         * @param   {boolean}   [cleanUp=false]
         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
         * @return  {void}
         */

        destroy: function(cleanUp) {
            var self    = this,
                control = null,
                target  = null,
                i       = 0;

            self.callActions('beforeDestroy', arguments);

            for (i = 0; control = self.controls[i]; i++) {
                control.removeBinding(self);
            }

            for (i = 0; target = self.targets[i]; i++) {
                if (cleanUp) {
                    target.show();
                }

                target.unbindEvents();
            }

            if (self.dom.container.id.match(/^MixItUp/)) {
                self.dom.container.removeAttribute('id');
            }

            delete mixitup.instances[self.id];

            self.callActions('afterDestroy', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.IMoveData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.posIn          = null;
        this.posOut         = null;
        this.operation      = null;
        this.callback       = null;
        this.statusChange   = '';
        this.duration       = -1;
        this.staggerIndex   = -1;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.IMoveData);

    mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TargetDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TargetDom);

    mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;

    /**
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Target = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id         = '';
        this.sortString = '';
        this.mixer      = null;
        this.callback   = null;
        this.isShown    = false;
        this.isBound    = false;
        this.isExcluded = false;
        this.isInDom    = false;
        this.handler    = null;
        this.operation  = null;
        this.data       = null;
        this.dom        = new mixitup.TargetDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Target);

    mixitup.Target.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Target.prototype, {
        constructor: mixitup.Target,

        /**
         * Initialises a newly instantiated Target.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {(Element|null)}    el
         * @param   {object}            mixer
         * @param   {object}            [data]
         * @return  {void}
         */

        init: function(el, mixer, data) {
            var self = this,
                id   = '';

            self.callActions('beforeInit', arguments);

            self.mixer = mixer;

            if (!el) {
                // If no element is provided, render it

                el = self.render(data);
            }

            self.cacheDom(el);

            self.bindEvents();

            if (self.dom.el.style.display !== 'none') {
                self.isShown = true;
            }

            if (data && mixer.config.data.uidKey) {
                if (typeof (id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: mixer.config.data.uidKey
                    }));
                }

                self.id     = id;
                self.data   = data;

                mixer.cache[id] = self;
            }

            self.callActions('afterInit', arguments);
        },

        /**
         * Renders the target element using a user-defined renderer function.
         *
         * @private
         * @instance
         * @since   3.1.4
         * @param   {object} data
         * @return  {void}
         */

        render: function(data) {
            var self    = this,
                render  = null,
                el      = null,
                temp    = null,
                output  = '';

            self.callActions('beforeRender', arguments);

            render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);

            if (typeof render !== 'function') {
                throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
            }

            output = render(data);

            if (output && typeof output === 'object' && h.isElement(output)) {
                el = output;
            } else if (typeof output === 'string') {
                temp = document.createElement('div');
                temp.innerHTML = output;

                el = temp.firstElementChild;
            }

            return self.callFilters('elRender', el, arguments);
        },

        /**
         * Caches references of DOM elements neccessary for the target's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Element} el
         * @return  {void}
         */

        cacheDom: function(el) {
            var self = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.el = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    attributeName
         * @return  {void}
         */

        getSortString: function(attributeName) {
            var self    = this,
                value   = self.dom.el.getAttribute('data-' + attributeName) || '';

            self.callActions('beforeGetSortString', arguments);

            value = isNaN(value * 1) ?
                value.toLowerCase() :
                value * 1;

            self.sortString = value;

            self.callActions('afterGetSortString', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        show: function() {
            var self = this;

            self.callActions('beforeShow', arguments);

            if (!self.isShown) {
                self.dom.el.style.display = '';

                self.isShown = true;
            }

            self.callActions('afterShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        hide: function() {
            var self = this;

            self.callActions('beforeHide', arguments);

            if (self.isShown) {
                self.dom.el.style.display = 'none';

                self.isShown = false;
            }

            self.callActions('afterHide', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        move: function(moveData) {
            var self = this;

            self.callActions('beforeMove', arguments);

            if (!self.isExcluded) {
                self.mixer.targetsMoved++;
            }

            self.applyStylesIn(moveData);

            requestAnimationFrame(function() {
                self.applyStylesOut(moveData);
            });

            self.callActions('afterMove', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}    posData
         * @param   {number}    multiplier
         * @return  {void}
         */

        applyTween: function(posData, multiplier) {
            var self                    = this,
                propertyName            = '',
                tweenData               = null,
                posIn                   = posData.posIn,
                currentTransformValues  = [],
                currentValues           = new mixitup.StyleData(),
                i                       = -1;

            self.callActions('beforeApplyTween', arguments);

            currentValues.x     = posIn.x;
            currentValues.y     = posIn.y;

            if (multiplier === 0) {
                self.hide();
            } else if (!self.isShown) {
                self.show();
            }

            for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                tweenData = posData.tweenData[propertyName];

                if (propertyName === 'x') {
                    if (!tweenData) continue;

                    currentValues.x = posIn.x + (tweenData * multiplier);
                } else if (propertyName === 'y') {
                    if (!tweenData) continue;

                    currentValues.y = posIn.y + (tweenData * multiplier);
                } else if (tweenData instanceof mixitup.TransformData) {
                    if (!tweenData.value) continue;

                    currentValues[propertyName].value =
                        posIn[propertyName].value + (tweenData.value * multiplier);

                    currentValues[propertyName].unit  = tweenData.unit;

                    currentTransformValues.push(
                        propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')'
                    );
                } else {
                    if (!tweenData) continue;

                    currentValues[propertyName] = posIn[propertyName] + (tweenData * multiplier);

                    self.dom.el.style[propertyName] = currentValues[propertyName];
                }
            }

            if (currentValues.x || currentValues.y) {
                currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)');
            }

            if (currentTransformValues.length) {
                self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(' ');
            }

            self.callActions('afterApplyTween', arguments);
        },

        /**
         * Applies the initial styling to a target element before any transition
         * is applied.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesIn: function(moveData) {
            var self            = this,
                posIn           = moveData.posIn,
                isFading        = self.mixer.effectsIn.opacity !== 1,
                transformValues = [];

            self.callActions('beforeApplyStylesIn', arguments);

            transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');

            if (self.mixer.config.animation.animateResizeTargets) {
                if (moveData.statusChange !== 'show') {
                    // Don't apply posIn width or height or showing, as will be 0

                    self.dom.el.style.width  = posIn.width + 'px';
                    self.dom.el.style.height = posIn.height + 'px';
                }

                self.dom.el.style.marginRight  = posIn.marginRight + 'px';
                self.dom.el.style.marginBottom = posIn.marginBottom + 'px';
            }

            isFading && (self.dom.el.style.opacity = posIn.opacity);

            if (moveData.statusChange === 'show') {
                transformValues = transformValues.concat(self.mixer.transformIn);
            }

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesIn', arguments);
        },

        /**
         * Applies a transition followed by the final styles for the element to
         * transition towards.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesOut: function(moveData) {
            var self            = this,
                transitionRules = [],
                transformValues = [],
                isResizing      = self.mixer.config.animation.animateResizeTargets,
                isFading        = typeof self.mixer.effectsIn.opacity !== 'undefined';

            self.callActions('beforeApplyStylesOut', arguments);

            // Build the transition rules

            transitionRules.push(self.writeTransitionRule(
                mixitup.features.transformRule,
                moveData.staggerIndex
            ));

            if (moveData.statusChange !== 'none') {
                transitionRules.push(self.writeTransitionRule(
                    'opacity',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            if (isResizing) {
                transitionRules.push(self.writeTransitionRule(
                    'width',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'height',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'margin',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            // If no callback was provided, the element will
            // not transition in any way so tag it as "immovable"

            if (!moveData.callback) {
                self.mixer.targetsImmovable++;

                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
                    // If the total targets moved is equal to the
                    // number of immovable targets, the operation
                    // should be considered finished

                    self.mixer.cleanUp(moveData.operation);
                }

                return;
            }

            // If the target will transition in some fasion,
            // assign a callback function

            self.operation = moveData.operation;
            self.callback = moveData.callback;

            // As long as the target is not excluded, increment
            // the total number of targets bound

            !self.isExcluded && self.mixer.targetsBound++;

            // Tag the target as bound to differentiate from transitionEnd
            // events that may come from stylesheet driven effects

            self.isBound = true;

            // Apply the transition

            self.applyTransition(transitionRules);

            // Apply width, height and margin negation

            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                self.dom.el.style.width        = moveData.posOut.width + 'px';
                self.dom.el.style.height       = moveData.posOut.height + 'px';
                self.dom.el.style.marginRight  = moveData.posOut.marginRight + 'px';
                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px';
            }

            if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
                // If we're not nudging, the translation should be
                // applied before any other transforms to prevent
                // lateral movement

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply fade

            switch (moveData.statusChange) {
                case 'hide':
                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);

                    transformValues = transformValues.concat(self.mixer.transformOut);

                    break;
                case 'show':
                    isFading && (self.dom.el.style.opacity = 1);
            }

            if (
                self.mixer.config.animation.nudge ||
                (!self.mixer.config.animation.nudge && moveData.statusChange !== 'hide')
            ) {
                // Opposite of above - apply translate after
                // other transform

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply transforms

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesOut', arguments);
        },

        /**
         * Combines the name of a CSS property with the appropriate duration and delay
         * values to created a valid transition rule.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    property
         * @param   {number}    staggerIndex
         * @param   {number}    duration
         * @return  {string}
         */

        writeTransitionRule: function(property, staggerIndex, duration) {
            var self  = this,
                delay = self.getDelay(staggerIndex),
                rule  = '';

            rule = property + ' ' +
                (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' +
                delay + 'ms ' +
                (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);

            return self.callFilters('ruleWriteTransitionRule', rule, arguments);
        },

        /**
         * Calculates the transition delay for each target element based on its index, if
         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
         * function can be used to manipulate the order of indices to produce custom
         * stagger effects (e.g. for use in a grid with irregular row lengths).
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {number}    index
         * @return  {number}
         */

        getDelay: function(index) {
            var self    = this,
                delay   = -1;

            if (typeof self.mixer.config.animation.staggerSequence === 'function') {
                index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
            }

            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;

            return self.callFilters('delayGetDelay', delay, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string[]}  rules
         * @return  {void}
         */

        applyTransition: function(rules) {
            var self                = this,
                transitionString    = rules.join(', ');

            self.callActions('beforeApplyTransition', arguments);

            self.dom.el.style[mixitup.features.transitionProp] = transitionString;

            self.callActions('afterApplyTransition', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event} e
         * @return  {void}
         */

        handleTransitionEnd: function(e) {
            var self        = this,
                propName    = e.propertyName,
                canResize   = self.mixer.config.animation.animateResizeTargets;

            self.callActions('beforeHandleTransitionEnd', arguments);

            if (
                self.isBound &&
                e.target.matches(self.mixer.config.selectors.target) &&
                (
                    propName.indexOf('transform') > -1 ||
                    propName.indexOf('opacity') > -1 ||
                    canResize && propName.indexOf('height') > -1 ||
                    canResize && propName.indexOf('width') > -1 ||
                    canResize && propName.indexOf('margin') > -1
                )
            ) {
                self.callback.call(self, self.operation);

                self.isBound = false;
                self.callback = null;
                self.operation = null;
            }

            self.callActions('afterHandleTransitionEnd', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event}     e
         * @return  {void}
         */

        eventBus: function(e) {
            var self = this;

            self.callActions('beforeEventBus', arguments);

            switch (e.type) {
                case 'webkitTransitionEnd':
                case 'transitionend':
                    self.handleTransitionEnd(e);
            }

            self.callActions('afterEventBus', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        unbindEvents: function() {
            var self = this;

            self.callActions('beforeUnbindEvents', arguments);

            h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
            h.off(self.dom.el, 'transitionend', self.handler);

            self.callActions('afterUnbindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        bindEvents: function() {
            var self                = this,
                transitionEndEvent  = '';

            self.callActions('beforeBindEvents', arguments);

            transitionEndEvent = mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';

            self.handler = function(e) {
                return self.eventBus(e);
            };

            h.on(self.dom.el, transitionEndEvent, self.handler);

            self.callActions('afterBindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   [getBox]
         * @return  {PosData}
         */

        getPosData: function(getBox) {
            var self    = this,
                styles  = {},
                rect    = null,
                posData = new mixitup.StyleData();

            self.callActions('beforeGetPosData', arguments);

            posData.x = self.dom.el.offsetLeft;
            posData.y = self.dom.el.offsetTop;

            if (self.mixer.config.animation.animateResizeTargets || getBox) {
                rect = self.dom.el.getBoundingClientRect();

                posData.top     = rect.top;
                posData.right   = rect.right;
                posData.bottom  = rect.bottom;
                posData.left    = rect.left;

                posData.width  = rect.width;
                posData.height = rect.height;
            }

            if (self.mixer.config.animation.animateResizeTargets) {
                styles = window.getComputedStyle(self.dom.el);

                posData.marginBottom = parseFloat(styles.marginBottom);
                posData.marginRight  = parseFloat(styles.marginRight);
            }

            return self.callFilters('posDataGetPosData', posData, arguments);
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @return      {void}
         */

        cleanUp: function() {
            var self = this;

            self.callActions('beforeCleanUp', arguments);

            self.dom.el.style[mixitup.features.transformProp]  = '';
            self.dom.el.style[mixitup.features.transitionProp] = '';
            self.dom.el.style.opacity                          = '';

            if (self.mixer.config.animation.animateResizeTargets) {
                self.dom.el.style.width        = '';
                self.dom.el.style.height       = '';
                self.dom.el.style.marginRight  = '';
                self.dom.el.style.marginBottom = '';
            }

            self.callActions('afterCleanUp', arguments);
        }
    });

    /**
     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
     *
     * @example
     * new mixitup.Collection(instances)
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer[]}   instances
     */

    mixitup.Collection = function(instances) {
        var instance    = null,
            i           = -1;

        this.callActions('beforeConstruct');

        for (i = 0; instance = instances[i]; i++) {
            this[i] = instance;
        }

        this.length = instances.length;

        this.callActions('afterConstruct');

        h.freeze(this);
    };

    mixitup.BaseStatic.call(mixitup.Collection);

    mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Collection.prototype,
    /** @lends mixitup.Collection */
    {
        constructor: mixitup.Collection,

        /**
         * Calls a method on all instances in the collection by passing the method
         * name as a string followed by any applicable parameters to be curried into
         * to the method.
         *
         * @example
         * .mixitup(methodName[,arg1][,arg2..]);
         *
         * @example
         * var collection = new Collection([mixer1, mixer2]);
         *
         * return collection.mixitup('filter', '.category-a')
         *     .then(function(states) {
         *         state.forEach(function(state) {
         *             console.log(state.activeFilter.selector); // .category-a
         *         });
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}  methodName
         * @return      {Promise<Array<mixitup.State>>}
         */

        mixitup: function(methodName) {
            var self        = this,
                instance    = null,
                args        = Array.prototype.slice.call(arguments),
                tasks       = [],
                i           = -1;

            this.callActions('beforeMixitup');

            args.shift();

            for (i = 0; instance = self[i]; i++) {
                tasks.push(instance[methodName].apply(instance, args));
            }

            return self.callFilters('promiseMixitup', h.all(tasks, mixitup.libraries), arguments);
        }
    });

    /**
     * `mixitup.Operation` objects contain all data neccessary to describe the full
     * lifecycle of any MixItUp operation. They can be used to compute and store an
     * operation for use at a later time (e.g. programmatic tweening).
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Operation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id                      = '';

        this.args                    = [];
        this.command                 = null;
        this.showPosData             = [];
        this.toHidePosData           = [];

        this.startState              = null;
        this.newState                = null;
        this.docState                = null;

        this.willSort                = false;
        this.willChangeLayout        = false;
        this.hasEffect               = false;
        this.hasFailed               = false;

        this.triggerElement          = null;

        this.show                    = [];
        this.hide                    = [];
        this.matching                = [];
        this.toShow                  = [];
        this.toHide                  = [];
        this.toMove                  = [];
        this.toRemove                = [];
        this.startOrder              = [];
        this.newOrder                = [];
        this.startSort               = null;
        this.newSort                 = null;
        this.startFilter             = null;
        this.newFilter               = null;
        this.startDataset            = null;
        this.newDataset              = null;
        this.viewportDeltaX          = 0;
        this.viewportDeltaY          = 0;
        this.startX                  = 0;
        this.startY                  = 0;
        this.startHeight             = 0;
        this.startWidth              = 0;
        this.newX                    = 0;
        this.newY                    = 0;
        this.newHeight               = 0;
        this.newWidth                = 0;
        this.startContainerClassName = '';
        this.startDisplay            = '';
        this.newContainerClassName   = '';
        this.newDisplay              = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Operation);

    mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Operation.prototype.constructor = mixitup.Operation;

    /**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.State = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The ID of the mixer instance.
         *
         * @name        id
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.id = '';

        /**
         * The currently active filter command as set by a control click or API call.
         *
         * @name        activeFilter
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandFilter}
         * @default     null
         */

        this.activeFilter = null;

        /**
         * The currently active sort command as set by a control click or API call.
         *
         * @name        activeSort
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandSort}
         * @default     null
         */

        this.activeSort = null;

        /**
         * The current layout-specific container class name, if applied.
         *
         * @name        activeContainerClassName
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.activeContainerClassName = '';

        /**
         * A reference to the container element that the mixer is instantiated on.
         *
         * @name        container
         * @memberof    mixitup.State
         * @instance
         * @type        {Element}
         * @default     null
         */

        this.container = null;

        /**
         * An array of all target elements indexed by the mixer.
         *
         * @name        targets
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.targets = [];

        /**
         * An array of all target elements not matching the current filter.
         *
         * @name        hide
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.hide = [];

        /**
         * An array of all target elements matching the current filter and any additional
         * limits applied such as pagination.
         *
         * @name        show
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.show = [];

        /**
         * An array of all target elements matching the current filter irrespective of
         * any additional limits applied such as pagination.
         *
         * @name        matching
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.matching = [];

        /**
         * An integer representing the total number of target elements indexed by the
         * mixer. Equivalent to `state.targets.length`.
         *
         * @name        totalTargets
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalTargets = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter and any additional limits applied such as pagination.
         * Equivalent to `state.show.length`.
         *
         * @name        totalShow
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalShow = -1;

        /**
         * An integer representing the total number of target elements not matching
         * the current filter. Equivalent to `state.hide.length`.
         *
         * @name        totalHide
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalHide = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter irrespective of any other limits applied such as pagination.
         * Equivalent to `state.matching.length`.
         *
         * @name        totalMatching
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalMatching = -1;

        /**
         * A boolean indicating whether the last operation "failed", i.e. no targets
         * could be found matching the filter.
         *
         * @name        hasFailed
         * @memberof    mixitup.State
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.hasFailed = false;

        /**
         * The DOM element that was clicked if the last operation was triggered by the
         * clicking of a control and not an API call.
         *
         * @name        triggerElement
         * @memberof    mixitup.State
         * @instance
         * @type        {Element|null}
         * @default     null
         */

        this.triggerElement = null;

        /**
         * The currently active dataset underlying the rendered targets, if the
         * dataset API is in use.
         *
         * @name        activeDataset
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.activeDataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.State);

    mixitup.State.prototype = Object.create(mixitup.Base.prototype);

    mixitup.State.prototype.constructor = mixitup.State;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UserInstruction = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.command    = {};
        this.animate    = false;
        this.callback   = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UserInstruction);

    mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Messages = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /* Errors
        ----------------------------------------------------------------------------- */

        this.ERROR_FACTORY_INVALID_CONTAINER =
            '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';

        this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
            '[MixItUp] The provided selector yielded no container element';

        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
            '[MixItUp] Invalid value for `animation.effects`';

        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
            '[MixItUp] Invalid value for `controls.scope`';

        this.ERROR_CONFIG_INVALID_PROPERTY =
            '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';

        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
            '. Did you mean "${probableMatch}"?';

        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
            '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';

        this.ERROR_DATASET_INVALID_UID_KEY =
            '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';

        this.ERROR_DATASET_DUPLICATE_UID =
            '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';

        this.ERROR_INSERT_INVALID_ARGUMENTS =
            '[MixItUp] Please provider either an index or a sibling and position to insert, not both';

        this.ERROR_INSERT_PREEXISTING_ELEMENT =
            '[MixItUp] An element to be inserted already exists in the container';

        this.ERROR_FILTER_INVALID_ARGUMENTS =
            '[MixItUp] Please provide either a selector or collection `.filter()`, not both';

        this.ERROR_DATASET_NOT_SET =
            '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';

        this.ERROR_DATASET_PRERENDERED_MISMATCH =
            '[MixItUp] `load.dataset` does not match pre-rendered targets';

        this.ERROR_DATASET_RENDERER_NOT_SET =
            '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';

        this.ERROR_SORT_NON_EXISTENT_ELEMENT =
            '[MixItUp] An element to be sorted does not already exist in the container';

        /* Warnings
        ----------------------------------------------------------------------------- */

        this.WARNING_FACTORY_PREEXISTING_INSTANCE =
            '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' +
            ' If you wish to perform additional methods on this instance, please create a reference.';

        this.WARNING_INSERT_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.insert()`';

        this.WARNING_REMOVE_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.remove()`';

        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
            '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' +
            'queue is full or queuing is disabled.';

        this.WARNING_GET_OPERATION_INSTANCE_BUSY =
            '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';

        this.WARNING_NO_PROMISE_IMPLEMENTATION =
            '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' +
            ' an ES6 Promise polyfill.';

        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
            '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' +
            ' which may product unexpected sort output';

        this.callActions('afterConstruct');

        this.compileTemplates();

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Messages);

    mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Messages.prototype.constructor = mixitup.Messages;

    /**
     * @return {void}
     */

    mixitup.Messages.prototype.compileTemplates = function() {
        var errorKey        = '';
        var errorMessage    = '';

        for (errorKey in this) {
            if (typeof (errorMessage = this[errorKey]) !== 'string') continue;

            this[h.camelCase(errorKey)] = h.template(errorMessage);
        }
    };

    mixitup.messages = new mixitup.Messages();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer} mixer
     */

    mixitup.Facade = function Mixer(mixer) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct', arguments);

        this.configure          = mixer.configure.bind(mixer);
        this.show               = mixer.show.bind(mixer);
        this.hide               = mixer.hide.bind(mixer);
        this.filter             = mixer.filter.bind(mixer);
        this.toggleOn           = mixer.toggleOn.bind(mixer);
        this.toggleOff          = mixer.toggleOff.bind(mixer);
        this.sort               = mixer.sort.bind(mixer);
        this.changeLayout       = mixer.changeLayout.bind(mixer);
        this.multimix           = mixer.multimix.bind(mixer);
        this.dataset            = mixer.dataset.bind(mixer);
        this.tween              = mixer.tween.bind(mixer);
        this.insert             = mixer.insert.bind(mixer);
        this.insertBefore       = mixer.insertBefore.bind(mixer);
        this.insertAfter        = mixer.insertAfter.bind(mixer);
        this.prepend            = mixer.prepend.bind(mixer);
        this.append             = mixer.append.bind(mixer);
        this.remove             = mixer.remove.bind(mixer);
        this.destroy            = mixer.destroy.bind(mixer);
        this.forceRefresh       = mixer.forceRefresh.bind(mixer);
        this.forceRender        = mixer.forceRender.bind(mixer);
        this.isMixing           = mixer.isMixing.bind(mixer);
        this.getOperation       = mixer.getOperation.bind(mixer);
        this.getConfig          = mixer.getConfig.bind(mixer);
        this.getState           = mixer.getState.bind(mixer);

        this.callActions('afterConstruct', arguments);

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Facade);

    mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Facade.prototype.constructor = mixitup.Facade;

    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = mixitup;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return mixitup;
        });
    } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
        window.mixitup = mixitup;
    }
    mixitup.BaseStatic.call(mixitup.constructor);

    mixitup.NAME = 'mixitup';
    mixitup.CORE_VERSION = '3.3.1';
})(window);
},{}],"../node_modules/gsap/gsap-core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapYoyo = exports.wrap = exports.unitize = exports.toArray = exports.splitColor = exports.snap = exports.shuffle = exports.selector = exports.random = exports.pipe = exports.normalize = exports.mapRange = exports.interpolate = exports.gsap = exports.getUnit = exports.distribute = exports.default = exports.clamp = exports._ticker = exports._sortPropTweensByPriority = exports._setDefaults = exports._roundModifier = exports._round = exports._replaceRandom = exports._renderComplexString = exports._removeLinkedListItem = exports._relExp = exports._plugins = exports._parseRelative = exports._numWithUnitExp = exports._numExp = exports._missingPlugin = exports._isUndefined = exports._isString = exports._getSetter = exports._getProperty = exports._getCache = exports._forEachName = exports._config = exports._colorStringFilter = exports._colorExp = exports._checkPlugin = exports.TweenMax = exports.TweenLite = exports.Tween = exports.TimelineMax = exports.TimelineLite = exports.Timeline = exports.Strong = exports.SteppedEase = exports.Sine = exports.Quint = exports.Quart = exports.Quad = exports.PropTween = exports.Power4 = exports.Power3 = exports.Power2 = exports.Power1 = exports.Power0 = exports.Linear = exports.GSCache = exports.Expo = exports.Elastic = exports.Cubic = exports.Circ = exports.Bounce = exports.Back = exports.Animation = void 0;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
  _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
  _suppressOverwrites,
  _reverting,
  _context,
  _bigNum = 1e8,
  _tinyNum = 1 / _bigNum,
  _2PI = Math.PI * 2,
  _HALF_PI = _2PI / 4,
  _gsID = 0,
  _sqrt = Math.sqrt,
  _cos = Math.cos,
  _sin = Math.sin,
  _isString = function _isString(value) {
    return typeof value === "string";
  },
  _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
  _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
  _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
  _isObject = function _isObject(value) {
    return typeof value === "object";
  },
  _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
  _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
  // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
  _isArray = Array.isArray,
  _strictNumExp = /(?:-?\.?\d|\.)+/gi,
  //only numbers (including negatives and decimals) but NOT relative values.
  _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
  _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
  _relExp = /[+-]=-?[.\d]+/,
  _delimitedValueExp = /[^,'"\[\]\s]+/gi,
  // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
  _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  _globalTimeline,
  _win,
  _coreInitted,
  _doc,
  _globals = {},
  _installScope = {},
  _coreReady,
  _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
  _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
  _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
  _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
  _emptyFunc = function _emptyFunc() {
    return 0;
  },
  _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  },
  _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  },
  _revertConfig = {
    suppressEvents: true
  },
  _reservedProps = {},
  _lazyTweens = [],
  _lazyLookup = {},
  _lastRenderedFrame,
  _plugins = {},
  _effects = {},
  _nextGCFrame = 30,
  _harnessPlugins = [],
  _callbackNames = "",
  _harness = function _harness(targets) {
    var target = targets[0],
      harnessPlugin,
      i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {}
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  },
  _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
  _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
  _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
  //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
  _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
  _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
  // increased precision mostly for timing values.
  _parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  },
  _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length,
      i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}
    return i < l;
  },
  _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
  _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
  },
  _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
  _passThrough = function _passThrough(p) {
    return p;
  },
  _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }
    return obj;
  },
  _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function (obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  },
  _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  },
  _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  },
  _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
      p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
  },
  _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  },
  _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
      match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {}
    return i < 0;
  },
  _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp],
      t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
  _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev,
      next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
  },
  _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  },
  _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  },
  _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  },
  _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  },
  _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
  _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
  // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
  _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
  _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
  _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
  _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }

    return animation;
  },
  /*
  _totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
  	let cycleDuration = duration + repeatDelay,
  		time = _round(clampedTotalTime % cycleDuration);
  	if (time > duration) {
  		time = duration;
  	}
  	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
  },
  */
  _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
      // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
      t = _parentToChildTotalTime(timeline.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      //in case any of the ancestors had completed but should now be enabled...
      if (timeline._dur < timeline.duration()) {
        t = timeline;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

          t = t._dp;
        }
      }
      timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
  },
  _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

    return timeline;
  },
  _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
  _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  },
  _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
  // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
  _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  },
  _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
      repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;
    if (repeatDelay && tween._repeat) {
      // in case there's a zero-duration tween that has a repeat with a repeatDelay
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        // if iteration changed
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

      suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
  _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  },
  _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
  _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
  _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
  _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
      i,
      offset,
      isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  },
  _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
      irVars = vars;
      parent = timeline;
      while (parent && !("immediateRender" in irVars)) {
        // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }

    return new Tween(params[0], vars, params[varsIndex + 1]);
  },
  _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
  _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
  getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  },
  // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
  clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
  _slice = [].slice,
  _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
  _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function (value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
  //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
  toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
  selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  },
  shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
  // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
  //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
  distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
        each: v
      },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
      ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function (i, target, a) {
      var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0; //unit

        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
  },
  _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

    return function (raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
  },
  snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
      radius,
      is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
  random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
  pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
  unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
  normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
  _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
  wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
  wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
      total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
  _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  },
  mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
      outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
  interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };
    if (!func) {
      var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
        }

        l--;
        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  },
  _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  },
  _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  },
  _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
  _quickTween,
  _registerPluginQueue = [],
  _createPlugin = function _createPlugin(config) {
    if (_windowExists() && config) {
      // edge case: some build tools may pass in a null/undefined value
      config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

      var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
          this._props = [];
        } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        },
        statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
      _wake();
      if (config !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods

        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods

        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
      }

      _addGlobal(name, Plugin);
      config.register && config.register(gsap, Plugin, PropTween);
    } else {
      config && _registerPluginQueue.push(config);
    }
  },
  /*
   * --------------------------------------------------------------------------------------
   * COLORS
   * --------------------------------------------------------------------------------------
   */
  _255 = 255,
  _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
  // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
  // let ctx = _doc.createElement("canvas").getContext("2d");
  // _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
  _hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
  splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          //for shorthand like #9F0 or #9F0F (could have alpha)
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          // hex with alpha, like #fd5e53ff
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1); //cast as number

          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          //if relative values are found, just return the raw strings with the relative prefixes in place.
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
  _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [],
      c = [],
      i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
  _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  },
  _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
      p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  }(),
  _hslExp = /hsl[a]?\(/,
  _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
      toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

      return true;
    }
  },
  /*
   * --------------------------------------------------------------------------------------
   * TICKER
   * --------------------------------------------------------------------------------------
   */
  _tickerActive,
  _ticker = function () {
    var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
          frame = ++_self.frame;
          _delta = time - _self.time * 1000;
          _self.time = time = time / 1000;
          _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
          dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

        if (dispatch) {
          for (_i = 0; _i < _listeners.length; _i++) {
            // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
            _listeners[_i](time, _delta, frame, v);
          }
        }
      };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _raf = _win.requestAnimationFrame;
            _registerPluginQueue.forEach(_createPlugin);
          }
          _id && _self.sleep();
          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function (t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
  _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
  //also ensures the core classes are initialized.

  /*
  * -------------------------------------------------
  * EASING
  * -------------------------------------------------
  */
  _easeMap = {},
  _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
  _quotesExp = /["']/g,
  _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  },
  _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
  _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("),
      ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
  _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
  // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
  _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
      ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  },
  _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
  _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
      },
      lowercaseName;
    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  },
  _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
  _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
      p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
      },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };
    return ease;
  },
  _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
      },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);
    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };
    return ease;
  }; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
exports._ticker = _ticker;
exports._colorStringFilter = _colorStringFilter;
exports._colorExp = _colorExp;
exports.splitColor = splitColor;
exports.interpolate = interpolate;
exports.mapRange = mapRange;
exports._replaceRandom = _replaceRandom;
exports.wrapYoyo = wrapYoyo;
exports.wrap = wrap;
exports.normalize = normalize;
exports.unitize = unitize;
exports.pipe = pipe;
exports.random = random;
exports.snap = snap;
exports._roundModifier = _roundModifier;
exports.distribute = distribute;
exports.shuffle = shuffle;
exports.selector = selector;
exports.toArray = toArray;
exports.clamp = clamp;
exports.getUnit = getUnit;
exports._removeLinkedListItem = _removeLinkedListItem;
exports._setDefaults = _setDefaults;
exports._parseRelative = _parseRelative;
exports._round = _round;
exports._forEachName = _forEachName;
exports._getProperty = _getProperty;
exports._getCache = _getCache;
exports._plugins = _plugins;
exports._missingPlugin = _missingPlugin;
exports._relExp = _relExp;
exports._numWithUnitExp = _numWithUnitExp;
exports._numExp = _numExp;
exports._isUndefined = _isUndefined;
exports._isString = _isString;
exports._config = _config;
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function (n, c) {
  var n1 = 1 / c,
    n2 = 2 * n1,
    n3 = 2.5 * n1,
    easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps,
      p2 = steps + (immediateStart ? 0 : 1),
      p3 = immediateStart ? 1 : 0,
      max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */

var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */
exports.GSCache = GSCache;
var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context) {
      this._ctx = _context;
      _context.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}
    }

    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.

    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();
        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }
    var prevIsReverting = _reverting;
    _reverting = config;
    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }
    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
      time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
      start = this._start,
      rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
        _resolve = function _resolve() {
          var _then = self.then;
          self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation;
}();
exports.Animation = Animation;
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */

var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);
  function Timeline(vars, position) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
      tDur = this._dirty ? this.totalDuration() : this._tDur,
      dur = this._dur,
      tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
      // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
      crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
      time,
      child,
      next,
      iteration,
      cycleDuration,
      prevPaused,
      pauseTween,
      timeScale,
      prevStart,
      prevIteration,
      yoyo,
      isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */

        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
            doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }
          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.

          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber(position) || (position = _parsePosition(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }
    var a = [],
      child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
      i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
      i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
      parsedTargets = toArray(targets),
      child = this._first,
      isGlobalTime = _isNumber(onlyActive),
      // a number is interpreted as a global time. If the animation spans
      children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this,
      endTime = _parsePosition(tl, position),
      _vars = vars,
      startAt = _vars.startAt,
      _onStart = _vars.onStart,
      onStartParams = _vars.onStartParams,
      immediateRender = _vars.immediateRender,
      initted,
      tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
        }
      }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first,
      labels = this.labels,
      p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first,
      next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
      self = this,
      child = self._last,
      prevStart = _bigNum,
      prev,
      start,
      parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
  };
  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }
        child || _ticker.sleep();
      }
    }
  };
  return Timeline;
}(Animation);
exports.TimelineLite = exports.TimelineMax = exports.Timeline = Timeline;
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings

    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }

    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

    return pt;
  },
  _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          // to avoid isNaN, like if someone passes in a value like "!= whatever"
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        // fun fact: any number multiplied by "" is evaluated as the number 0!
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
  //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
  _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {},
      p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  },
  _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  },
  _overwritingTween,
  //store a reference temporarily so we can avoid overwriting itself.
  _forceAllPropTweens,
  _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

    if (!tl || keyframes && !vars.stagger) {
      //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
        // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

        tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
            time && (tween._zTime = time);
            return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
          }
        }
      } else if (runBackwards && dur) {
        //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        if (!prevStartAt) {
          time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender: immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

          tween._startAt._sat = tween; // used in globalTime()

          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }

    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
  },
  _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          // it's a plugin, so find the nested PropTween
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
            pt = pt._next;
          }
        }
        if (!pt) {
          // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
          // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
          _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
  },
  _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  },
  // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
  _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

      obj.forEach(function (value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  },
  _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
  _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  _staggerPropsToSkip = {};
exports._checkPlugin = _checkPlugin;
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */

var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);
  function Tween(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
      duration = _this3$vars.duration,
      delay = _this3$vars.delay,
      immediateRender = _this3$vars.immediateRender,
      stagger = _this3$vars.stagger,
      overwrite = _this3$vars.overwrite,
      keyframes = _this3$vars.keyframes,
      defaults = _this3$vars.defaults,
      scrollTrigger = _this3$vars.scrollTrigger,
      yoyoEase = _this3$vars.yoyoEase,
      parent = vars.parent || _globalTimeline,
      parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
      tl,
      i,
      copy,
      l,
      p,
      curTarget,
      staggerFunc,
      staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
          a,
          kf,
          v;
        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};
          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween.prototype;
  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
      tDur = this._tDur,
      dur = this._dur,
      isNegative = totalTime < 0,
      tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
      time,
      pt,
      iteration,
      cycleDuration,
      prevIteration,
      isYoyo,
      ratio,
      timeline,
      yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;
      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }
        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }
        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
      ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}

    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }
    var parsedTargets = this._targets,
      killingTargets = targets ? toArray(targets) : parsedTargets,
      propTweenLookup = this._ptLookup,
      firstPT = this._pt,
      overwrittenProps,
      curLookup,
      curOverwriteProps,
      props,
      p,
      pt,
      i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function (name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };
  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };
  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };
  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween;
}(Animation);
exports.TweenLite = exports.TweenMax = exports.Tween = Tween;
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.

_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
      params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */

var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
  _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
  _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
  _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
  _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
  _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  },
  _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
  _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
      s = "";
    if (!ratio && data.b) {
      //b = beginning string
      s = data.b;
    } else if (ratio === 1 && data.e) {
      //e = ending string
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

        pt = pt._next;
      }
      s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }

    data.set(data.t, data.p, s, data);
  },
  _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
  _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
      next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
  _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
      hasNonDependentRemaining,
      next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  },
  _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
  _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
exports._sortPropTweensByPriority = _sortPropTweensByPriority;
exports._renderComplexString = _renderComplexString;
exports._getSetter = _getSetter;
var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };
  return PropTween;
}(); //Initialization tasks
exports.PropTween = PropTween;
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [],
  _listeners = {},
  _emptyArray = [],
  _lastMediaTime = 0,
  _contextID = 0,
  _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function (f) {
      return f();
    });
  },
  _onMediaChange = function _onMediaChange() {
    var time = Date.now(),
      matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function (c) {
        var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function (c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }
  var _proto5 = Context.prototype;
  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }
    var self = this,
      f = function f() {
        var prev = _context,
          prevSelector = self.selector,
          result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
    self.last = f;
    return name === _isFunction ? f(self) : name ? self[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;
    if (revert) {
      var tweens = this.getTweens();
      this.data.forEach(function (t) {
        // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
        if (t.data === "isFlip") {
          t.revert();
          t.getChildren(true, true, false).forEach(function (tween) {
            return tweens.splice(tweens.indexOf(tween), 1);
          });
        }
      }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort

      tweens.map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (a, b) {
        return b.g - a.g || -Infinity;
      }).forEach(function (o) {
        return o.t.revert(revert);
      }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

      this.data.forEach(function (e) {
        return !(e instanceof Tween) && e.revert && e.revert(revert);
      });
      this._r.forEach(function (f) {
        return f(revert, _this4);
      });
      this.isReverted = true;
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia) {
      var i = _media.length;
      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };
  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };
  return Context;
}();
var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
  }
  var _proto6 = MatchMedia.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
      cond = context.conditions = {},
      mq,
      p,
      active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context);
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
      format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
        l = setters.length;
      return function (value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property],
      cache = _getCache(target),
      p = cache.harness && (cache.harness.aliases || {})[property] || property,
      // in case it's an alias, like "rotate" for "rotation".
      setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;
    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
      func = function func(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
      effect = _ref3.effect,
      plugins = _ref3.plugins,
      defaults = _ref3.defaults,
      extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars),
      child,
      next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
        found,
        p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
      i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);
        toAdd._ctx = _context;
      }
      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  },
  _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
      p,
      i,
      pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            // is a plugin
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
  _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function (name) {
              return temp[name] = 1;
            }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.

            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween, vars);
        };
      }
    };
  }; //register core plugins

var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
exports.default = exports.gsap = gsap;
Tween.version = Timeline.version = gsap.version = "3.12.2";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
  Power1 = _easeMap.Power1,
  Power2 = _easeMap.Power2,
  Power3 = _easeMap.Power3,
  Power4 = _easeMap.Power4,
  Linear = _easeMap.Linear,
  Quad = _easeMap.Quad,
  Cubic = _easeMap.Cubic,
  Quart = _easeMap.Quart,
  Quint = _easeMap.Quint,
  Strong = _easeMap.Strong,
  Elastic = _easeMap.Elastic,
  Back = _easeMap.Back,
  SteppedEase = _easeMap.SteppedEase,
  Bounce = _easeMap.Bounce,
  Sine = _easeMap.Sine,
  Expo = _easeMap.Expo,
  Circ = _easeMap.Circ;

//export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
exports.Circ = Circ;
exports.Expo = Expo;
exports.Sine = Sine;
exports.Bounce = Bounce;
exports.SteppedEase = SteppedEase;
exports.Back = Back;
exports.Elastic = Elastic;
exports.Strong = Strong;
exports.Quint = Quint;
exports.Quart = Quart;
exports.Cubic = Cubic;
exports.Quad = Quad;
exports.Linear = Linear;
exports.Power4 = Power4;
exports.Power3 = Power3;
exports.Power2 = Power2;
exports.Power1 = Power1;
exports.Power0 = Power0;
},{}],"../node_modules/gsap/CSSPlugin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.checkPrefix = exports._getBBox = exports._createElement = exports.CSSPlugin = void 0;
var _gsapCore = require("./gsap-core.js");
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */

var _win,
  _doc,
  _docElement,
  _pluginInitted,
  _tempDiv,
  _tempDivStyler,
  _recentSetterPlugin,
  _reverting,
  _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
  _transformProps = {},
  _RAD2DEG = 180 / Math.PI,
  _DEG2RAD = Math.PI / 180,
  _atan2 = Math.atan2,
  _bigNum = 1e8,
  _capsExp = /([A-Z])/g,
  _horizontalExp = /(left|right|width|margin|padding|x)/i,
  _complexExp = /[\s,\(]\S/,
  _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
  _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
  _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
  _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
  //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
  _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
  _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
  _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
  _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
  _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
  _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
  _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
  _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
  _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
  _transformProp = "transform",
  _transformOriginProp = _transformProp + "Origin",
  _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target,
      style = target.style;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function (a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
      } else {
        return _propertyAliases.transform.split(",").forEach(function (p) {
          return _saveStyle.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  },
  _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  },
  _revertStyle = function _revertStyle() {
    var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;
    for (i = 0; i < props.length; i += 3) {
      // stored like this: property, isNotCSS, value
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting();
      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
      }
    }
  },
  _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
      target: target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || _gsapCore.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

    properties && properties.split(",").forEach(function (p) {
      return saver.save(p);
    });
    return saver;
  },
  _supports3D,
  _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
  },
  _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
  },
  _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
  _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
      s = e.style,
      i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {}
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
  _initCore = function _initCore() {
    if (_windowExists() && window.document) {
      _win = window;
      _doc = _win.document;
      _docElement = _doc.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

      _supports3D = !!_checkPropPrefix("perspective");
      _reverting = _gsapCore.gsap.core.reverting;
      _pluginInitted = 1;
    }
  },
  _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original

        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  },
  _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
  _getBBox = function _getBBox(target) {
    var bounds;
    try {
      bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
  _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
  //reports if the element is an SVG on which getBBox() actually works
  _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
      }
    }
  },
  _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  },
  _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
  _nonStandardLayouts = {
    grid: 1,
    flex: 1
  },
  //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
  _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
      style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return (0, _gsapCore._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc || !parent.appendChild) {
      parent = _doc.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _gsapCore._ticker.time && !cache.uncache) {
      return (0, _gsapCore._round)(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = (0, _gsapCore._getCache)(parent);
        cache.time = _gsapCore._ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return (0, _gsapCore._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
  _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCore._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
  _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
      // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
      var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
      }
    }

    var pt = new _gsapCore.PropTween(this._pt, target.style, prop, 0, 1, _gsapCore._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings

    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    (0, _gsapCore._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().

    start = a[0];
    end = a[1];
    startValues = start.match(_gsapCore._numWithUnitExp) || [];
    endValues = end.match(_gsapCore._numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _gsapCore._numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = (0, _gsapCore._parseRelative)(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _gsapCore._numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            //if something like "perspective:300" is passed in and we must add a unit to the end
            endUnit = endUnit || _gsapCore._config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _gsapCore._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

    return pt;
  },
  _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
  _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      //the user provided them in the wrong order, so flip them
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
  _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.

          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  },
  // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
  _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  },
  /*
   * --------------------------------------------------------------------------------------
   * TRANSFORMS
   * --------------------------------------------------------------------------------------
   */
  _identity2DMatrix = [1, 0, 0, 1, 0, 0],
  _rotationalProperties = {},
  _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
  _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsapCore._numExp).map(_gsapCore._round);
  },
  _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, _gsapCore._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
      //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
        addedToDOM = 1; //flag

        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
  _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
  _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new _gsapCore.GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      // accommodate independent transforms by combining them into normal ones.
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
      }

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0]; //a11

      b = matrix[1]; //a21

      c = matrix[2]; //a31

      d = matrix[3]; //a41

      x = a12 = matrix[4];
      y = a22 = matrix[5]; //2D matrix

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        } //3D matrix
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG; //rotationX

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        } //rotationY

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        } //rotationZ

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = (0, _gsapCore._round)(Math.sqrt(a * a + b * b + c * c));
        scaleY = (0, _gsapCore._round)(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, _gsapCore._round)(scaleX);
    cache.scaleY = (0, _gsapCore._round)(scaleY);
    cache.rotation = (0, _gsapCore._round)(rotation) + deg;
    cache.rotationX = (0, _gsapCore._round)(rotationX) + deg;
    cache.rotationY = (0, _gsapCore._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _gsapCore._config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
  _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
  //for handling transformOrigin values, stripping out the 3rd dimension
  _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, _gsapCore.getUnit)(start);
    return (0, _gsapCore._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
  _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  },
  _zeroDeg = "0deg",
  _zeroPx = "0px",
  _endParenthesis = ") ",
  _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
  _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = (0, _gsapCore._round)(a11);
      a21 = (0, _gsapCore._round)(a21);
      a12 = (0, _gsapCore._round)(a12);
      a22 = (0, _gsapCore._round)(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = (0, _gsapCore._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = (0, _gsapCore._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
      temp = target.getBBox();
      tx = (0, _gsapCore._round)(tx + xPercent / 100 * temp.width);
      ty = (0, _gsapCore._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
  },
  _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360,
      isString = (0, _gsapCore._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new _gsapCore.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  },
  _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  },
  _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
        startUnit = (0, _gsapCore.getUnit)(startValue);
        endUnit = (0, _gsapCore.getUnit)(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new _gsapCore.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
exports._getBBox = _getBBox;
exports.checkPrefix = _checkPropPrefix;
exports._createElement = _createElement;
(0, _gsapCore._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
    r = "Right",
    b = "Bottom",
    l = "Left",
    props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });
  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
      style = target.style,
      startAt = tween.vars.startAt,
      startValue,
      endValue,
      endNum,
      startNum,
      type,
      specialProp,
      p,
      startUnit,
      endUnit,
      relative,
      isTransformRelated,
      transformPropTween,
      cache,
      smooth,
      hasPriority,
      inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_gsapCore._plugins[p] && (0, _gsapCore._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0, _gsapCore._replaceRandom)(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsapCore._colorExp.lastIndex = 0;
        if (!_gsapCore._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0, _gsapCore.getUnit)(startValue);
          endUnit = (0, _gsapCore.getUnit)(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0, _gsapCore._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, _gsapCore._replaceRandom)(startValue));
          (0, _gsapCore.getUnit)(startValue + "") || (startValue += _gsapCore._config.units[p] || (0, _gsapCore.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style.visibility);
            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsapCore.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsapCore.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, _gsapCore._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0, _gsapCore._parseRelative)(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0, _gsapCore.getUnit)(endValue) || (p in _gsapCore._config.units ? _gsapCore._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsapCore.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, _gsapCore._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0, _gsapCore._missingPlugin)(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }
    hasPriority && (0, _gsapCore._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCore._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCore._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
exports.default = exports.CSSPlugin = CSSPlugin;
_gsapCore.gsap.utils.checkPrefix = _checkPropPrefix;
_gsapCore.gsap.core.getStyleSaver = _getStyleSaver;
(function (positionAndScale, rotation, others, aliases) {
  var all = (0, _gsapCore._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });
  (0, _gsapCore._forEachName)(rotation, function (name) {
    _gsapCore._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  (0, _gsapCore._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, _gsapCore._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsapCore._config.units[name] = "px";
});
_gsapCore.gsap.registerPlugin(CSSPlugin);
},{"./gsap-core.js":"../node_modules/gsap/gsap-core.js"}],"../node_modules/gsap/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Back", {
  enumerable: true,
  get: function () {
    return _gsapCore.Back;
  }
});
Object.defineProperty(exports, "Bounce", {
  enumerable: true,
  get: function () {
    return _gsapCore.Bounce;
  }
});
Object.defineProperty(exports, "CSSPlugin", {
  enumerable: true,
  get: function () {
    return _CSSPlugin.CSSPlugin;
  }
});
Object.defineProperty(exports, "Circ", {
  enumerable: true,
  get: function () {
    return _gsapCore.Circ;
  }
});
Object.defineProperty(exports, "Cubic", {
  enumerable: true,
  get: function () {
    return _gsapCore.Cubic;
  }
});
Object.defineProperty(exports, "Elastic", {
  enumerable: true,
  get: function () {
    return _gsapCore.Elastic;
  }
});
Object.defineProperty(exports, "Expo", {
  enumerable: true,
  get: function () {
    return _gsapCore.Expo;
  }
});
Object.defineProperty(exports, "Linear", {
  enumerable: true,
  get: function () {
    return _gsapCore.Linear;
  }
});
Object.defineProperty(exports, "Power0", {
  enumerable: true,
  get: function () {
    return _gsapCore.Power0;
  }
});
Object.defineProperty(exports, "Power1", {
  enumerable: true,
  get: function () {
    return _gsapCore.Power1;
  }
});
Object.defineProperty(exports, "Power2", {
  enumerable: true,
  get: function () {
    return _gsapCore.Power2;
  }
});
Object.defineProperty(exports, "Power3", {
  enumerable: true,
  get: function () {
    return _gsapCore.Power3;
  }
});
Object.defineProperty(exports, "Power4", {
  enumerable: true,
  get: function () {
    return _gsapCore.Power4;
  }
});
Object.defineProperty(exports, "Quad", {
  enumerable: true,
  get: function () {
    return _gsapCore.Quad;
  }
});
Object.defineProperty(exports, "Quart", {
  enumerable: true,
  get: function () {
    return _gsapCore.Quart;
  }
});
Object.defineProperty(exports, "Quint", {
  enumerable: true,
  get: function () {
    return _gsapCore.Quint;
  }
});
Object.defineProperty(exports, "Sine", {
  enumerable: true,
  get: function () {
    return _gsapCore.Sine;
  }
});
Object.defineProperty(exports, "SteppedEase", {
  enumerable: true,
  get: function () {
    return _gsapCore.SteppedEase;
  }
});
Object.defineProperty(exports, "Strong", {
  enumerable: true,
  get: function () {
    return _gsapCore.Strong;
  }
});
Object.defineProperty(exports, "TimelineLite", {
  enumerable: true,
  get: function () {
    return _gsapCore.TimelineLite;
  }
});
Object.defineProperty(exports, "TimelineMax", {
  enumerable: true,
  get: function () {
    return _gsapCore.TimelineMax;
  }
});
Object.defineProperty(exports, "TweenLite", {
  enumerable: true,
  get: function () {
    return _gsapCore.TweenLite;
  }
});
exports.gsap = exports.default = exports.TweenMax = void 0;
var _gsapCore = require("./gsap-core.js");
var _CSSPlugin = require("./CSSPlugin.js");
var gsapWithCSS = _gsapCore.gsap.registerPlugin(_CSSPlugin.CSSPlugin) || _gsapCore.gsap,
  // to protect from tree shaking
  TweenMaxWithCSS = gsapWithCSS.core.Tween;
exports.TweenMax = TweenMaxWithCSS;
exports.default = exports.gsap = gsapWithCSS;
},{"./gsap-core.js":"../node_modules/gsap/gsap-core.js","./CSSPlugin.js":"../node_modules/gsap/CSSPlugin.js"}],"../node_modules/ssr-window/dist/ssr-window.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.document = void 0;
exports.extend = extend;
exports.window = void 0;
/**
 * SSR Window 2.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: May 12, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(function (key) {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var doc = typeof document !== 'undefined' ? document : {};
exports.document = doc;
var ssrDocument = {
  body: {},
  addEventListener: function () {},
  removeEventListener: function () {},
  activeElement: {
    blur: function () {},
    nodeName: ''
  },
  querySelector: function () {
    return null;
  },
  querySelectorAll: function () {
    return [];
  },
  getElementById: function () {
    return null;
  },
  createEvent: function () {
    return {
      initEvent: function () {}
    };
  },
  createElement: function () {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function () {},
      getElementsByTagName: function () {
        return [];
      }
    };
  },
  createElementNS: function () {
    return {};
  },
  importNode: function () {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
extend(doc, ssrDocument);
var win = typeof window !== 'undefined' ? window : {};
exports.window = win;
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState: function () {},
    pushState: function () {},
    go: function () {},
    back: function () {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function () {},
  removeEventListener: function () {},
  getComputedStyle: function () {
    return {
      getPropertyValue: function () {
        return '';
      }
    };
  },
  Image: function () {},
  Date: function () {},
  screen: {},
  setTimeout: function () {},
  clearTimeout: function () {},
  matchMedia: function () {
    return {};
  }
};
extend(win, ssrWindow);
},{}],"../node_modules/dom7/dist/dom7.modular.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.add = add;
exports.addClass = addClass;
exports.animate = animate;
exports.animationEnd = animationEnd;
exports.append = append;
exports.appendTo = appendTo;
exports.attr = attr;
exports.blur = blur;
exports.change = change;
exports.children = children;
exports.click = click;
exports.closest = closest;
exports.css = css;
exports.data = data;
exports.dataset = dataset;
exports.detach = detach;
exports.each = each;
exports.empty = empty;
exports.eq = eq;
exports.filter = filter;
exports.find = find;
exports.focus = focus;
exports.focusin = focusin;
exports.focusout = focusout;
exports.forEach = forEach;
exports.hasClass = hasClass;
exports.height = height;
exports.hide = hide;
exports.html = html;
exports.index = index;
exports.indexOf = indexOf;
exports.insertAfter = insertAfter;
exports.insertBefore = insertBefore;
exports.is = is;
exports.keydown = keydown;
exports.keypress = keypress;
exports.keyup = keyup;
exports.map = map;
exports.mousedown = mousedown;
exports.mouseenter = mouseenter;
exports.mouseleave = mouseleave;
exports.mousemove = mousemove;
exports.mouseout = mouseout;
exports.mouseover = mouseover;
exports.mouseup = mouseup;
exports.next = next;
exports.nextAll = nextAll;
exports.off = off;
exports.offset = offset;
exports.on = on;
exports.once = once;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.parent = parent;
exports.parents = parents;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.prev = prev;
exports.prevAll = prevAll;
exports.prop = prop;
exports.remove = remove;
exports.removeAttr = removeAttr;
exports.removeClass = removeClass;
exports.removeData = removeData;
exports.resize = resize;
exports.scroll = scroll;
exports.scrollLeft = scrollLeft;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.show = show;
exports.siblings = siblings;
exports.stop = stop;
exports.styles = styles;
exports.submit = submit;
exports.text = text;
exports.toArray = toArray;
exports.toggleClass = toggleClass;
exports.touchend = touchend;
exports.touchmove = touchmove;
exports.touchstart = touchstart;
exports.transform = transform;
exports.transition = transition;
exports.transitionEnd = transitionEnd;
exports.trigger = trigger;
exports.val = val;
exports.width = width;
var _ssrWindow = require("ssr-window");
/**
 * Dom7 2.1.5
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: May 15, 2020
 */

class Dom7 {
  constructor(arr) {
    const self = this;
    // Create array-like object
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  }
}
function $(selector, context) {
  const arr = [];
  let i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
    // String
    if (typeof selector === 'string') {
      let els;
      let tempParent;
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = _ssrWindow.document.createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [_ssrWindow.document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || _ssrWindow.document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === _ssrWindow.window || selector === _ssrWindow.document) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}
$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;
function unique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
}
function requestAnimationFrame(callback) {
  if (_ssrWindow.window.requestAnimationFrame) return _ssrWindow.window.requestAnimationFrame(callback);else if (_ssrWindow.window.webkitRequestAnimationFrame) return _ssrWindow.window.webkitRequestAnimationFrame(callback);
  return _ssrWindow.window.setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (_ssrWindow.window.cancelAnimationFrame) return _ssrWindow.window.cancelAnimationFrame(id);else if (_ssrWindow.window.webkitCancelAnimationFrame) return _ssrWindow.window.webkitCancelAnimationFrame(id);
  return _ssrWindow.window.clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  let el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }
      const dataKey = el.getAttribute(`data-${key}`);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      const attr = el.attributes[i];
      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  const dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        const values = [];
        for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }
  for (let i = 0; i < dom.length; i += 1) {
    const el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
  }

  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;
  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line
      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(' ');
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;
  const events = eventType.split(' ');
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }
  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
  const events = args[0].split(' ');
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let evt;
      try {
        evt = new _ssrWindow.window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = _ssrWindow.document.createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  const events = ['webkitTransitionEnd', 'transitionend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  const events = ['webkitAnimationEnd', 'animationend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerWidth;
  }
  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }
  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === _ssrWindow.window) {
    return _ssrWindow.window.innerHeight;
  }
  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = _ssrWindow.document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === _ssrWindow.window ? _ssrWindow.window.scrollY : el.scrollTop;
    const scrollLeft = el === _ssrWindow.window ? _ssrWindow.window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (_ssrWindow.window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  let i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return _ssrWindow.window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (let prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  const arr = [];
  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  const matchedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  const modifiedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }
  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === _ssrWindow.document) return el === _ssrWindow.document;else if (selector === _ssrWindow.window) return el === _ssrWindow.window;
  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;
  let returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append(...args) {
  let newChild;
  for (let k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = _ssrWindow.document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = _ssrWindow.document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }
    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }
    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  let closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  const children = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].childNodes;
    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...args) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < args.length; i += 1) {
    const toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}
function scrollTo(...args) {
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}
function animate(initialProps, initialParams) {
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];

      // Define & Cache Initials & Units
      a.elements.each((index, el) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(prop => {
          initialFullValue = _ssrWindow.window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue
          };
        });
      });
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;
      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }
        elements.forEach(element => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(prop => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const {
              initialValue,
              finalValue,
              unit
            } = el[prop];
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            const currentValue = el[prop].currentValue;
            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };
  if (a.elements.length === 0) {
    return els;
  }
  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }
  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }
  return els;
}
function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}
const noTrigger = 'resize scroll'.split(' ');
function eventShortcut(name, ...args) {
  if (typeof args[0] === 'undefined') {
    for (let i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on(name, ...args);
}
function click(...args) {
  return eventShortcut.bind(this)('click', ...args);
}
function blur(...args) {
  return eventShortcut.bind(this)('blur', ...args);
}
function focus(...args) {
  return eventShortcut.bind(this)('focus', ...args);
}
function focusin(...args) {
  return eventShortcut.bind(this)('focusin', ...args);
}
function focusout(...args) {
  return eventShortcut.bind(this)('focusout', ...args);
}
function keyup(...args) {
  return eventShortcut.bind(this)('keyup', ...args);
}
function keydown(...args) {
  return eventShortcut.bind(this)('keydown', ...args);
}
function keypress(...args) {
  return eventShortcut.bind(this)('keypress', ...args);
}
function submit(...args) {
  return eventShortcut.bind(this)('submit', ...args);
}
function change(...args) {
  return eventShortcut.bind(this)('change', ...args);
}
function mousedown(...args) {
  return eventShortcut.bind(this)('mousedown', ...args);
}
function mousemove(...args) {
  return eventShortcut.bind(this)('mousemove', ...args);
}
function mouseup(...args) {
  return eventShortcut.bind(this)('mouseup', ...args);
}
function mouseenter(...args) {
  return eventShortcut.bind(this)('mouseenter', ...args);
}
function mouseleave(...args) {
  return eventShortcut.bind(this)('mouseleave', ...args);
}
function mouseout(...args) {
  return eventShortcut.bind(this)('mouseout', ...args);
}
function mouseover(...args) {
  return eventShortcut.bind(this)('mouseover', ...args);
}
function touchstart(...args) {
  return eventShortcut.bind(this)('touchstart', ...args);
}
function touchend(...args) {
  return eventShortcut.bind(this)('touchend', ...args);
}
function touchmove(...args) {
  return eventShortcut.bind(this)('touchmove', ...args);
}
function resize(...args) {
  return eventShortcut.bind(this)('resize', ...args);
}
function scroll(...args) {
  return eventShortcut.bind(this)('scroll', ...args);
}
},{"ssr-window":"../node_modules/ssr-window/dist/ssr-window.esm.js"}],"../node_modules/swiper/js/swiper.esm.bundle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dom = require("dom7/dist/dom7.modular");
var _ssrWindow = require("ssr-window");
/**
 * Swiper 5.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 16, 2020
 */

const Methods = {
  addClass: _dom.addClass,
  removeClass: _dom.removeClass,
  hasClass: _dom.hasClass,
  toggleClass: _dom.toggleClass,
  attr: _dom.attr,
  removeAttr: _dom.removeAttr,
  data: _dom.data,
  transform: _dom.transform,
  transition: _dom.transition,
  on: _dom.on,
  off: _dom.off,
  trigger: _dom.trigger,
  transitionEnd: _dom.transitionEnd,
  outerWidth: _dom.outerWidth,
  outerHeight: _dom.outerHeight,
  offset: _dom.offset,
  css: _dom.css,
  each: _dom.each,
  html: _dom.html,
  text: _dom.text,
  is: _dom.is,
  index: _dom.index,
  eq: _dom.eq,
  append: _dom.append,
  prepend: _dom.prepend,
  next: _dom.next,
  nextAll: _dom.nextAll,
  prev: _dom.prev,
  prevAll: _dom.prevAll,
  parent: _dom.parent,
  parents: _dom.parents,
  closest: _dom.closest,
  find: _dom.find,
  children: _dom.children,
  filter: _dom.filter,
  remove: _dom.remove,
  add: _dom.add,
  styles: _dom.styles
};
Object.keys(Methods).forEach(methodName => {
  _dom.$.fn[methodName] = _dom.$.fn[methodName] || Methods[methodName];
});
const Utils = {
  deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach(key => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  },
  now() {
    return Date.now();
  },
  getTranslate(el, axis = 'x') {
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = _ssrWindow.window.getComputedStyle(el, null);
    if (_ssrWindow.window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new _ssrWindow.window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (_ssrWindow.window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (_ssrWindow.window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  parseUrlQuery(url) {
    const query = {};
    let urlToParse = url || _ssrWindow.window.location.href;
    let i;
    let params;
    let param;
    let length;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(paramsPart => paramsPart !== '');
      length = params.length;
      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend(...args) {
    const to = Object(args[0]);
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
};
const Support = function Support() {
  return {
    touch: !!('ontouchstart' in _ssrWindow.window || _ssrWindow.window.DocumentTouch && _ssrWindow.document instanceof _ssrWindow.window.DocumentTouch),
    pointerEvents: !!_ssrWindow.window.PointerEvent && 'maxTouchPoints' in _ssrWindow.window.navigator && _ssrWindow.window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in _ssrWindow.window || 'WebkitMutationObserver' in _ssrWindow.window;
    }(),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }
        });
        _ssrWindow.window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in _ssrWindow.window;
    }()
  };
}();
class SwiperClass {
  constructor(params = {}) {
    const self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};
    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(eventName => {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }
  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  }
  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
      handler.apply(self, args);
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  }
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  }
  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach(eventHandler => {
          handlers.push(eventHandler);
        });
        handlers.forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
  useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(moduleName => {
      const module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  }
  useModules(modulesParams = {}) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(moduleName => {
      const module = instance.modules[moduleName];
      const moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(modulePropName => {
          const moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(moduleEventName => {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
  static set components(components) {
    const Class = this;
    if (!Class.use) return;
    Class.use(components);
  }
  static installModule(module, ...params) {
    const Class = this;
    if (!Class.prototype.modules) Class.prototype.modules = {};
    const name = module.name || `${Object.keys(Class.prototype.modules).length}_${Utils.now()}`;
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(key => {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(key => {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  }
  static use(module, ...params) {
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach(m => Class.installModule(m));
      return Class;
    }
    return Class.installModule(module, ...params);
  }
}
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
  Utils.extend(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  function slidesForMargin(slideIndex) {
    if (!params.cssMode) return true;
    if (slideIndex === slides.length - 1) {
      return false;
    }
    return true;
  }
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.snapGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  let slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  let slideSize;
  const slidesPerColumn = params.slidesPerColumn;
  const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;
        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide.css(`margin-${swiper.isHorizontal() ? 'top' : 'left'}`, row !== 0 && params.spaceBetween && `${params.spaceBetween}px`);
    }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      const slideStyles = _ssrWindow.window.getComputedStyle(slide[0], null);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;
      if (currentTransform) {
        slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          const width = parseFloat(slideStyles.getPropertyValue('width'));
          const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
          const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
          const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
          const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
          }
        } else {
          const height = parseFloat(slideStyles.getPropertyValue('height'));
          const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
          const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
          const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
          const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box') {
            slideSize = height + marginTop + marginBottom;
          } else {
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
          }
        }
      }
      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = `${slideSize}px`;
        } else {
          slides[i].style.height = `${slideSize}px`;
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  let newSlidesGrid;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }
  if (params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });else $wrapperEl.css({
      height: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }
  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });else $wrapperEl.css({
      height: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.filter(slidesForMargin).css({
        marginLeft: `${spaceBetween}px`
      });else slides.filter(slidesForMargin).css({
        marginRight: `${spaceBetween}px`
      });
    } else slides.filter(slidesForMargin).css({
      marginBottom: `${spaceBetween}px`
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Utils.extend(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each((index, slide) => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = (0, _dom.$)(swiper.visibleSlides);
}
function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);
  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Utils.extend(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}
function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = (0, _dom.$)(e.target).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0, _dom.$)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = (0, _dom.$)(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        wrapperEl.scrollTo({
          [isH ? 'left' : 'top']: -newTranslate,
          behavior: 'smooth'
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }
  swiper.emit('setTransition', duration, byController);
}
function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    activeIndex,
    params,
    previousIndex
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit('transitionStart');
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}
function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    activeIndex,
    previousIndex,
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit('transitionEnd');
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }
  const translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    let t = -translate;
    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        wrapperEl.scrollTo({
          [isH ? 'left' : 'top']: t,
          behavior: 'smooth'
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }
  return true;
}
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating
  } = swiper;
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate
  } = swiper;
  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const normalizedSlidesGrid = slidesGrid.map(val => normalize(val));
  const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(snap => {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }
  let prevIndex;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0, _dom.$)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        Utils.nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      Utils.nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  // Remove duplicated slides
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $wrapperEl.children(`.${params.slideClass}`);
  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = (0, _dom.$)(_ssrWindow.document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children(`.${params.slideClass}`);
    }
  }
  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }
  const prependSlides = [];
  const appendSlides = [];
  slides.each((index, el) => {
    const slide = (0, _dom.$)(el);
    if (index < swiper.loopedSlides) appendSlides.push(el);
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index);
  });
  for (let i = 0; i < appendSlides.length; i += 1) {
    $wrapperEl.append((0, _dom.$)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $wrapperEl.prepend((0, _dom.$)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();

  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
function unsetGrabCursor() {
  const swiper = this;
  if (Support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  swiper.el.style.cursor = '';
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function appendSlide(slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}
var manipulation = {
  appendSlide,
  prependSlide,
  addSlide,
  removeSlide,
  removeAllSlides
};
const Device = function Device() {
  const platform = _ssrWindow.window.navigator.platform;
  const ua = _ssrWindow.window.navigator.userAgent;
  const device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    iphone: false,
    ipod: false,
    ipad: false,
    edge: false,
    ie: false,
    firefox: false,
    macos: false,
    windows: false,
    cordova: !!(_ssrWindow.window.cordova || _ssrWindow.window.phonegap),
    phonegap: !!(_ssrWindow.window.cordova || _ssrWindow.window.phonegap),
    electron: false
  };
  const screenWidth = _ssrWindow.window.screen.width;
  const screenHeight = _ssrWindow.window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
  const edge = ua.indexOf('Edge/') >= 0;
  const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
  const windows = platform === 'Win32';
  const electron = ua.toLowerCase().indexOf('electron') >= 0;
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  if (!ipad && macos && Support.touch && (screenWidth === 1024 && screenHeight === 1366 // Pro 12.9
  || screenWidth === 834 && screenHeight === 1194 // Pro 11
  || screenWidth === 834 && screenHeight === 1112 // Pro 10.5
  || screenWidth === 768 && screenHeight === 1024 // other
  )) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    macos = false;
  }
  device.ie = ie;
  device.edge = edge;
  device.firefox = firefox;

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.ipod = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || _ssrWindow.window.navigator.standalone)) || _ssrWindow.window.matchMedia && _ssrWindow.window.matchMedia('(display-mode: standalone)').matches;
  device.webview = device.webView;
  device.standalone = device.webView;

  // Desktop
  device.desktop = !(device.ios || device.android) || electron;
  if (device.desktop) {
    device.electron = electron;
    device.macos = macos;
    device.windows = windows;
    if (device.macos) {
      device.os = 'macos';
    }
    if (device.windows) {
      device.os = 'windows';
    }
  }

  // Pixel Ratio
  device.pixelRatio = _ssrWindow.window.devicePixelRatio || 1;

  // Export object
  return device;
}();
function onTouchStart(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const $targetEl = (0, _dom.$)(e.target);
  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }
  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= _ssrWindow.window.screen.width - edgeSwipeThreshold)) {
    return;
  }
  Utils.extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;
    if (_ssrWindow.document.activeElement && (0, _dom.$)(_ssrWindow.document.activeElement).is(data.formElements) && _ssrWindow.document.activeElement !== $targetEl[0]) {
      _ssrWindow.document.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}
function onTouchMove(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl
  } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = Utils.now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (data.isTouchEvent && _ssrWindow.document.activeElement) {
    if (e.target === _ssrWindow.document.activeElement && (0, _dom.$)(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now()
    });
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    $wrapperEl,
    slidesGrid,
    snapGrid
  } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = Utils.now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = Utils.now();
  Utils.nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeModeMomentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }
    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate
  } = swiper;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}
let dummyEventAttached = false;
function dummyEventListener() {}
function attachEvents() {
  const swiper = this;
  const {
    params,
    touchEvents,
    el,
    wrapperEl
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  const capture = !!params.nested;

  // Touch Events
  if (!Support.touch && Support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    _ssrWindow.document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    _ssrWindow.document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (Support.touch) {
      const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
        passive: false,
        capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
      if (!dummyEventAttached) {
        _ssrWindow.document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }
    if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      _ssrWindow.document.addEventListener('mousemove', swiper.onTouchMove, capture);
      _ssrWindow.document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  }
  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper.on('observerUpdate', onResize, true);
  }
}
function detachEvents() {
  const swiper = this;
  const {
    params,
    touchEvents,
    el,
    wrapperEl
  } = swiper;
  const capture = !!params.nested;

  // Touch Events
  if (!Support.touch && Support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    _ssrWindow.document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    _ssrWindow.document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (Support.touch) {
      const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      _ssrWindow.document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      _ssrWindow.document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  }
  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  }

  // Resize handler
  swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}
var events = {
  attachEvents,
  detachEvents
};
function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints);
  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(param => {
        const paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = params.slidesPerColumn > 1;
    const isMultiRow = breakpointParams.slidesPerColumn > 1;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`);
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(`${params.containerModifierClass}multirow`);
      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(`${params.containerModifierClass}multirow-column`);
      }
    }
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    Utils.extend(swiper.params, breakpointParams);
    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
  }
}
function getBreakpoint(breakpoints) {
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  let breakpoint = false;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = _ssrWindow.window.innerHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (value <= _ssrWindow.window.innerWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el
  } = swiper;
  const suffixes = [];
  suffixes.push('initialized');
  suffixes.push(params.direction);
  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
    if (params.slidesPerColumnFill === 'column') {
      suffixes.push('multirow-column');
    }
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }
  if (params.cssMode) {
    suffixes.push('css-mode');
  }
  suffixes.forEach(suffix => {
    classNames.push(params.containerModifierClass + suffix);
  });
  $el.addClass(classNames.join(' '));
}
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
}
var classes = {
  addClasses,
  removeClasses
};
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  let image;
  function onReady() {
    if (callback) callback();
  }
  const isPicture = (0, _dom.$)(imageEl).parent('picture')[0];
  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new _ssrWindow.window.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}
var images = {
  loadImage,
  preloadImages
};
function checkOverflow() {
  const swiper = this;
  const params = swiper.params;
  const wasLocked = swiper.isLocked;
  const lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;

  // events
  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  //
  preventInteractionOnTransition: false,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true
};

/* eslint no-param-reassign: "off" */

const prototypes = {
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  manipulation,
  events,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images
};
const extendedDefaults = {};
class Swiper extends SwiperClass {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;
    super(params);
    Object.keys(prototypes).forEach(prototypeGroup => {
      Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    const swiper = this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach(moduleName => {
      const module = swiper.modules[moduleName];
      if (module.params) {
        const moduleParamName = Object.keys(module.params)[0];
        const moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    });

    // Extend defaults with modules params
    const swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Save Dom lib
    swiper.$ = _dom.$;

    // Find el
    const $el = (0, _dom.$)(swiper.params.el);
    el = $el[0];
    if (!el) {
      return undefined;
    }
    if ($el.length > 1) {
      const swipers = [];
      $el.each((index, containerEl) => {
        const newParams = Utils.extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    let $wrapperEl;
    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = (0, _dom.$)(el.shadowRoot.querySelector(`.${swiper.params.wrapperClass}`));
      // Children needs to return slot items
      $wrapperEl.children = options => $el.children(options);
    } else {
      $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);
    }
    // Extend Swiper
    Utils.extend(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: (0, _dom.$)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        let desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return swiper;
  }
  slidesPerViewDynamic() {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.params.direction = newDirection;
    swiper.slides.each((slideIndex, slideEl) => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  init() {
    const swiper = this;
    if (swiper.initialized) return;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }

    // Slide To Initial Slide
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    }

    // Attach events
    swiper.attachEvents();

    // Init Flag
    swiper.initialized = true;

    // Emit
    swiper.emit('init');
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      swiper.$el.data('swiper', null);
      Utils.deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    Utils.extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static get Class() {
    return SwiperClass;
  }
  static get $() {
    return _dom.$;
  }
}
var Device$1 = {
  name: 'device',
  proto: {
    device: Device
  },
  static: {
    device: Device
  }
};
var Support$1 = {
  name: 'support',
  proto: {
    support: Support
  },
  static: {
    support: Support
  }
};
const Browser = function Browser() {
  function isSafari() {
    const ua = _ssrWindow.window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  return {
    isEdge: !!_ssrWindow.window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(_ssrWindow.window.navigator.userAgent)
  };
}();
var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser
  },
  static: {
    browser: Browser
  }
};
var Resize = {
  name: 'resize',
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      // Emit resize
      _ssrWindow.window.addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      _ssrWindow.window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy() {
      const swiper = this;
      _ssrWindow.window.removeEventListener('resize', swiper.resize.resizeHandler);
      _ssrWindow.window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};
const Observer = {
  func: _ssrWindow.window.MutationObserver || _ssrWindow.window.WebkitMutationObserver,
  attach(target, options = {}) {
    const swiper = this;
    const ObserverFunc = Observer.func;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };
      if (_ssrWindow.window.requestAnimationFrame) {
        _ssrWindow.window.requestAnimationFrame(observerUpdate);
      } else {
        _ssrWindow.window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init() {
    const swiper = this;
    if (!Support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy() {
    const swiper = this;
    swiper.observer.observers.forEach(observer => {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: []
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.observer.init();
    },
    destroy() {
      const swiper = this;
      swiper.observer.destroy();
    }
  }
};
const Virtual = {
  update(force) {
    const swiper = this;
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      renderSlide,
      offset: previousOffset
    } = swiper.virtual;
    swiper.updateActiveIndex();
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }
    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Utils.extend(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      onRendered();
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach(index => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  },
  renderSlide(slide, index) {
    const swiper = this;
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    const $slideEl = params.renderSlide ? (0, _dom.$)(params.renderSlide.call(swiper, slide, index)) : (0, _dom.$)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide(slides) {
    const swiper = this;
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    swiper.virtual.update(true);
  },
  prependSlide(slides) {
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide(slidesIndexes) {
    const swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides() {
    const swiper = this;
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        removeSlide: Virtual.removeSlide.bind(swiper),
        removeAllSlides: Virtual.removeAllSlides.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {}
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      const overwriteParams = {
        watchSlidesProgress: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};
const Keyboard = {
  handle(event) {
    const swiper = this;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (_ssrWindow.document.activeElement && _ssrWindow.document.activeElement.nodeName && (_ssrWindow.document.activeElement.nodeName.toLowerCase() === 'input' || _ssrWindow.document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const windowWidth = _ssrWindow.window.innerWidth;
      const windowHeight = _ssrWindow.window.innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable() {
    const swiper = this;
    if (swiper.keyboard.enabled) return;
    (0, _dom.$)(_ssrWindow.document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable() {
    const swiper = this;
    if (!swiper.keyboard.enabled) return;
    (0, _dom.$)(_ssrWindow.document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper)
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};
function isEventSupported() {
  const eventName = 'onwheel';
  let isSupported = (eventName in _ssrWindow.document);
  if (!isSupported) {
    const element = _ssrWindow.document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }
  if (!isSupported && _ssrWindow.document.implementation && _ssrWindow.document.implementation.hasFeature
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  && _ssrWindow.document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = _ssrWindow.document.implementation.hasFeature('Events.wheel', '3.0');
  }
  return isSupported;
}
const Mousewheel = {
  lastScrollTime: Utils.now(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event() {
    if (_ssrWindow.window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter() {
    const swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave() {
    const swiper = this;
    swiper.mouseEntered = false;
  },
  handle(event) {
    let e = event;
    const swiper = this;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = (0, _dom.$)(swiper.params.mousewheel.eventsTarged);
    }
    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = Mousewheel.normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: Utils.now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: Utils.now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const {
        lastEventBeforeSnap
      } = swiper.mousewheel;
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            swiper.mousewheel.timeout = Utils.nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = Utils.nextTick(() => {
              const snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider(newEvent) {
    const swiper = this;
    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    swiper.mousewheel.lastScrollTime = new _ssrWindow.window.Date().getTime();
    // Return false as a default
    return false;
  },
  releaseScroll(newEvent) {
    const swiper = this;
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  },
  enable() {
    const swiper = this;
    const event = Mousewheel.event();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }
    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = (0, _dom.$)(swiper.params.mousewheel.eventsTarged);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable() {
    const swiper = this;
    const event = Mousewheel.event();
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }
    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = (0, _dom.$)(swiper.params.mousewheel.eventsTarged);
    }
    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        animateSlider: Mousewheel.animateSlider.bind(swiper),
        releaseScroll: Mousewheel.releaseScroll.bind(swiper),
        lastScrollTime: Utils.now(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: []
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy() {
      const swiper = this;
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};
const Navigation = {
  update() {
    // Update Navigation Buttons
    const swiper = this;
    const params = swiper.params.navigation;
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init() {
    const swiper = this;
    const params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    let $nextEl;
    let $prevEl;
    if (params.nextEl) {
      $nextEl = (0, _dom.$)(params.nextEl);
      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = (0, _dom.$)(params.prevEl);
      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }
    Utils.extend(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy() {
    const swiper = this;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper)
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    fromEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    destroy() {
      const swiper = this;
      swiper.navigation.destroy();
    },
    click(e) {
      const swiper = this;
      const {
        $nextEl,
        $prevEl
      } = swiper.navigation;
      if (swiper.params.navigation.hideOnClick && !(0, _dom.$)(e.target).is($prevEl) && !(0, _dom.$)(e.target).is($nextEl)) {
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          swiper.emit('navigationShow', swiper);
        } else {
          swiper.emit('navigationHide', swiper);
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
};
const Pagination = {
  update() {
    // Render || Update Pagination bullets/items
    const swiper = this;
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    // Current/Total
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
      if ($el.length > 1) {
        bullets.each((index, bullet) => {
          const $bullet = (0, _dom.$)(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(`${params.bulletActiveClass}-prev`).prev().addClass(`${params.bulletActiveClass}-prev-prev`);
            }
            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(`${params.bulletActiveClass}-next`).next().addClass(`${params.bulletActiveClass}-next-next`);
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              $firstDisplayedBullet.prev().addClass(`${params.bulletActiveClass}-prev`).prev().addClass(`${params.bulletActiveClass}-prev-prev`);
              $lastDisplayedBullet.next().addClass(`${params.bulletActiveClass}-next`).next().addClass(`${params.bulletActiveClass}-next-next`);
            }
          } else {
            $firstDisplayedBullet.prev().addClass(`${params.bulletActiveClass}-prev`).prev().addClass(`${params.bulletActiveClass}-prev-prev`);
            $lastDisplayedBullet.next().addClass(`${params.bulletActiveClass}-next`).next().addClass(`${params.bulletActiveClass}-next-next`);
          }
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }
    if (params.type === 'fraction') {
      $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
      $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render() {
    // Render Container
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';
    if (params.type === 'bullets') {
      const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = (0, _dom.$)(params.el);
    if ($el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }
    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }
    $el.addClass(params.modifierClass + params.type);
    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }
    if (params.clickable) {
      $el.on('click', `.${params.bulletClass}`, function onClick(e) {
        e.preventDefault();
        let index = (0, _dom.$)(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }
    Utils.extend(swiper.pagination, {
      $el,
      el: $el[0]
    });
  },
  destroy() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', `.${params.bulletClass}`);
    }
  }
};
var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy() {
      const swiper = this;
      swiper.pagination.destroy();
    },
    click(e) {
      const swiper = this;
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0, _dom.$)(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          swiper.emit('paginationShow', swiper);
        } else {
          swiper.emit('paginationHide', swiper);
        }
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};
const Scrollbar = {
  setTranslate() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      dragSize,
      trackSize,
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition(duration) {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    const divider = swiper.size / swiper.virtualSize;
    const moveDivider = divider * (trackSize / swiper.size);
    let dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize,
      divider,
      moveDivider,
      dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition(e) {
    const swiper = this;
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }
    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition(e) {
    const swiper = this;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el,
      dragSize,
      trackSize,
      dragStartPos
    } = scrollbar;
    let positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart(e) {
    const swiper = this;
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove(e) {
    const swiper = this;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd(e) {
    const swiper = this;
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      _ssrWindow.document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      _ssrWindow.document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      _ssrWindow.document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      _ssrWindow.document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    const params = swiper.params.scrollbar;
    let $el = (0, _dom.$)(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }
    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = (0, _dom.$)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }
    Utils.extend(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });
    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy() {
    const swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate() {
      const swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy() {
      const swiper = this;
      swiper.scrollbar.destroy();
    }
  }
};
const Parallax = {
  setTransform(el, progress) {
    const swiper = this;
    const {
      rtl
    } = swiper;
    const $el = (0, _dom.$)(el);
    const rtlFactor = rtl ? -1 : 1;
    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  },
  setTranslate() {
    const swiper = this;
    const {
      $el,
      slides,
      progress,
      snapGrid
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((index, el) => {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each((slideIndex, slideEl) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0, _dom.$)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((index, el) => {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition(duration = this.params.speed) {
    const swiper = this;
    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((index, parallaxEl) => {
      const $parallaxEl = (0, _dom.$)(parallaxEl);
      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
};
const Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  },
  // Events
  onGestureStart(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const {
      gesture
    } = zoom;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0, _dom.$)(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }
    swiper.zoom.isScaling = true;
  },
  onGestureChange(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const {
      gesture
    } = zoom;
    if (!Support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (Support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  onGestureEnd(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const {
      gesture
    } = zoom;
    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const {
      gesture,
      image
    } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const {
      gesture,
      image,
      velocity
    } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTouchEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const {
      gesture,
      image,
      velocity
    } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTransitionEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const {
      gesture
    } = zoom;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }
      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const {
      gesture,
      image
    } = zoom;
    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  out() {
    const swiper = this;
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const {
      gesture
    } = zoom;
    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = Support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    const slideSelector = `.${swiper.params.slideClass}`;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    }

    // Move image
    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    swiper.zoom.enabled = false;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = Support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    const slideSelector = `.${swiper.params.slideClass}`;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    }

    // Move image
    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
  }
};
var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create() {
    const swiper = this;
    const zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      }
    };
    'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(methodName => {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom
    });
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy() {
      const swiper = this;
      swiper.zoom.disable();
    },
    touchStart(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};
const Lazy = {
  loadInSlide(index, loadInDuplicate = true) {
    const swiper = this;
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) return;
    $images.each((imageIndex, imageEl) => {
      const $imageEl = (0, _dom.$)(imageEl);
      $imageEl.addClass(params.loadingClass);
      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');
      const $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if ($pictureEl.length) {
            $pictureEl.children('source').each((sourceIndex, sourceEl) => {
              const $source = (0, _dom.$)(sourceEl);
              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }
        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();
        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load() {
    const swiper = this;
    const {
      $wrapperEl,
      params: swiperParams,
      slides,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;
    let slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }
    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0, _dom.$)(slideEl).attr('data-swiper-slide-index');
      }
      return (0, _dom.$)(slideEl).index();
    }
    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
        const index = isVirtual ? (0, _dom.$)(slideEl).attr('data-swiper-slide-index') : (0, _dom.$)(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
        // Prev Slides
        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};
var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll() {
      const swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    }
  }
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

const Controller = {
  LinearSpline: function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction(c) {
    const swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate(setTranslate, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition(duration, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          Utils.nextTick(() => {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  },

  create() {
    const swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper)
      }
    });
  },
  on: {
    update() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate(translate, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
const a11y = {
  makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey(e) {
    const swiper = this;
    const params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    const $targetEl = (0, _dom.$)(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
      $targetEl[0].click();
    }
  },
  notify(message) {
    const swiper = this;
    const notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation() {
    const swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination() {
    const swiper = this;
    const params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
        const $bulletEl = (0, _dom.$)(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
      });
    }
  },
  init() {
    const swiper = this;
    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    const params = swiper.params.a11y;
    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  }
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: (0, _dom.$)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
      }
    });
    Object.keys(a11y).forEach(methodName => {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};
const History = {
  init() {
    const swiper = this;
    if (!swiper.params.history) return;
    if (!_ssrWindow.window.history || !_ssrWindow.window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    const history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      _ssrWindow.window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy() {
    const swiper = this;
    if (!swiper.params.history.replaceState) {
      _ssrWindow.window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState() {
    const swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues() {
    const pathArray = _ssrWindow.window.location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  },
  setHistory(key, index) {
    const swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    const slide = swiper.slides.eq(index);
    let value = History.slugify(slide.attr('data-history'));
    if (!_ssrWindow.window.location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }
    const currentState = _ssrWindow.window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      _ssrWindow.window.history.replaceState({
        value
      }, null, value);
    } else {
      _ssrWindow.window.history.pushState({
        value
      }, null, value);
    }
  },
  slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide(speed, value, runCallbacks) {
    const swiper = this;
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper)
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};
const HashNavigation = {
  onHashCange() {
    const swiper = this;
    swiper.emit('hashChange');
    const newHash = _ssrWindow.document.location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash() {
    const swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && _ssrWindow.window.history && _ssrWindow.window.history.replaceState) {
      _ssrWindow.window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
      swiper.emit('hashSet');
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      _ssrWindow.document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    const hash = _ssrWindow.document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.$)(_ssrWindow.window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.$)(_ssrWindow.window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper)
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange() {
      const swiper = this;
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};

/* eslint no-underscore-dangle: "off" */

const Autoplay = {
  run() {
    const swiper = this;
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Utils.nextTick(() => {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
    }, delay);
  },
  start() {
    const swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop() {
    const swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;
    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause(speed) {
    const swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  }
};
var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onVisibilityChange() {
          if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
            swiper.autoplay.pause();
          }
          if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            swiper.autoplay.run();
            swiper.autoplay.paused = false;
          }
        },
        onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;
          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        }
      }
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart(speed, internal) {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove() {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd() {
      const swiper = this;
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
};
const Fade = {
  setTranslate() {
    const swiper = this;
    const {
      slides
    } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const {
      slides,
      $wrapperEl
    } = swiper;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      slides.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
const Cube = {
  setTranslate() {
    const swiper = this;
    const {
      $el,
      $wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.$)('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({
          height: `${swiperWidth}px`
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.$)('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`
    });
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }
    const zFactor = Browser.isSafari || Browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  },
  setTransition(duration) {
    const swiper = this;
    const {
      $el,
      slides
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};
const Flip = {
  setTranslate() {
    const swiper = this;
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.$)(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.$)(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl.transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const {
      slides,
      activeIndex,
      $wrapperEl
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};
const Coverflow = {
  setTranslate() {
    const swiper = this;
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      $wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0, _dom.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0, _dom.$)(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }

    // Set correct perspective for IE10
    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      const ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = `${center}px 50%`;
    }
  },
  setTransition(duration) {
    const swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};
const Thumbs = {
  init() {
    const swiper = this;
    const {
      thumbs: thumbsParams
    } = swiper.params;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick() {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0, _dom.$)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0, _dom.$)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update(initial) {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        // Find actual thumbs index to slide to
        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  }
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper)
      }
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      const {
        thumbs
      } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition(duration) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
};

// Swiper Class

const components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}
Swiper.use(components);
var _default = Swiper;
exports.default = _default;
},{"dom7/dist/dom7.modular":"../node_modules/dom7/dist/dom7.modular.js","ssr-window":"../node_modules/ssr-window/dist/ssr-window.esm.js"}],"assets/js/app.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");
var _imagesloaded = _interopRequireDefault(require("imagesloaded"));
var _mixitup = _interopRequireDefault(require("mixitup"));
var _gsap = _interopRequireDefault(require("gsap"));
var _swiper = _interopRequireWildcard(require("swiper"));
var _data2 = require("./data.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import the portfolioData array from data.js

const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
let c = 0;
let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  counter_num.innerText = c + "%";
  c++;
  if (c === 101) {
    clearInterval(barInterval);
    _gsap.default.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%"
    });
    _gsap.default.to(".loading__text,.loading__counter", {
      duration: 0.5,
      opacity: 0
    });
    _gsap.default.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%"
    });
    _gsap.default.to(".loading__svg", {
      duration: 3,
      opacity: 1,
      rotate: "360deg"
    });
    _gsap.default.to(".loading__box", {
      delay: 2,
      border: "none"
    });
    (0, _imagesloaded.default)(document.querySelectorAll("img"), () => {
      _gsap.default.to(".loading", {
        delay: 3,
        duration: 4,
        zIndex: 1,
        background: "transparent",
        opacity: 0.5
      });
      _gsap.default.to(".loading", {
        delay: 5,
        duration: 5,
        opacity: 0
      });
      _gsap.default.to(".loading__svg", {
        delay: 3,
        duration: 100,
        rotate: "360deg"
      });
      _gsap.default.to("header", {
        delay: 3,
        duration: 1,
        top: "0"
      });
      _gsap.default.to(".socials", {
        delay: 3.5,
        duration: 1,
        bottom: "10rem"
      });
      _gsap.default.to(".scrollDown", {
        delay: 4,
        duration: 1,
        bottom: "3rem"
      });
    });
  }
}, 20);

// review swiper
var swiper = new _swiper.default(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    850: {
      slidesPerView: 2
    },
    1400: {
      slidesPerView: 3
    },
    1900: {
      slidesPerView: 4
    },
    2200: {
      slidesPerView: 5
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
const swiper_container = document.querySelector(".swiper-wrapper");

// Function to add slides to Swiper
function addReviewSlide(review) {
  const template = `
    <div class="swiper-slide">
      <div class="review">
        <div class="review__card">
          <div class="review__topborder"></div>
          <div class="review__text">
            <span>${review.review.substring(0, 1)}</span>
            ${review.review.substring(1, review.review.length)}
          </div>
        </div>
        <img src=${review.image} class="review__img" alt="">
        <div class="review__profile">
          <span>${review.name}</span>
          <span>${review.position}</span>
        </div>
      </div>
    </div>
  `;
  swiper_container.innerHTML += template;
}

// Add slides to Swiper
_data.reviews.forEach(review => {
  addReviewSlide(review);
});

// Update Swiper after adding slides
swiper.update();

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkWork.forEach(l => l.classList.remove('active__work'));
  this.classList.add('active__work');
}
linkWork.forEach(l => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/
document.addEventListener("click", e => {
  if (e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}
document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);
function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// Faq script
const questions = [...document.querySelectorAll(".question")];
questions.map(question => {
  let q_text = question.querySelector("h3");
  q_text.addEventListener("click", () => {
    questions.filter(q => q !== question).map(q => q.classList.remove("open"));
    question.classList.toggle("open");
  });
});
},{"./data":"assets/js/data.js","imagesloaded":"../node_modules/imagesloaded/imagesloaded.js","mixitup":"../node_modules/mixitup/dist/mixitup.js","gsap":"../node_modules/gsap/index.js","swiper":"../node_modules/swiper/js/swiper.esm.bundle.js","./data.js":"assets/js/data.js"}],"C:/Users/wwwah/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64452" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/wwwah/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/app.js"], null)
//# sourceMappingURL=/app.56908c73.js.map