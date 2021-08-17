/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Choice from './src/components/Choice';
import ModalComponent from './src/components/ModalComponent';
import SelectedItems from './src/components/SelectedItems';
import TextField from './src/components/TextField';
import UploadButton from './src/components/UploadButton';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(Choice, () => Choice);
AppRegistry.registerComponent(ModalComponent, () => ModalComponent);
AppRegistry.registerComponent(SelectedItems, () => SelectedItems);
AppRegistry.registerComponent(TextField, () => TextField);
AppRegistry.registerComponent(UploadButton, () => UploadButton);
