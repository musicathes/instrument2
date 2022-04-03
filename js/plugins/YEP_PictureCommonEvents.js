//=============================================================================
// Yanfly Engine Plugins - Picture Common Events
// YEP_PictureCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_PictureCommonEvents = true;

var Yanfly = Yanfly || {};
Yanfly.PCE = Yanfly.PCE || {};
Yanfly.PCE.version = 1.06;

//=============================================================================
 /*:
 * @plugindesc v1.06 Causes common events to run when certain pictures
 * are clicked while on the map.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Enable Touch Move
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Is touch movement enabled by default?
 * NO - false   YES - true   Default: true
 * @default true
 *
 * @param Hide Message
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Hide Pictures with common events during messages?
 * NO - false   YES - true   Default: true
 * @default true
 *
 * @param ---Picture 1---
 * @default
 *
 * @param Picture 1 Click
 * @parent ---Picture 1---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Repeat
 * @parent ---Picture 1---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Hold
 * @parent ---Picture 1---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Release
 * @parent ---Picture 1---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 2---
 * @default
 *
 * @param Picture 2 Click
 * @parent ---Picture 2---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Repeat
 * @parent ---Picture 2---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Hold
 * @parent ---Picture 2---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Release
 * @parent ---Picture 2---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 3---
 * @default
 *
 * @param Picture 3 Click
 * @parent ---Picture 3---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Repeat
 * @parent ---Picture 3---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Hold
 * @parent ---Picture 3---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Release
 * @parent ---Picture 3---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 4---
 * @default
 *
 * @param Picture 4 Click
 * @parent ---Picture 4---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Repeat
 * @parent ---Picture 4---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Hold
 * @parent ---Picture 4---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Release
 * @parent ---Picture 4---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 5---
 * @default
 *
 * @param Picture 5 Click
 * @parent ---Picture 5---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Repeat
 * @parent ---Picture 5---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Hold
 * @parent ---Picture 5---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Release
 * @parent ---Picture 5---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 6---
 * @default
 *
 * @param Picture 6 Click
 * @parent ---Picture 6---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Repeat
 * @parent ---Picture 6---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Hold
 * @parent ---Picture 6---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Release
 * @parent ---Picture 6---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 7---
 * @default
 *
 * @param Picture 7 Click
 * @parent ---Picture 7---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Repeat
 * @parent ---Picture 7---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Hold
 * @parent ---Picture 7---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Release
 * @parent ---Picture 7---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 8---
 * @default
 *
 * @param Picture 8 Click
 * @parent ---Picture 8---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Repeat
 * @parent ---Picture 8---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Hold
 * @parent ---Picture 8---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Release
 * @parent ---Picture 8---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 9---
 * @default
 *
 * @param Picture 9 Click
 * @parent ---Picture 9---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Repeat
 * @parent ---Picture 9---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Hold
 * @parent ---Picture 9---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Release
 * @parent ---Picture 9---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 10---
 * @default
 *
 * @param Picture 10 Click
 * @parent ---Picture 10---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Repeat
 * @parent ---Picture 10---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Hold
 * @parent ---Picture 10---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Release
 * @parent ---Picture 10---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 11---
 * @default
 *
 * @param Picture 11 Click
 * @parent ---Picture 11---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 11 Repeat
 * @parent ---Picture 11---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 11 Hold
 * @parent ---Picture 11---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 11 Release
 * @parent ---Picture 11---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 12---
 * @default
 *
 * @param Picture 12 Click
 * @parent ---Picture 12---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 12 Repeat
 * @parent ---Picture 12---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 12 Hold
 * @parent ---Picture 12---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 12 Release
 * @parent ---Picture 12---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 13---
 * @default
 *
 * @param Picture 13 Click
 * @parent ---Picture 13---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 13 Repeat
 * @parent ---Picture 13---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 13 Hold
 * @parent ---Picture 13---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 13 Release
 * @parent ---Picture 13---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 14---
 * @default
 *
 * @param Picture 14 Click
 * @parent ---Picture 14---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 14 Repeat
 * @parent ---Picture 14---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 14 Hold
 * @parent ---Picture 14---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 14 Release
 * @parent ---Picture 14---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 15---
 * @default
 *
 * @param Picture 15 Click
 * @parent ---Picture 15---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 15 Repeat
 * @parent ---Picture 15---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 15 Hold
 * @parent ---Picture 15---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 15 Release
 * @parent ---Picture 15---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 16---
 * @default
 *
 * @param Picture 16 Click
 * @parent ---Picture 16---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 16 Repeat
 * @parent ---Picture 16---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 16 Hold
 * @parent ---Picture 16---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 16 Release
 * @parent ---Picture 16---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 17---
 * @default
 *
 * @param Picture 17 Click
 * @parent ---Picture 17---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 17 Repeat
 * @parent ---Picture 17---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 17 Hold
 * @parent ---Picture 17---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 17 Release
 * @parent ---Picture 17---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 18---
 * @default
 *
 * @param Picture 18 Click
 * @parent ---Picture 18---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 18 Repeat
 * @parent ---Picture 18---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 18 Hold
 * @parent ---Picture 18---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 18 Release
 * @parent ---Picture 18---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 19---
 * @default
 *
 * @param Picture 19 Click
 * @parent ---Picture 19---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 19 Repeat
 * @parent ---Picture 19---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 19 Hold
 * @parent ---Picture 19---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 19 Release
 * @parent ---Picture 19---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 20---
 * @default
 *
 * @param Picture 20 Click
 * @parent ---Picture 20---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 20 Repeat
 * @parent ---Picture 20---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 20 Hold
 * @parent ---Picture 20---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 20 Release
 * @parent ---Picture 20---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 21---
 * @default
 *
 * @param Picture 21 Click
 * @parent ---Picture 21---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 21 Repeat
 * @parent ---Picture 21---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 21 Hold
 * @parent ---Picture 21---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 21 Release
 * @parent ---Picture 21---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 22---
 * @default
 *
 * @param Picture 22 Click
 * @parent ---Picture 22---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 22 Repeat
 * @parent ---Picture 22---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 22 Hold
 * @parent ---Picture 22---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 22 Release
 * @parent ---Picture 22---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 23---
 * @default
 *
 * @param Picture 23 Click
 * @parent ---Picture 23---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 23 Repeat
 * @parent ---Picture 23---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 23 Hold
 * @parent ---Picture 23---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 23 Release
 * @parent ---Picture 23---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 24---
 * @default
 *
 * @param Picture 24 Click
 * @parent ---Picture 24---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 24 Repeat
 * @parent ---Picture 24---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 24 Hold
 * @parent ---Picture 24---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 24 Release
 * @parent ---Picture 24---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 25---
 * @default
 *
 * @param Picture 25 Click
 * @parent ---Picture 25---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 25 Repeat
 * @parent ---Picture 25---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 25 Hold
 * @parent ---Picture 25---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 25 Release
 * @parent ---Picture 25---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 26---
 * @default
 *
 * @param Picture 26 Click
 * @parent ---Picture 26---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 26 Repeat
 * @parent ---Picture 26---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 26 Hold
 * @parent ---Picture 26---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 26 Release
 * @parent ---Picture 26---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 27---
 * @default
 *
 * @param Picture 27 Click
 * @parent ---Picture 27---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 27 Repeat
 * @parent ---Picture 27---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 27 Hold
 * @parent ---Picture 27---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 27 Release
 * @parent ---Picture 27---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 28---
 * @default
 *
 * @param Picture 28 Click
 * @parent ---Picture 28---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 28 Repeat
 * @parent ---Picture 28---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 28 Hold
 * @parent ---Picture 28---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 28 Release
 * @parent ---Picture 28---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 29---
 * @default
 *
 * @param Picture 29 Click
 * @parent ---Picture 29---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 29 Repeat
 * @parent ---Picture 29---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 29 Hold
 * @parent ---Picture 29---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 29 Release
 * @parent ---Picture 29---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 30---
 * @default
 *
 * @param Picture 30 Click
 * @parent ---Picture 30---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 30 Repeat
 * @parent ---Picture 30---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 30 Hold
 * @parent ---Picture 30---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 30 Release
 * @parent ---Picture 30---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 31---
 * @default
 *
 * @param Picture 31 Click
 * @parent ---Picture 31---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 31 Repeat
 * @parent ---Picture 31---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 31 Hold
 * @parent ---Picture 31---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 31 Release
 * @parent ---Picture 31---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 32---
 * @default
 *
 * @param Picture 32 Click
 * @parent ---Picture 32---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 32 Repeat
 * @parent ---Picture 32---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 32 Hold
 * @parent ---Picture 32---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 32 Release
 * @parent ---Picture 32---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 33---
 * @default
 *
 * @param Picture 33 Click
 * @parent ---Picture 33---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 33 Repeat
 * @parent ---Picture 33---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 33 Hold
 * @parent ---Picture 33---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 33 Release
 * @parent ---Picture 33---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 34---
 * @default
 *
 * @param Picture 34 Click
 * @parent ---Picture 34---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 34 Repeat
 * @parent ---Picture 34---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 34 Hold
 * @parent ---Picture 34---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 34 Release
 * @parent ---Picture 34---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 35---
 * @default
 *
 * @param Picture 35 Click
 * @parent ---Picture 35---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 35 Repeat
 * @parent ---Picture 35---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 35 Hold
 * @parent ---Picture 35---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 35 Release
 * @parent ---Picture 35---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 36---
 * @default
 *
 * @param Picture 36 Click
 * @parent ---Picture 36---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 36 Repeat
 * @parent ---Picture 36---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 36 Hold
 * @parent ---Picture 36---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 36 Release
 * @parent ---Picture 36---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 37---
 * @default
 *
 * @param Picture 37 Click
 * @parent ---Picture 37---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 37 Repeat
 * @parent ---Picture 37---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 37 Hold
 * @parent ---Picture 37---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 37 Release
 * @parent ---Picture 37---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 38---
 * @default
 *
 * @param Picture 38 Click
 * @parent ---Picture 38---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 38 Repeat
 * @parent ---Picture 38---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 38 Hold
 * @parent ---Picture 38---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 38 Release
 * @parent ---Picture 38---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 39---
 * @default
 *
 * @param Picture 39 Click
 * @parent ---Picture 39---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 39 Repeat
 * @parent ---Picture 39---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 39 Hold
 * @parent ---Picture 39---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 39 Release
 * @parent ---Picture 39---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 40---
 * @default
 *
 * @param Picture 40 Click
 * @parent ---Picture 40---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 40 Repeat
 * @parent ---Picture 40---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 40 Hold
 * @parent ---Picture 40---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 40 Release
 * @parent ---Picture 40---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 41---
 * @default
 *
 * @param Picture 41 Click
 * @parent ---Picture 41---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 41 Repeat
 * @parent ---Picture 41---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 41 Hold
 * @parent ---Picture 41---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 41 Release
 * @parent ---Picture 41---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 42---
 * @default
 *
 * @param Picture 42 Click
 * @parent ---Picture 42---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 42 Repeat
 * @parent ---Picture 42---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 42 Hold
 * @parent ---Picture 42---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 42 Release
 * @parent ---Picture 42---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 43---
 * @default
 *
 * @param Picture 43 Click
 * @parent ---Picture 43---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 43 Repeat
 * @parent ---Picture 43---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 43 Hold
 * @parent ---Picture 43---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 43 Release
 * @parent ---Picture 43---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 44---
 * @default
 *
 * @param Picture 44 Click
 * @parent ---Picture 44---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 44 Repeat
 * @parent ---Picture 44---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 44 Hold
 * @parent ---Picture 44---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 44 Release
 * @parent ---Picture 44---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 45---
 * @default
 *
 * @param Picture 45 Click
 * @parent ---Picture 45---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 45 Repeat
 * @parent ---Picture 45---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 45 Hold
 * @parent ---Picture 45---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 45 Release
 * @parent ---Picture 45---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 46---
 * @default
 *
 * @param Picture 46 Click
 * @parent ---Picture 46---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 46 Repeat
 * @parent ---Picture 46---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 46 Hold
 * @parent ---Picture 46---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 46 Release
 * @parent ---Picture 46---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 47---
 * @default
 *
 * @param Picture 47 Click
 * @parent ---Picture 47---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 47 Repeat
 * @parent ---Picture 47---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 47 Hold
 * @parent ---Picture 47---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 47 Release
 * @parent ---Picture 47---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 48---
 * @default
 *
 * @param Picture 48 Click
 * @parent ---Picture 48---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 48 Repeat
 * @parent ---Picture 48---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 48 Hold
 * @parent ---Picture 48---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 48 Release
 * @parent ---Picture 48---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 49---
 * @default
 *
 * @param Picture 49 Click
 * @parent ---Picture 49---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 49 Repeat
 * @parent ---Picture 49---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 49 Hold
 * @parent ---Picture 49---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 49 Release
 * @parent ---Picture 49---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 50---
 * @default
 *
 * @param Picture 50 Click
 * @parent ---Picture 50---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 50 Repeat
 * @parent ---Picture 50---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 50 Hold
 * @parent ---Picture 50---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 50 Release
 * @parent ---Picture 50---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 51---
 * @default
 *
 * @param Picture 51 Click
 * @parent ---Picture 51---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 51 Repeat
 * @parent ---Picture 51---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 51 Hold
 * @parent ---Picture 51---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 51 Release
 * @parent ---Picture 51---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 52---
 * @default
 *
 * @param Picture 52 Click
 * @parent ---Picture 52---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 52 Repeat
 * @parent ---Picture 52---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 52 Hold
 * @parent ---Picture 52---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 52 Release
 * @parent ---Picture 52---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 53---
 * @default
 *
 * @param Picture 53 Click
 * @parent ---Picture 53---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 53 Repeat
 * @parent ---Picture 53---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 53 Hold
 * @parent ---Picture 53---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 53 Release
 * @parent ---Picture 53---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 54---
 * @default
 *
 * @param Picture 54 Click
 * @parent ---Picture 54---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 54 Repeat
 * @parent ---Picture 54---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 54 Hold
 * @parent ---Picture 54---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 54 Release
 * @parent ---Picture 54---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 55---
 * @default
 *
 * @param Picture 55 Click
 * @parent ---Picture 55---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 55 Repeat
 * @parent ---Picture 55---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 55 Hold
 * @parent ---Picture 55---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 55 Release
 * @parent ---Picture 55---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 56---
 * @default
 *
 * @param Picture 56 Click
 * @parent ---Picture 56---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 56 Repeat
 * @parent ---Picture 56---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 56 Hold
 * @parent ---Picture 56---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 56 Release
 * @parent ---Picture 56---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 57---
 * @default
 *
 * @param Picture 57 Click
 * @parent ---Picture 57---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 57 Repeat
 * @parent ---Picture 57---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 57 Hold
 * @parent ---Picture 57---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 57 Release
 * @parent ---Picture 57---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 58---
 * @default
 *
 * @param Picture 58 Click
 * @parent ---Picture 58---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 58 Repeat
 * @parent ---Picture 58---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 58 Hold
 * @parent ---Picture 58---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 58 Release
 * @parent ---Picture 58---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 59---
 * @default
 *
 * @param Picture 59 Click
 * @parent ---Picture 59---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 59 Repeat
 * @parent ---Picture 59---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 59 Hold
 * @parent ---Picture 59---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 59 Release
 * @parent ---Picture 59---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 60---
 * @default
 *
 * @param Picture 60 Click
 * @parent ---Picture 60---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 60 Repeat
 * @parent ---Picture 60---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 60 Hold
 * @parent ---Picture 60---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 60 Release
 * @parent ---Picture 60---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 61---
 * @default
 *
 * @param Picture 61 Click
 * @parent ---Picture 61---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 61 Repeat
 * @parent ---Picture 61---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 61 Hold
 * @parent ---Picture 61---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 61 Release
 * @parent ---Picture 61---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 62---
 * @default
 *
 * @param Picture 62 Click
 * @parent ---Picture 62---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 62 Repeat
 * @parent ---Picture 62---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 62 Hold
 * @parent ---Picture 62---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 62 Release
 * @parent ---Picture 62---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 63---
 * @default
 *
 * @param Picture 63 Click
 * @parent ---Picture 63---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 63 Repeat
 * @parent ---Picture 63---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 63 Hold
 * @parent ---Picture 63---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 63 Release
 * @parent ---Picture 63---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 64---
 * @default
 *
 * @param Picture 64 Click
 * @parent ---Picture 64---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 64 Repeat
 * @parent ---Picture 64---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 64 Hold
 * @parent ---Picture 64---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 64 Release
 * @parent ---Picture 64---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 65---
 * @default
 *
 * @param Picture 65 Click
 * @parent ---Picture 65---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 65 Repeat
 * @parent ---Picture 65---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 65 Hold
 * @parent ---Picture 65---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 65 Release
 * @parent ---Picture 65---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 66---
 * @default
 *
 * @param Picture 66 Click
 * @parent ---Picture 66---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 66 Repeat
 * @parent ---Picture 66---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 66 Hold
 * @parent ---Picture 66---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 66 Release
 * @parent ---Picture 66---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 67---
 * @default
 *
 * @param Picture 67 Click
 * @parent ---Picture 67---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 67 Repeat
 * @parent ---Picture 67---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 67 Hold
 * @parent ---Picture 67---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 67 Release
 * @parent ---Picture 67---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 68---
 * @default
 *
 * @param Picture 68 Click
 * @parent ---Picture 68---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 68 Repeat
 * @parent ---Picture 68---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 68 Hold
 * @parent ---Picture 68---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 68 Release
 * @parent ---Picture 68---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 69---
 * @default
 *
 * @param Picture 69 Click
 * @parent ---Picture 69---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 69 Repeat
 * @parent ---Picture 69---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 69 Hold
 * @parent ---Picture 69---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 69 Release
 * @parent ---Picture 69---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 70---
 * @default
 *
 * @param Picture 70 Click
 * @parent ---Picture 70---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 70 Repeat
 * @parent ---Picture 70---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 70 Hold
 * @parent ---Picture 70---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 70 Release
 * @parent ---Picture 70---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 71---
 * @default
 *
 * @param Picture 71 Click
 * @parent ---Picture 71---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 71 Repeat
 * @parent ---Picture 71---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 71 Hold
 * @parent ---Picture 71---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 71 Release
 * @parent ---Picture 71---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 72---
 * @default
 *
 * @param Picture 72 Click
 * @parent ---Picture 72---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 72 Repeat
 * @parent ---Picture 72---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 72 Hold
 * @parent ---Picture 72---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 72 Release
 * @parent ---Picture 72---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 73---
 * @default
 *
 * @param Picture 73 Click
 * @parent ---Picture 73---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 73 Repeat
 * @parent ---Picture 73---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 73 Hold
 * @parent ---Picture 73---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 73 Release
 * @parent ---Picture 73---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 74---
 * @default
 *
 * @param Picture 74 Click
 * @parent ---Picture 74---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 74 Repeat
 * @parent ---Picture 74---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 74 Hold
 * @parent ---Picture 74---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 74 Release
 * @parent ---Picture 74---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 75---
 * @default
 *
 * @param Picture 75 Click
 * @parent ---Picture 75---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 75 Repeat
 * @parent ---Picture 75---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 75 Hold
 * @parent ---Picture 75---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 75 Release
 * @parent ---Picture 75---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 76---
 * @default
 *
 * @param Picture 76 Click
 * @parent ---Picture 76---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 76 Repeat
 * @parent ---Picture 76---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 76 Hold
 * @parent ---Picture 76---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 76 Release
 * @parent ---Picture 76---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 77---
 * @default
 *
 * @param Picture 77 Click
 * @parent ---Picture 77---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 77 Repeat
 * @parent ---Picture 77---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 77 Hold
 * @parent ---Picture 77---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 77 Release
 * @parent ---Picture 77---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 78---
 * @default
 *
 * @param Picture 78 Click
 * @parent ---Picture 78---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 78 Repeat
 * @parent ---Picture 78---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 78 Hold
 * @parent ---Picture 78---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 78 Release
 * @parent ---Picture 78---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 79---
 * @default
 *
 * @param Picture 79 Click
 * @parent ---Picture 79---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 79 Repeat
 * @parent ---Picture 79---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 79 Hold
 * @parent ---Picture 79---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 79 Release
 * @parent ---Picture 79---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 80---
 * @default
 *
 * @param Picture 80 Click
 * @parent ---Picture 80---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 80 Repeat
 * @parent ---Picture 80---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 80 Hold
 * @parent ---Picture 80---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 80 Release
 * @parent ---Picture 80---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 81---
 * @default
 *
 * @param Picture 81 Click
 * @parent ---Picture 81---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 81 Repeat
 * @parent ---Picture 81---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 81 Hold
 * @parent ---Picture 81---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 81 Release
 * @parent ---Picture 81---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 82---
 * @default
 *
 * @param Picture 82 Click
 * @parent ---Picture 82---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 82 Repeat
 * @parent ---Picture 82---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 82 Hold
 * @parent ---Picture 82---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 82 Release
 * @parent ---Picture 82---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 83---
 * @default
 *
 * @param Picture 83 Click
 * @parent ---Picture 83---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 83 Repeat
 * @parent ---Picture 83---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 83 Hold
 * @parent ---Picture 83---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 83 Release
 * @parent ---Picture 83---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 84---
 * @default
 *
 * @param Picture 84 Click
 * @parent ---Picture 84---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 84 Repeat
 * @parent ---Picture 84---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 84 Hold
 * @parent ---Picture 84---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 84 Release
 * @parent ---Picture 84---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 85---
 * @default
 *
 * @param Picture 85 Click
 * @parent ---Picture 85---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 85 Repeat
 * @parent ---Picture 85---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 85 Hold
 * @parent ---Picture 85---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 85 Release
 * @parent ---Picture 85---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 86---
 * @default
 *
 * @param Picture 86 Click
 * @parent ---Picture 86---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 86 Repeat
 * @parent ---Picture 86---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 86 Hold
 * @parent ---Picture 86---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 86 Release
 * @parent ---Picture 86---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 87---
 * @default
 *
 * @param Picture 87 Click
 * @parent ---Picture 87---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 87 Repeat
 * @parent ---Picture 87---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 87 Hold
 * @parent ---Picture 87---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 87 Release
 * @parent ---Picture 87---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 88---
 * @default
 *
 * @param Picture 88 Click
 * @parent ---Picture 88---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 88 Repeat
 * @parent ---Picture 88---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 88 Hold
 * @parent ---Picture 88---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 88 Release
 * @parent ---Picture 88---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 89---
 * @default
 *
 * @param Picture 89 Click
 * @parent ---Picture 89---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 89 Repeat
 * @parent ---Picture 89---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 89 Hold
 * @parent ---Picture 89---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 89 Release
 * @parent ---Picture 89---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 90---
 * @default
 *
 * @param Picture 90 Click
 * @parent ---Picture 90---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 90 Repeat
 * @parent ---Picture 90---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 90 Hold
 * @parent ---Picture 90---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 90 Release
 * @parent ---Picture 90---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 91---
 * @default
 *
 * @param Picture 91 Click
 * @parent ---Picture 91---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 91 Repeat
 * @parent ---Picture 91---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 91 Hold
 * @parent ---Picture 91---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 91 Release
 * @parent ---Picture 91---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 92---
 * @default
 *
 * @param Picture 92 Click
 * @parent ---Picture 92---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 92 Repeat
 * @parent ---Picture 92---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 92 Hold
 * @parent ---Picture 92---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 92 Release
 * @parent ---Picture 92---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 93---
 * @default
 *
 * @param Picture 93 Click
 * @parent ---Picture 93---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 93 Repeat
 * @parent ---Picture 93---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 93 Hold
 * @parent ---Picture 93---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 93 Release
 * @parent ---Picture 93---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 94---
 * @default
 *
 * @param Picture 94 Click
 * @parent ---Picture 94---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 94 Repeat
 * @parent ---Picture 94---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 94 Hold
 * @parent ---Picture 94---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 94 Release
 * @parent ---Picture 94---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 95---
 * @default
 *
 * @param Picture 95 Click
 * @parent ---Picture 95---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 95 Repeat
 * @parent ---Picture 95---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 95 Hold
 * @parent ---Picture 95---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 95 Release
 * @parent ---Picture 95---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 96---
 * @default
 *
 * @param Picture 96 Click
 * @parent ---Picture 96---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 96 Repeat
 * @parent ---Picture 96---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 96 Hold
 * @parent ---Picture 96---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 96 Release
 * @parent ---Picture 96---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 97---
 * @default
 *
 * @param Picture 97 Click
 * @parent ---Picture 97---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 97 Repeat
 * @parent ---Picture 97---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 97 Hold
 * @parent ---Picture 97---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 97 Release
 * @parent ---Picture 97---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 98---
 * @default
 *
 * @param Picture 98 Click
 * @parent ---Picture 98---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 98 Repeat
 * @parent ---Picture 98---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 98 Hold
 * @parent ---Picture 98---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 98 Release
 * @parent ---Picture 98---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 99---
 * @default
 *
 * @param Picture 99 Click
 * @parent ---Picture 99---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 99 Repeat
 * @parent ---Picture 99---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 99 Hold
 * @parent ---Picture 99---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 99 Release
 * @parent ---Picture 99---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 100---
 * @default
 *
 * @param Picture 100 Click
 * @parent ---Picture 100---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 100 Repeat
 * @parent ---Picture 100---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 100 Hold
 * @parent ---Picture 100---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 100 Release
 * @parent ---Picture 100---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * * @param ---Picture 101---
 * @default
 *
 * @param Picture 101 Click
 * @parent ---Picture 101---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 101 Repeat
 * @parent ---Picture 101---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 101 Hold
 * @parent ---Picture 101---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 101 Release
 * @parent ---Picture 101---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 *  * * @param ---Picture 102---
 * @default
 *
 * @param Picture 102 Click
 * @parent ---Picture 102---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 102 Repeat
 * @parent ---Picture 102---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 102 Hold
 * @parent ---Picture 102---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 102 Release
 * @parent ---Picture 102---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 103---
 * @default
 *
 * @param Picture 103 Click
 * @parent ---Picture 103---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 103 Repeat
 * @parent ---Picture 103---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 103 Hold
 * @parent ---Picture 103---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 103 Release
 * @parent ---Picture 103---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 104---
 * @default
 *
 * @param Picture 104 Click
 * @parent ---Picture 104---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 104 Repeat
 * @parent ---Picture 104---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 104 Hold
 * @parent ---Picture 104---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 104 Release
 * @parent ---Picture 104---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 105---
 * @default
 *
 * @param Picture 105 Click
 * @parent ---Picture 105---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 105 Repeat
 * @parent ---Picture 105---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 105 Hold
 * @parent ---Picture 105---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 105 Release
 * @parent ---Picture 105---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 106---
 * @default
 *
 * @param Picture 106 Click
 * @parent ---Picture 106---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 106 Repeat
 * @parent ---Picture 106---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 106 Hold
 * @parent ---Picture 106---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 106 Release
 * @parent ---Picture 106---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 107---
 * @default
 *
 * @param Picture 107 Click
 * @parent ---Picture 107---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 107 Repeat
 * @parent ---Picture 107---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 107 Hold
 * @parent ---Picture 107---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 107 Release
 * @parent ---Picture 107---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 108---
 * @default
 *
 * @param Picture 108 Click
 * @parent ---Picture 108---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 108 Repeat
 * @parent ---Picture 108---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 108 Hold
 * @parent ---Picture 108---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 108 Release
 * @parent ---Picture 108---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 109---
 * @default
 *
 * @param Picture 109 Click
 * @parent ---Picture 109---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 109 Repeat
 * @parent ---Picture 109---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 109 Hold
 * @parent ---Picture 109---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 109 Release
 * @parent ---Picture 109---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 110---
 * @default
 *
 * @param Picture 110 Click
 * @parent ---Picture 110---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 110 Repeat
 * @parent ---Picture 110---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 110 Hold
 * @parent ---Picture 110---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 110 Release
 * @parent ---Picture 110---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 111---
 * @default
 *
 * @param Picture 111 Click
 * @parent ---Picture 111---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 111 Repeat
 * @parent ---Picture 111---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 111 Hold
 * @parent ---Picture 111---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 111 Release
 * @parent ---Picture 111---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 112---
 * @default
 *
 * @param Picture 112 Click
 * @parent ---Picture 112---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 112 Repeat
 * @parent ---Picture 112---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 112 Hold
 * @parent ---Picture 112---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 112 Release
 * @parent ---Picture 112---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 113---
 * @default
 *
 * @param Picture 113 Click
 * @parent ---Picture 113---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 113 Repeat
 * @parent ---Picture 113---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 113 Hold
 * @parent ---Picture 113---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 113 Release
 * @parent ---Picture 113---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  * * @param ---Picture 114---
 * @default
 *
 * @param Picture 114 Click
 * @parent ---Picture 114---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 114 Repeat
 * @parent ---Picture 114---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 114 Hold
 * @parent ---Picture 114---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 114 Release
 * @parent ---Picture 114---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 115---
 * @default
 *
 * @param Picture 115 Click
 * @parent ---Picture 115---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 115 Repeat
 * @parent ---Picture 115---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 115 Hold
 * @parent ---Picture 115---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 115 Release
 * @parent ---Picture 115---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 116---
 * @default
 *
 * @param Picture 116 Click
 * @parent ---Picture 116---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 116 Repeat
 * @parent ---Picture 116---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 116 Hold
 * @parent ---Picture 116---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 116 Release
 * @parent ---Picture 116---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0 
 * 
 *  *  * * @param ---Picture 117---
 * @default
 *
 * @param Picture 117 Click
 * @parent ---Picture 117---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 117 Repeat
 * @parent ---Picture 117---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 117 Hold
 * @parent ---Picture 117---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 117 Release
 * @parent ---Picture 117---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 118---
 * @default
 *
 * @param Picture 118 Click
 * @parent ---Picture 118---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 118 Repeat
 * @parent ---Picture 118---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 118 Hold
 * @parent ---Picture 118---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 118 Release
 * @parent ---Picture 118---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 119---
 * @default
 *
 * @param Picture 119 Click
 * @parent ---Picture 119---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 119 Repeat
 * @parent ---Picture 119---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 119 Hold
 * @parent ---Picture 119---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 119 Release
 * @parent ---Picture 119---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 120---
 * @default
 *
 * @param Picture 120 Click
 * @parent ---Picture 120---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 120 Repeat
 * @parent ---Picture 120---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 120 Hold
 * @parent ---Picture 120---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 120 Release
 * @parent ---Picture 120---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 121---
 * @default
 *
 * @param Picture 121 Click
 * @parent ---Picture 121---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 121 Repeat
 * @parent ---Picture 121---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 121 Hold
 * @parent ---Picture 121---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 121 Release
 * @parent ---Picture 121---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 122---
 * @default
 *
 * @param Picture 122 Click
 * @parent ---Picture 122---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 122 Repeat
 * @parent ---Picture 122---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 122 Hold
 * @parent ---Picture 122---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 122 Release
 * @parent ---Picture 122---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 123---
 * @default
 *
 * @param Picture 123 Click
 * @parent ---Picture 123---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 123 Repeat
 * @parent ---Picture 123---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 123 Hold
 * @parent ---Picture 123---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 123 Release
 * @parent ---Picture 123---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 124---
 * @default
 *
 * @param Picture 124 Click
 * @parent ---Picture 124---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 124 Repeat
 * @parent ---Picture 124---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 124 Hold
 * @parent ---Picture 124---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 124 Release
 * @parent ---Picture 124---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 125---
 * @default
 *
 * @param Picture 125 Click
 * @parent ---Picture 125---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 125 Repeat
 * @parent ---Picture 125---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 125 Hold
 * @parent ---Picture 125---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 125 Release
 * @parent ---Picture 125---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 126---
 * @default
 *
 * @param Picture 126 Click
 * @parent ---Picture 126---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 126 Repeat
 * @parent ---Picture 126---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 126 Hold
 * @parent ---Picture 126---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 126 Release
 * @parent ---Picture 126---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 127---
 * @default
 *
 * @param Picture 127 Click
 * @parent ---Picture 127---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 127 Repeat
 * @parent ---Picture 127---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 127 Hold
 * @parent ---Picture 127---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 127 Release
 * @parent ---Picture 127---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 128---
 * @default
 *
 * @param Picture 128 Click
 * @parent ---Picture 128---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 128 Repeat
 * @parent ---Picture 128---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 128 Hold
 * @parent ---Picture 128---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 128 Release
 * @parent ---Picture 128---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 129---
 * @default
 *
 * @param Picture 129 Click
 * @parent ---Picture 129---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 129 Repeat
 * @parent ---Picture 129---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 129 Hold
 * @parent ---Picture 129---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 129 Release
 * @parent ---Picture 129---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 130---
 * @default
 *
 * @param Picture 130 Click
 * @parent ---Picture 130---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 130 Repeat
 * @parent ---Picture 130---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 130 Hold
 * @parent ---Picture 130---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 130 Release
 * @parent ---Picture 130---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 131---
 * @default
 *
 * @param Picture 131 Click
 * @parent ---Picture 131---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 131 Repeat
 * @parent ---Picture 131---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 131 Hold
 * @parent ---Picture 131---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 131 Release
 * @parent ---Picture 131---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 132---
 * @default
 *
 * @param Picture 132 Click
 * @parent ---Picture 132---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 132 Repeat
 * @parent ---Picture 132---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 132 Hold
 * @parent ---Picture 132---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 132 Release
 * @parent ---Picture 132---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 133---
 * @default
 *
 * @param Picture 133 Click
 * @parent ---Picture 133---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 133 Repeat
 * @parent ---Picture 133---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 133 Hold
 * @parent ---Picture 133---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 133 Release
 * @parent ---Picture 133---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  * * @param ---Picture 134---
 * @default
 *
 * @param Picture 134 Click
 * @parent ---Picture 134---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 134 Repeat
 * @parent ---Picture 134---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 134 Hold
 * @parent ---Picture 134---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 134 Release
 * @parent ---Picture 134---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  *  * * @param ---Picture 135---
 * @default
 *
 * @param Picture 135 Click
 * @parent ---Picture 135---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 135 Repeat
 * @parent ---Picture 135---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 135 Hold
 * @parent ---Picture 135---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 135 Release
 * @parent ---Picture 135---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 *  *  *  * * @param ---Picture 136---
 * @default
 *
 * @param Picture 136 Click
 * @parent ---Picture 136---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 136 Repeat
 * @parent ---Picture 136---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 136 Hold
 * @parent ---Picture 136---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 136 Release
 * @parent ---Picture 136---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
    @param ---Picture 137---
 * @default
 *
 * @param Picture 137 Click
 * @parent ---Picture 137---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 137 Repeat
 * @parent ---Picture 137---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 137 Hold
 * @parent ---Picture 137---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 137 Release
 * @parent ---Picture 137---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 138---
 * @default
 *
 * @param Picture 138 Click
 * @parent ---Picture 138---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 138 Repeat
 * @parent ---Picture 138---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 138 Hold
 * @parent ---Picture 138---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 138 Release
 * @parent ---Picture 138---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 139---
 * @default
 *
 * @param Picture 139 Click
 * @parent ---Picture 139---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 139 Repeat
 * @parent ---Picture 139---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 139 Hold
 * @parent ---Picture 139---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 139 Release
 * @parent ---Picture 139---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * @help
 * 
 * @param ---Picture 140---
 * @default
 *
 * @param Picture 140 Click
 * @parent ---Picture 140---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 140 Repeat
 * @parent ---Picture 140---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 140 Hold
 * @parent ---Picture 140---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 140 Release
 * @parent ---Picture 140---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 141---
 * @default
 *
 * @param Picture 141 Click
 * @parent ---Picture 141---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 141 Repeat
 * @parent ---Picture 141---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 141 Hold
 * @parent ---Picture 141---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 141 Release
 * @parent ---Picture 141---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * * @param ---Picture 142---
 * @default
 *
 * @param Picture 142 Click
 * @parent ---Picture 142---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 142 Repeat
 * @parent ---Picture 142---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 142 Hold
 * @parent ---Picture 142---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 142 Release
 * @parent ---Picture 142---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 143---
 * @default
 *
 * @param Picture 143 Click
 * @parent ---Picture 143---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 143 Repeat
 * @parent ---Picture 143---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 143 Hold
 * @parent ---Picture 143---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 143 Release
 * @parent ---Picture 143---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 144---
 * @default
 *
 * @param Picture 144 Click
 * @parent ---Picture 144---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 144 Repeat
 * @parent ---Picture 144---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 144 Hold
 * @parent ---Picture 144---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 144 Release
 * @parent ---Picture 144---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 145---
 * @default
 *
 * @param Picture 145 Click
 * @parent ---Picture 145---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 145 Repeat
 * @parent ---Picture 145---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 145 Hold
 * @parent ---Picture 145---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 145 Release
 * @parent ---Picture 145---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 146---
 * @default
 *
 * @param Picture 146 Click
 * @parent ---Picture 146---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 146 Repeat
 * @parent ---Picture 146---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 146 Hold
 * @parent ---Picture 146---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 146 Release
 * @parent ---Picture 146---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 147---
 * @default
 *
 * @param Picture 147 Click
 * @parent ---Picture 147---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 147 Repeat
 * @parent ---Picture 147---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 147 Hold
 * @parent ---Picture 147---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 147 Release
 * @parent ---Picture 147---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 148---
 * @default
 *
 * @param Picture 148 Click
 * @parent ---Picture 148---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 148 Repeat
 * @parent ---Picture 148---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 148 Hold
 * @parent ---Picture 148---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 148 Release
 * @parent ---Picture 148---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 149---
 * @default
 *
 * @param Picture 149 Click
 * @parent ---Picture 149---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 149 Repeat
 * @parent ---Picture 149---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 149 Hold
 * @parent ---Picture 149---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 149 Release
 * @parent ---Picture 149---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 150---
 * @default
 *
 * @param Picture 150 Click
 * @parent ---Picture 150---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 150 Repeat
 * @parent ---Picture 150---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 150 Hold
 * @parent ---Picture 150---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 150 Release
 * @parent ---Picture 150---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 151---
 * @default
 *
 * @param Picture 151 Click
 * @parent ---Picture 151---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 151 Repeat
 * @parent ---Picture 151---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 151 Hold
 * @parent ---Picture 151---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 151 Release
 * @parent ---Picture 151---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 152---
 * @default
 *
 * @param Picture 152 Click
 * @parent ---Picture 152---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 152 Repeat
 * @parent ---Picture 152---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 152 Hold
 * @parent ---Picture 152---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 152 Release
 * @parent ---Picture 152---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 153---
 * @default
 *
 * @param Picture 153 Click
 * @parent ---Picture 153---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 153 Repeat
 * @parent ---Picture 153---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 153 Hold
 * @parent ---Picture 153---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 153 Release
 * @parent ---Picture 153---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 154---
 * @default
 *
 * @param Picture 154 Click
 * @parent ---Picture 154---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 154 Repeat
 * @parent ---Picture 154---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 154 Hold
 * @parent ---Picture 154---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 154 Release
 * @parent ---Picture 154---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 155---
 * @default
 *
 * @param Picture 155 Click
 * @parent ---Picture 155---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 155 Repeat
 * @parent ---Picture 155---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 155 Hold
 * @parent ---Picture 155---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 155 Release
 * @parent ---Picture 155---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 156---
 * @default
 *
 * @param Picture 156 Click
 * @parent ---Picture 156---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 156 Repeat
 * @parent ---Picture 156---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 156 Hold
 * @parent ---Picture 156---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 156 Release
 * @parent ---Picture 156---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 157---
 * @default
 *
 * @param Picture 157 Click
 * @parent ---Picture 157---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 157 Repeat
 * @parent ---Picture 157---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 157 Hold
 * @parent ---Picture 157---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 157 Release
 * @parent ---Picture 157---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 158---
 * @default
 *
 * @param Picture 158 Click
 * @parent ---Picture 158---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 158 Repeat
 * @parent ---Picture 158---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 158 Hold
 * @parent ---Picture 158---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 158 Release
 * @parent ---Picture 158---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 159---
 * @default
 *
 * @param Picture 159 Click
 * @parent ---Picture 159---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 159 Repeat
 * @parent ---Picture 159---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 159 Hold
 * @parent ---Picture 159---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 159 Release
 * @parent ---Picture 159---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 160---
 * @default
 *
 * @param Picture 160 Click
 * @parent ---Picture 160---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 160 Repeat
 * @parent ---Picture 160---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 160 Hold
 * @parent ---Picture 160---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 160 Release
 * @parent ---Picture 160---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 161---
 * @default
 *
 * @param Picture 161 Click
 * @parent ---Picture 161---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 161 Repeat
 * @parent ---Picture 161---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 161 Hold
 * @parent ---Picture 161---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 161 Release
 * @parent ---Picture 161---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 162---
 * @default
 *
 * @param Picture 162 Click
 * @parent ---Picture 162---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 162 Repeat
 * @parent ---Picture 162---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 162 Hold
 * @parent ---Picture 162---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 163 Release
 * @parent ---Picture 163---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 163---
 * @default
 *
 * @param Picture 163 Click
 * @parent ---Picture 163---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 163 Repeat
 * @parent ---Picture 163---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 163 Hold
 * @parent ---Picture 163---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 163 Release
 * @parent ---Picture 163---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 164---
 * @default
 *
 * @param Picture 164 Click
 * @parent ---Picture 164---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 164 Repeat
 * @parent ---Picture 164---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 164 Hold
 * @parent ---Picture 164---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 164 Release
 * @parent ---Picture 164---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 165---
 * @default
 *
 * @param Picture 165 Click
 * @parent ---Picture 165---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 165 Repeat
 * @parent ---Picture 165---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 165 Hold
 * @parent ---Picture 165---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 165 Release
 * @parent ---Picture 165---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 166---
 * @default
 *
 * @param Picture 166 Click
 * @parent ---Picture 166---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 166 Repeat
 * @parent ---Picture 166---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 166 Hold
 * @parent ---Picture 166---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 166 Release
 * @parent ---Picture 166---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 167---
 * @default
 *
 * @param Picture 167 Click
 * @parent ---Picture 167---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 167 Repeat
 * @parent ---Picture 167---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 167 Hold
 * @parent ---Picture 167---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 167 Release
 * @parent ---Picture 167---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 168---
 * @default
 * 
 * @param Picture 168 Click
 * @parent ---Picture 168---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 168 Repeat
 * @parent ---Picture 168---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 168 Hold
 * @parent ---Picture 168---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 168 Release
 * @parent ---Picture 168---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 169---
 * @default
 *
 * @param Picture 169 Click
 * @parent ---Picture 169---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 169 Repeat
 * @parent ---Picture 169---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 169 Hold
 * @parent ---Picture 169---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 169 Release
 * @parent ---Picture 169---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 170---
 * @default
 *
 * @param Picture 170 Click
 * @parent ---Picture 170---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 170 Repeat
 * @parent ---Picture 170---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 170 Hold
 * @parent ---Picture 170---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 170 Release
 * @parent ---Picture 170---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 171---
 * @default
 *
 * @param Picture 171 Click
 * @parent ---Picture 171---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 171 Repeat
 * @parent ---Picture 171---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 171 Hold
 * @parent ---Picture 171---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 171 Release
 * @parent ---Picture 171---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 172---
 * @default
 *
 * @param Picture 172 Click
 * @parent ---Picture 172---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 172 Repeat
 * @parent ---Picture 172---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 172 Hold
 * @parent ---Picture 172---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 172 Release
 * @parent ---Picture 172---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 173---
 * @default
 *
 * @param Picture 173 Click
 * @parent ---Picture 173---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 173 Repeat
 * @parent ---Picture 173---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 173 Hold
 * @parent ---Picture 173---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 173 Release
 * @parent ---Picture 173---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 174---
 * @default
 *
 * @param Picture 174 Click
 * @parent ---Picture 174---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 174 Repeat
 * @parent ---Picture 174---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 174 Hold
 * @parent ---Picture 174---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 174 Release
 * @parent ---Picture 174---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 175---
 * @default
 *
 * @param Picture 175 Click
 * @parent ---Picture 175---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 175 Repeat
 * @parent ---Picture 175---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 175 Hold
 * @parent ---Picture 175---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 175 Release
 * @parent ---Picture 175---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 176---
 * @default
 *
 * @param Picture 176 Click
 * @parent ---Picture 176---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 176 Repeat
 * @parent ---Picture 176---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 176 Hold
 * @parent ---Picture 176---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 176 Release
 * @parent ---Picture 176---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 177---
 * @default
 *
 * @param Picture 177 Click
 * @parent ---Picture 177---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 177 Repeat
 * @parent ---Picture 177---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 177 Hold
 * @parent ---Picture 177---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 177 Release
 * @parent ---Picture 177---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 178---
 * @default
 *
 * @param Picture 178 Click
 * @parent ---Picture 178---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 178 Repeat
 * @parent ---Picture 178---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 178 Hold
 * @parent ---Picture 178---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 178 Release
 * @parent ---Picture 178---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 179---
 * @default
 *
 * @param Picture 179 Click
 * @parent ---Picture 179---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 179 Repeat
 * @parent ---Picture 179---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 179 Hold
 * @parent ---Picture 179---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 179 Release
 * @parent ---Picture 179---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 180---
 * @default
 *
 * @param Picture 180 Click
 * @parent ---Picture 180---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 180 Repeat
 * @parent ---Picture 180---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 180 Hold
 * @parent ---Picture 180---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 180 Release
 * @parent ---Picture 180---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 181---
 * @default
 *
 * @param Picture 181 Click
 * @parent ---Picture 181---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 181 Repeat
 * @parent ---Picture 181---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 181 Hold
 * @parent ---Picture 181---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 181 Release
 * @parent ---Picture 181---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 182---
 * @default
 *
 * @param Picture 182 Click
 * @parent ---Picture 182---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 182 Repeat
 * @parent ---Picture 182---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 182 Hold
 * @parent ---Picture 182---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 182 Release
 * @parent ---Picture 182---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 183---
 * @default
 *
 * @param Picture 183 Click
 * @parent ---Picture 183---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 183 Repeat
 * @parent ---Picture 183---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 183 Hold
 * @parent ---Picture 183---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 183 Release
 * @parent ---Picture 183---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 184---
 * @default
 *
 * @param Picture 184 Click
 * @parent ---Picture 184---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 184 Repeat
 * @parent ---Picture 184---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 184 Hold
 * @parent ---Picture 184---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 184 Release
 * @parent ---Picture 184---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 185---
 * @default
 *
 * @param Picture 185 Click
 * @parent ---Picture 185---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 185 Repeat
 * @parent ---Picture 185---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 185 Hold
 * @parent ---Picture 185---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 185 Release
 * @parent ---Picture 185---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 186---
 * @default
 *
 * @param Picture 186 Click
 * @parent ---Picture 186---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 186 Repeat
 * @parent ---Picture 186---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 186 Hold
 * @parent ---Picture 186---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 186 Release
 * @parent ---Picture 186---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 187---
 * @default
 *
 * @param Picture 187 Click
 * @parent ---Picture 187---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 187 Repeat
 * @parent ---Picture 187---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 187 Hold
 * @parent ---Picture 187---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 187 Release
 * @parent ---Picture 187---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 188---
 * @default
 *
 * @param Picture 188 Click
 * @parent ---Picture 188---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 188 Repeat
 * @parent ---Picture 188---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 188 Hold
 * @parent ---Picture 188---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 188 Release
 * @parent ---Picture 188---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 189---
 * @default
 *
 * @param Picture 189 Click
 * @parent ---Picture 189---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 189 Repeat
 * @parent ---Picture 189---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 189 Hold
 * @parent ---Picture 189---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 189 Release
 * @parent ---Picture 189---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 190---
 * @default
 *
 * @param Picture 190 Click
 * @parent ---Picture 190---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 190 Repeat
 * @parent ---Picture 190---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 190 Hold
 * @parent ---Picture 190---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 190 Release
 * @parent ---Picture 190---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 191---
 * @default
 *
 * @param Picture 191 Click
 * @parent ---Picture 191---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 191 Repeat
 * @parent ---Picture 191---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 191 Hold
 * @parent ---Picture 191---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 191 Release
 * @parent ---Picture 191---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 192---
 * @default
 *
 * @param Picture 192 Click
 * @parent ---Picture 192---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 192 Repeat
 * @parent ---Picture 192---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 192 Hold
 * @parent ---Picture 192---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 192 Release
 * @parent ---Picture 192---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 193---
 * @default
 *
 * @param Picture 193 Click
 * @parent ---Picture 193---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 193 Repeat
 * @parent ---Picture 193---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 193 Hold
 * @parent ---Picture 193---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 193 Release
 * @parent ---Picture 193---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 194---
 * @default
 *
 * @param Picture 194 Click
 * @parent ---Picture 194---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 194 Repeat
 * @parent ---Picture 194---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 194 Hold
 * @parent ---Picture 194---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 194 Release
 * @parent ---Picture 194---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 195---
 * @default
 *
 * @param Picture 195 Click
 * @parent ---Picture 195---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 195 Repeat
 * @parent ---Picture 195---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 195 Hold
 * @parent ---Picture 195---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 195 Release
 * @parent ---Picture 195---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 196---
 * @default
 *
 * @param Picture 196 Click
 * @parent ---Picture 196---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 196 Repeat
 * @parent ---Picture 196---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 196 Hold
 * @parent ---Picture 196---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 196 Release
 * @parent ---Picture 196---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 197---
 * @default
 *
 * @param Picture 197 Click
 * @parent ---Picture 197---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 197 Repeat
 * @parent ---Picture 197---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 197 Hold
 * @parent ---Picture 197---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 197 Release
 * @parent ---Picture 197---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 198---
 * @default
 *
 * @param Picture 198 Click
 * @parent ---Picture 198---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 198 Repeat
 * @parent ---Picture 198---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 198 Hold
 * @parent ---Picture 198---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 198 Release
 * @parent ---Picture 198---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 199---
 * @default
 *
 * @param Picture 199 Click
 * @parent ---Picture 199---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 199 Repeat
 * @parent ---Picture 199---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 199 Hold
 * @parent ---Picture 199---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 199 Release
 * @parent ---Picture 199---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 200---
 * @default
 *
 * @param Picture 200 Click
 * @parent ---Picture 200---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 200 Repeat
 * @parent ---Picture 200---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 200 Hold
 * @parent ---Picture 200---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 200 Release
 * @parent ---Picture 200---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 201---
 * @default
 *
 * @param Picture 201 Click
 * @parent ---Picture 201---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 201 Repeat
 * @parent ---Picture 201---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 201 Hold
 * @parent ---Picture 201---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 201 Release
 * @parent ---Picture 201---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 202---
 * @default
 *
 * @param Picture 202 Click
 * @parent ---Picture 202---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 202 Repeat
 * @parent ---Picture 202---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 202 Hold
 * @parent ---Picture 202---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 202 Release
 * @parent ---Picture 202---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 203---
 * @default
 *
 * @param Picture 203 Click
 * @parent ---Picture 203---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 203 Repeat
 * @parent ---Picture 203---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 203 Hold
 * @parent ---Picture 203---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 203 Release
 * @parent ---Picture 203---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * 
 * @param ---Picture 204---
 * @default
 *
 * @param Picture 204 Click
 * @parent ---Picture 204---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 204 Repeat
 * @parent ---Picture 204---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 204 Hold
 * @parent ---Picture 204---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 204 Release
 * @parent ---Picture 204---
 * @type common_event
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Pictures can function as something other than just a visual for your game.
 * They can sometimes serve as UI elements or more! However, what they don't
 * have the ability to inherently do is to call upon common events when clicked
 * on by the mouse. With this plugin, the pictures bound to a common event will
 * become usable when clicked or touched!
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the plugin's parameters, you can set common event ID's to each picture ID
 * listed from 1 to 100 (max number of pictures used in RPG Maker MV is 100).
 * If the picture is has even a value of 1 opacity, that picture can be used
 * for a common event. There are four condition types that can be bound with
 * the common events:
 *
 * ---
 *
 * - CLICK -
 * If the picture is clicked upon, this will prompt the common event to trigger
 * if the common event value listed is above 0. This will trigger only once
 * until the player releases the mouse (or stops touching the screen).
 *
 * - REPEAT -
 * If the mouse is clicked and then held (or if the touch screen is pushed and
 * held), as long as the mouse is above the picture area and the common event
 * value listed is above 0, then this will trigger once every 6 frames until
 * the player releases the mouse (or stops touching the screen) or moves the
 * mouse outside of the picture boundaries.
 *
 * - HOLD -
 * If the mouse is clicked and then held (or if the touch screen is pushed and
 * held), as long as the mouse is above the picture area and the common event
 * value listed is above 0, then this will trigger every frame until the player
 * releases the mouse (or stops touching the screen) or moves the mouse outside
 * of the picture boundaries.
 *
 * - RELEASE -
 * Upon releasing the clicked mouse (or the moment the player stops touching
 * the screen) and releases the mouse above this picture and if the picture's
 * common event value listed is above 0, then this will trigger upon release.
 *
 * ---
 * 
 * Note that there are some behavioral changes in regards to pictures bound to
 * that of common events. Any picture that's bound to a common event will be
 * separate from the map's spriteset, and instead, bound to the scene. This is
 * so that in the event the screen is scrolled, zoomed in, shakes, etc., it
 * will NOT affect the bound pictures.
 *
 * This is because the pictures are generally to be used as UI elements and UI
 * elements best work under the practice that they do not change position.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are some plugin commands you can use should you want to add a
 * bit of control with the Picture Common Events.
 *
 * Plugin Command
 *
 *   EnableTouchMove
 *   DisableTouchMove
 *   - Allows the player to press a destination on the screen and move there or
 *   disables the player from using touch movement.
 *   
 *   HidePictureCommonEvents
 *   ShowPictureCommonEvents
 *   - Manually hide all pictures bound to common events or show them. If shown
 *   then pictures will return to their previous opacity value. Hidden pictures
 *   cannot be triggered to activate common events.
 *
 *   MovePlayer Down
 *   MovePlayer Left
 *   MovePlayer Right
 *   MovePlayer Up
 *   - Will cause the player character to move as if moving by using a 4-dir
 *   input (either via keyboard or controller). This is best used with 'Press'.
 *
 *   TriggerButton Ok
 *   TriggerButton Cancel
 *   TriggerButton Dash
 *   TriggerButton PageUp
 *   TriggerButton PageDown
 *   TriggerButton Left
 *   TriggerButton Up
 *   TriggerButton Right
 *   TriggerButton Down
 *   - This will cause the game to simulate triggering the button command of
 *   one of those original functions even if there is a common event bound to
 *   all of the keys of that original function.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.06:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.05:
 * - Added bug fixes found by Splendith:
 * - Bug fixed for events that allow the player to move immediately after
 * pressing the picture common event.
 * - Bug fixed for 'HidePictureCommonEvents' and 'ShowPictureCommonEvents'
 * plugin command that caused normal pictures to hide/show, too.
 *
 * Version 1.04:
 * - Fixed a bug that caused the 'HidePictureCommonEvents' plugin command to
 * not function properly.
 *
 * Version 1.03:
 * - Disabling Touch Move now also disables the Right Click button and
 * on-screen Two Finger tap to prevent random menu calls.
 *
 * Version 1.02:
 * - Fixed a bug that prevented the MovePlayer commands from working without a
 * dependency on the YEP_RegionEvents plugin.
 *
 * Version 1.01:
 * - Changed this plugin's Imported setting to YEP_PictureCommonEvents.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.makePictureCommonEventSettings = function(a, b) {
    Yanfly.PCE.Trigger = [null];
    Yanfly.PCE.Repeated = [null];
    Yanfly.PCE.Pressed = [null];
    Yanfly.PCE.Released = [null];
    for (var i = a; i < b + 1; ++i) {
      var param = 'Picture ' + i + ' Click';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Trigger.push(value);
      var param = 'Picture ' + i + ' Repeat';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Repeated.push(value);
      var param = 'Picture ' + i + ' Hold';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Pressed.push(value);
      var param = 'Picture ' + i + ' Release';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Released.push(value);
    }
};

Yanfly.Parameters = PluginManager.parameters('YEP_PictureCommonEvents');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.PCEMove = eval(String(Yanfly.Parameters['Enable Touch Move']));
Yanfly.Param.PCEHideMsg = eval(String(Yanfly.Parameters['Hide Message']));

Yanfly.makePictureCommonEventSettings(1, 300);

//=============================================================================
// Game_System
//=============================================================================

Yanfly.PCE.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.PCE.Game_System_initialize.call(this);
    this.initPCESettings();
};

Game_System.prototype.initPCESettings = function() {
    this._touchMovement = Yanfly.Param.PCEMove;
    this._hidePceMsg = Yanfly.Param.PCEHideMsg;
    this._hidePceAll = false;
};

Game_System.prototype.isTouchMoveEnabled = function() {
    if (this._touchMovement === undefined) this.initPCESettings();
    return this._touchMovement;
};

Game_System.prototype.setTouchMoveEnabled = function(value) {
    if (this._touchMovement === undefined) this.initPCESettings();
    this._touchMovement = value;
};

Game_System.prototype.isPictureHiddenDuringMessage = function() {
    if (this._hidePceMsg === undefined) this.initPCESettings();
    return this._hidePceMsg;
};

Game_System.prototype.setPictureHiddenDuringMessage = function(value) {
    if (this._hidePceMsg === undefined) this.initPCESettings();
    this._hidePceMsg = value;
};

Game_System.prototype.isPictureHidden = function() {
    if (this._hidePceAll === undefined) this.initPCESettings();
    return this._hidePceAll;
};

Game_System.prototype.setPictureHidden = function(value) {
    if (this._hidePceAll === undefined) this.initPCESettings();
    this._hidePceAll = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.PCE.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.PCE.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'EnableTouchMove') {
      $gameSystem.setTouchMoveEnabled(true);
    } else if (command === 'DisableTouchMove') {
      $gameSystem.setTouchMoveEnabled(false);
    } else if (command === 'MovePlayer') {
      this.pictureCommonEventsMove(args);
    } else if (command === 'HidePictureCommonEvents') {
      $gameSystem.setPictureHidden(true);
    } else if (command === 'ShowPictureCommonEvents') {
      $gameSystem.setPictureHidden(false);
    } else if (command === 'TriggerButton') {
      this.triggerButton(args)
    }
};

Game_Interpreter.prototype.pictureCommonEventsMove = function(args) {
    var dir = args[0];
    if (dir.match(/down/i)) {
      $gamePlayer.moveByPictureCommonEvent(2);
    } else if (dir.match(/left/i)) {
      $gamePlayer.moveByPictureCommonEvent(4);
    } else if (dir.match(/right/i)) {
      $gamePlayer.moveByPictureCommonEvent(6);
    } else if (dir.match(/up/i)) {
      $gamePlayer.moveByPictureCommonEvent(8);
    }
};

Game_Interpreter.prototype.triggerButton = function(args) {
  if (!args) return;
  var button = args[0].toLowerCase();
  if (button === 'cancel') button = 'escape';
  if (button === 'dash') button = 'shift';
  Input._latestButton = button;
  Input._pressedTime = 0;
};

//=============================================================================
// Game_Player
//=============================================================================

Game_Player.prototype.moveByPictureCommonEvent = function(direction) {
    if (!this.isMoving() && this.canMove() && direction > 0) {
      Input._dir4 = direction;
    }
};

Yanfly.PCE.Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
    if ($gameMap.isEventRunning() && $gameMap.moveAfterCommonEvent()) {
      return true;
    }
    return Yanfly.PCE.Game_Player_canMove.call(this);
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.PCE.Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
Game_Map.prototype.isEventRunning = function() {
    if ($gameTemp._commonEventId > 0) return true;
    return Yanfly.PCE.Game_Map_isEventRunning.call(this);
};

Game_Map.prototype.moveAfterCommonEvent = function() {
    var interpreter = $gameMap._interpreter;
    if (!interpreter._list) return false;
    if (interpreter.eventId() > 0) return false;
    var list = interpreter._list;
    if ($gameTemp.destinationX() === $gamePlayer.x &&
      $gameTemp.destinationY() === $gamePlayer.y) {
        $gameTemp.clearDestination();
    }
    for (var i = 0; i < list.length; ++i) {
      var code = list[i].code;
      var exceptionCodes = [];
      exceptionCodes.push(101, 102, 103, 104, 105);
      exceptionCodes.push(201, 205, 230, 232, 261);
      exceptionCodes.push(301);
      if (exceptionCodes.contains(code)) return false;
    }
    return true;
};

//=============================================================================
// Game_Picture
//=============================================================================

Game_Picture.prototype.isTriggered = function() {
    if (!SceneManager._scene instanceof Scene_Map) return false;
    if (this.opacity() <= 0) return false;
    var sp = SceneManager._scene.getPictureSprite(this);
    if (!sp) return false;
    var mx = this.getLocalTouchInputX();
    var my = this.getLocalTouchInputY();
    //console.log('click: ' + mx + ', ' + my);
    var rect = this.getSpriteRect(sp);
    return mx >= rect.x &&
           my >= rect.y &&
           mx < (rect.x + rect.width) &&
           my < (rect.y + rect.height);
};

Game_Picture.prototype.pictureId = function() {
    return $gameScreen._pictures.indexOf(this);
};

Game_Picture.prototype.getLocalTouchInputX = function() {
    value = TouchInput.x;
    return value;
};

Game_Picture.prototype.getLocalTouchInputY = function() {
    value = TouchInput.y;
    return value;
};

Game_Picture.prototype.getSpriteRect = function(sp) {
    var width = sp.width * Math.abs(sp.scale.x);
    var height = sp.height * Math.abs(sp.scale.y);
    var x = sp.x - (sp.anchor.x * width);
    var y = sp.y - (sp.anchor.y * height);
    if (sp.anchor.x === 0 && sp.scale.x < 0) x += sp.width * sp.scale.x;
    if (sp.anchor.y === 0 && sp.scale.y < 0) y += sp.height * sp.scale.y;
    //console.log('rect: ' + x + ', ' + y + ', ' + width + ', ' + height);
    return new Rectangle(x, y, width, height);
};

Game_Picture.prototype.isRelatedPictureCommonEvent = function() {
    $gameTemp._pictureCommonEvents = $gameTemp._pictureCommonEvents || [];
    if ($gameTemp._pictureCommonEvents[this.pictureId()]) {
      return $gameTemp._pictureCommonEvents[this.pictureId()];
    }
    if (Yanfly.PCE.Trigger[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Repeated[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Pressed[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Released[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else {
      $gameTemp._pictureCommonEvents[this.pictureId()] = false;
    }
    return $gameTemp._pictureCommonEvents[this.pictureId()];
};

Yanfly.PCE.Game_Picture_opacity = Game_Picture.prototype.opacity;
Game_Picture.prototype.opacity = function() {
  if (this.isRelatedPictureCommonEvent()) {
    if ($gameSystem.isPictureHidden()) return 0;
    if ($gameMessage.isBusy() && $gameSystem.isPictureHiddenDuringMessage()) {
      return 0;
    }
  }
  return Yanfly.PCE.Game_Picture_opacity.call(this);
};

//=============================================================================
// Spriteset_Base
//=============================================================================

Yanfly.PCE.Spriteset_Base_createPictures =
    Spriteset_Base.prototype.createPictures;
Spriteset_Base.prototype.createPictures = function() {
    var scene = SceneManager._scene;
    if (scene instanceof Scene_Map) {
      this.createSceneMapPictures();
    } else {
      Yanfly.PCE.Spriteset_Base_createPictures.call(this);
    }
};

Spriteset_Base.prototype.createSceneMapPictures = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var x = (Graphics.width - width) / 2;
    var y = (Graphics.height - height) / 2;
    this._pictureContainer = new Sprite();
    this._pictureContainer.setFrame(x, y, width, height);
    for (var i = 1; i <= $gameScreen.maxPictures(); i++) {
      var picture = new Sprite_Picture(i);
      if (picture.isRelatedPictureCommonEvent()) {
        SceneManager._scene.addPictureCommonEvent(picture);
      } else {
        this._pictureContainer.addChild(picture);
      }
    }
    this.addChild(this._pictureContainer);
};

//=============================================================================
// Sprite_Picture
//=============================================================================

Yanfly.PCE.Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap;
Sprite_Picture.prototype.loadBitmap = function() {
    Yanfly.PCE.Sprite_Picture_loadBitmap.call(this);
    SceneManager._scene.bindPictureSprite(this._pictureId, this);
};

Sprite_Picture.prototype.isRelatedPictureCommonEvent = function() {
    if (Yanfly.PCE.Trigger[this._pictureId]) return true;
    if (Yanfly.PCE.Repeated[this._pictureId]) return true;
    if (Yanfly.PCE.Pressed[this._pictureId]) return true;
    if (Yanfly.PCE.Released[this._pictureId]) return true;
    return false;
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.bindPictureSprite = function(picture, sprite) {
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.PCE.Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
    this._pictureCommonEvents = [];
    Yanfly.PCE.Scene_Map_createSpriteset.call(this);
    this.addPictureCommonEventChildren();
};

Scene_Map.prototype.addPictureCommonEvent = function(picture) {
    this._pictureCommonEvents.push(picture);
};

Scene_Map.prototype.addPictureCommonEventChildren = function() {
    var length = this._pictureCommonEvents.length;
    for (var i = 0; i < length; ++i) {
      var picture = this._pictureCommonEvents[i];
      this.addChild(picture);
    }
};

Scene_Map.prototype.bindPictureSprite = function(picture, sprite) {
    this._pictureCommonEventsBind = this._pictureCommonEventsBind || {};
    this._pictureCommonEventsBind[picture] = sprite;
};

Scene_Map.prototype.getPictureSprite = function(picture) {
    this._pictureCommonEventsBind = this._pictureCommonEventsBind || {};
    return this._pictureCommonEventsBind[picture.pictureId()];
};

Yanfly.PCE.Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
    this.updatePictureEvents();
    if (this.allowProcessMapTouch()) {
      Yanfly.PCE.Scene_Map_processMapTouch.call(this);
    }
};

Scene_Map.prototype.allowProcessMapTouch = function() {
    if (SceneManager.isSceneChanging()) return false;
    if ($gameMap.isEventRunning()) return false;
    if ($gameTemp.isCommonEventReserved()) return false;
    return $gameSystem.isTouchMoveEnabled();
};

Scene_Map.prototype.updatePictureEvents = function() {
    if (TouchInput.isTriggered()) {
      this.updatePictureEventCheck(Yanfly.PCE.Trigger);
    }
    if (TouchInput.isRepeated()) {
      this.updatePictureEventCheck(Yanfly.PCE.Repeated);
    }
    if (TouchInput.isPressed()) {
      this.updatePictureEventCheck(Yanfly.PCE.Pressed);
    }
    if (TouchInput.isReleased()) {
      this.updatePictureEventCheck(Yanfly.PCE.Released);
    }
};

Scene_Map.prototype.updatePictureEventCheck = function(check) {
    if (SceneManager.isSceneChanging()) return;
    if ($gameMap.isEventRunning()) return;
    var picture = this.getTriggeredPictureCommonEvent(check);
    if (!picture) return;
    $gameTemp.reserveCommonEvent(check[picture.pictureId()]);
    $gameTemp.clearDestination();
};

Scene_Map.prototype.getTriggeredPictureCommonEvent = function(check) {
    var length = check.length;
    var lastpicture = null;
    for (var i = 1; i < length; ++i) {
      var picture = $gameScreen.picture(i);
      if (!check[i]) continue;
      if (!picture) continue;
      var rect = picture.getSpriteRect(this.getPictureSprite(picture));
      lastpicture = picture;
      if (picture.isTriggered()) return picture;
    }
    return null;
};

Yanfly.PCE.Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
Scene_Map.prototype.isMenuCalled = function() {
    if ($gameSystem.isTouchMoveEnabled()) {
      return Yanfly.PCE.Scene_Map_isMenuCalled.call(this);
    } else {
      return Input.isTriggered('menu');
    }
};

//=============================================================================
// End of File
//=============================================================================
