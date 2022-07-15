// Sidebar

const menuItems = document.querySelectorAll('.menu-item')

// Messages

const messagesNotification = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

// Theme customization
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

changeActiveState = () => {
  menuItems.forEach((item) => {
    item.classList.remove('active')
  })
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveState()
    item.classList.add('active')
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none'
    } else {
      document.querySelector('.notification-popup').style.display = 'block'
      document.querySelector('.notification-popup').style.boxShadow =
        '0 0 1rem var(--color-primary)'
      document.querySelector(
        '#notifications .notification-count',
      ).style.display = 'none'
    }
  })
})

// Messages

// Search chat
const searchMessages = () => {
  const val = messageSearch.value.toLowerCase()
  console.log(val)
  message.forEach((chat) => {
    let name = chat.querySelectorAll('h5').textContent.toLowerCase()
    console.log(name)
    if (name.indexOf(val) != 1) {
      chat.style.display = 'flex'
    } else {
      chat.style.display = 'none'
    }
  })
}

messageSearch.addEventListener('keyup', searchMessages)

// Highlights message section
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)'
  messagesNotification.querySelector('.notification-count').style.display =
    'none'
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000)
})

// Theme customization

// open the modal
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

// close the modal
const closeThemeModal = (event) => {
  if (event.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal)

// Font size

// remove active class from spans
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove('active')
  })
}

fontSizes.forEach((size) => {
  size.addEventListener('click', () => {
    removeSizeSelector()
    let fontSize
    size.classList.toggle('active')
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-left', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-left', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px'
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-left', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px'
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-left', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px'
      root.style.setProperty('----sticky-top-left', '-12rem')
      root.style.setProperty('----sticky-top-left', '-35rem')
    }

    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize
  })
})

// Colour

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}

colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    let primary;
    changeActiveColorClass()

    if (color.classList.contains('color-1')) {
      primaryHue = 252
    } else if (color.classList.contains('color-2')) {
      primaryHue = 22
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152
    } else if (color.classList.contains('color-5')) {
      primaryHue = 552
    }
    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})


// background color


let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// change background colors
bg1.addEventListener('click', () => {
    // add active class
    bg1.classList.add('active');
    // remove active class from the others
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    window.location.reload()

})

bg2.addEventListener('click', () => {
    lightColorLightness = '15%';
    darkColorLightness = '95%';
    whiteColorLightness = '20%';

    // add active class
    bg2.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBG()
})

bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    darkColorLightness = '95%';
    whiteColorLightness = '10%';

    // add active class
    bg3.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBG()
})