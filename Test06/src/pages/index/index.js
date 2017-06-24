/**
 * 功能描述：发货订单主页面
 * @author spp
 */

import { View ,ScrollView} from 'nuke';
import {createElement, Component,render } from 'rax';

import ListHeadModule from'./ListHeadModule' ;
import ListRecInfoModule from './ListRecInfoModule';
import ListSliderModule from './ListSliderModule';
import CommentsModule from './CommentsModule';
import ComListModule from './ComListModule';
import FootText from './FootText';
import FixButtonModule from './FixButtonModule';
import CheckBtn from './CheckBtn';

// 发货订单数据
let originalData = [
    {key: 'b0',cominfo:'蓝色条纹修身大码男士折扣大促毛线衣1',comcount:'1',comcode:'1211',comcount2:'￥211',sty:'黑色s',count:'1',icon:'//gw.alicdn.com/tps/TB1km2SOpXXXXb6aXXXXXXXXXXX-608-336.png'},
    {key: 'b1',cominfo:'蓝色条纹修身大码男士折扣大促毛线衣2',comcount:'2',comcode:'1212',comcount2:'￥212',sty:'黑色m',count:'2',icon:'//img.alicdn.com/tfs/TB1vUv.JFXXXXbAXFXXXXXXXXXX-50-50.png'},
    {key: 'b2',cominfo:'蓝色条纹修身大码男士折扣大促毛线衣3',comcount:'3',comcode:'1213',comcount2:'￥213',sty:'黑色l',count:'3',icon:'//gw.alicdn.com/tps/TB1km2SOpXXXXb6aXXXXXXXXXXX-608-336.png'},
    {key: 'b3',cominfo:'蓝色条纹修身大码男士折扣大促毛线衣4',comcount:'4.6',comcode:'1214',comcount2:'￥214',sty:'黑色xl',count:'4',icon:'//gw.alicdn.com/tps/TB1km2SOpXXXXb6aXXXXXXXXXXX-608-336.png'},
    {key: 'b4',cominfo:'蓝色条纹修身大码男士折扣大促毛线衣5',comcount:'0.5',comcode:'1215',comcount2:'￥215',sty:'黑色xxl',count:'5',icon:'//gw.alicdn.com/tps/TB1km2SOpXXXXb6aXXXXXXXXXXX-608-336.png'},
];
// 发货人数据
let data0=[
    {key:'1',value:'我是爱睡觉的小明1'},
    {key:'2',value:'我是爱吃饭的小明'},
    {key:'3',value:'我是爱看广告的小明'},
    {key:'4',value:'我是小明哈哈哈'}
];

// Class,functon ,var  命名。见名思意
class OrderPageModule extends Component {
    constructor() {
        super();
        this.state = {          
        };
    }
    render(){
        return (   
            <ScrollView >
            <View style={{flex:'1',paddingBottom:'200rem'}}>
                <ListHeadModule></ListHeadModule>
                <ListRecInfoModule></ListRecInfoModule>
                <ListSliderModule></ListSliderModule>
                <CommentsModule  owner={data0}></CommentsModule>
                <ComListModule data={[...originalData]}></ComListModule>
                <CheckBtn></CheckBtn>
                <FootText></FootText>
                <FixButtonModule></FixButtonModule>
             </View>
            </ScrollView>
        )
    }
}
    const styles = {
       
    }

render(<OrderPageModule />);



