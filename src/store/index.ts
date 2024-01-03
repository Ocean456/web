// userStore.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id : 'UserStore',
    state : () => {
        const savedState = sessionStorage.getItem('UserStore');
        if (savedState) {
            return JSON.parse(savedState);
        } else {
            return {
                account : '',
                type : '',
                isLoggedIn : false
            };
        }
    },
    actions : {
        login(account : string, type : string) {
            this.account = account;
            this.type = type;
            this.isLoggedIn = true;
            sessionStorage.setItem('UserStore', JSON.stringify(this.$state));
        },
        logout() {
            this.account = '';
            this.type = '';
            this.isLoggedIn = false;
            sessionStorage.setItem('UserStore', JSON.stringify(this.$state));
        }
    }
});