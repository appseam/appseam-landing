const theme = {
  global: {
    colors: {
      text: {
        "dark": '#FFFFFF', 
        "light": '#272A27',
      },
      'brand-1': '#282343',
      'accent-1': '#3BFF76',
      'grey-1': '#272A27',
      'white': '#FFFFFF',
      'danger-1': '#DE2B37'
    },
    control: {
      border: {
        radius: '50px',
        width: '2px',
        color: 'white'
      }
    },
    focus: {
      outline: {
        size: '0px'
      }
    }
  },
  grommet: {
    extend: `{background-image: linear-gradient(#282343, #36305b, #443c72, #6054a0)}`
  },
  button: {
    color: 'brand-1',
    border: {
      color: 'accent-1'
    },
    primary: {
      color: 'accent-1'
    }
  },
  anchor: {
    color: 'white',
    hover: {
      textDecoration: 'underline',
      extend: `{
        color: #3BFF76
      }`
    }
  },
  carousel: {
    icons: {
      color: 'accent-1'
    }
  }
}

export default theme