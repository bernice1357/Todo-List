import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [//新增的list
        ],
        rule:{//表單驗證規則
            title: [{required: true, message:"欄位不可為空"},
                    {min: 0, max: 10, message:"不可超過10個字"}],
            date: [{required: true, message:"欄位不可為空"}]
        },
    },
    mutations: {
        addList(state, form) {
            if(form.title){
                form.date = form.date.toString().substr(4,6);//日期格式處理
                state.list.push(form);
            }
        },
        delList(state, num){
            state.list.splice(num,1);//刪除list
        }
    }
})
