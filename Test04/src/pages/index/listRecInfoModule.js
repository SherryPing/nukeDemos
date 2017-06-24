import { createElement, Component, render } from 'rax';
import { View, Text, Modal, Link, Env,ScrollView,Mask,Dialog,RefreshControl,Button,Slider,Touchable,Icon,Layout,Image,Tabbar,Iconfont,Switch,TextInput,ListView, Picker,Cell,Input} from 'nuke';
import Label from '$components/label/';
import G from '$util/global';
import {Http} from '$util/index';

class ListRecInfoModule extends Component {
    constructor() {
        super();
        this.state={
            data4:'上海市宝山区新二路组哦组走走走哦组哦组走走走走走',
           
        }
    }

     prompt1 = (e) =>{
        console.log('aaa');
        Modal.prompt('请输入正确地址：',[
        {
            onPress:(e)=>{
                 this.setState({data4:JSON.stringify(e).split("\"")[7]});
            },
            text:"确认"
        },
        {
            onPress:()=>{console.log('点击了取消')},
            text:"取消"
        }
        ] )
    }

    // 对话框
    showModal = () => {
        this.refs.modal1.show();
    }
    hideModal = () => {
        this.refs.modal1.hide();
    }
    hideModalAndConfirm = () =>{
        console.log('confirm')
        this.refs.modal1.hide();
    }
    onShow = (param) => {
        console.log('modal show', param);
    }

    onHide = (param) => {
        console.log('modal hide', param);
    }
    onMaskPress = (param) => {
        this.refs.modal1.hide();
    }
   
    render() {
      return ( 
      <View>        
        <View style={{backgroundColor:'#fff', paddingTop:'18rem',height:'200rem',borderWidth:'1rem',borderStyle:'solid',borderColor:'#ccc'}}>
            <View style={styles.textLine}>
               <View style={[styles.label,{flexDirection:'row'}]}>
                <Text style={[styles.labelText]}>收</Text><Text style={[styles.labelText]}>货</Text><Text style={[styles.labelText]}>人:</Text><Text></Text>
               </View>
               <View style={styles.result}>
                <Text style={styles.resultText}>今天是我啊</Text>
               </View>
               <View style={[styles.result,{flex:'2',flexDirection:'row', justifyContent:'flex-end',alignItems:'center'}]}>
                <Text style={styles.resultText}>1234456789</Text>
               <Icon style={[styles.icon,{color:'#0ff'}]} name='personalCenter' />
               </View>                                 
            </View>

            <View style={styles.textLine}>
               <View style={[styles.label,{flexDirection:'row'}]}>
                <Text style={styles.labelText}>收</Text><Text style={styles.labelText}>货</Text><Text style={styles.labelText}>地</Text><Text style={styles.labelText}>址：</Text>
               </View>
               <View style={[styles.result,{flex:'3',wordWrap:'true',flexDirection:'row', justifyContent:'center',alignItems:'center'}]}>
                <Text style={[styles.resultText,{flex:'11',wordWrap:'true'}]}>{this.state.data4}</Text>
                <Icon style={[styles.icon,{flex:'1'}]} src="https://img.alicdn.com/tfs/TB1vUv.JFXXXXbAXFXXXXXXXXXX-50-50.png" />
               </View>                                
            </View>
        </View>

        <View>
            <Button.Group style={styles.btnWithMargin}>
                <Button type="normal" onPress={this.showModal}>核对地址</Button>
                <Button type="normal" onPress={this.prompt1}>修改地址</Button>
            </Button.Group>
        </View>

         <Dialog ref="modal1" duration={1000} contentStyle={styles.modalStyle} onShow={this.onShow} onHide={this.onHide} onMaskPress={this.onMaskPress}>
            <View style={styles.body}>
                <View style={styles.head}><Text style={styles.textHead}>请确认您的地址：</Text></View>
                <View style={styles.tips}><Text style={styles.text}>{this.state.data4}</Text></View>
            </View>
            <View style={styles.footer}>
                <Button style={styles.dlgBtn} type="normal" onPress={this.hideModal}>取消</Button>
                <Text style={styles.dlgBtnSeperator}>|</Text>
                <Button style={styles.dlgBtn} type="normal" onPress={this.hideModalAndConfirm}>确定</Button>

            </View>

        </Dialog>
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
  
    // 定义按钮
     btnWithMargin:{
        marginTop:'25rem', 
        marginBottom:'25rem', 
        marginLeft:'32rem', 
        marginRight:'32rem' ,
        paddingLeft:'350rem',
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

export default ListRecInfoModule;
    





