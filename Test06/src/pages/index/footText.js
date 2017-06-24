/**
 * 功能描述：末尾订单信息模块
 * @author spp
 */

'use strict';
import { createElement,Component, render } from 'rax';
import { View, Text, Modal, Mask,Dialog,Button,Touchable,Icon,Image,Iconfont,Picker,Input} from 'nuke';
import {Http} from '$util/index';


class FootText extends Component {
    constructor() {
        super();
        this.state={
                   
        }
    }

    render() {
        return (
            <View style={styles.cellItem}>
                <Text style={styles.footText}>订单编号：11111111111111</Text>
                <Text style={styles.footText}>创建时间：2017-6-23 14:59</Text>
                <Text style={styles.footText}>付款时间：2017-6-23 15:18</Text>         
            </View>
        );
    }
}

const styles={   
    cellItem : {
        paddingTop:'30rem',
        paddingBottom:'30rem',
        paddingLeft:'20rem',   
        borderBottomWidth:'25rem',
        borderBottomStyle:'solid',
        borderBottomColor:'#f5f5f5',
        borderTopWidth:'25rem',
        borderTopStyle:'solid',
        borderTopColor:'#f5f5f5',
    },
    footText:{
        color:'rgba(0,0,0,0.3)',
        fontSize:'32rem'
    }  
}

export default FootText;