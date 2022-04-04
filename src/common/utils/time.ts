

export function tempoParaSegundos(tempo: string) {
  const [ horas = '0', minutos = '0', segundos = '0' ] = tempo.split(":")

  // Convert hours to seconds: <horas> * 3600 secs = <resultados em segundos>
  const horasEmSegundo = Number(horas) * 3600

  // Convert Minutos to seconds: <minutos> * 60 secs = <resultados em segundos>
  const minutosEmSegundos = Number(minutos) * 60

  return horasEmSegundo + minutosEmSegundos + Number(segundos)

}