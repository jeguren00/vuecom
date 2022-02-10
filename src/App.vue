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
                    { id:1, contenido:"adios muy buenas", fecha:"17/13/11" },
                    { id:2, contenido:"adios muy puenas", fecha:"18/14/11" },
                    { id:3, contenido:"adios muy duenas", fecha:"19/15/11" },
                    { id:4, contenido:"adios muy cuenas", fecha:"20/16/11" },
                ]
            }
        },
        methods: {
            async guardarMensaje(){
                //guardar en la base de datos
                //this.comentarios.push({id:5, texto: this.sucomentario});
                let resultado = await (await fetch(`/api/add?contenido=${this.sucomentario}`));
                this.comentarios.push({id:resultado.insertId, contenido: this.sucomentario});
                this.sucomentario = "";
            }
            , async cargarComentarios() {
                let respuesta = await fetch("/api/get");
                let respuesta_Json = await respuesta.json();
                this.comentarios.push(respuesta_Json);
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
