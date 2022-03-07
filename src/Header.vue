<template>
    <div v-if="isLogged">

    </div>

    <div v-else>

    </div>
</template>

<script>

export default {
    props: ['isLogged', 'nombre']
}
</script>
