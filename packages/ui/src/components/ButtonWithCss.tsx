import { css } from '@emotion/react'

const ButtonWithCss = () => {
  return <button css={style}>buttonWithCss</button>
}

const style = css({
  color: 'red'
})

export default ButtonWithCss 
