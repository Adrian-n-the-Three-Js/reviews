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

  // TRAVELER RATING
  it('user selects excellect rating', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="traveler_rating"] input[name="5"]').simulate('change', {
      target: {name: "5"}
    });
    expect(wrapper.state()["filters"]["overall_rating"]["5"]).toBe(true);
  });

  it('user selects very good rating', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="traveler_rating"] input[name="4"]').simulate('change', {
      target: {name: "4"}
    });
    expect(wrapper.state()["filters"]["overall_rating"]["4"]).toBe(true);
  });

  it('user selects average rating', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="traveler_rating"] input[name="3"]').simulate('change', {
      target: {name: "3"}
    });
    expect(wrapper.state()["filters"]["overall_rating"]["3"]).toBe(true);
  });

  it('user selects poor rating', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="traveler_rating"] input[name="2"]').simulate('change', {
      target: {name: "2"}
    });
    expect(wrapper.state()["filters"]["overall_rating"]["2"]).toBe(true);
  });

  it('user selects terrible rating', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="traveler_rating"] input[name="1"]').simulate('change', {
      target: {name: "1"}
    });
    expect(wrapper.state()["filters"]["overall_rating"]["1"]).toBe(true);
  });

  // TIME OF YEAR
  it('user selects Jan', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="1"]').simulate('change', {
      target: {name: "1"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["1"]).toBe(true);
  });

  it('user selects Feb', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="2"]').simulate('change', {
      target: {name: "2"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["2"]).toBe(true);
  });

  it('user selects Mar', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="3"]').simulate('change', {
      target: {name: "3"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["3"]).toBe(true);
  });

  it('user selects Apr', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="4"]').simulate('change', {
      target: {name: "4"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["4"]).toBe(true);
  });

  it('user selects May', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="5"]').simulate('change', {
      target: {name: "5"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["5"]).toBe(true);
  });

  it('user selects Jun', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="6"]').simulate('change', {
      target: {name: "6"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["6"]).toBe(true);
  });

  it('user selects Jul', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="7"]').simulate('change', {
      target: {name: "7"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["7"]).toBe(true);
  });

  it('user selects Aug', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="8"]').simulate('change', {
      target: {name: "8"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["8"]).toBe(true);
  });

  it('user selects Sep', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="9"]').simulate('change', {
      target: {name: "9"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["9"]).toBe(true);
  });

  it('user selects Oct', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="10"]').simulate('change', {
      target: {name: "10"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["10"]).toBe(true);
  });

  it('user selects Nov', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="11"]').simulate('change', {
      target: {name: "11"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["11"]).toBe(true);
  });

  it('user selects Dec', () => {
    const wrapper = shallow(<App />);
    wrapper.find('div[className="time_of_year"] input[name="12"]').simulate('change', {
      target: {name: "12"}
    });
    expect(wrapper.state()["filters"]["month_of_stay"]["12"]).toBe(true);
  });

  // TRAVELER TYPE
  it('user selects families', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="Families"]').simulate('change', {
      target: {name: "Families"}
    });
    expect(wrapper.state()["filters"]["trip_type"]["Families"]).toBe(true);
  });

  it('user selects couples', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="Couples"]').simulate('change', {
      target: {name: "Couples"}
    });
    expect(wrapper.state()["filters"]["trip_type"]["Couples"]).toBe(true);
  });

  it('user selects solo', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="Solo"]').simulate('change', {
      target: {name: "Solo"}
    });
    expect(wrapper.state()["filters"]["trip_type"]["Solo"]).toBe(true);
  });

  it('user selects business', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="Business"]').simulate('change', {
      target: {name: "Business"}
    });
    expect(wrapper.state()["filters"]["trip_type"]["Business"]).toBe(true);
  });

  it('user selects friends', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="Friends"]').simulate('change', {
      target: {name: "Friends"}
    });
    expect(wrapper.state()["filters"]["trip_type"]["Friends"]).toBe(true);
  });

  it('should change search term state upon user entry', () => {
    const wrapper = shallow(<App />);
    wrapper.find('input[name="searchTerm"]').simulate('change', {
      target: {value: "Hawaii"}
    });
    expect(wrapper.state()["filters"]["search"]["searchTerm"]).toBe("Hawaii");
  });

});