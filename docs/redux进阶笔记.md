#### react-redux是如何实现redux和react的连接的？
##### Provider -- 整个引用最外层组件，接收一个store作为props
```
 export default Provider extends Component(){
     getChildContext(){
         return {
             store:this.store
         }
     }
     constructor(props,context){
         super(props,context){
             this.store = props.store
         }
     }

     render(){
         const { children} = this.props;
         return Children.only(children);
     }
 }
```
Provider 组件在constructor中拿到props中的store，挂载到当前实例上。定义getChildContext方法使得嵌套在Provider组件中的任意组件跨组件接收store   

***
##### connect -- 接收四个参数，用于包装组件，使得组件连接redux
```
import hoistStatics from 'hoist-non-react-statics';
export default function connect(mapStateToProps,mapDispatchToProps,mergeProps,options={}){
    // ...
    return function wrapWithConnect(WrappedComponent){
        // ...
        class Connect extends Component(){
           render(){
            // ...
                if(withRef){
                    this.renderElement = createElement(WrappedComponent,{
                        ...this.mergedProps,
                        ref:'wrappedInstance
                    })
                }else{
                    this.renderedElement = createElement(WrappedComponent,{
                        ...this.mergeProps
                    })
                }
                return this.renderElement;
            }
        }
        
        return hoistStatics(Connect,WrappedComponent)
    }
}
```


