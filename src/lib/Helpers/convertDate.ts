

export const convertDate = (value: string) =>
{
    let date = new Date(value);

    const formatDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    

    return formatDate;
}