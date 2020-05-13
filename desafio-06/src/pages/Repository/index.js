import React from 'react';
import { WebView } from 'react-native-webview';

export default class Repository extends React.Component {
	async componentDidMount() {
		this.props.navigation.setOptions({
			title: this.props.route.params.repository.name,
		});
	}

  render() {
    return (
      <WebView source={{ uri:this.props.route.params.repository.url }} style={{ flex:1 }} />
    );
  }
}