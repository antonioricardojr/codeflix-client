export const getAppSettings = (): Promise<{
        theme: string; 
        language: string;
    }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                language: 'en',
            })
        }, 5000);
    });
};


export const getUserInfo = (): Promise<{
    name: string;
    email: string;
    age: number;
}> => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({
                name: 'John Doe',
                email: 'john@doe.com',
                age: 30,
            });
        }, 1000);
    });
};


export async function getUserById(id: string): Promise<any> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(response);
    const user = await response.json();
    return user;
}