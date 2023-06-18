<template>
    <div>button</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//枚举按钮大小
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm',
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    class?: string
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: any;
    href?: string;
}
type NativeButtonProps = BaseButtonProps
type AnchorButtonProps = BaseButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export default defineComponent({
    setup(props: ButtonProps) {
        console.log(props,'props')
        const {
        disabled,  size, btnType, children, href, ...restProps
    } = props
    }
})

</script>
<style lang="scss" scoped></style>