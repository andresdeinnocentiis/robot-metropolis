const isMobile = () => {
    let mobile
    if(window.innerWidth > 500) {
        mobile = false
    } else {
        mobile = true
    }
    return mobile
}

export { isMobile }