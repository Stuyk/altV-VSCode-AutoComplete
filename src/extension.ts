/*---------------------------------------------------------
 * alt:V - Auto Complete
 * By: Stuyk
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import * as snippetHelper from './snippetHelper';

// JSON Files
import altServerJSON from './json/alt-server.json';
import altServerPositionJSON from './json/alt-server-position.json';
import altServerPlayerJSON from './json/alt-server-player.json';
import altWeatherIdsJSON from './json/alt-weather-ids.json';
import altServerVehicleJSON from './json/alt-server-vehicle.json';
import altClientNativesJSON from './json/alt-client-natives.json';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('alt:V auto complete has loaded.');

	// alt-server.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('altserver', altServerJSON, ['alts'])
	);
	
	// alt-server-position.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('altserverposition', altServerPositionJSON, ['pos'])
	);

	// alt-server-player.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('altserverplayer', altServerPlayerJSON, ['player'])
	);

	// alt-weather-ids.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('altweatherids', altWeatherIdsJSON, ['weather'])
	);

	// alt-server-vehicle.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('altservervehicle', altServerVehicleJSON, ['veh'])
	);

	// alt-client-natives.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('altclientnatives', altClientNativesJSON, ['native'])
	);
}
