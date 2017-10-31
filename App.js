/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import Main from './app/main.jsx'
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coolTimer: Date.now(),
        }
    }

    componentDidMount() {

    }

    send(datachannelId, value) {
        let server = {
            ip: '192.168.1.169',
            port: 3000
        }
        let device = {
            id: 'H1PP5SS0Z',
            key: 'f2b5f8b8ba0f4cadf35484227899d618b18d4862e87c36944a1dab0e58949bcf',
            selected: true
        }
        let now = Date.now();
        setTimeout(() => {
            fetch(`http://${server.ip}:${server.port}/api/data/datachannelId/${datachannelId}/value/${value}`, {
                method: 'POST',
            }).then((data) => {
                // Alert.alert('Success ' + JSON.stringify(data))
            })
        }, this.state.coolTimer - now)
        this.state.coolTimer = now + 50;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gamePadLeft}>
                    <View style={styles.gamePadTop}>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_north', 1) }}
                            onPressOut={() => { this.send('key_north', 0) }}>
                            ↑
                        </Button>
                    </View>
                    <View style={styles.gamePadMid}>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_west', 1) }}
                            onPressOut={() => { this.send('key_west', 0) }}>
                            ←
                        </Button>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_east', 1) }}
                            onPressOut={() => { this.send('key_east', 0) }}>
                            →
                        </Button>
                    </View>
                    <View style={styles.gamePadBottom}>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_south', 1) }}
                            onPressOut={() => { this.send('key_south', 0) }}>
                            ↓
                        </Button>
                    </View>
                </View>
                <View style={styles.gamePadRight}>
                    <View style={styles.gamePadTop}>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_d', 1) }}
                            onPressOut={() => { this.send('key_d', 0) }}>
                            Y
                        </Button>
                    </View>
                    <View style={styles.gamePadMid}>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_c', 1) }}
                            onPressOut={() => { this.send('key_c', 0) }}>
                            X
                        </Button>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_b', 1) }}
                            onPressOut={() => { this.send('key_b', 0) }}>
                            B
                        </Button>
                    </View>
                    <View style={styles.gamePadBottom}>
                        <Button
                            style={styles.gamePad}
                            textStyle={styles.gamePadText}
                            onPressIn={() => { this.send('key_a', 1) }}
                            onPressOut={() => { this.send('key_a', 0) }}>
                            A
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    gamePad: {
        width: 100,
        height: 100,
    },
    gamePadText: {
        fontSize: 50
    },
    gamePadLeft: {
        flexDirection: 'column',
        marginRight: 15,
        marginLeft: 3,
        flex: 1,
    },
    gamePadRight: {
        flexDirection: 'column',
        marginRight: 3,
        marginLeft: 15,
        flex: 1,
    },
    gamePadTop: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gamePadMid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    gamePadBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
