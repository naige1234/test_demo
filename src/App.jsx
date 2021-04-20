import React, { Component } from 'react'
import { Table ,Select,Divider} from 'antd';
export default class App extends Component {
  constructor(props){
    super(props);
    //下拉多选
    const { Option } = Select;
    const children = [];
          for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
          }
    this.state = {
      children: children
    }

  }
  componentDidMount() {
    //构造一些初始数据
    const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
      }
      
        
      this.setState({
        dataSource : data,
     
      })
    
  }

  render() {
    //定义表头，一般放在render()中
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    
    return (
      <div className = "Antd">
        
        <Divider>固顶表头表格</Divider>

        <Table columns={columns} dataSource={this.state.dataSource} scroll={{ y: 240 }} />

        <Divider>下拉多选的组件</Divider>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {this.state.children}
        </Select>
        
      </div>
    )
  }
}