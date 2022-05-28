export async function loadBoards() {
    const res = await fetch('http://localhost:3000/api/paddleboards')
    const data = await res.json()

    return data
}

export async function loadGear() {
    const res = await fetch('http://localhost:3000/api/accessories')
    const data = await res.json()

    return data
}

export async function loadCart() {
    const res = await fetch('http://localhost:3000/api/cart')
    const data = await res.json()

    return data
}