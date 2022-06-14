const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach((element) => {
            if (element.id <= 20) {
                console.log(element.title);
            };
        });
        
    } catch (err) {
        console.log("Hay un error en la API");
    };
};
getData();

const message = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = "***Informacion Enviada***";
            result ? resolve(console.log(result)) : reject("***mensaje no encontrado***");
        }, 3000);
    });

const showMessage = async () => {
    try {
        const sendMessage = await message();
    } catch (error) {
        console.log("***Hay un error :(***");
    } finally {
        console.log("***Fin de la promesa.***");
    };
};

showMessage();
