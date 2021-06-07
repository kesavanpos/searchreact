import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from "../components/Search";
import Suggestions from "../components/Suggestion";


configure({adapter: new Adapter()});


describe('check Suggestion Component', () => {
    it('data is false', () => {
        const testdata = [{"city_id":1,"unique_name":"test"},{"city_id":2,"unique_name":"testing"}];
      const wrapper = shallow(<Suggestions results={testdata} />);
      expect(wrapper.find('Hi')).toBeTruthy();
    });
    it('data is true', () => {
        const testdata = [{"city_id":1,"unique_name":"test"},{"city_id":2,"unique_name":"testing"}];
      const wrapper = shallow(<Suggestions results={testdata}/>);
      expect(wrapper.contains('test')).toBeTruthy();
    });
  });

  test('pass invalid email to test input value', () => {
    const wrapper = shallow(<Search />)
 
    const inputEl = wrapper.contains("test-email");
    userEvent.type(inputEl, "test-email");
 
    expect(wrapper.contains("test-email")).toHaveValue("test");    
  });

  it("should render initial layout", () => {
    // when
    const component = shallow(<Search />);
    // then
    expect(component.getElements()).toMatchSnapshot();
});