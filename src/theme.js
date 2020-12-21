import { Box } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'

const theme = {
  global: {
    colors: {
      text: {
        "dark": '#FFFFFF', 
        "light": '#272A27',
      },
      'brand-1': '#282343',
      'brand-2': '#9D4EDD',
      'brand-3': '#B376E5',
      'accent-1': '#3BFF76',
      'accent-2': '#85FFA9',
      'grey-1': '#272A27',
      'white': '#FFFFFF',
      'danger-1': '#DE2B37'
    },
    control: {
      border: {
        radius: '10px',
        width: '2px',
        color: 'white'
      },
    },
    focus: {
      outline: {
        size: '0px'
      }
    },
    elevation: {
      "light": {
        "none": "none",
        "xsmall": "0px 1px 2px rgba(0, 0, 0, 0.20)",
        "small": "0px 2px 4px rgba(0, 0, 0, 0.20)",
        "medium": "0px 4px 8px rgba(0, 0, 0, 0.20)",
        "large": "0px 8px 16px rgba(0, 0, 0, 0.20)",
        "xlarge": "0px 12px 24px rgba(0, 0, 0, 0.20)"
      },
      "dark": {
        "none": "none",
        "xsmall": "0px 1px 2px rgba(0, 0, 0, 0.20)",
        "small": "0px 2px 4px rgba(0, 0, 0, 0.20)",
        "medium": "0px 4px 8px rgba(0, 0, 0, 0.20)",
        "large": "0px 8px 16px rgba(0, 0, 0, 0.20)",
        "xlarge": "0px 12px 24px rgba(0, 0, 0, 0.20)"
      }
    }
  },
  grommet: {
    extend: `{background-image: linear-gradient(#282343, #36305b, #443c72, #6054a0)}`
  },
  layer: {
    background: {
      light: 'grey-1',
      dark: 'brand-1'
    }
  },
  button: {
    transition: {
      timing: 'ease-in-out',
      duration: '0.3'
    },
    default: {
      color: 'white',
    },
    border: {
      radius: '10px',
    },
    primary: {
      font: {
        weight: 'bold'
      },
      border: {
        color: 'accent-1'
      },
      background: {
        color: 'accent-1'
      },
      color: 'brand-1'
    },
    secondary: {
      background: {
        color: 'brand-2'
      },
      color: 'white'
    },
    hover: {
      default: {
        background: {
          color: 'white',
          opacity: 0.2
        }
      },
      primary: {
        background: {
          color: 'accent-2'
        }
      },
      secondary: {
        background: {
          color: 'brand-3'
        }
      }
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
      color: 'accent-1',
      next: () => (<Box pad='small'><CaretNext size='small' color='white'/></Box>),
      previous: () => (<Box pad='small'><CaretPrevious size='small' color='white'/></Box>)
    }
  }
}

export default theme