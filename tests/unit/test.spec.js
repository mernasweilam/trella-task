import { mount } from "@vue/test-utils";
import FilterShipments from "../../src/components/filter";


describe("FilterShipments Component unit test: ", () => {

  test('calls fetchShipments task when need driver button is clicked',() =>{
    const wrapper = mount(FilterShipments, {
      propsData: { 
        task:{ 
          name: "fetch Shipments",
          completed: false
        }
       }
    });
      const submitDriverAction = jest.fn();
      wrapper.setMethods({
        submitDriverAction: submitDriverAction
      });
      wrapper.find('.submit-driver-action').trigger('click');
      expect(submitDriverAction).toHaveBeenCalled();
  });
  test('calls nearbyShipments task when need driver button is clicked',() =>{
    const wrapper = mount(FilterShipments, {
      propsData: { 
        task:{ 
          name: "fetch nearbyShipments",
          completed: false
        }
       }
    });
      const submitNearbyAction = jest.fn();
      wrapper.setMethods({
        submitNearbyAction: submitNearbyAction
      });
      wrapper.find('.submit-nearby-action').trigger('click');
      expect(submitNearbyAction).toHaveBeenCalled();
  });
});
