'use strict';
import { createElement, Component, render } from 'rax';
import { View, Text, Button,Image} from 'nuke';
import {Http} from '$util/index';

class ComListModule extends Component {
    constructor() {
        super();
    }
   

    render() {
        return (
           <View style={[styles.cellItem,{flexDirection:'row',alignItems:'center',height:"250rem",backgroundColor:'#fff',borderTopColor:'#f5f5f5',borderTopWidth:'28rem',borderTopStyle:'solid'}]}>
                <View style={{flex:'1',marginTop:'-5rem'}}>                            
                        <Image source={{uri: 'https://gw.alicdn.com/tps/TB1km2SOpXXXXb6aXXXXXXXXXXX-608-336.png'}}  style={{quality:'original',width:'180rem',height:'180rem'}}/>                     
                </View>
                <View style={{flex:'2',flexDirection:'column'}}>
                    <View style={{flex:'2',flexDirection:'row',alignItems:'center',paddingRight:'20rem',marginBottom:'8rem'}}>
                        <View style={{flex:2,justifyContent:'flex-start'}}><Text style={styles.fontB} >好看看啊看南豆腐京的衣服</Text></View>
                        <View style={{flex:1,alignItems:'flex-end'}}><Text  style={styles.fontB}>￥111.01</Text></View>
                    </View>
                    <View style={{flex:'1',flexDirection:'row',alignItems:'center',paddingRight:'20rem'}}>
                        <View style={{flex:2}}><Text style={styles.fontB}>商家编码：1212</Text></View>
                        <View style={{flex:1,alignItems:'flex-end'}}><Text style={styles.fontB} >￥111.01</Text></View>
                    </View>
                     <View style={{flex:'1',flexDirection:'row',alignItems:'center',paddingRight:'20rem'}}>
                        <View style={{flex:2}}><Text style={{color:'#f00',fontSize:'28rem'}}>颜色：蓝色L码</Text></View>
                        <View style={{flex:1,alignItems:'flex-end'}}><Text style={{color:'#f00',fontSize:'28rem'}}>x1</Text></View>
                    </View>                                          
                </View>                         
        </View> 
        );
    }
}

const styles={
    // 定义整体字体样式
    fontB:{
        color:'rgba(0,0,0,0.8)',
        fontSize:'32rem'

    },
    
    // 定义标签字体
    textLine:{
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'40rem',
        paddingRight:'40rem',
        marginTop:'10rem',
        flexDirection:'row'
    },
    label:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'space-between',
    },
    labelText:{
        color:'rgba(0,0,0,0.5)'    
    },
    result:{
        flex:1
    },
    resultText:{
        color:'rgba(0,0,0,0.8)',
        fontSize:'32rem'
    },
    // 定义字体图标
     icon:{
        marginRight:'10rem',
        paddingLeft:'5rem',
    },
    iconCell:{
        paddingTop:'40rem',
        alignItems:'center',
    },
    // 定义列表
      listLine:{
        marginLeft:'40rem',
        marginRight:'40rem',
        padding:'20rem',
        flexDirection:'row',
        backgroundColor:'#ffffff'

    },
    // 定义按钮
     btnWithMargin:{
        marginTop:'25rem', 
        marginBottom:'25rem', 
        marginLeft:'32rem', 
        marginRight:'32rem' ,
        paddingLeft:'250rem',
    },
    btn1:{
        width:'5rem',
    },
    // 定义列表项
    listContainer:{
        flex:1,
    },
    cellItem : {
        height: '120rem',
        paddingTop:'15rem',
        paddingBottom:'15rem',
        paddingLeft:'20rem',   
        borderBottomWidth:'1rem',
        borderBottomStyle:'solid',
        borderBottomColor:'#cccccc',
    },

    // 遮盖框
    textarea:{
        width: '750rem',
        height: '200rem',
        borderWidth:'1rem',
        borderStyle:'solid',
        borderColor:'#cccccc'
    },
    mask:{
        flex:1,

    },
    bg:{
        flex:1,
        width:'750rem',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    text:{
        color:'#ffffff'

    },
    // 定义模态框
     modalStyle: {
    width: '578rem',
    height: '364rem',
    borderTopColor:'#3089dc',
    borderTopStyle:'solid',
    borderTopWidth:'8rem',
    // padding:'10rem',
    borderRadius:'8rem',
  },
  body: {
    flex:1,
    paddingLeft:40,
    paddingRight:40,
    paddingTop:30,
    // justifyContent: 'center',
    borderRadius:'8rem',
    backgroundColor: '#ffffff',
  },
  head:{
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textHead:{
    color:'#3d4145',
    fontSize:32,
  },
  tips:{

  },
  text:{
    fontSize:'28rem',
    lines:3,
    [`-webkit-line-clamp`]: 3,
    overflow: 'hidden',
    height:'120rem',
    lineHeight:'40rem',
    color:'#60646e',
    textOverflow:'ellipsis'
  },
  footer: {
    borderTopColor:'#dddddd',
    flexDirection:'row',
    borderTopStyle:'solid',
    borderTopWidth:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '94rem'
  },
  dlgBtn:{
    flex:1,
    borderWidth:0,
    color:'#3089dc'
  },
  dlgBtnSeperator:{
    color:'#dddddd'
  },
  button: {
    width: '300rem',
    height: '60rem',
    borderWidth: '1rem',
    borderStyle: 'solid',
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
}

export default ComListModule;
