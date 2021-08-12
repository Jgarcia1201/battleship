/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/attack.js":
/*!**********************************!*\
  !*** ./src/components/attack.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/components/game.js");
/* harmony import */ var _gameSetUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameSetUp */ "./src/components/gameSetUp.js");



function checkPlayerWin() {
    let boardR = document.querySelector('#boardR');
    let squaresR = boardR.querySelectorAll('.squareHidden');
    for (let i = 0; i < squaresR.length; i++) {
        if (squaresR[i].innerHTML == "s") {
            return false;
        }
    }
    return true;
};

function checkCompWin() {
    let boardL = document.querySelector('#boardL');
    let squaresL = boardL.querySelectorAll('#playerSquare');
    let compWin = false;
    for (let i = 0; i < squaresL.length; i++) {
        if (squaresL[i].innerHTML == "s") {
            return false;
        }
    }
    return true;
}

function gameOver(string) {
    let gameDiv = document.querySelector('.gameDiv');
    let boardDiv = document.querySelector('.boardDiv');
    let tagDiv = document.querySelector('.tagDiv');
    tagDiv.remove();
    boardDiv.remove();

    let winDiv = document.createElement('div');
    winDiv.className = 'winDiv';
    winDiv.innerHTML = string;
    gameDiv.appendChild(winDiv);

    const restartButton = document.createElement('button');
    winDiv.appendChild(restartButton);
    restartButton.className = "restartButton";
    restartButton.innerHTML = "Play Again?";
    restartButton.addEventListener('click', () => {
        let iconDiv = document.querySelector('.iconDiv');
        iconDiv.remove();
        gameDiv.remove();
        (0,_gameSetUp__WEBPACK_IMPORTED_MODULE_1__.default)();
        (0,_game__WEBPACK_IMPORTED_MODULE_0__.default)();
    })
}

function compMove() {
    let boardL = document.querySelector('#boardL');
    let squaresL = boardL.querySelectorAll('#playerSquare');
    let i = Math.floor(Math.random() * squaresL.length);
    if (squaresL[i].className == "squareHidden" || squaresL[i].className == "squarePlayerShip") {
        if (squaresL[i].innerHTML == "~") {
            squaresL[i].className = "squareMiss";
            squaresL[i].innerHTML = "";
        }
        else if (squaresL[i].innerHTML == "s") {
            squaresL[i].className = "squareHit";
            squaresL[i].innerHTML = "";
        }
    }
    else {
        compMove();
    }
    let compWin = checkCompWin();
    if (compWin == true) {
        gameOver('You let a computer I programmed beat you. SMH.')
    }
};

function userAttack() {
    if (this.innerHTML == '~') {
        this.className = "squareMiss";
        this.innerHTML = "";
    }
    else if (this.innerHTML == 's') {
        this.className = "squareHit";
        this.innerHTML = '';
    }
    let huWin = checkPlayerWin();
    if (huWin == false) {
        compMove();
    }
    else if(huWin == true) {
        gameOver('You Win!');
    }

}

function attackInit() {
    let boardR = document.querySelector('#boardR');
    let squares = boardR.querySelectorAll('.squareHidden');
    squares.forEach(square => square.addEventListener('click', userAttack));
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attackInit);

/***/ }),

/***/ "./src/components/game.js":
/*!********************************!*\
  !*** ./src/components/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/gameboard/gameboard.js");
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js");
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ship_ship__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attack */ "./src/components/attack.js");




function playerInit() {
    return _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('human');
}

function compInit() {
    return _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('computer');
}

