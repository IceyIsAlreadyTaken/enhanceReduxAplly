该program为一个简单的counter demo，可以执行+1，-1，奇数+1，延时+1操作

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Version 1.0.0   
手动实现react和redux的连接   
缺点：   
1、无法直接给根组件下的组件传递state和方法   
2、任意state变化都会导致整个组件树重新渲染，没有性能优化

### Version 1.0.1
使用react-redux Provider+connect实现react和redux的连接   
使用react-thunk中间件支持action创建函数返回一个函数
