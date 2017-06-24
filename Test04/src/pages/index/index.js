'use strict';
import { createElement, Component, render } from 'rax';
import { View, ScrollView} from 'nuke';
import Label from '$components/label/';
import G from '$util/global';
import {Http} from '$util/index';

import ListHeadModule from'./ListHeadModule' ;
import ListRecInfoModule from './ListRecInfoModule';
import ListSliderModule from './ListSliderModule';
import CommentsModule from './CommentsModule';
import ComListModule from './ComListModule';
import FixButtonModule from './FixButtonModule';

let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
    }

   render() {
         return (  
           <ScrollView >
                <View style={{flex:'1',paddingBottom:'200rem'}}>
                    <ListHeadModule></ListHeadModule>
                    <ListRecInfoModule></ListRecInfoModule>
                    <ListSliderModule></ListSliderModule>
                    <CommentsModule></CommentsModule>
                    <ComListModule></ComListModule>
                    <FixButtonModule></FixButtonModule>                           
                </View>
            </ScrollView>
        )
    }
}


render(<App/>);