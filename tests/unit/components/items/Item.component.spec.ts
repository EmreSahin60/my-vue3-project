import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ItemComponent from "@/components/items/children/Item.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";

describe("Item.component.vue", () => {
  it("renders an Item correctly", () => {
    const model: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    };
    const wrapper = shallowMount(ItemComponent, {
      props: {
        model: model,
      },
    });
    expect(wrapper.text()).to.include("Unit test item 1");
    let domEl = wrapper.find("div.name");
    expect(domEl.text()).to.equal("Unit test item 1");
  });
});
