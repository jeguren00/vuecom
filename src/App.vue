<template>
    <input type="text" v-model="sucomentario" placeholder="Deja tu comentario" @keypress.enter="guardarMensaje">
    <button @click="cargarComentarios">Cargar</button>
    <p v-for="comentario in comentarios" :key="comentario.id">
        {{ comentario.contenido }}
    </p>
</template>

<script>
    export default {
        name:"app",
        data() {
            return {
                sucomentario: "hola",
                comentarios: [
                    { id:1, texto:"adios muy buenas", fecha:"17/13/11" },
                    { id:2, texto:"adios muy puenas", fecha:"18/14/11" },
                    { id:3, texto:"adios muy duenas", fecha:"19/15/11" },
                    { id:4, texto:"adios muy cuenas", fecha:"20/16/11" },
                ]
            }
        },
        methods: {
            guardarMensaje(){
                //guardar en la base de datos
                this.comentarios.push({id:5, texto: this.sucomentario});
            }
            , async cargarComentarios() {
                let respuesta = await fetch("/api/get");
                let respuesta_Json = await respuesta.json();
                this.comentarios = respuesta_Json;
            }
        }
    }
</script>

<style scoped>
    input {
        font-family: sans-serif;
        color: blue;
    }  
</style>
