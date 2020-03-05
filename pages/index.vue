<!--
1. This componet does it all - Fetches the photos, displays them in list, does a complete crud here -SRP ->divide list, divide dialog, crud methods in separate files
2. This component is inflexible to show Cards instead of List of photos -> OCP -> use Slot in Home.vue, PhotosList -> <slot/> -> PhotoTable, PhotoGrid
3. The API methods will be fetch and axios -> but we have to have a single parent class- should be independent of axios vs fetch - LSP
4. ISP - both Card and Row component should not have all the fields passed to components, just pass required props
5. DIP - All the API classes should implement API interface, and Home.vue should depend on IAPI, rather than API. Depend on Abstractions 
-->
<template>
  <v-data-table :headers="headers" :items="photos" sort-by="calories" class="elevation-1">
    <template v-slot:item.thumbnailUrl="{ item }">
      <v-img width="50" :src="item.thumbnailUrl" />
    </template>
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Happy Photos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Photo</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-file-input label="Large file" v-model="editedItem.url"></v-file-input>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-file-input label="Thumbnail file" v-model="editedItem.thumbnailUrl"></v-file-input>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    photos: [],
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "Title", value: "title", sortable: true },
      { text: "Thumbnail", value: "thumbnailUrl" },
      { text: "Actions", value: "action", sortable: false }
    ],
    editedIndex: -1,
    editedItem: {
      title: "",
      url: "",
      thumbnailUrl: ""
    },
    defaultItem: {
      title: "",
      url: "",
      thumbnailUrl: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    //this.initialize();
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      this.photos = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      // fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      //   .then(response => response.json())
      //   .then(photos => (this.photos = photos));
    },
    initialize() {
      this.photos = [
        {
          title: "Dummy photo 1",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 2",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 3",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 4",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 5",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 6",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 7",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 8",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 9",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          title: "Dummy photo 10",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.photos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.photos.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.photos.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.photos[this.editedIndex], this.editedItem);
      } else {
        this.photos.push({ id: this.photos.length + 1, ...this.editedItem });
      }
      this.close();
    }
  }
};
</script>