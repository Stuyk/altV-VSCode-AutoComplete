/*---------------------------------------------------------
 * alt:V - Auto Complete
 * By: Stuyk
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import * as snippetHelper from './snippetHelper';
import altServerJSON from './alt-server.json';

interface SnippetTemplate {
	name: string;
	snippet: string;
	documentation: string;
}

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('alt:V auto complete has loaded.');

	// Load Snippets
	altServerJSON.forEach((data: SnippetTemplate) => {
		snippetHelper.createSnippet('altserver', data.name, data.snippet, data.documentation);
	});

	// Load Snippets Into Completion Provider
	const altServerDefs = vscode.languages.registerCompletionItemProvider('javascript', {
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
				const serverResults = [];
				return snippetHelper.snippets.get('altserver');
			}
		},
	'alt.'
	);

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('alt:V Extension has loaded.');
	});

	context.subscriptions.push(altServerDefs, disposable);
}
