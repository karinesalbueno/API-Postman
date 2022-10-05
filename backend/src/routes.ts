
export const getApi: string = "https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente?$select=nome,descricao,id&$Filter=IdEntidadeSindical/Id eq 6a8be2a2-2636-43d4-b9c0-002a50888604";
export const postApi: string = "https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente";
export const deleteApi = (id:any) =>  {
    const DeleteURL =  `https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente(${id})`
    return DeleteURL
    ;}