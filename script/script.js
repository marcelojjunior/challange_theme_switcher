const chk = document.getElementById('chk')
const rootElement = document.documentElement

const lightTheme = {
    '--background': '#F1F1F1',
}

const darkTheme = {
    '--background': '#292C35',
}

chk.addEventListener('change', function(){
    const isChecked = chk.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){
    console.log(theme)
    for(let prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property, value)
}