import * as vscode from 'vscode';

const snippets: Map<string, Array<vscode.CompletionItem>> = new Map();

/**
 * Create Snippet
 * @param snippetCollection Name of the collection it belongs to.
 * @param snippetPrefix Name of the prefix. ie. alt.onPlayerConnect
 * @param snippetData Name of the data to insert into vscode.
 * @param snippetDescription Description of what this does.
 */
function createSnippet(snippetCollection: string, snippetPrefix: string, snippetData: string, snippetDescription: string) {
	const data = new vscode.CompletionItem(snippetPrefix);
	data.insertText = new vscode.SnippetString(snippetData);
	data.detail = `${snippetPrefix}`;
	data.documentation = `${snippetDescription}`;
	
	if (snippets.get(snippetCollection) === undefined) {
		snippets.set(snippetCollection, new Array());
	}

	// Push elements into the array.
	snippets.forEach((value, key) => {
		if (key === snippetCollection) {
			value.push(data);
		}
	});
}

/**
 * Create a snippet collection for definitions.
 * @param snippetCollection 
 * @param data 
 */
function createCollection(snippetCollectionName: string, dataArray: Array<any>) {
	dataArray.forEach((data) => {
		createSnippet(snippetCollectionName, data.name, data.snippet, data.documentation);
	});
}

export function loadSnippets(snippetCollectionName: string, dataArray: Array<any>, prefixToToggle: any): vscode.Disposable {
	dataArray.forEach((data) => {
		createSnippet(snippetCollectionName, data.name, data.snippet, data.documentation);
	});

	return vscode.languages.registerCompletionItemProvider(
		'javascript', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
				return snippets.get(snippetCollectionName);
			}
		},
		prefixToToggle
	);
}