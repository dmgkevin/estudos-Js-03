function meuEscopo() {
  const form = document.querySelector('.formulario')
  const resultado = document.querySelector('.resultado')

  const pessoas = [];

  function recebeEventForm (event) {
    event.preventDefault();

    const nome = form.querySelector('#nome');
    const sobrenome = form.querySelector('#sobrenome');
    const idade = form.querySelector('#idade');
    const altura = form.querySelector('#altura');
    const peso = form.querySelector('#peso');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value,
        altura: altura.value,
        peso: peso.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} ${peso.value} </p>`;
  }

  form.addEventListener('submit', recebeEventForm);
}

meuEscopo();
