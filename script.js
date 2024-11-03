// Puxar html onde usuarios serão mostrados
const tabela = document.getElementById("tabela");

// Seleciona o botão para listar os usuários
const btnListar = document.getElementById("botao");

// Array de usuários
const usuarios = [
    { id: 1, nome: 'Usuario 1', email: 'test1@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-12-06' },
    { id: 2, nome: 'Usuario 2', email: 'test2@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-11-15' },
    { id: 3, nome: 'Usuario 3', email: 'test3@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-10-23' },
    { id: 4, nome: 'Usuario 4', email: 'test4@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-09-19' },
    { id: 5, nome: 'Usuario 5', email: 'test5@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-08-30' },
    { id: 6, nome: 'Usuario 6', email: 'test6@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-07-25' },
    { id: 7, nome: 'Usuario 7', email: 'test7@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-06-14' },
    { id: 8, nome: 'Usuario 8', email: 'test8@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-05-11' },
    { id: 9, nome: 'Usuario 9', email: 'test9@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-04-07' },
    { id: 10, nome: 'Usuario 10', email: 'test10@gmail.com', telefone: 11350940361, 'data-cadastro': '2024-03-03' },
];

// Filtrar cadastros
function filterUsers(startDate, endDate) {
    const filteredUsers = usuarios.filter(user => {
        const userDate = new Date(user['data-cadastro']);
        return (!startDate || userDate >= startDate) && (!endDate || userDate <= endDate);
    });
    mostrarUsuarios(filteredUsers);
}

// Exibir usuario e gerar tabela
function mostrarUsuarios(listaUsuarios) {
    const tableBody = listaUsuarios.map((user) => {
        return `<tr>
            <th scope="row">${user.id}</th>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.telefone}</td>
            <td data-cadastro="${user['data-cadastro']}">${user['data-cadastro']}</td>
        </tr>`;
    }).join('');
    tabela.innerHTML = tableBody;
}

// Evento de click ao botão para listar os usuários
btnListar.addEventListener('click', function () {
    const startDate = new Date(document.getElementById('dataInicio').value);
    const endDate = new Date(document.getElementById('dataFim').value);
    filterUsers(startDate, endDate);
});
