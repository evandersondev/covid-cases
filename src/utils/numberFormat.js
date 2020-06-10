export const numberFormate = ({
  todayCases,
  todayDeaths,
  deaths,
  recovered,
}) => {
  return {
    todayCases: todayCases ? todayCases.toLocaleString('pt-BR') : 0,
    todayDeaths: todayDeaths ? todayDeaths.toLocaleString('pt-BR') : 0,
    deaths: deaths ? deaths.toLocaleString('pt-BR') : 0,
    recovered: recovered ? recovered.toLocaleString('pt-BR') : 0,
  }
}