function shipsInit(player) {
    if (player.player == 'human') {
        let randomNum1 = Math.floor(Math.random() * (4 - 1) + 1);
        const ship1 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(1, 2, true);
        const ship2 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(2, 3, false);
        const ship3 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(3, 4, true);
        const ship4 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(4, 4, false);
        const ship5 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(5, 3, true);
        switch(randomNum1) {
            case 1:
                player.placeShip(ship1, 0);
                player.placeShip(ship2, 27);
                player.placeShip(ship3, 41);
                player.placeShip(ship4, 35);
                player.placeShip(ship5, 3);
                break;
            case 2:
                player.placeShip(ship1, 89);
                player.placeShip(ship2, 3);
                player.placeShip(ship3, 30);
                player.placeShip(ship4, 67);
                player.placeShip(ship5, 72);
                break;
            case 3:
                player.placeShip(ship1, 9);
                player.placeShip(ship2, 44);
                player.placeShip(ship3, 28);
                player.placeShip(ship4, 61);
                player.placeShip(ship5, 70);
                break;
        }
    }
    if (player.player == 'computer') {
        let randomNum2 = Math.floor(Math.random() * (4 - 1) + 1);
        const cuship1 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(1, 2, true);
        const cuship2 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(2, 3, false);
        const cuship3 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(3, 4, true);
        const cuship4 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(4, 4, false);
        const cuship5 = _ship_ship__WEBPACK_IMPORTED_MODULE_1___default()(5, 3, true);
        switch(randomNum2) {
            case 1: 
                player.placeShip(cuship1, 13);
                player.placeShip(cuship2, 54);
                player.placeShip(cuship3, 69);
                player.placeShip(cuship4, 93);
                player.placeShip(cuship5, 0);
                break;

            case 2:
                player.placeShip(cuship1, 89);
                player.placeShip(cuship2, 90);
                player.placeShip(cuship3, 66);
                player.placeShip(cuship4, 14);
                player.placeShip(cuship5, 32);
                break;
            case 3:
                player.placeShip(cuship1, 50);
                player.placeShip(cuship2, 94);
                player.placeShip(cuship3, 38);
                player.placeShip(cuship4, 72);
                player.placeShip(cuship5, 6);
                break;
        }
        
    }
};



function gameInit(player) {
    if (player.player == 'human') {
        shipsInit(player);
        const boardL = document.querySelector('#boardL');
        for (let i = 0; i < player.board.length; i++) {
            let square = document.createElement('div');
            square.id = 'playerSquare';
            square.innerHTML = player.board[i];
            if (square.innerHTML == "s") {
                square.className = 'squarePlayerShip';
            }
            else {
                square.className = 'squareHidden';
            }
            boardL.appendChild(square);
        }
    }
    else if (player.player == 'computer') {
        shipsInit(player);
        const boardR = document.querySelector('#boardR');
        for (let i = 0; i < player.board.length; i++) {
            let square = document.createElement('div');
            square.innerHTML = player.board[i];
            square.className = 'squareHidden';
            boardR.appendChild(square);
        }
        (0,_attack__WEBPACK_IMPORTED_MODULE_2__.default)();
    }
};



function game() {
    let player1 = _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('human');
    let comp = _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0___default()('computer');
    gameInit(player1);
    gameInit(comp);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/components/gameSetUp.js":
/*!*************************************!*\
  !*** ./src/components/gameSetUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const startButton = document.querySelector('.startSub');
const nameInput = document.querySelector('.name');
const nameDiv = document.querySelector('.nameDiv');
const title = document.querySelector('.startTitle');
const content = document.querySelector('#content');

function startRemove() {
    title.remove();
    startButton.remove();
    nameDiv.remove();
};

function createHeader() {
    let iconDiv = document.createElement('div');
    iconDiv.className = "iconDiv";
    content.appendChild(iconDiv);
    let ship1 = document.createElement('span');
    ship1.className = "material-icons";
    ship1.innerHTML = "sailing";
    iconDiv.appendChild(ship1);
};

function getName() {
    let playerName = nameInput.value;
    if (nameInput.value == "") {
        return "player";
    }
    return playerName;
}

function createGameSpace() {
    const gameDiv = document.createElement('div');
    gameDiv.className = "gameDiv";
    content.appendChild(gameDiv);

    const tagDiv = document.createElement('div');
    tagDiv.className = "tagDiv";
    gameDiv.appendChild(tagDiv);

    const play1 = document.createElement('div');
    play1.className = "playerTag";
    play1.id = "play1";
    play1.innerHTML = getName();
    tagDiv.appendChild(play1);

    const play2 = document.createElement('div');
    play2.className = "playerTag";
    play2.id = "play2";
    play2.innerHTML = "computer";
    tagDiv.appendChild(play2);


    const boardDiv = document.createElement('div');
    boardDiv.className = "boardDiv";
    gameDiv.appendChild(boardDiv);
};

function createBoards() {
    const boardL = document.createElement('div');
    const boardDiv = document.querySelector('.boardDiv');
    boardL.className = "board";
    boardL.id = "boardL";
    boardDiv.appendChild(boardL);

    const divider = document.createElement('div');
    divider.className = 'divider';
    boardDiv.appendChild(divider);

    const boardR = document.createElement('div');
    boardR.className = "board";
    boardR.id = "boardR";
    boardDiv.appendChild(boardR);
};

function startGame() {
    createHeader();
    createGameSpace();
    createBoards();
    startRemove();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);

/***/ }),

