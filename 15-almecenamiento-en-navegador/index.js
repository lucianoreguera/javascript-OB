const nombre = "Luciano"
const apellido = "Reguera"

const info = {
    nombre,
    apellido
}

sessionStorage.setItem("info", JSON.stringify(info))
localStorage.setItem("info", JSON.stringify(info))

const tiempo = new Date()
document.cookie = `datos=${JSON.stringify(info)};expires=${new Date(tiempo.getTime() + 2 * 60000)}`
