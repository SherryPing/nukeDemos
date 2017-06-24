/**
 * 功能描述：核对订单按钮
 * @author spp
 */


import { createElement,Component, render } from 'rax';
import { View,Button} from 'nuke';

class CheckBtn extends Component {
    
    constructor() {
        super();
    }
   
    render() {
        return (
            <View style={styles.linebtn}>
                <Button type="normal">核对订单</Button>
            </View>
        );
    }
}

const styles={
    linebtn:{
        marginTop:'10rem',
        marginBottom:'28rem',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:'30rem',    
    }     
}

export default CheckBtn;

