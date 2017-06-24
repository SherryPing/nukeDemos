'use strict';
import { createElement,Component, render } from 'rax';
import { View, Text, Modal, Mask,Dialog,Button,Touchable,Icon,Image,Iconfont,Picker,Input} from 'nuke';
import {Http} from '$util/index';

let data0=[{key:'1',value:'我是爱睡觉的小明'},{key:'2',value:'我是爱吃饭的小明'},{key:'3',value:'我是爱看广告的小明'},{key:'4',value:'我是小明哈哈哈'}]

class CommentsModule extends Component {
    constructor() {
        super();
        this.state={
            data:'我是测试小明 ',
            data2:'mai卖东西啦买东西有哈哈哈哈来啊啊',
            data3:'我来阿拉阿拉啊',           
        }
    }

    // 模态框
     prompt = (e) =>{
        console.log('aaa');
        Modal.prompt('请输入卖家备注',[
        {
            onPress:(e)=>{
                 this.setState({data2:JSON.stringify(e).split("\"")[7]});
            },
            text:"确认"
        },
        {
            onPress:()=>{console.log('点击了取消')},
            text:"取消"
        }
        ] )
    }

     showMask = ()=>{
        this.setState({
            maskVisible:true,

        })

    }
    hideMask =(e)=>{
        this.setState({
            maskVisible:false,
            

        });
    }

    press()
    {
        Picker.show({
            title:'请选择',
            dataSource:data0,
            maskClosable:true
        },(e)=>{
            this.setState({data:JSON.stringify(e).split("\"")[7]});

        },(e)=>{
            console.log('cancel')
        }
        )
    }
// 输入事件
    change = (value,e) => {
        this.setState({data3:JSON.stringify(e).split("\"")[9]});
        console.log(value);//强制失去焦点后，会触发 onCchange
        }
   

    render() {
        return (
            <View>
          <Touchable onPress={this.press.bind(this)} style={{backgroundColor:'#fff'}} activeStyle={{backgroundColor:'rgba(0,0,0,0.1)'}}> 
                <View style={[styles.cellItem,{height:'100rem',borderWidth:'1rem',borderColor:'#cccccc',borderStyle:'solid',flexDirection:'row', alignItems:'center'}]} >
                    <Icon style={styles.icon} name='display' />
                    <Text style={[styles.resultText,{flex:'11',wordWrap:'true'}]}>{this.state.data}</Text>
                    <Icon style={[styles.icon,{marginRight:'20rem'}]} name='arrowRight' onPress={this.press.bind(this)}/>
                </View> 
                </Touchable>  

                 
                <Touchable style={{backgroundColor:'#fff'}} activeStyle={{backgroundColor:'rgba(0,0,0,0.1)'}}  onPress={this.prompt}>                 
                    <View style={[styles.cellItem,{flexDirection:'row',alignItems:'center'}]}>
                        <View style={{flex:'12',flexDirection:'col'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.fontB}>卖家备注</Text><Icon style={styles.icon} name='all' /><Icon style={styles.icon} name='favorites' /><Icon style={styles.icon} name='browse' />
                            </View>        
                            <Text style={{color:'#888',fontSize:'30rem'}} >{this.state.data2}</Text>
                        </View>
                        <View style={{flex:'1'}}>
                            <Icon style={styles.icon} name='arrowRight' />
                        </View>
                    </View>  
                </Touchable>

                <Touchable style={{backgroundColor:'#fff'}} activeStyle={{backgroundColor:'rgba(0,0,0,0.1)' }} onPress={this.showMask}>                 
                   <View style={[styles.cellItem,{flexDirection:'row',alignItems:'center'}]}>
                        <View style={{flex:'12',flexDirection:'col'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.fontB}>买家留言</Text><Icon style={styles.icon} name='all' />
                            </View>        
                            <Text style={{color:'#888',fontSize:'30rem'}}>{this.state.data3}</Text>
                        </View>
                        <View style={{flex:'1'}}>
                            <Icon style={styles.icon} name='arrowRight' />
                        </View>
                    </View>  
                    {
                    this.state.maskVisible ?
                    <Mask style={styles.mask}>
                        <View style={styles.bg}>
                            <Button type="primary" onPress={this.hideMask} block>确认</Button>
                            <Input autoFocus multiple style={styles.textarea} placeholder="买家留言：" onChange={this.change}/>                            
                            
                        </View>
                    </Mask>
                    :null
                }
                </Touchable>
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

export default CommentsModule;