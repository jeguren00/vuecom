<template>
    <div v-if="isAuthenticated">
        <p>Nombre usuario: {{ this.user.nickname}} Para salir: (<router-link to="/logout">Salir</router-link>)</p>
        <p>Estas logeado: {{ this.isAuthenticated}}</p>
        <br>
        <br>
        <input type="text" v-model="sucomentario" placeholder="Deja tu comentario" @keypress.enter="guardarMensaje">
        <button @click="cargarComentarios">Cargar</button>
        <p v-for="comentario in comentarios" :key="comentario.id">
            {{ comentario.contenido }}
        </p> 
        <Comment cont="aqui va el content"></Comment>
        <Header :isLogged="isAuthenticated" :nombre="this.user.nickname" :cont="comentarios"></Header>
    </div>
    <div v-else>
        <router-link to="/login">Login</router-link>
    </div><br>

</template>

<script>
    import Comment from './comment.vue';
    
    export default {
        components: {
            Comment, Header
        },
        name:"app",
        data() {
            return {
                sucomentario: "hola",
                comentarios: [{ id:1, contenido:"adios muy buenas", fecha:"17/13/11" }],
                isAuthenticated: this.$auth0.isAuthenticated,
                user: this.$auth0.user
            }
        },
        created(){
            this.cargarComentarios();
        },
        methods: {
            async guardarMensaje(){
                //guardar en la base de datos
                const token = await this.$auth0.getAccessTokenSilently();
                const resultado = await (await fetch(`/api/add?contenido=${this.sucomentario}`,{ headers: { Authorization: `Bearer ${token}`}})).json();
                this.comentarios.push({id:resultado.insertId, contenido: this.sucomentario});
                this.sucomentario = "";
            }
            , async cargarComentarios() {
                let respuesta = await fetch("/api/get");
                let respuesta_Json = await respuesta.json();
                this.comentarios = respuesta_Json;
                console.log(this.comentarios);
            }
        }
    }
</script>

<style src="./comments.css" scoped></style>