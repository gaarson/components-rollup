import React from 'react';
import { shallow, mount } from 'enzyme';
import { GroupBox, ItemType } from '../GroupBox';

const cbData: ItemType[] = [
  {
    label: 'Checkbox 0',
    value: '0',
    width: 100,
    checked: true,
    isDisable: false,
    isError: false,
  },
  {
    label: 'Checkbox 1',
    value: '1',
    width: 100,
    checked: false,
    isDisable: true,
    isError: false,
  },
];

const rbData: ItemType[] = [
  {
    label: 'Radio 0',
    value: '0',
    width: 100,
    checked: true,
    isDisable: false,
    isError: false,
  },
  {
    label: 'Radio 1',
    value: '1',
    width: 100,
    checked: false,
    isDisable: false,
    isError: false,
  },
];

describe('Groupbox component test: checkboxes', () => {
  let rbValue = '';
  let result = cbData;
  
  it('group of checkboxes exist', () => {
    const component = shallow(
      <GroupBox
        isCheckbox={true}
        groupName={'Check'}
        data={result}
        styleType={'B'}
        width={300}
        onChange={(res: ItemType[], val: string, event) => {
          result = res;
          rbValue = val;
        }}
      />
    );
            
    expect(component.find('Checkbox')).toHaveLength(2);
    expect(component.find('Checkbox').at(0).prop('name')).toEqual('Check');
    expect(component.find('Checkbox').at(0).prop('label')).toEqual('Checkbox 0');

    expect(component.find('Checkbox').at(0).prop('checked')).toEqual(true);
    expect(component.find('Checkbox').at(1).prop('checked')).toEqual(false);

    expect(component.find('Checkbox').at(0).prop('isDisable')).toEqual(false);
    expect(component.find('Checkbox').at(1).prop('isDisable')).toEqual(true);

    expect(component.find('Checkbox').at(0).prop('isError')).toEqual(false);
                
  });

  it('calls onChange', () => {
    let component = mount(<GroupBox
      isCheckbox={true}
      groupName={'Check'}
      data={result}
      styleType={'B'}
      width={300}
      onChange={(res: ItemType[], val: string, event) => {
        result = res;
        rbValue = val;
      }}
    /> );
    expect(component.find('input[value="0"]').exists()).toEqual(true);
    expect(component.find('input[value="0"]').prop('checked')).toEqual(true);
    component.find('input[value="0"]').simulate('change', { target: { checked: false, value: '0'} });
    expect(result[0].checked).toEqual(false);
    
    component = mount(<GroupBox
      isCheckbox={true}
      groupName={'Check'}
      data={result}
      styleType={'B'}
      width={300}
      onChange={(res: ItemType[], val: string, event) => {
        result = res;
        rbValue = val;
      }}
    /> );
    expect(component.find('input[value="0"]').prop('checked')).toEqual(false);
          
  });

});

describe('Groupbox component test: radio buttons', () => {
  let rbValue = '';
  let result = rbData;
  
  it('group of radio buttons exist', () => {
    const component = shallow(
      <GroupBox
        isCheckbox={false}
        groupName={'Radio'}
        data={result}
        styleType={'B'}
        width={300}
        onChange={(res: ItemType[], val: string, event) => {
          result = res;
          rbValue = val;
        }}
      />
    );
            
    expect(component.find('RadioButton')).toHaveLength(2);
    expect(component.find('RadioButton').at(0).prop('name')).toEqual('Radio');
    expect(component.find('RadioButton').at(0).prop('label')).toEqual('Radio 0');

    expect(component.find('RadioButton').at(0).prop('checked')).toEqual(true);
    expect(component.find('RadioButton').at(1).prop('checked')).toEqual(false);

    expect(component.find('RadioButton').at(0).prop('isDisable')).toEqual(false);
    expect(component.find('RadioButton').at(1).prop('isDisable')).toEqual(false);

    expect(component.find('RadioButton').at(0).prop('isError')).toEqual(false);
                
  });

  it('calls onChange', () => {
    let component = mount(<GroupBox
      isCheckbox={false}
      groupName={'Radio'}
      data={result}
      styleType={'B'}
      width={300}
      onChange={(res: ItemType[], val: string, event) => {
        result = res;
        rbValue = val;
      }}
    /> );

    expect(component.find('input[value="0"]').exists()).toEqual(true);
    expect(component.find('input[value="0"]').prop('checked')).toEqual(true);
    expect(component.find('input[value="1"]').prop('checked')).toEqual(false);
    component.find('input[value="1"]').simulate('change', { target: { checked: true, value: '1'} });
    expect(result[0].checked).toEqual(false);
    expect(result[1].checked).toEqual(true);
    
    component = mount(<GroupBox
      isCheckbox={false}
      groupName={'Radio'}
      data={result}
      styleType={'B'}
      width={300}
      onChange={(res: ItemType[], val: string, event) => {
        result = res;
        rbValue = val;
      }}
    /> );
      
    expect(component.find('input[value="0"]').prop('checked')).toEqual(false);
    expect(component.find('input[value="1"]').prop('checked')).toEqual(true);
          
  });

});

