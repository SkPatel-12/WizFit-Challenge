import { defineStore } from 'pinia'
import axios from 'axios'

export const useSchoolsStore = defineStore('schools', {
  state: () => ({ schools: [], loading: false }),
  actions: {
    async getSchoolsData(searchStr = '') {
      try {
        this.loading = true;
        const schoolsDataResponse = await axios.get(`http://api.devharlemwizardsinabox.com/campaign/campaign_school_list/?search=${searchStr}`);
        this.schools = schoolsDataResponse.data.school_list;
      } catch (error) {
        console.log('error', error);
      } finally {
        this.loading = false;
      }
    }
  },
})
