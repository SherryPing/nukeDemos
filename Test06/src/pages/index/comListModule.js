/**
 * 功能描述：商品列表模块
 * @author spp
 */
import { View, Text,  Touchable, Icon, Image, Button, ListView ,ScrollView} from 'nuke';
import {createElement, Component,render} from 'rax';

class ComListModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,
            sum:'',            
        };
    }

    // 初始化商品合计总价
    componentDidMount() {
        let temp=0;
        for (var i=0;i<this.state.data.length;i++){
            temp +=parseFloat(this.state.data[i].comcount);
        };
        this.setState({sum:temp})
    }

    //商品对应链接
    linkTo(item,e) {
        console.log(e);
    }

    // 渲染单个商品条目内部
    renderInner(length , item, index){
        const wrapStyle = styles.cellInner;
        return (
            <Touchable style={wrapStyle} onPress={this.linkTo.bind(this,item)}>
                {
                    item.icon ? <Image style={styles.icon} source={{uri:item.icon}}></Image> : null
                }
                <View style={{flex:'1',flexDirection:'column'}}>
                    <View style={{flex:'2',flexDirection:'row',alignItems:'center',paddingRight:'20rem',marginBottom:'8rem',}}>
                        <View style={{flex:2,justifyContent:'flex-start'}}> <Text style={styles.itemTextList}>{item.cominfo}</Text></View>
                        <View style={{flex:1,alignItems:'flex-end'}}><Text  style={styles.itemTextList}>￥{item.comcount}</Text></View>
                    </View>
                    <View style={{flex:'1',flexDirection:'row',alignItems:'center',paddingRight:'20rem'}}>
                        <View style={{flex:2}}><Text style={styles.itemTextList}>商家编码:{item.comcode}</Text></View>
                        <View style={{flex:1,alignItems:'flex-end'}}><Text style={[styles.itemTextList,{textDecoration:'line-through',color:'#ccc'}]} >{item.comcount2}</Text></View>
                    </View>
                    <View style={{flex:'1',flexDirection:'row',alignItems:'center',paddingRight:'20rem',marginBottom:'30rem'}}>
                        <View style={{flex:2}}><Text style={{color:'#f00',fontSize:'28rem'}}>颜色尺码:{item.sty}</Text></View>
                        <View style={{flex:1,alignItems:'flex-end'}}><Text style={{color:'#f00',fontSize:'28rem'}}>{item.count}</Text></View>
                    </View>               
                </View>          
            </Touchable>
        );
    }

    // 渲染商品条目
    renderItem(length , item, index){
        return (
            <View style={styles.cellItem}>
                {this.renderInner(length, item, index)}
            </View>
        );
    }
     
    render(){
        return (
            <View>
                <ListView
                    renderRow={this.renderItem.bind(this,this.state.data.length)}
                    dataSource={this.state.data}
                    style={styles.listContainer}
                />
                <View style={styles.total}>
                    <Text style={{flex:2,paddingTop:'5rem',paddingLeft:'5rem' ,fontSize:'24rem', backgroundColor:"#0094c8",width:'10rem',height:'50rem',color:'#fff',marginRight:'123rem'}}>
                        手机订单
                    </Text>
                    <View style={{flex:9,flexDirection:'row',marginRight:'26rem'}}>
                        <Text style={{fontSize:'28rem',color:'#ccc'}}>
                            共
                        </Text>
                        <View style={{flex:'1',marginTop:'-15rem',justifyContent:'center',alignItems:"center"}}>
                            <Text style={{color:"#f00",fontSize:'35rem',}}>
                                {this.state.data.length}
                            </Text>
                        </View>
                        <Text style={{fontSize:'28rem',color:'#ccc'}}>
                            件 合计(含快递:￥0.00):
                        </Text>
                        <View style={{flex:'3',marginTop:'-15rem',justifyContent:'center',alignItems:"center"}}>
                            <Text style={{color:"#f00",fontSize:'40rem',}}>
                                {this.state.sum}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>                
        )
    }
}

const styles = {
    listContainer:{
        height:'1300rem',      
    },
    cellItem:{
        backgroundColor:"#ffffff",       
        [`backgroundColor:active`]:'#f2f3f7',
        paddingLeft:"30rem",
        paddingRight:'30rem',
    },
    cellInner:{
        flex:1,
        borderBottomWidth:"2rem",
        borderBottomStyle:"solid",
        borderBottomColor:"#e6e7eb",
        alignItems:"center",
        flexDirection:"row"
    },    
    icon:{
        color:'#c7c7cc',
        width:'172rem',
        height:'172rem',
        marginRight:'26rem',
    },
    itemTextList:{
        fontSize:"32rem",
        color:"#5F646E"
    },
    total:{
        borderBottomWidth:'1rem',
        borderBottomStyle:'solid',
        borderBottomColor:'#ccc',
        marginBottom:'10rem',
        paddingBottom:'25rem',
        paddingLeft:"28rem",
        flexDirection:'row'
    },
  
}

export default ComListModule;
