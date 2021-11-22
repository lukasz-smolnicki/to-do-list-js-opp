class Component {
    constructor(_setClass) {
        this.setClass = _setClass
    }
    createTag(_tagName) {
        const element = document.createElement(_tagName)
        element.classList.add(this.setClass)

        //poprawić
        document.body.appendChild(element)
        const selectedElement = document.querySelector(`.${this.setClass}`)
        return (element)
    }
    setText(_text) {
        const element = document.querySelector(`.${this.setClass}`)
        element.innerText = _text
    }
    setPlaceHolder(_text) {
        const element = document.querySelector(`.${this.setClass}`)
        element.placeholder = _text
    }
    appendTag() {
        document.body.appendChild(element)
    }
    selectElement(_element) {
        const element = document.querySelector(`.${_element}`)
        return (element)
    }
}