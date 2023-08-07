import { isMobile } from '@/utils/isMobileSignal'

export const DefaultAvatar = () => {
  return (
    <figure
      class={
        'flex justify-center items-center rounded-full text-white relative ' +
        (isMobile() ? 'w-6 h-6 text-sm' : 'w-10 h-10 text-xl')
      }
      data-testid="default-avatar"
    >
      <img
        src="https://cdn.shopify.com/s/files/1/0793/8418/3092/files/bblogo.png?v=1690918654"
        alt="Default Bot Avatar"
        class={
          'absolute top-0 left-0 rounded-full ' +
          (isMobile() ? ' w-6 h-6' : 'w-full h-full')
        }
      />
    </figure>
  )
}