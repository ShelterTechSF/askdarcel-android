# Ask Darcel App
##### *Built with React Native for Android and iPhone*

___
### Version
0.0.1

### Tech
* [React Native] [react-native]
* [Redux] [redux]

The Ask Darcel App is open source with a [public repository][repo]
 on GitHub.

### Installation

The current version of React Native for iOS requires [XCode][xcode] v7+ to run.
For android development [Android Studio][studio] provides emulator options. I recommend testing on a lower-end model with Jelly Bean.  

You need the React Native client installed globally:

```sh
$ npm install -g react-native-cli
```

```sh
$ git clone https://github.com/ShelterTechSF/askdarcel-app.git
$ cd askdarcel-app
$ npm install
```

You also need some experimental components that aren't packed with React Native by default. To add them to your library, run this in your terminal:

```sh
$ for file in 'FlatList' 'MetroListView' 'VirtualizedList' 'VirtualizeUtils'; \
    do curl https://raw.githubusercontent.com/facebook/react-native/master/Libraries/Experimental/${file}.js > node_modules/react-native/Libraries/Experimental/${file}.js; \
    done
```

### Troubleshooting

If you get an error running the debugger (or any mysterious top-level exception) try:

```sh
$ cd android/ && ./gradlew clean && cd .. && react-native run-android
```

[xcode]: <https://developer.apple.com/downloads/>
[studio]: <https://developer.android.com/studio/intro/index.html/>
[react-native]: <https://facebook.github.io/react-native/>
[redux]: <http://redux.js.org/>
[repo]: <https://github.com/ShelterTechSF/askdarcel-app/>
