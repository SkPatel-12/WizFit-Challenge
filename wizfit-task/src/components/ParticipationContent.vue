<template>
    <v-card class="w-50">
        <v-card-item  class="justify-center">
            <v-card-title class="text-pink-600">Are you ready to take challenge?</v-card-title>
        </v-card-item>
        <v-card-text>
        <p class="text-center">Download Wizards App</p>
        <div class="flex justify-center items-center">
          <div class="w-1/4">
            <img src="@/assets/images/goolge-store.png"></img>
          </div>
          <div class="w-1/4">
            <img src="@/assets/images/apple-store.png"></img>
          </div>
        </div>
        <v-divider :thickness="2" class="my-5">
            <span class="mx-2">Or you can sign up right now</span>
        </v-divider>
        <v-text-field
            v-model="searchQuery"
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search School"
            variant="solo"
            hide-details
            single-line
        ></v-text-field>
        <p v-if="!loading && !schools.length" class="text-center my-5">
            Data not found
        </p>
      <v-list v-if="!loading" class="my-2 max-h-32">
        <v-list-item
          v-for="school in schools"
          :key="school.id"
          :title="school.school_name"
          class="m-2 border"
        >
          <template v-slot:prepend>
            <v-avatar color="grey-lighten-1">
              <v-img :src="school.logo" alt="shool_logo"></v-img>
            </v-avatar>
          </template>

          <template v-slot:append>
            <v-btn
              color="pink"
              variant="outlined"
            >Join Campaign</v-btn>
          </template>
        </v-list-item>
      </v-list>
      <div v-else class="text-center my-5">
        <v-progress-circular
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useSchoolsStore } from '@/stores/schoolsStore.js'
export default{
    data() {
        return {
            searchQuery: '',
        }
    },
    computed: {
        ...mapState(useSchoolsStore, ['schools', 'loading'])
    },
    watch: {
        searchQuery(value) {
            value.length >= 3 && this.getSchoolsData(value)
            value.length === 0 && this.getSchoolsData()
        }
    },
    methods: {
        ...mapActions(useSchoolsStore, ['getSchoolsData']),
    },
    async mounted() {
        await this.getSchoolsData()
    }
}
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>