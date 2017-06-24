
import { View } from 'nuke';
import {createElement, Component,render} from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                <View style={{marginBottom:'10rem',height:'150rem',backgroundColor:'#3089dc'}}>
                </View>
                <View style={{borderRadius:'10rem',marginBottom:'10rem',height:'150rem',backgroundImage:'linear-gradient(to right,#2FAEF0,#378BD9)'}}>
                </View>
                <View style={{marginBottom:'10rem',height:'150rem',backgroundImage:'linear-gradient(to left,#FD8E25,#FC521F)'}}>
                </View>
                <View style={{marginBottom:'10rem',height:'150rem',backgroundImage:'linear-gradient(to bottom,#FD8E25,#EEEEEE)'}}>
                </View>
                <View style={{marginBottom:'10rem',height:'150rem',backgroundImage:'linear-gradient(to top,#FD8E25,#EEEEEE)'}}>
                </View>
                <View style={{marginBottom:'10rem',height:'150rem',backgroundImage:'linear-gradient(to bottom right,#FD8E25,#EEEEEE)'}}>
                </View>
                <View style={{marginBottom:'10rem',height:'150rem',backgroundImage:'linear-gradient(to top left,#FD8E25,#EEEEEE)'}}>
                </View>
            </View>

        );
    }
}

render(<App/>);

