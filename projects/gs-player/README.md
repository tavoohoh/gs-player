# gs-player

Simple music player user interface that easily adapts to any website interface.

![Gs player - dark theme](https://raw.githubusercontent.com/tavoohoh/gs-player/master/src/assets/dark.png)

Try the 
<a href="https://gs-player-demo.web.app/" rel="noopener" target="_blank">demo</a>

##### Current version: Beta

This libriry was inspired by
<a href="https://github.com/imsingh/rxjs-audio" rel="noopener" target="_blank">rxjs-audio</a>
and uses part of its source code. Thank you
<a href="https://github.com/imsingh/" rel="noopener" target="_blank">imsingh</a>
for let me use your tutorial and library.

# Table of contents:
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Usage](#usage)
  * [Add gs-player to your code](#add-gs-player-to-your-code)
  * [Pass tracks to gs-player](#pass-tracks-to-gs-player)
  * [Customise gs-player](#customise-gs-player)
* [Library interfaces](#library-interfaces)
  * [PlayerStreamState](#playerstreamstate-properties)
  * [PlayerFile](#playerfile-properties)
  * [PlayerCurrentFile](#playercurrentfile-properties)
  * [PlayerTheme](#playertheme-properties)
* [Library constants](#library-constants)
  * [PlayerThemeLight](#playerthemelight-properties)
  * [PlayerThemeDark](#playerthemedark-properties)
* [Testing](#testing)
* [Versioning](#versioning)
* [Developer](#developer)
* [License](#license)
* [Donate](#donate)

## Installation
```sh
npm install gs-player --save
```

## Getting Started

Add `GsPlayerModule` into the imports array of the module that will use `gs-player`

```ts
import { GsPlayerModule} from 'gs-player';

@NgModule({
  imports: [
    // ...
    GsPlayerModule
  ],
})
export class AppModule { }
```

## Usage

### Add gs-player to your code:

Add `gs-player` component to your HTML, import interfaces and define properties

##### HTML ex. app.component.html
```html
<h1>My website</h1>
<gs-player></gs-player>
```

##### TS ex. app.component.ts
```ts
import { PlayerFile, PlayerTheme, PlayerThemeDark, PlayerThemeLight } from 'gs-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Array of PlayerFiles (file url, name, artist and album)
  public files: Array<PlayerFile>;
  // Player color theme (one of PlayerThemeDark or PlayerThemeLight)
  // You can also crete your own color theme
  public playerTheme: PlayerTheme = PlayerThemeLight;
```

### Pass tracks to gs-player:

To play audio in `gs-player` you must pass the `files` property. An array of PlayerFile:

##### HTML ex. app.component.html
```html
<h1>My website</h1>
<gs-player
  [files]="files">
</gs-player>
```

##### TS ex. app.component.ts
```ts
export class AppComponent {
  // Array of PlayerFiles (file url, name, artist and album)
  // artist and album are optionals
  public files: Array<PlayerFile> = files: Array<PlayerFile> = [
    {
      url: 'url-to-audio-file.mp3',
      name: 'My audio',
      artist: 'Me',
      album: 'My album'
    }
  ];
```

At this point you should be able to play audio using `gs-player`.

### Customise gs-player:

You can change `gs-player` color to fit your UI. The library have to themes by default:

- PlayerThemeLight: For dark background
- PlayerThemeDark: For bright background

Use themes as follow:

##### HTML ex. app.component.html
```html
<h1>My website</h1>
<gs-player
  [files]="files"
  [playerTheme]="playerTheme">
</gs-player>
```

##### TS ex. app.component.ts
```ts
// import themes from `gs-player`
import { PlayerThemeDark, PlayerThemeLight } from 'gs-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public playerTheme = PlayerThemeLight;
```

You can create your own themes using your own colors:

##### TS ex. app.component.ts
```ts
// import PlayerTheme interface from `gs-player`
import { PlayerTheme } from 'gs-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public playerTheme: {
    // HTML/CSS Color Name, Hex Code #RRGGBB, Decimal Code (R,G,B)
    primary: 'red',
    secondary: 'blue'
  };
```

## Library interfaces

Interfaces can be used inside your project.

### Available interfaces
<br>

| Name                      | Description                                                 |
|---------------------------|-------------------------------------------------------------|
| PlayerStreamState         | Stream state, used to manage the file being played          |
| PlayerFile                | A file to be played                                         |
| PlayerCurrentFile         | File being played                                           |
| PlayerTheme               | Player theme. Can be used to create themes                  |

##### PlayerStreamState properties
<br>

| Name                      | Type                       |                           |
|---------------------------|----------------------------|---------------------------|
| playing                   | boolean                    | required                  |
| readableCurrentTime       | string                     | required                  |
| readableDuration          | string                     | required                  |
| duration                  | number | undefined         | required                  |
| currentTime               | number | undefined         | required                  |
| canplay                   | boolean                    | required                  |
| error                     | boolean                    | required                  |

##### PlayerFile properties
<br>

| Name                      | Type                       |                           |
|---------------------------|----------------------------|---------------------------|
| url                       | string                     | required                  |
| name                      | string                     | required                  |
| artist                    | string                     | optional                  |
| album                     | string                     | optional                  |

##### PlayerCurrentFile properties
<br>

| Name                      | Type                       |                            |
|---------------------------|----------------------------|----------------------------|
| index                     | number                     | required                   |
| file                      | PlayerFile                 | required                   |

##### PlayerTheme properties
<br>

| Name                      | Type                       |                            |
|---------------------------|----------------------------|----------------------------|
| primary                   | string                     | required                   |
| secondary                 | string                     | required                   |

## Library constants

Constants can be used inside your project.

### Available constants
<br>

| Name                      | Description                                                 |
|---------------------------|-------------------------------------------------------------|
| PlayerThemeLight          | Light color theme, good for dark background                 |
| PlayerThemeDark           | Dark color theme, good for bright background                |

##### PlayerThemeLight properties
<br>

| Name                      | value                      |
|---------------------------|----------------------------|
| primary                   | '#fff'                     |
| secondary                 | '#eee'                     |

##### PlayerThemeDark properties
<br>

| Name                      | value                      |
|---------------------------|----------------------------|
| primary                   | '#222'                     |
| secondary                 | '#eee'                     |

## Testing

1. Download the [source code](https://github.com/tavoohoh/gs-player.git)
2. Install dependencies `npm install`
3. Run demo `ng serve`

## Versioning

gs-player will be maintained under the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Developer

##### [Gustavo Santamaria](mailto:tavo_bajares@live.com)
- [website](https://tavoohoh.com/)
- [GitHub](https://github.com/tavoohoh/)
- [Linkedin](https://www.linkedin.com/in/tavoohoh/)

## License

##### The MIT License (MIT)

## Donate
If you like my work you can buy me a `coffe` or `pizza`

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/GustavoSant)