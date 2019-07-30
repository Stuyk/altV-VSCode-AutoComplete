# alt:V - Auto Completion Extension

---

This is an in-progress vs-code extension that will enable auto-completion for working with https://atv.mp/ on the Javascript side. It works in a similar way to Typescript Definitions; but without using Typescript.

This is essential if you want to write your alt:V gamemodes much quicker.

alt:V is a Grand Theft Auto: V custom multiplayer client that supports up to 1000+ users at a time.

---

### VERY IMPORTANT

When you're importing 'alt', 'natives' and 'chat' please use only the following methods:
```
import * as alt from 'alt';
import * as native from 'natives';
import * as chat from 'chat';
```

After press enter on the selection of your auto-fill; it will automatically default to `alt.`, `native.` and `chat.`.

### Usage

Its quite simply really; just type some of the following in a javascript file and the rest should pop up.

* server_
* client_
* native_
* player_
* vehicle_
* weather
* pos_
* chat_

After press enter on the selection of your auto-fill; it will automatically default to `alt.`, `native.` and `chat.`.

---

### Extra

I stream alt:V development from time to time; you can check me out on twitch [twitch.tv/stuykgaming](https://www.twitch.tv/stuykgaming).

---

### Contributing Guide:
If you would like to contribute to this project you will need to fork it; and work in a seperate branch. Once you are done working in a seperate branch feel free to make a pull request.

* Fork It
* Clone the Fork
* Work in your Fork
* Push to your Fork
* Pull Request your Fork

You can make your own .json files to contribute to this project for auto-completion. Here's an example of the chat .json that was contributed.

* Name; the name of the auto-complete with a prefix.
* Snippet; what gets printed on completion. Keep in mind that `${1:dataHere}` will let you tab to it. `${0}` is where the cursor ends after tabbing through.
* Documentation; information that pertains to the usage of this function.

```
[
	{
		"name": "chat_RegisterCmd",
		"snippet": "chat.registerCmd('${1:command}',(${2:params,}) => {$0});",
		"documentation": "Create a command for the chat."
	},
	{
		"name": "chat_Send",
		"snippet": "chat.send(player, '${1:message}');",
		"documentation": "Send the player a message."
	},
	{
		"name": "chat_Broadcast",
		"snippet": "chat.broadcast('${1:message}');",
		"documentation": "All players will recieve that message."
	}
]
```
After making your contribution you can load your .json in a relatively easy manner.

Open the following file: `/src/extension.ts`

Add your json to the import list:
`import altExampleJSON from './json/alt-example.json';`

Add a comment about what file is being imported; and then subscribe it.
```
// alt-client.json
	context.subscriptions.push(
		snippetHelper.loadSnippets('myuniquejsoncollectionname', altExampleJSON, ['prefixName_'])
	);
```

That's it! Hope you can lend a hand.