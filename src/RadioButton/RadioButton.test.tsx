import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';

describe('RadioButton component test', () => {  

  it('RadioButton, value = active, isDisable=false, isError = false, checked = false', () => {
    let rbValue = 'active';     
    
    const component = shallow(
      <RadioButton                               
        label={'Активен'}
        name={'radioButton'}                                  
        value={rbValue}           
        checked={rbValue === 'not active'}
        isDisable={false}        
        isError={false}         
        onChange={(value, event) => {           
          rbValue = value;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Активен');                        
       
    expect(component.find('.flag_input').exists()).toEqual(true);
    expect(component.find('.flag_input').prop('name')).toEqual('radioButton');
    expect(component.find('.flag_input').prop('disabled')).toEqual(false);
    expect(component.find('.flag_input').prop('checked')).toEqual(false);
    expect(component.find('.flag_input').prop('value')).toEqual('active');
        
    expect(component.find('.flag_span').exists()).toEqual(true);
     
    // After click in input checked must to be  = true
    component.find('.flag_input').simulate('click');                  
  });

  it('RadioButton, value = active, isDisable=false, isError = false, checked = true', () => {
    let rbValue = 'active';     
    
    const component = shallow(
      <RadioButton                               
        label={'Активен'}
        name={'radioButton'}                                  
        value={rbValue}           
        checked={rbValue == 'active'}
        isDisable={false}        
        isError={false}         
        onChange={(value, event) => {           
          rbValue = value;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Активен');                        
       
    expect(component.find('.flag_input').exists()).toEqual(true);
    expect(component.find('.flag_input').prop('name')).toEqual('radioButton');
    expect(component.find('.flag_input').prop('disabled')).toEqual(false);
    expect(component.find('.flag_input').prop('checked')).toEqual(true);
    expect(component.find('.flag_input').prop('value')).toEqual('active');
        
    expect(component.find('.flag_span').exists()).toEqual(true);
     
    // After click in input checked must to be  = false
    component.find('.flag_input').simulate('click');               
  });

  it('RadioButton, value = blocked, isDisable=true, isError = false, checked = true', () => {
    let rbValue = 'blocked';     
    
    const component = shallow(
      <RadioButton                               
        label={'Блокирован'}
        name={'radioButton'}                                  
        value={rbValue}           
        checked={rbValue === 'blocked'}
        isDisable={true}        
        isError={false}         
        onChange={(value, event) => {           
          rbValue = value;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Блокирован');                        
       
    expect(component.find('.flag_input').exists()).toEqual(true);
    expect(component.find('.flag_input').prop('name')).toEqual('radioButton');
    expect(component.find('.flag_input').prop('disabled')).toEqual(true);
    expect(component.find('.flag_input').prop('checked')).toEqual(true);
    expect(component.find('.flag_input').prop('value')).toEqual('blocked');
        
    expect(component.find('.flag_span_disable').exists()).toEqual(true);
     
    // After click in input checked must to be  = false
    component.find('.flag_input').simulate('click');
                 
  });

  it('RadioButton, value = error, isDisable=false, isError = true, checked = true', () => {
    let rbValue = 'error';     
    
    const component = shallow(
      <RadioButton                               
        label={'Ошибка'}
        name={'radioButton'}                                  
        value={rbValue}           
        checked={rbValue === 'error'}
        isDisable={false}        
        isError={true}         
        onChange={(value, event) => {           
          rbValue = value;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Ошибка');                        
       
    expect(component.find('.flag_input_error').exists()).toEqual(true);
    expect(component.find('.flag_input_error').prop('name')).toEqual('radioButton');
    expect(component.find('.flag_input_error').prop('disabled')).toEqual(false);
    expect(component.find('.flag_input_error').prop('checked')).toEqual(true);
    expect(component.find('.flag_input_error').prop('value')).toEqual('error');
    
    expect(component.find('.flag_span').exists()).toEqual(true);
     
    // After click in input checked must to be  = false
    component.find('.flag_input_error').simulate('click');                
  });

  
  it('RadioButton, styleType = B, value = active, isDisable=false, isError = false, checked = true', () => {
    let rbValue = 'active';     
    
    const component = shallow(
      <RadioButton                               
        label={'Активен'}
        name={'radioButton'}                                  
        value={rbValue}           
        checked={rbValue == 'active'}
        isDisable={false}        
        isError={false} 
        styleType={'B'}        
        onChange={(value, event) => {           
          rbValue = value;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Активен');                        
        
    expect(component.find('.button_input').exists()).toEqual(true);
    expect(component.find('.button_input').prop('name')).toEqual('radioButton');
    expect(component.find('.button_input').prop('disabled')).toEqual(false);
    expect(component.find('.button_input').prop('checked')).toEqual(true);
    expect(component.find('.button_input').prop('value')).toEqual('active');    
    
    expect(component.find('.button_span').exists()).toEqual(true);
      
    // After click in input checked must to be  = false
    component.find('.button_input').simulate('click');               
  });

});