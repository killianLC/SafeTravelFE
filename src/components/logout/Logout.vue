<script>
import AuthService from '@/services/AuthService.ts'

export default {    
    name: "Logout",
    mounted() {
        this.logout();
    },
    methods: {
        logout() {
            AuthService.logout();
            this.$router.push({name: "home"});
            this.$store.commit('setIsLogged', false);
            if(document.getElementById("connected"))location.reload();
        }
    }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>