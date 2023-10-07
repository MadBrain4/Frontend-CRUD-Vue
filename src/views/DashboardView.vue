<template>
    <div>
        Hola {{ store.name }}, {{ store.id }}
    </div>
</template>

<script setup>
    import { useLoginStore } from '@/pinia_store/login'

    const store = useLoginStore()
</script>
