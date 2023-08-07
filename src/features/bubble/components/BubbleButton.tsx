import { Show } from 'solid-js'
import { isNotDefined } from '@/utils/index'
import { ButtonTheme } from '../types'

type Props = ButtonTheme & {
    isBotOpened: boolean
    toggleBot: () => void
}

const defaultButtonColor = '#341964'
const defaultIconColor = 'white'
const defaultBottom = '20'
const defaultRight = '20'
const defaultCustomIconSrc = 'https://cdn.shopify.com/s/files/1/0793/8418/3092/files/bblogo.png?v=1690918654';


export const BubbleButton = (props: Props) => {
    return (
        <button
            part='button'
            onClick={() => props.toggleBot()}
            class={
                `fixed shadow-md rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 flex justify-center items-center animate-fade-in` +
                (props.size === 'medium' ? ' w-12 h-12' : ' w-16 h-16')
            }
            style={{
                'background-color': props.backgroundColor ?? defaultButtonColor,
                'z-index': 42424242,
                'right': props.right ? `${props.right.toString()}px` : `${defaultRight}px`,
                'bottom': props.bottom ? `${props.bottom.toString()}px` : `${defaultBottom}px`,
            }}
        >
            <img
    src={props.customIconSrc ?? defaultCustomIconSrc}
    class={`rounded-full object-cover` + (props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100') + (props.size === 'medium' ? ' w-7 h-7' : ' w-9 h-9')}
    alt='Bubble button icon'
/>


            
        </button>
    )
}
