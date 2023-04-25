<template>
  <div>
    <h1>ref/reactive/readonly/toRefs/toRef</h1>
    <div>{{ name }}</div>
    <div>{{ nameObj.name }}</div>
    <div>{{ nameReadonly.name }}</div>
    <div>{{ nameToref }}------{{ ageTorefs }}</div>
    <div>{{ defaultName }}</div>
  </div>
</template>
<script>
import {
  //处理基本数据类型
  ref,
  //处理复杂数据类型
  reactive,
  //只读属性,不受响应式影响
  readonly,
  toRefs,
  toRef,
} from 'vue'
export default {
  setup(props, context) {
    //ref
    let name = ref('ref')
    setTimeout(() => {
      name.value =
        "ref:处理基本数据类型,将{name:'ref'}转化为proxy({name:'ref'})"
    }, 3000)

    //reactive/readonly
    let nameObj = reactive({ name: 'reactive' })
    let nameReadonly = readonly({ name: 'readonly:为只读属性不受响应式影响' })
    setTimeout(() => {
      nameObj.name =
        "reactive:处理复杂数据类型,将{name:'reactive'}转化为proxy({name:'reactive'})"
      nameReadonly.name = 'hua'
    }, 3000)

    //toRefs
    let nametoRefs = reactive({ nameToref: 'toRefs', ageTorefs: '29' })
    setTimeout(() => {
      nametoRefs.nameToref =
        "toRefs:将响应式下发到复杂数据类型的具体每一项,将 proxy({ nameToref: 'toRefs', ageTorefs: '29' }) 转化为 { nameToref : proxy( {value:toRefs} ), ageTorefs: proxy( {value:'29'} ) }"
      nametoRefs.ageTorefs = '200'
    }, 3000)
    const { nameToref, ageTorefs } = toRefs(nametoRefs)

    //toRef
    const objToref = reactive({ nametoRef: 'toRef' })
    const defaultName = toRef(objToref, 'defaultName')
    setTimeout(() => {
      defaultName.value = 'toRef:将响应式下发到复杂数据类型的指定项'
    }, 3000)
    console.log(objToref,defaultName,'defaultName')
    return { name, nameObj, nameReadonly, nameToref, ageTorefs, defaultName }
  },
}
</script>
<style scoped></style>
