// ==================================================
// Cae_SaveLoadSwitch.js
// ==================================================

/*:
 * @plugindesc v1.1 - Turn on switches when a player saves/loads.
 * @author Caethyril
 * @help Suggested use:
 *    Make a Parallel or Autorun common event assigned to the switch.
 *    Ensure that event turns off the switch at the end.
 *    When back on the map after save/load, the corresponding event will run once!
 * 
 * Terms of use:
 *    Free to use and modify.
 * 
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Update log:
 *   1.1: Added variables for storing the save/load file ID.
 *   1.0: Initial release.
 * 
 * @param Save Switch
 * @text Save Switch
 * @type switch
 * @desc The switch to turn on when the player saves.
 * @default 0
 * 
 * @param Save ID Variable
 * @text Save ID Variable
 * @type variable
 * @desc The game variable in which to store the save file ID.
 * @default 0
 * 
 * @param Load Switch
 * @text Load Switch
 * @type switch
 * @desc The switch to turn on when the player loads.
 * @default 0
 * 
 * @param Load ID Variable
 * @text Load ID Variable
 * @type variable
 * @desc The game variable in which to store the load file ID.
 * @default 0
 */

var Imported = Imported || {};
Imported.Cae_SaveLoadSwitch = 1.1;

var CAE = CAE || {};
CAE.SaveLoadSwitch = CAE.SaveLoadSwitch || {};

(function(_) {
'use strict';

    const PLUGIN_NAME = 'Cae_SaveLoadSwitch';
    const ERR_PRE     = PLUGIN_NAME + '.js ';
    const ERR_NOPARAM = ERR_PRE + 'could not find its parameters!\nCheck the plugin file is named correctly and try again.';

    _.params = PluginManager.parameters(PLUGIN_NAME);
    if (!_.params) throw new Error(ERR_NOPARAM);

    _.saveId = parseInt(_.params['Save Switch'], 10) || 0;
    _.loadId = parseInt(_.params['Load Switch'], 10) || 0;
    _.saveVar = parseInt(_.params['Save ID Variable'], 10) || 0;
    _.loadVar = parseInt(_.params['Load ID Variable'], 10) || 0;

    _.DataManager_saveGame = DataManager.saveGame;
    DataManager.saveGame = function(savefileId) {
        let res = _.DataManager_saveGame.apply(this, arguments);
        if (res) {
            $gameVariables.setValue(_.saveVar, savefileId);
            $gameSwitches.setValue(_.saveId, true);
        }
        return res;
    };

    _.DataManager_loadGame = DataManager.loadGame;
    DataManager.loadGame = function(savefileId) {
        let res = _.DataManager_loadGame.apply(this, arguments);
        if (res) {
            $gameVariables.setValue(_.loadVar, savefileId);
            $gameSwitches.setValue(_.loadId, true);
        }
        return res;
    };

})(CAE.SaveLoadSwitch);