/***/ "./src/gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/gameboard/gameboard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let shipFact = __webpack_require__(/*! ../ship/ship */ "./src/ship/ship.js");

const gameboardFact = function(player) {

    this.player = player;
    let board = [
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',           
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
        ];
    
    const createBoard = () => {
        board = [
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',           
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            '~', '~', '~', '~', '~', '~', '~', '~', '~', '~',
            ];
    };

    const placeShip = (ship, startIndex) => {
        if (ship.vert == true) {
            for (i = 0; i < ship.length; i++) {
                board[startIndex + i * 10] = 's';
            }
        }
        else {
            for (i = 0; i < ship.length; i++) {
                board[startIndex + i] = 's';
            }
        }
    };

// Receiving an Attack, Registering Damage & Sinking.
    const hit = (ship) => {
        ship.health--;
        isSunk(ship);
    }

    const isSunk = (ship) => {
        if (ship.health == 0) {
            ship.sunk = true;
        }
        else {
            ship.sunk = false;
        }
    }

    const receiveAttack = (player, div) => {
        if (div.innerHTML == 's') {
            div.innerHTML = 'x';
            //hit(ship);
        }
        else if (div.innerHTML == '~') {
            div.innerHTML = 'o';
        }
    };

    const receiveAtt = (div) => {
        if (div.innerHTML == "~") {
            div.innerHTML = "o";
        }
        else if (div.innerHTML == "s") {
            div.innerHTML = "x";
        }
    };

    const gameOver = () => {
        for (i = 0; i < board.length; i++) {
            if (board[i] == 's') {
                return true;
            }
            else {
                return false;
            }
        }
    };

    return {
        player,
        board,
        createBoard,
        placeShip,
        receiveAttack,
        receiveAtt,
        gameOver,
    }

};

module.exports = gameboardFact;


// Angela -- Cypresswood & 45
// Last week; 

// We can not seem to update the ship num. 
// I think what may be causing this, is that JS treats the shipNum inside
// a function as another variable...... I'll work around this. 

/***/ }),

/***/ "./src/ship/ship.js":
/*!**************************!*\
  !*** ./src/ship/ship.js ***!
  \**************************/
/***/ ((module) => {

const shipFact = function(name, length, vert) {
    this.name = name;
    this.length = length;
    this.vert = vert;
    this.health = length;
    const shipArr = Array(length);
    let sunk = false;

    return {
        name,
        length,
        vert,
        health,
        shipArr,
        sunk,
    };
};

module.exports = shipFact;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_gameSetUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gameSetUp */ "./src/components/gameSetUp.js");
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game */ "./src/components/game.js");



