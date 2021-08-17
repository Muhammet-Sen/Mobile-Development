import React, {Component} from "react";
import WebView from "react-native-webview";

class HomeScreen extends Component {
    render() {
        
        return <WebView source={{ uri: 'https://www.setur.com.tr' }} />;
    }
}
export default HomeScreen;

