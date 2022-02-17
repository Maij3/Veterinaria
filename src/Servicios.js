const API_URL = "http://localhost:5000";

export const ListarEntidad = async ({Entidad}) => {
    try {
        const res = await fetch(`${API_URL}/${Entidad}`);
        const datos = await res.json();
        return datos
    } catch (error) {
        console.error(error)
    }
}
