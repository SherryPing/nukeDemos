'use strict';
import { createElement, Component, render } from 'rax';
import { View, Text, Modal, Link, Env,ScrollView,Mask,Dialog,RefreshControl,Button,Slider,Touchable,Icon,Layout,Image,Tabbar,Iconfont,Switch,TextInput,ListView, Picker,Cell,Input} from 'nuke';
import Label from '$components/label/';
import G from '$util/global';
import {Http} from '$util/index';

var slideStyle={
    step1:{
        width: '750rem',
        height: '200rem',
         backgroundColor: '#ffff99',
         color: '#ffff99',
         backgroundImage:'url(https://gw.alicdn.com/tps/TB12ShfQXXXXXXLapXXXXXXXXXX-1600-380.jpg)',
        // backgroundImage:'url(https://img.alicdn.com/tfs/TB1vUv.JFXXXXbAXFXXXXXXXXXX-50-50.png)'
      },

    step2:{
        width: '750rem',
        height: '200rem',
        backgroundColor: '#fc9',
        color: '#fc9',
      },


    step3:{
        width: '750rem',
        height: '200rem',
        backgroundColor: '#fc6',
        color: '#fc6'
      },
    paginationStyle:{
        position: 'absolute',
        width: '690rem',
        height: '100rem',
        top : '240rem',
        left: '20rem',
        color: 'rgba(255, 255, 255 ,0.5)',
        itemColor: 'red',
        itemSelectedColor: 'green'
    }
}

class ListSliderModule extends Component {
    constructor() {
        super();
    }
    sliderChange(e){
        console.log(e);
    }
   

    render() {
        return (
           <View style={{display:'flex',borderTopColor:'#f5f5f5',borderTopWidth:'28rem',borderTopStyle:'solid',borderBottomColor:'#f5f5f5',borderBottomWidth:'15rem',borderBottomStyle:'solid'}} >
                <Slider width="750rem" height="200rem" 
                       autoplay="true"
                       append="tree"
                       autoplayTimeout="2000"
                       paginationStyle={slideStyle.paginationStyle}
                       onChange={this.sliderChange.bind(this)}>
                       <View style={slideStyle.step1}><Text style={{color:"#f00"}}>ha我是广告一一一</Text> </View>
                       <View style={slideStyle.step2}>我是广告二二二</View>
                       <View style={slideStyle.step3}>我是广告三三三</View>
                </Slider>
            </View>
        );
    }
}

export default ListSliderModule;