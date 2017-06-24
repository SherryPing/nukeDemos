'use strict';
import { createElement, Component, render } from 'rax';
import { View, Text, Modal, Link, Env,ScrollView,Mask,Dialog,RefreshControl,Button,Slider,Touchable,Icon,Layout,Image,Tabbar,Iconfont,Switch,TextInput,ListView, Picker,Cell,Input} from 'nuke';
import Label from '$components/label/';
import G from '$util/global';
import {Http} from '$util/index';

class ListHeadModule extends Component {
    constructor() {
        super();
    }
   

    render() {
        return (
           <View style={{height:'180rem',backgroundColor:'#f60'}}>
                <Text style={{fontSize:'40rem',color:'#fff',marginTop:'35rem',marginLeft:'30rem'}}>待发货</Text>
                <Text style={{fontSize:'35rem',color:'#fff',marginLeft:'30rem'}}>已付款0天1时12分</Text>
           </View>
        );
    }
}

export default ListHeadModule;
