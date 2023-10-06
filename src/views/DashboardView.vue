<template>
    <div>
        Hola {{ store.name }}
    </div>
</template>

<script setup>
    import { useLoginStore } from '@/pinia_store/login'

    const store = useLoginStore()
</script>
