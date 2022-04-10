import React from 'react';import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox component test', () => { 
  
  it('Checkbox, isFilled = false, isDisable=false, isError = false, checked = false', () => {
    let isChecked = false;     
       
    const component = shallow(
      <Checkbox                      
        label='Активен'            
        checked={isChecked}
        isDisable={false}        
        isError={false}          
        onChange={() => (checked, event) => {           
          isChecked = checked;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Активен');                        
       
    expect(component.find('.flag_input').exists()).toEqual(true);
    expect(component.find('.flag_input').prop('disabled')).toEqual(false);
    expect(component.find('.flag_input').prop('checked')).toEqual(isChecked);
        
    expect(component.find('.flag_span').exists()).toEqual(true);
    
    // After click in input checked must to be  = true
    component.find('.flag_input').simulate('click', new Event('click'));           
               
  });

  it('Checkbox, isFilled = false, isDisable=false, isError = false, checked = true', () => {
    let isChecked = true;     
    
    const component = shallow(
      <Checkbox                      
        label='Активен'            
        checked={isChecked}
        isDisable={false}        
        isError={false}          
        onChange={(checked, event) => {           
          isChecked = checked;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Активен');                        
       
    expect(component.find('.flag_input').exists()).toEqual(true);
    expect(component.find('.flag_input').prop('disabled')).toEqual(false);
    expect(component.find('.flag_input').prop('checked')).toEqual(isChecked);
        
    expect(component.find('.flag_span').exists()).toEqual(true);
     
    // After click in input checked must to be  = false
    component.find('.flag_input').simulate('click');                 
  });

  it('Checkbox, isFilled = true, isDisable=true, isError = false, checked = false', () => {
    let isChecked = false;     
    
    const component = shallow(
      <Checkbox                      
        label='Блокирован'            
        checked={isChecked}
        isDisable={true}        
        isError={false}          
        onChange={(checked, event) => {           
          isChecked = checked;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Блокирован');                        
       
    expect(component.find('.flag_input').exists()).toEqual(true);
    expect(component.find('.flag_input').prop('disabled')).toEqual(true);
    expect(component.find('.flag_input').prop('checked')).toEqual(isChecked);
    
    
    expect(component.find('.flag_span_disable').exists()).toEqual(true);
     
    // After click in input checked must to be  = true
    component.find('.flag_input').simulate('click');                  
  });

  it('Checkbox, isFilled = false, isDisable=false, isError = true, checked = false', () => {
    let isChecked = false;     
    
    const component = shallow(
      <Checkbox                      
        label='Ошибка'            
        checked={isChecked}
        isDisable={false}        
        isError={true}          
        onChange={(checked, event) => {           
          isChecked = checked;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Ошибка');                        
       
    expect(component.find('.flag_input_error').exists()).toEqual(true);
    expect(component.find('.flag_input_error').prop('disabled')).toEqual(false);
    expect(component.find('.flag_input_error').prop('checked')).toEqual(isChecked);
    
    
    expect(component.find('.flag_span').exists()).toEqual(true);
     
    // After click in input checked must to be  = true
    component.find('.flag_input_error').simulate('click');                 
  });

  it('Checkbox, styleType = B, isFilled = false, isDisable=false, isError = false, checked = false', () => {
    let isChecked = false;     
    
    const component = shallow(
      <Checkbox                      
        label='Активен'            
        checked={isChecked}
        isDisable={false}        
        isError={false}
        styleType={'B'}          
        onChange={(checked, event) => {           
          isChecked = checked;           
        }}                               
      />
    );

    expect(component.find('label')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('Активен');                        
       
    expect(component.find('.button_input').exists()).toEqual(true);
    expect(component.find('.button_input').prop('disabled')).toEqual(false);
    expect(component.find('.button_input').prop('checked')).toEqual(isChecked);
    
    
    expect(component.find('.button_span').exists()).toEqual(true);
     
    // After click in input checked must to be  = true
    component.find('.button_input').simulate('click');             
  });

});