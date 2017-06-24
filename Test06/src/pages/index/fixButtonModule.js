/**
 * 功能描述：页面底部固定按钮模块
 * @author spp
 */

'use strict';
import { createElement, Component, render } from 'rax';
import { Button} from 'nuke';
import Label from '$components/label/';
import G from '$util/global';
import {Http} from '$util/index';

class FixButtonModule extends Component {
    constructor() {
        super();
    }
   
    render() {
        return (
             <Button.Group style={{position:'fixed',bottom:'0',left:'0'}} >
                <Button type="normal" rect size="large" style={{width:'375rem',color:'#f60'}}>
                    修改订单属性
                </Button>
                <Button type="normal" rect size="large" style={{width:'376rem',marginLeft:'-17rem',backgroundColor:'#f60',color:'#ffffff'}}>
                    发货
                </Button>
            </Button.Group>
        );
    }
}

export default FixButtonModule;
