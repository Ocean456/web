// userStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id : 'UserStore',
    state : () => ({
        account : '',
        type : '',
        isLoggedIn : false
    }),
    actions : {
        login(account : string, type : string) {
            this.account = account;
            this.type = type;
            this.isLoggedIn = true;
            console.log(this.account, this.type, this.isLoggedIn);
        },
        logout() {
            this.account = '';
            this.type = '';
            this.isLoggedIn = false;
        }
    }
});