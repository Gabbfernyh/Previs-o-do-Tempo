const key = "2183e0b6b58d4850aca10758250607"; // Substitua pela sua chave da WeatherAPI

function colocarDadosNaTela(dados) {
    if (!dados.location) {
        document.querySelector(".cidade").innerHTML = "Cidade não encontrada ou chave inválida!";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".condicao").innerHTML = "";
        document.querySelector(".umidade").innerHTML = "";
        document.querySelector(".icon-prev-tempo").src = "";
        return;
    }
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.location.name;
    document.querySelector(".temp").innerHTML = Math.round(dados.current.temp_c) + "°C";
    document.querySelector(".condicao").innerHTML = dados.current.condition.text;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.current.humidity + "%";
    document.querySelector(".icon-prev-tempo").src = "https:" + dados.current.condition.icon;
}

async function buscarCity(city) {
    try {
        const resposta = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(city)}&lang=pt`
        );
        const dados = await resposta.json();
        colocarDadosNaTela(dados);
    } catch (erro) {
        document.querySelector(".cidade").innerHTML = "Erro ao buscar dados!";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".condicao").innerHTML = "";
        document.querySelector(".umidade").innerHTML = "";
        document.querySelector(".icon-prev-tempo").src = "";
    }
}

function clickButton() {
    const city = document.querySelector(".city").value;
    buscarCity(city);
}

// Garante que o input existe antes de adicionar o event listener
window.addEventListener("DOMContentLoaded", function() {
    const inputCity = document.querySelector(".city");
    if (inputCity) {
        inputCity.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                clickButton();
            }
        });
    }
});