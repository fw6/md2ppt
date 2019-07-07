import React from 'react'

const Footer = ({ index, theme }) => {
  return (
    <ul
      css={{
        position: 'fixed',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        left: 0,
        right: 0,
        bottom: 0,
        margin: '16px auto',
        color: theme.colors.text,
        listStyleType: 'none',
        opacity: 0.75,
        li: {
          padding: 8
        }
      }}
    >
      <li>{index}</li>
      <li css={{ flexGrow: 1 }} />
      {/* <li>汇报人: {theme.metadata.author}</li> */}
    </ul>
  )
}

export default Footer
