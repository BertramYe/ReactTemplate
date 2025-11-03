import { API_LIST } from '@/api/urls';
import Requester from '@/api/request';
import { UserProfileSchema} from '@/api/schemas';
import { asyncPool } from '@/utils/parall_tasks_handler';
import {type TState} from '@/hooks'

// requst Demo
const Api = {
  async getLeads(_pre:TState,params:TObject | FormData) {
    const result = await Requester.post(API_LIST.GET_USER, params,true,UserProfileSchema)
    return result
  },

}

export default Api




