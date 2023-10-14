<template>
    <div>
        <Button @click="toggle">按钮</Button>
        <DialogVue 
            v-model="visible" 
            title="小黄的title"
            :close-on-click-overlay="false"
            submit-text="肯定"
            cancel-text="否定"
            @onSubmit="onSubmit"
            @onCancel="onCancel"
        >
            <p>内容一</p>
            <p>内容二</p>
            <!-- <template #footer>
                <Button level="primary" @click="">我点确定</Button>
                <Button plain @click="">我点取消</Button>
            </template> -->
        </DialogVue>

        <!-- <el-dialog
            title=""
            v-model=""
            width="30%"
            :before-close="">
            <span></span>
            <template #footer>
                <span>
                    <el-button @click=" = false">Cancel</el-button>
                    <el-button type="primary" @click="">OK</el-button>
                </span>
            </template>
        </el-dialog> -->
        
    </div>
</template>

<script setup lang="ts">
import DialogVue from '@/lib/Dialog.vue';
import { ref } from 'vue';
import Button from '@/lib/Button.vue';

const visible = ref(false)

const toggle = () => visible.value = !visible.value

const onBeforeClose = () => {
   console.log('aaaaa')
   return false
}

const onSubmit =  () => {
     setTimeout(() => {
        alert('哈哈哈哈哈')
        visible.value = false
    }, 1000);
}

const onCancel =  () => {
    visible.value = false
}

</script>

<style lang="scss" scoped>

</style>