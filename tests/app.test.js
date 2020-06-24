import App from '../client/components/app.jsx';
import renderer from 'react-test-renderer';

describe('App', () => {

  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains header', () => {
    const wrapper = shallow(<App />);
    const header = <h1>Reviews</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('user input is echoed', () => {
    const wrapper = shallow(<App />);
    // const instance = wrapper.instance();
    // instance.find('input[name="Families"]').simulate('change');
    // expect(instance.state.filters.trip_type["Families"]).toBe(true);
    wrapper.find('input[name="Families"]').simulate('change', {
      target: {name: "Families"}
    });
    expect(wrapper.state()["filters"]["trip_type"]["Families"]).toBe(true);
  });

});