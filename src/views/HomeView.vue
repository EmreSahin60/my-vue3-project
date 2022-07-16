<template>
  <div class="home">
    <ItemListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent, reactive, computed, onMounted } from "vue";
import ItemListComponent from "@/components/items/ItemList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
export default defineComponent({
  name: "Home",
  components: {
    ItemListComponent,
  },
  setup() {
    const onSelectItem = (item: ItemInterface) => {
      store.dispatch("selectItem", {
        id: item.id,
        selected: !item.selected,
      });
    };
    const items = computed(() => {
      return store.state.items;
    });
    const loading = computed(() => {
      return store.state.loading;
    });
    onMounted(() => {
      store.dispatch("loadItems");
    });
    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>
