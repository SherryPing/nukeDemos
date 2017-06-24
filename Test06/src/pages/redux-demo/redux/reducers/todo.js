'use strict';
import {INIT_LIST,DELETE_ITEM,ADD_ITEM,MODIFY_ITEM} from '../actions/todo'
const initState = [];

export default function todoMVC(state=initState,action){
  switch (action.type) {
    case INIT_LIST:
        return action.initState.value;
    case DELETE_ITEM:
        return [
          ...state.slice(0, action.id),
          ...state.slice(action.id + 1)
        ];
    case ADD_ITEM:
      return [
        ...state,
        {
          time:action.obj.time,
          content:action.obj.content,
          status:false
        }
      ]
    case MODIFY_ITEM:
      return [
        ...state.slice(0, action.id),
        Object.assign({},state[action.id],{
          status:!state[action.id]['status']
        }),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}