const startButton = document.querySelector('.startSub');
startButton.addEventListener('click', () => {
    (0,_components_gameSetUp__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_components_game__WEBPACK_IMPORTED_MODULE_1__.default)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNUOztBQUVyQztBQUNBO0FBQ0EsSUFBSSw4REFBUztBQUNiLElBQUkseURBQUk7QUFDUixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYXR0YWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lU2V0VXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FtZSAgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tIFwiLi9nYW1lU2V0VXBcIjtcblxuZnVuY3Rpb24gY2hlY2tQbGF5ZXJXaW4oKSB7XG4gICAgbGV0IGJvYXJkUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZFInKTtcbiAgICBsZXQgc3F1YXJlc1IgPSBib2FyZFIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZUhpZGRlbicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlc1IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNxdWFyZXNSW2ldLmlubmVySFRNTCA9PSBcInNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gY2hlY2tDb21wV2luKCkge1xuICAgIGxldCBib2FyZEwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmRMJyk7XG4gICAgbGV0IHNxdWFyZXNMID0gYm9hcmRMLnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJTcXVhcmUnKTtcbiAgICBsZXQgY29tcFdpbiA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlc0wubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNxdWFyZXNMW2ldLmlubmVySFRNTCA9PSBcInNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnYW1lT3ZlcihzdHJpbmcpIHtcbiAgICBsZXQgZ2FtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lRGl2Jyk7XG4gICAgbGV0IGJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkRGl2Jyk7XG4gICAgbGV0IHRhZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWdEaXYnKTtcbiAgICB0YWdEaXYucmVtb3ZlKCk7XG4gICAgYm9hcmREaXYucmVtb3ZlKCk7XG5cbiAgICBsZXQgd2luRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luRGl2LmNsYXNzTmFtZSA9ICd3aW5EaXYnO1xuICAgIHdpbkRpdi5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgZ2FtZURpdi5hcHBlbmRDaGlsZCh3aW5EaXYpO1xuXG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHdpbkRpdi5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcbiAgICByZXN0YXJ0QnV0dG9uLmNsYXNzTmFtZSA9IFwicmVzdGFydEJ1dHRvblwiO1xuICAgIHJlc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gXCJQbGF5IEFnYWluP1wiO1xuICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBpY29uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25EaXYnKTtcbiAgICAgICAgaWNvbkRpdi5yZW1vdmUoKTtcbiAgICAgICAgZ2FtZURpdi5yZW1vdmUoKTtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIGdhbWUoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjb21wTW92ZSgpIHtcbiAgICBsZXQgYm9hcmRMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkTCcpO1xuICAgIGxldCBzcXVhcmVzTCA9IGJvYXJkTC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyU3F1YXJlJyk7XG4gICAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcXVhcmVzTC5sZW5ndGgpO1xuICAgIGlmIChzcXVhcmVzTFtpXS5jbGFzc05hbWUgPT0gXCJzcXVhcmVIaWRkZW5cIiB8fCBzcXVhcmVzTFtpXS5jbGFzc05hbWUgPT0gXCJzcXVhcmVQbGF5ZXJTaGlwXCIpIHtcbiAgICAgICAgaWYgKHNxdWFyZXNMW2ldLmlubmVySFRNTCA9PSBcIn5cIikge1xuICAgICAgICAgICAgc3F1YXJlc0xbaV0uY2xhc3NOYW1lID0gXCJzcXVhcmVNaXNzXCI7XG4gICAgICAgICAgICBzcXVhcmVzTFtpXS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNxdWFyZXNMW2ldLmlubmVySFRNTCA9PSBcInNcIikge1xuICAgICAgICAgICAgc3F1YXJlc0xbaV0uY2xhc3NOYW1lID0gXCJzcXVhcmVIaXRcIjtcbiAgICAgICAgICAgIHNxdWFyZXNMW2ldLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBNb3ZlKCk7XG4gICAgfVxuICAgIGxldCBjb21wV2luID0gY2hlY2tDb21wV2luKCk7XG4gICAgaWYgKGNvbXBXaW4gPT0gdHJ1ZSkge1xuICAgICAgICBnYW1lT3ZlcignWW91IGxldCBhIGNvbXB1dGVyIEkgcHJvZ3JhbW1lZCBiZWF0IHlvdS4gU01ILicpXG4gICAgfVxufTtcblxuZnVuY3Rpb24gdXNlckF0dGFjaygpIHtcbiAgICBpZiAodGhpcy5pbm5lckhUTUwgPT0gJ34nKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJzcXVhcmVNaXNzXCI7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pbm5lckhUTUwgPT0gJ3MnKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJzcXVhcmVIaXRcIjtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgbGV0IGh1V2luID0gY2hlY2tQbGF5ZXJXaW4oKTtcbiAgICBpZiAoaHVXaW4gPT0gZmFsc2UpIHtcbiAgICAgICAgY29tcE1vdmUoKTtcbiAgICB9XG4gICAgZWxzZSBpZihodVdpbiA9PSB0cnVlKSB7XG4gICAgICAgIGdhbWVPdmVyKCdZb3UgV2luIScpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBhdHRhY2tJbml0KCkge1xuICAgIGxldCBib2FyZFIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmRSJyk7XG4gICAgbGV0IHNxdWFyZXMgPSBib2FyZFIucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZUhpZGRlbicpO1xuICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXNlckF0dGFjaykpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGF0dGFja0luaXQiLCJpbXBvcnQgZ2FtZWJvYXJkRmFjdCBmcm9tIFwiLi4vZ2FtZWJvYXJkL2dhbWVib2FyZFwiO1xuaW1wb3J0IHNoaXBGYWN0IGZyb20gXCIuLi9zaGlwL3NoaXBcIjtcbmltcG9ydCBhdHRhY2tJbml0IGZyb20gXCIuL2F0dGFja1wiO1xuXG5mdW5jdGlvbiBwbGF5ZXJJbml0KCkge1xuICAgIHJldHVybiBnYW1lYm9hcmRGYWN0KCdodW1hbicpO1xufVxuXG5mdW5jdGlvbiBjb21wSW5pdCgpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkRmFjdCgnY29tcHV0ZXInKTtcbn1cblxuZnVuY3Rpb24gc2hpcHNJbml0KHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIucGxheWVyID09ICdodW1hbicpIHtcbiAgICAgICAgbGV0IHJhbmRvbU51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNCAtIDEpICsgMSk7XG4gICAgICAgIGNvbnN0IHNoaXAxID0gc2hpcEZhY3QoMSwgMiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHNoaXAyID0gc2hpcEZhY3QoMiwgMywgZmFsc2UpO1xuICAgICAgICBjb25zdCBzaGlwMyA9IHNoaXBGYWN0KDMsIDQsIHRydWUpO1xuICAgICAgICBjb25zdCBzaGlwNCA9IHNoaXBGYWN0KDQsIDQsIGZhbHNlKTtcbiAgICAgICAgY29uc3Qgc2hpcDUgPSBzaGlwRmFjdCg1LCAzLCB0cnVlKTtcbiAgICAgICAgc3dpdGNoKHJhbmRvbU51bTEpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXAxLCAwKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXAyLCAyNyk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYWNlU2hpcChzaGlwMywgNDEpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoc2hpcDQsIDM1KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXA1LCAzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXAxLCA4OSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYWNlU2hpcChzaGlwMiwgMyk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYWNlU2hpcChzaGlwMywgMzApO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoc2hpcDQsIDY3KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXA1LCA3Mik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYWNlU2hpcChzaGlwMSwgOSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYWNlU2hpcChzaGlwMiwgNDQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoc2hpcDMsIDI4KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKHNoaXA0LCA2MSk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBsYWNlU2hpcChzaGlwNSwgNzApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwbGF5ZXIucGxheWVyID09ICdjb21wdXRlcicpIHtcbiAgICAgICAgbGV0IHJhbmRvbU51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNCAtIDEpICsgMSk7XG4gICAgICAgIGNvbnN0IGN1c2hpcDEgPSBzaGlwRmFjdCgxLCAyLCB0cnVlKTtcbiAgICAgICAgY29uc3QgY3VzaGlwMiA9IHNoaXBGYWN0KDIsIDMsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgY3VzaGlwMyA9IHNoaXBGYWN0KDMsIDQsIHRydWUpO1xuICAgICAgICBjb25zdCBjdXNoaXA0ID0gc2hpcEZhY3QoNCwgNCwgZmFsc2UpO1xuICAgICAgICBjb25zdCBjdXNoaXA1ID0gc2hpcEZhY3QoNSwgMywgdHJ1ZSk7XG4gICAgICAgIHN3aXRjaChyYW5kb21OdW0yKSB7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoY3VzaGlwMSwgMTMpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoY3VzaGlwMiwgNTQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoY3VzaGlwMywgNjkpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoY3VzaGlwNCwgOTMpO1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGFjZVNoaXAoY3VzaGlwNSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDEsIDg5KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDIsIDkwKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDMsIDY2KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDQsIDE0KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDUsIDMyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDEsIDUwKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDIsIDk0KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDMsIDM4KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDQsIDcyKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGxhY2VTaGlwKGN1c2hpcDUsIDYpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn07XG5cblxuXG5mdW5jdGlvbiBnYW1lSW5pdChwbGF5ZXIpIHtcbiAgICBpZiAocGxheWVyLnBsYXllciA9PSAnaHVtYW4nKSB7XG4gICAgICAgIHNoaXBzSW5pdChwbGF5ZXIpO1xuICAgICAgICBjb25zdCBib2FyZEwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmRMJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzcXVhcmUuaWQgPSAncGxheWVyU3F1YXJlJztcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuYm9hcmRbaV07XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmlubmVySFRNTCA9PSBcInNcIikge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlUGxheWVyU2hpcCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZUhpZGRlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZEwuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwbGF5ZXIucGxheWVyID09ICdjb21wdXRlcicpIHtcbiAgICAgICAgc2hpcHNJbml0KHBsYXllcik7XG4gICAgICAgIGNvbnN0IGJvYXJkUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZFInKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBwbGF5ZXIuYm9hcmRbaV07XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ3NxdWFyZUhpZGRlbic7XG4gICAgICAgICAgICBib2FyZFIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2tJbml0KCk7XG4gICAgfVxufTtcblxuXG5cbmZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgbGV0IHBsYXllcjEgPSBnYW1lYm9hcmRGYWN0KCdodW1hbicpO1xuICAgIGxldCBjb21wID0gZ2FtZWJvYXJkRmFjdCgnY29tcHV0ZXInKTtcbiAgICBnYW1lSW5pdChwbGF5ZXIxKTtcbiAgICBnYW1lSW5pdChjb21wKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZSIsImNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0U3ViJyk7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lRGl2Jyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydFRpdGxlJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gc3RhcnRSZW1vdmUoKSB7XG4gICAgdGl0bGUucmVtb3ZlKCk7XG4gICAgc3RhcnRCdXR0b24ucmVtb3ZlKCk7XG4gICAgbmFtZURpdi5yZW1vdmUoKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBsZXQgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb25EaXYuY2xhc3NOYW1lID0gXCJpY29uRGl2XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpY29uRGl2KTtcbiAgICBsZXQgc2hpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc2hpcDEuY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29uc1wiO1xuICAgIHNoaXAxLmlubmVySFRNTCA9IFwic2FpbGluZ1wiO1xuICAgIGljb25EaXYuYXBwZW5kQ2hpbGQoc2hpcDEpO1xufTtcblxuZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICBsZXQgcGxheWVyTmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICBpZiAobmFtZUlucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIFwicGxheWVyXCI7XG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lU3BhY2UoKSB7XG4gICAgY29uc3QgZ2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVEaXYuY2xhc3NOYW1lID0gXCJnYW1lRGl2XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnYW1lRGl2KTtcblxuICAgIGNvbnN0IHRhZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhZ0Rpdi5jbGFzc05hbWUgPSBcInRhZ0RpdlwiO1xuICAgIGdhbWVEaXYuYXBwZW5kQ2hpbGQodGFnRGl2KTtcblxuICAgIGNvbnN0IHBsYXkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheTEuY2xhc3NOYW1lID0gXCJwbGF5ZXJUYWdcIjtcbiAgICBwbGF5MS5pZCA9IFwicGxheTFcIjtcbiAgICBwbGF5MS5pbm5lckhUTUwgPSBnZXROYW1lKCk7XG4gICAgdGFnRGl2LmFwcGVuZENoaWxkKHBsYXkxKTtcblxuICAgIGNvbnN0IHBsYXkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheTIuY2xhc3NOYW1lID0gXCJwbGF5ZXJUYWdcIjtcbiAgICBwbGF5Mi5pZCA9IFwicGxheTJcIjtcbiAgICBwbGF5Mi5pbm5lckhUTUwgPSBcImNvbXB1dGVyXCI7XG4gICAgdGFnRGl2LmFwcGVuZENoaWxkKHBsYXkyKTtcblxuXG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZERpdi5jbGFzc05hbWUgPSBcImJvYXJkRGl2XCI7XG4gICAgZ2FtZURpdi5hcHBlbmRDaGlsZChib2FyZERpdik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZHMoKSB7XG4gICAgY29uc3QgYm9hcmRMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmREaXYnKTtcbiAgICBib2FyZEwuY2xhc3NOYW1lID0gXCJib2FyZFwiO1xuICAgIGJvYXJkTC5pZCA9IFwiYm9hcmRMXCI7XG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoYm9hcmRMKTtcblxuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZpZGVyLmNsYXNzTmFtZSA9ICdkaXZpZGVyJztcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuICAgIGNvbnN0IGJvYXJkUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkUi5jbGFzc05hbWUgPSBcImJvYXJkXCI7XG4gICAgYm9hcmRSLmlkID0gXCJib2FyZFJcIjtcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChib2FyZFIpO1xufTtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZUdhbWVTcGFjZSgpO1xuICAgIGNyZWF0ZUJvYXJkcygpO1xuICAgIHN0YXJ0UmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWUiLCJsZXQgc2hpcEZhY3QgPSByZXF1aXJlKCcuLi9zaGlwL3NoaXAnKTtcblxuY29uc3QgZ2FtZWJvYXJkRmFjdCA9IGZ1bmN0aW9uKHBsYXllcikge1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgbGV0IGJvYXJkID0gW1xuICAgICAgICAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsXG4gICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAgICAgICAgICAgXG4gICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLFxuICAgICAgICAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsXG4gICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLFxuICAgICAgICAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsXG4gICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgXTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgYm9hcmQgPSBbXG4gICAgICAgICAgICAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsXG4gICAgICAgICAgICAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsXG4gICAgICAgICAgICAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICAgICAgICAgICBcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JywgJ34nLCAnficsICd+JyxcbiAgICAgICAgICAgIF07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBzdGFydEluZGV4KSA9PiB7XG4gICAgICAgIGlmIChzaGlwLnZlcnQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtzdGFydEluZGV4ICsgaSAqIDEwXSA9ICdzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbc3RhcnRJbmRleCArIGldID0gJ3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuLy8gUmVjZWl2aW5nIGFuIEF0dGFjaywgUmVnaXN0ZXJpbmcgRGFtYWdlICYgU2lua2luZy5cbiAgICBjb25zdCBoaXQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLmhlYWx0aC0tO1xuICAgICAgICBpc1N1bmsoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuaGVhbHRoID09IDApIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaGlwLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocGxheWVyLCBkaXYpID0+IHtcbiAgICAgICAgaWYgKGRpdi5pbm5lckhUTUwgPT0gJ3MnKSB7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICAgICAgLy9oaXQoc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGl2LmlubmVySFRNTCA9PSAnficpIHtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSAnbyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dCA9IChkaXYpID0+IHtcbiAgICAgICAgaWYgKGRpdi5pbm5lckhUTUwgPT0gXCJ+XCIpIHtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIm9cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXYuaW5uZXJIVE1MID09IFwic1wiKSB7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCJ4XCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldID09ICdzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcixcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIGNyZWF0ZUJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHJlY2VpdmVBdHQsXG4gICAgICAgIGdhbWVPdmVyLFxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmRGYWN0O1xuXG5cbi8vIEFuZ2VsYSAtLSBDeXByZXNzd29vZCAmIDQ1XG4vLyBMYXN0IHdlZWs7IFxuXG4vLyBXZSBjYW4gbm90IHNlZW0gdG8gdXBkYXRlIHRoZSBzaGlwIG51bS4gXG4vLyBJIHRoaW5rIHdoYXQgbWF5IGJlIGNhdXNpbmcgdGhpcywgaXMgdGhhdCBKUyB0cmVhdHMgdGhlIHNoaXBOdW0gaW5zaWRlXG4vLyBhIGZ1bmN0aW9uIGFzIGFub3RoZXIgdmFyaWFibGUuLi4uLi4gSSdsbCB3b3JrIGFyb3VuZCB0aGlzLiAiLCJjb25zdCBzaGlwRmFjdCA9IGZ1bmN0aW9uKG5hbWUsIGxlbmd0aCwgdmVydCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy52ZXJ0ID0gdmVydDtcbiAgICB0aGlzLmhlYWx0aCA9IGxlbmd0aDtcbiAgICBjb25zdCBzaGlwQXJyID0gQXJyYXkobGVuZ3RoKTtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICB2ZXJ0LFxuICAgICAgICBoZWFsdGgsXG4gICAgICAgIHNoaXBBcnIsXG4gICAgICAgIHN1bmssXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcEZhY3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdGFydEdhbWUgZnJvbSAnLi9jb21wb25lbnRzL2dhbWVTZXRVcCdcbmltcG9ydCBnYW1lIGZyb20gJy4vY29tcG9uZW50cy9nYW1lJztcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnRTdWInKTtcbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0YXJ0R2FtZSgpO1xuICAgIGdhbWUoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==